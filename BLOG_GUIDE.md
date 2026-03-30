# FicrousWAY 博客 — 搭建与书写指南

本文档基于当前仓库中的 Hexo 7.x、主题 **shoka**、以及根目录 `_config.yml`、`_config.shoka.yml` 的实际配置整理，用于日常改站点、写文章时查阅。

---

## 一、站点概况（审计摘要）

| 项目 | 当前设置 |
|------|-----------|
| Hexo | 7.3.0 |
| 主题 | `shoka`（`themes/shoka`，另由 `_config.shoka.yml` 覆盖默认主题配置） |
| 站点标题 | `FicrousWAY's Hall of Honor` |
| 副标题 | 空 |
| 语言 | `zh-CN` |
| 作者 | `FicrousWAY` |
| 站点 URL | `https://www.ficrousway.top` |
| 文章永久链接 | `permalink: :title/`（文章 URL 一般为 `https://www.ficrousway.top/<文章标题 slug>/`） |
| 新文章文件名 | `new_post_name: :title.md`（与文章标题/slug 相关） |
| 资源目录 | `post_asset_folder: false`（**未**开启「文章资源文件夹」） |
| 摘要分隔 | 正文里使用 `<!-- more -->`，其上方为首页/列表摘要 |
| 代码高亮 | Hexo 内置 highlight/prismjs 已关闭；由 `hexo-prism-plugin` + `hexo-renderer-multi-markdown-it` 的 Prism 处理 |
| Markdown 渲染 | `hexo-renderer-multi-markdown-it`；已启用目录锚点（`toc` / `anchor` class）、multimd 表格、注音、剧透等插件 |

---

## 二、目录结构：东西该放哪

```
bolg/
├── _config.yml           # 站点主配置（URL、分类映射、permalink、markdown 插件等）
├── _config.shoka.yml     # 主题配置覆盖（菜单、社交、字体、侧栏头像等）
├── package.json          # 依赖与 npm 脚本
├── source/               # 源文件，除 _posts 外会按路径生成静态页面
│   ├── _posts/           # 所有博文 Markdown 放这里（可子目录分类整理，见下文）
│   └── ...               # 例如 about/index.md → 网站 /about/
├── themes/shoka/         # 主题源码（升级主题时注意备份你对主题的修改）
├── public/               # `hexo generate` 输出，一般不要手改，部署用这份
└── scaffolds/            # `hexo new` 用的模板（可选自定义）
```

### 静态资源习惯位置

- **全站共用图片、附件**：放在 `source/` 下任意子目录（如 `source/images/xxx.png`），文中引用用绝对路径 **`/images/xxx.png`**（开头 `/` 表示站点根）。
- **博文内图片**（当前 `post_asset_folder: false`）：
  - 推荐：仍放在 `source/` 下某目录，用 `/路径/文件` 引用；
  - 若将来改为 `post_asset_folder: true`，`hexo new` 会为每篇文章建同名文件夹，图片与 md 同组。
- **主题自带图**：`themes/shoka/source/images/`（例如默认 `avatar.jpg` 引用逻辑与主题一致）。
- **侧栏头像**：在 `_config.shoka.yml` 里 `sidebar.avatar` 当前为 `avatar.jpg`；文件需能通过主题静态资源访问（主题示例为放在主题 `source/images/` 或按主题文档放置；你本地若以根目录静态资源为准，需与实际上线路径一致）。
- **分类封面（首页六格等）**：主题逻辑会在 `source/_posts/<分类 slug>/cover.jpg` 查找分类封面；分类 slug 与 `category_map` 映射后的英文目录名一致（见下文「分类」一节）。构建后输出为站点根下的 `<slug>/cover.jpg`；首页卡片链接已修正为 `url_for(slug + '/cover.jpg')`，**不要**再拼 `theme.statics`（若 `statics` 指向 jsDelivr 等 CDN，会去 CDN 拉图，变成主题默认图或 404）。
- **打赏图**：主题默认配置指向 `/wechatpay.png`、`/alipay.png` 等；若启用打赏，应放在 `source/` 下对应路径。你当前 `_config.shoka.yml` 片段未展开 `reward` 时，以 `themes/shoka/_config.yml` 默认为准。

---

## 二·一、首页顶栏背景图（`#imgs` 六张轮播）

模板在 `themes/shoka/layout/_partials/layout.njk` 里调用 `_cover(page, 6)`：

- 若当前页在 Front Matter 里配置了 **`cover` / `photos`**（且能解析出图），会优先用它们凑头图；
- 否则从主题的 **`image_list`** 里随机抽 **6** 张，填进顶栏 `<ul><li data-background-image="…">`。

**自定义随机池（推荐）**：在站点 `source/_data/` 下新建 **`images.yml`**，内容为**字符串数组**（与主题内置 `themes/shoka/_images.yml` 格式相同：可以是微博图床 ID，或 `http(s)://` 完整图片地址）。**至少 6 条**时，构建脚本会用你的列表覆盖默认池（已把主题里原来的「必须多于 6 条」改为「不少于 6 条」）。

**另一方式**：在 `_config.shoka.yml`（或主题合并后的配置）里设置 **`image_server`** 为随机图 API URL，则走「每次带随机参数请求接口」的逻辑（见 `themes/shoka/scripts/helpers/engine.js` 里的 `randomBG`）。

不改配置时，使用主题自带的 `themes/shoka/_images.yml` 列表（微博图床 ID，由主题拼成完整 URL）。

---

## 二·二、文章在列表/导航里的「封面图」（`_cover` 解析顺序）

以下适用于首页文章列表、归档列表、上下篇导航等所有调用 `_cover(文章)` 的地方（`themes/shoka/scripts/helpers/engine.js`）：

1. **`cover`**（Front Matter 自定义，最高优先级）——只要写了该项，**不会再**用分类封面；不需要自定义时请删掉 `cover` 字段。相对路径会按主题 `statics` 与 `post_asset_folder` 规则转成 URL；`http(s)://` 或 `//` 则原样使用。  
2. **分类封面（从深到浅回退）**——从 **`categories.toArray()` 的最后一项（通常是最内层/最具体分类）往前找**，第一个在磁盘上存在 **`source/_posts/<slug>/cover.jpg`** 的分类即采用，URL 为 `/<slug>/cover.jpg`；链接上会自动加 **`?v=文件修改时间`**，避免浏览器或 CDN 一直用旧的缓存图（与分辨率无关）。  
3. **`photos` 第一张**——未写 `cover`、且所有相关分类都没有 `cover.jpg` 时使用。  
4. **以上都没有**——列表缩略图与上下篇导航**不再使用随机图**，显示主题样式中的**灰底占位**；首页顶栏 `_cover(page, 6)` 仍使用随机图池。

首页「分类卡片」的背景仍只认 **`source/_posts/<slug>/cover.jpg`**，与上述文章 `_cover` 逻辑相互独立但共用同一份分类封面文件。

---

## 三、站点主配置 `_config.yml`

### 3.1 站点信息与 URL

- `title` / `subtitle` / `description` / `keywords`：SEO 与页头展示。
- `url`：必须与线上地址一致（含 `https`），否则 feed、绝对链接会错。
- `permalink`：当前为 `:title/`，文件名与 front matter 标题会共同影响 URL slug。

### 3.2 分类映射 `category_map`（重要）

你在 front matter 里写的**中文分类名**会映射到 **URL 中的英文 slug**（目录名）：

| 你在文章里写的分类（示例） | 映射后的 slug（URL 路径片段） |
|---------------------------|-------------------------------|
| 程序设计 | `programme` |
| 网络安全 | `cyberscurity`（与配置一致；注意拼写） |
| CTF | `ctf` |
| ACM | `acm` |
| 美术作品 | `art` |
| 游戏设计 | `gamedesign` |
| 留学语言 | `english` |
| 体育 | `pe` |

未出现在映射表中的分类：仍生成页面，但目录名多为 Hexo 默认 slug（与标题转写规则有关）。需要固定英文 URL 时，应在 `_config.yml` 的 `category_map` 中增加映射。

`default_category: uncategorized`：文章未指定分类时的默认分类。

### 3.3 Markdown 与插件（与 Shoka 配套）

- `markdown-it-toc-and-anchor` 的 `tocClassName: toc`、`anchorClassName: anchor` **必须**保持与 Shoka 一致，否则目录样式/锚点异常。
- `markdown-it-multimd-table`：支持扩展表格语法（多行单元格等）。
- `./markdown-it-furigana`、`./markdown-it-spoiler`：注音与剧透（见后文语法）。
- `markdown.render.html: false`：会过滤 Markdown 中的原始 HTML，**复杂 HTML 片段可能无法直接写在 md 里**；需要时应用主题提供的标签/容器语法替代。

### 3.4 代码高亮与 `prism_plugin`

- `syntax_highlighter` 下 highlight、prismjs 均为 `enable: false`。
- 根级 `prism_plugin`：`mode: preprocess`、`theme: default`、`line_number: false`、`no_assets: true` 与主题 Prism 资源配合。

### 3.5 订阅 Feed（`hexo-feed`）

- RSS / Atom / JSON Feed 输出由 `_config.yml` 中 `feed` 段与 Shoka 模板路径指定；更新 `url` 后订阅链接应指向新域名。

### 3.6 Algolia

- `algolia` 段若填写 `appId`、`apiKey`、`indexName` 等，需与主题搜索一致；留空则不应初始化搜索（你仓库中曾对主题脚本做过「未配置不初始化」的加固）。

---

## 四、主题覆盖 `_config.shoka.yml`（导航、社交、外观）

以下为当前文件中与「改链接、改图、改文案」最相关的项（合并进主题配置后生效）。

### 4.1 品牌与静态资源

- `alternate: FicrousWAY`：副标题/角标类展示用名称。
- `statics: /`：静态资源前缀为站点根路径；若改为 CDN 前缀，需同步资源部署方式。

### 4.2 交互与加载

- `loader.start` / `loader.switch`：首屏与 Tab 切换时是否显示 Shoka 的 loading 动画。
- `fireworks.enable`：点击烟花效果。
- `darkmode`、`auto_scroll`：留空时使用主题默认值；可改为 `true`/`false` 强制行为。

### 4.3 字体与图标

- `font.*`：各区域字体族与是否外链加载。
- `iconfont`：阿里 iconfont 项目 id，与导航/社交图标有关。

### 4.4 菜单 `menu`

当前示例：

- `home: / || home`
- `about: /about/ || user`
- `posts` 下：`archives`、`categories`、`tags` 等

要新增/隐藏菜单项：改此处路径与图标名；对应页面需在 `source/` 下有页面或由生成器提供（归档、分类、标签为 Hexo 生成）。

### 4.5 社交链接 `social`

格式：`显示名: 完整 URL || 图标名 || "颜色"`。

- 修改 GitHub、Steam、邮箱等：只改对应行的 URL。
- **注意**：请检查 YAML 引号是否成对（例如某行若混用 `'` 与 `"` 会导致解析错误）。

### 4.6 侧栏 `sidebar`

- `position: right`：侧栏在右侧。
- `avatar: avatar.jpg`：头像文件名；需保证构建后 URL 可访问。

### 4.7 小工具与统计

- `widgets.random_posts` / `recent_comments`：随机文章、最近评论等。
- `footer.since`：页脚起始年份；`footer.count`：是否显示统计类信息。
- `post.count`：文章页是否显示字数/阅读时间等（依赖 `hexo-symbols-count-time`）。

主题默认里还有 **Valine 评论、打赏、CC 协议、音频、image_server** 等；你当前 `_config.shoka.yml` 未写明的项会继承 `themes/shoka/_config.yml` 默认值。若要关打赏或接评论，应到主题完整配置或覆盖文件中逐项填写。

---

## 五、新建一篇文章

在项目根目录执行：

```bash
npx hexo new "文章标题"
```

会在 `source/_posts/` 下生成 Markdown 文件（文件名与 `new_post_name` 规则一致）。

也可手动新建 `source/_posts/任意名.md` 或 `source/_posts/某分类文件夹/文章.md`；子目录仅便于本地整理，**分类以 front matter 为准**，不一定与文件夹名相同。

本地预览：

```bash
npx hexo server
```

构建：

```bash
npx hexo clean && npx hexo generate
```

---

## 六、文章 Front Matter：该写哪些字段

写在每篇文章最上方 `---` 之间，YAML 格式。

### 6.1 常用字段

| 字段 | 说明 |
|------|------|
| `title` | 文章标题（必填，影响页面标题与默认 slug） |
| `date` | 发布时间，如 `2026-03-28 01:15:00` |
| `updated` | 可选；`updated_option: mtime` 时可能以文件修改时间为准，视 Hexo 版本行为而定 |
| `categories` | 分类；见下一节 |
| `tags` | 标签列表，如 `- Python` |
| `cover` | 封面图 URL 或相对路径（无则可用 `photos` 首张或主题随机图） |
| `photos` | 字符串数组，文章顶部相册组图 |
| `sticky` | `true` 时文章可出现在首页置顶区（主题 index 逻辑） |
| `link` | 外链文章：点击标题跳转外部 URL |
| `math` | `true` 启用 KaTeX 数学公式 |
| `mermaid` | `true` 启用 Mermaid 流程图等 |
| `chart` | `true` 启用 Frappe Charts 图表代码块（由渲染器注入脚本） |
| `quiz` | `true` 启用练习题特殊样式 |
| `comments` | `false` 可关闭评论（若主题支持） |
| `valine` | 可嵌 `placeholder` 等覆盖单页评论框（见主题示例） |

### 6.2 分类 `categories` 写法

- **单层分类**：

```yaml
categories:
  - 网络安全
```

- **多层（层级分类）**：从大到小写在一行数组里：

```yaml
categories:
  - [计算机科学, 笔记, 某系列]
```

展示与 URL 层级由 Hexo + 主题共同决定；你当前站点主要使用单层 + `category_map` 映射英文 slug。

### 6.3 摘要

在正文任意位置插入：

```html
<!-- more -->
```

上方为列表页摘要，下方为全文。

---

## 七、Shoka + multi-markdown-it：书写与语法指南

以下与主题官方示例及 `hexo-renderer-multi-markdown-it` 行为一致；若某功能无效果，先检查 front matter 是否打开 `math` / `mermaid` / `chart` / `quiz` 等开关。

### 7.1 基础 Markdown

- 标题 `#`～`######`、**加粗**、*斜体*、`行内代码`、列表、引用 `>`、链接与图片等，与常见 GFM 类似。
- **表格**：支持 `markdown-it-multimd-table` 的扩展（多行单元格、rowspan 等高级表格）。
- **任务列表**：`- [ ]` / `- [x]`；可用 `markdown-it-attrs` 给列表加 class（见主题 `special` 文档示例）。
- **目录**：正文标题会被 `markdown-it-toc-and-anchor` 处理；侧栏 TOC 由主题根据内容生成（过短不显示）。

### 7.2 代码块与 Prism 高亮

使用围栏代码块，**语言标识**写在首行：

````markdown
```javascript
console.log('hello');
```
````

扩展信息可写在语言后同一行（主题文档「Step.4 特殊功能」中的约定），例如：

- 标题、链接：` ```java 行高亮 https://example.com 参考链接 mark:1,6-7 `
- 行高亮：`mark:1,4-7,10`
- 命令行提示：`command:("[root@localhost] $":1,9-10||"[admin@remotehost] #":4-6)`

不需要高亮但保留代码框样式时可用 `raw` 等（以主题示例为准）。

语言列表见 [Prism 支持列表](https://prismjs.com/#supported-languages)。

### 7.3 图片

````markdown
![](/images/example.png)
![说明文字](/images/example.png "鼠标悬停标题")
````

- `cover: https://...` 或相对路径：用于卡片与分享图。
- `photos`：文首相册。

### 7.4 Mermaid 图表

Front Matter：`mermaid: true`。

````markdown
```mermaid
graph LR
  A --> B
```
````

### 7.5 Frappe Charts 图表

Front Matter：`chart: true`。

````markdown
```chart
{
  "data": {
    "labels": ["一","二","三"],
    "datasets": [{ "name": "示例", "values": [3, 5, 2] }]
  },
  "type": "bar",
  "height": 250
}
```
````

（具体 JSON 配置以 [Frappe Charts](https://frappe.io/charts) 文档为准。）

### 7.6 数学公式

Front Matter：`math: true`。

- 行内：`$...$`
- 块：`$$...$$`

### 7.7 提示框 `note`（container）

```markdown
:::info
提示内容
:::

:::warning
警告内容
:::
```

风格关键字包括：`default`、`primary`、`success`、`info`、`warning`、`danger`；`:::danger no-icon` 可无图标。

### 7.8 标签卡 `tab`、折叠 `collapse`

- 标签卡：`;;;同一ID 标签名` … `;;;`（多组同 ID 形成切换）。
- 折叠：`+++ [可选风格] 标题` … `+++`。

### 7.9 友链块 `links`

```markdown
{% links %}
- site: 站点名
  owner: 站长
  url: https://example.com
  desc: 描述
  image: https://example.com/avatar.jpg
  color: "#e9546b"
{% endlinks %}
```

也可把 YAML 存到 `source` 下文件，用 `{% linksfile path/to.yml %}` 引用。

### 7.10 多媒体 `media`

```markdown
{% media audio %}
- title: 列表1
  list:
    - https://music.163.com/#/playlist?id=...
{% endmedia %}
```

视频同理 `{% media video %}`。

### 7.11 Emoji、特效、剧透、注音

- Emoji：`:smile:` 等形式（`markdown-it-emoji`）。
- 下划线/波浪线/荧光笔等：`++文字++`、`==高亮==`、`~~删除~~`，并可加 `{.wavy}` 等 class。
- 剧透：`!!隐藏内容!!`，模糊可用 `{.bulr}`（主题文档写法）。
- 注音：`{汉字^ふりがな}`（项目内 `markdown-it-furigana` 配置）。

### 7.12 Hexo 标签插件（节选）

仍可使用 Hexo 自带 tag，例如：

```markdown
{% blockquote 作者名 出处 URL 标题 %}
引用内容
{% endblockquote %}
```

详细见主题示例文 `tag-plugins.md` 与 [Hexo Tag Plugins](https://hexo.io/docs/tag-plugins)。

### 7.13 练习题 `quiz`

Front Matter：`quiz: true` 后，按主题文档使用 `{.quiz}`、`.multi`、`.fill`、`.correct`、`.options` 等标记（见 `themes/shoka/example/.../theme-shoka-doc/special.md`）。

---

## 八、链接与图片修改速查表

| 想改的内容 | 去哪里改 |
|------------|--------|
| 站点标题、作者、URL、permalink、分类映射 | `_config.yml` |
| 导航菜单、社交链接、侧栏位置、头像文件名、烟花/加载动画、字体 | `_config.shoka.yml` |
| 单篇文章标题、分类、标签、封面、置顶 | 该文 `source/_posts/...md` 的 front matter |
| 关于页等独立页面 | `source/about/index.md`（路径与 `menu` 一致即可） |
| 全站静态图片 | `source/` 下目录，文中 `/...` 引用 |
| 分类封面图 | `source/_posts/<slug>/cover.jpg`（slug 为映射后英文分类目录名） |
| 主题默认图、样式 | `themes/shoka/source/`（升级主题前注意备份） |
| 评论、统计、Algolia | `_config.yml` / `_config.shoka.yml` / 主题默认 `_config.yml` 中对应段 |

---

## 九、官方与延伸阅读

- [Hexo 文档](https://hexo.io/docs/)
- [Shoka 主题](https://github.com/amehime/hexo-theme-shoka)（示例与说明）
- 仓库内完整示例：`themes/shoka/example/source/_posts/`（markdown、code-highlight、gallery、tag-plugins、theme-shoka-doc 等）

---

## 十、维护提示（审计备注）

1. **`category_map` 中「网络安全」映射为 `cyberscurity`**：若希望 URL 为 `cybersecurity`，需在 `_config.yml` 中改键值并处理旧链接重定向（若有外链）。
2. **`_config.shoka.yml` 社交行**：若某行 URL 的引号混用，可能导致 YAML 解析失败，部署前可用编辑器或校验工具检查。
3. **你对主题的本地修改**（如 `layout.njk`、`pjax.js` 等）：升级主题或从上游合并时应用 `git diff` 逐项合并，避免覆盖安全与加载相关修复。

---

*文档生成依据：仓库内 `_config.yml`、`_config.shoka.yml`、`package.json`、Shoka 主题脚本与示例文章。*
