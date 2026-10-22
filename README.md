# FicrousWAY's Stone House 椰子鸡的石头屋

个人博客，线上地址 <https://www.ficrousway.top>。站点由 [TiO₂](https://github.com/CodeBoy2006/TiO2) 构建（2026 年 10 月由 Hexo + Shoka 迁移而来），部署在 Netlify。

## 目录

```text
bolg/
├── tio2.config.mjs     站点配置：标题、地址、导航、社交链接、自定义模块
├── posts/              文章（一篇一个 Markdown 文件）
├── pages/              页面与索引页
│   ├── about.md        关于
│   ├── archives.md     归档（时间线，TiO₂ 内置）
│   ├── category.md     分类（六大板块，由 theme/category-page.mjs 渲染）
│   └── tags.md         标签（TiO₂ 内置）
├── theme/
│   ├── sections.mjs    六大板块的定义
│   ├── category-page.mjs
│   ├── client.ts       浏览器入口，引入 style.css
│   └── style.css       自定义样式
├── public/             （可选）原样复制到站点根目录的静态文件，不要放 .html
├── vendor/             固定版本的 TiO₂ 安装包
└── netlify.toml        Netlify 构建命令、Node 版本、旧链接重定向
```

## 本地运行

需要 Node.js 22.22.x（见 `.node-version`）。

```bash
npm install
npm run dev        # 开发预览 http://127.0.0.1:5000 ，改动自动刷新
npm run cms        # 本地写作工作台（编辑器 + 预览）
npm run build      # 生产构建并校验，产物在 .tio2-tmp/site/
npm run preview    # 预览生产构建 http://127.0.0.1:4173
```

## 写文章

```bash
npm run new -- "文章标题" -c 算法 -t 标签1,标签2
```

或者直接在 `posts/` 新建 Markdown，front matter 示例：

```yaml
---
title: 文章标题
date: 2026-10-21 10:00:00
lastUpdated: 2026-10-22 09:00:00   # 可选
category: 算法                      # 必须是六大板块之一
tags: [动态规划, 题解]
description: 一句话摘要（可选，不写则自动截取正文开头）
---
```

文件路径就是网址：`posts/foo.md` → `/posts/foo.html`。生产构建会跳过 `draft/`、`trash/`、`private-notes/` 目录下的文章。

## 六大板块

| 板块 | 英文 | 分类页锚点 |
| --- | --- | --- |
| 留学 | Study Abroad | `/pages/category.html#study-abroad` |
| 算法 | Algorithms | `/pages/category.html#algorithms` |
| 课程 | Courses | `/pages/category.html#courses` |
| 科研 | Research | `/pages/category.html#research` |
| 杂项 | Miscellany | `/pages/category.html#miscellany` |
| 开发 | Development | `/pages/category.html#development` |

`category` 写成表外的名字会让构建直接报错，避免分类写错字悄悄多出一个板块。要改板块名称或顺序，编辑 `theme/sections.mjs`，并同步修改已有文章的 `category`。

## 字体

| 用途 | 字体 |
| --- | --- |
| 英文标题 | Poppins 粗体 |
| 英文正文 | Lora |
| 中文标题 | 霞鹜文楷粗体（LXGW WenKai Bold） |
| 中文正文 | 思源宋体常规（Noto Serif SC 400，TiO₂ 自带） |

所有标题统一加粗，正文保持常规字重。字体文件来自 npm 上的 `@fontsource/*` 与 `lxgw-wenkai-webfont` 包，构建时打包进站点自托管，不依赖 Google Fonts。引入在 `theme/client.ts`，字体变量和标题字重在 `theme/style.css` 开头；代码块仍用系统等宽字体。

## 写作语法

完整的效果演示见站内文章《博文 Markdown 语法写作指南（TiO₂ 全效果展示）》（`posts/tio2-syntax-guide.md`）。

TiO₂ 的 Markdown 支持：数学公式（`$...$`、`$$...$$`，构建期渲染）、代码高亮（Shiki，支持行高亮）、脚注（显示为页边注）、`::: tip / info / warning / danger / details` 容器、`::: fold` 折叠、`::: encrypt` 口令加密、`[[双链]]` 引用、`{.class}` 属性。图片可放在 `assets/images/` 下用 `/images/xxx.png` 引用，构建时自动生成 AVIF / WebP。

Shoka 专有的语法（`{% ... %}` 标签、`;;;` 标签卡、`+++` 折叠、`!!剧透!!`、注音、quiz、chart 等）在 TiO₂ 里不会渲染，会按原文显示。旧文章保留原样。

## 部署

推送到 GitHub 后 Netlify 自动构建：`netlify.toml` 指定构建命令 `npm run build`、发布目录 `.tio2-tmp/site`、Node 版本，并把旧 Hexo 链接（如 `/test1/`、`/acm/test/`、`/archives/`、`/rss.xml`）301 重定向到新地址。RSS / Atom / JSON Feed（`/feed.xml`、`/atom.xml`、`/feed.json`）与 `sitemap.xml` 由 TiO₂ 生成，站内搜索按 `⌘K` / `Ctrl K`，在浏览器本地完成。

## 升级 TiO₂

TiO₂ 尚未发布到 npm，这里使用 `vendor/` 里打包好的版本（上游提交 `12a53ba`）。升级时在 TiO₂ 仓库里执行 `pnpm pack`，把新的 `.tgz` 放进 `vendor/`，修改 `package.json` 里的文件名后重新 `npm install`。`theme/category-page.mjs` 引用了 TiO₂ 的几个内部模块，升级后先跑一次 `npm run build` 确认。
