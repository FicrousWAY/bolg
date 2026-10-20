/**
 * 分类页（pages/category.md）的渲染模块。
 *
 * TiO₂ 自带的分类页只列出「已经有文章」的分类；本站固定为六大板块，
 * 所以这里按 sections.mjs 的顺序列出全部六个板块，空板块也会显示。
 * 页面结构与样式沿用 TiO₂ 自带的索引页（时间线 / 分类 / 标签切换、标题筛选、只看亲笔）。
 *
 * 文章列表直接取自 TiO₂ 自己的内容加载器，因此与首页、归档页使用同一份数据
 * （同样的路由、日期排序与生产构建排除规则）。TiO₂ 的包入口只导出配置，
 * 这几个内部模块按文件路径引用；它们随 vendor/ 里固定版本的 TiO₂ 一起锁定，
 * 升级 TiO₂ 时若这些路径变化，构建会直接报错而不是静默出错。
 */
import { access } from 'node:fs/promises'
import path from 'node:path'
import { sections } from './sections.mjs'

const tio2Entry = import.meta.resolve('tio2') // <tio2>/packages/config/src/index.js
const tio2Module = (relativePath) => import(new URL(`../../../${relativePath}`, tio2Entry).href)

const escapeText = (value) => String(value).replace(/&/gu, '&amp;').replace(/</gu, '&lt;').replace(/>/gu, '&gt;')
const escapeAttribute = (value) => escapeText(value).replace(/"/gu, '&quot;')

export default async function renderCategoryPage({ project, sourcePath, render }) {
    const [{ loadPosts }, { renderAigcNote }, { createTranslator }, { createMarkdownRoute }] = await Promise.all([
        tio2Module('packages/content-fs/src/site-content.ts'),
        tio2Module('site/aigc-note.ts'),
        tio2Module('packages/config/src/i18n.js'),
        tio2Module('packages/content-core/src/route-utils.ts')
    ])
    const t = createTranslator(project.config.site.language)
    const { posts } = await loadPosts(project)

    const titles = new Map(sections.map((section) => [section.title, section]))
    const grouped = new Map(sections.map((section) => [section.id, []]))
    for (const post of posts) {
        const category = typeof post.frontMatter.category === 'string' ? post.frontMatter.category.trim() : ''
        if (!category) {
            console.warn(`[sections] ${post.sourcePath}: 没有填写 category，分类页不会列出这篇文章`)
            continue
        }
        const section = titles.get(category)
        if (!section) {
            throw new Error(
                `${post.sourcePath}: category「${category}」不是六大板块之一，请改为：${sections.map((item) => item.title).join(' / ')}（板块定义见 theme/sections.mjs）`
            )
        }
        grouped.get(section.id).push(post)
    }

    const row = (post) => {
        const { date, title, humanWritten } = post.frontMatter
        return `<a class="index-row index-row--compact" href="${escapeAttribute(post.regularPath)}" data-index-row${humanWritten ? ' data-human' : ''}><time datetime="${escapeAttribute(date)}">${escapeText(date.slice(0, 7).replace('-', '·'))}</time><span class="index-row__title">${escapeText(title)}</span><span class="index-row__note">${renderAigcNote(t, post.frontMatter)}</span></a>`
    }
    const sectionList = sections
        .map((section) => {
            const sectionPosts = grouped.get(section.id)
            const head = `<header class="index-category__head"><h2>${escapeText(section.title)}<span class="section-english" lang="en">${escapeText(section.englishTitle)}</span></h2><small>${sectionPosts.length}</small></header>`
            // 空板块不带 data-index-group，筛选标题时不会被隐藏。
            return sectionPosts.length
                ? `<section class="index-category" id="${escapeAttribute(section.id)}" data-index-group>${head}${sectionPosts.map(row).join('')}</section>`
                : `<section class="index-category index-category--empty" id="${escapeAttribute(section.id)}">${head}<p class="section-empty">${t('暂无文章', 'No posts yet')}</p></section>`
        })
        .join('')

    const tagCount = new Set(posts.flatMap((post) => post.frontMatter.tags)).size
    const stats = [
        [posts.length, t('篇文章', 'Posts')],
        [sections.length, t('个板块', 'Sections')],
        [tagCount, t('个标签', 'Tags')],
        [posts.filter((post) => post.frontMatter.humanWritten).length, t('篇亲笔', 'Human-written posts')]
    ]
        .map(([value, label]) => `<div><dt>${label}</dt><dd>${value}</dd></div>`)
        .join('')

    const { pagesDir } = project.config.content
    const views = []
    for (const [name, label] of [
        ['archives', t('时间线', 'Timeline')],
        ['category', t('分类', 'Categories')],
        ['tags', t('标签', 'Tags')]
    ]) {
        const viewSource = `${pagesDir}/${name}.md`
        if (viewSource !== sourcePath) {
            try {
                await access(path.join(project.rootDir, viewSource))
            } catch {
                continue
            }
        }
        views.push(
            `<a href="${escapeAttribute(createMarkdownRoute(viewSource))}"${viewSource === sourcePath ? ' aria-current="page"' : ''}>${label}</a>`
        )
    }
    const toolbar = `<div class="index-bar"><nav class="index-switch" aria-label="${t('排列方式', 'View')}">${views.join('')}</nav><label class="index-filter"><span class="visually-hidden">${t('在标题中筛选', 'Filter by title')}</span><input type="search" placeholder="${t('在标题中筛选', 'Filter by title')}" autocomplete="off" data-index-filter></label><button type="button" class="index-toggle" aria-pressed="false" data-index-human><span aria-hidden="true"></span>${t('只看亲笔', 'Human-written only')}</button><p class="index-count" role="status" aria-live="polite" data-index-count></p></div>`
    const header = `<header class="index-head"><h1>${t('索引', 'Index')}</h1><dl class="index-stats">${stats}</dl></header>`
    const body = `<section class="index-page" data-index-page>${header}${toolbar}<div class="index-categories">${sectionList}</div><p class="index-empty" data-index-empty hidden>${t('没有符合条件的文章。', 'No matching articles.')}</p></section>`

    const pageClass = `_${createMarkdownRoute(sourcePath).replace(/^\//u, '').replace(/\.html$/u, '').replace(/\//gu, '_')}`
    return render({
        wide: true,
        content: `<main class="main"><div class="vp-doc ${escapeAttribute(pageClass)}" style="position:relative"><div>${body}</div></div></main><footer class="VPDocFooter"></footer>`
    })
}
