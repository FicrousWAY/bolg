---
title: 石头屋装修报告：从 Hexo + Shoka 迁移到 TiO₂
date: 2026-10-21 01:30:00
category: 杂项
tags:
  - TiO2
  - 博客
  - 迁移
description: 博客从 Hexo + Shoka 整体迁移到 TiO₂，站名改为「FicrousWAY's Stone House 椰子鸡的石头屋」，分类收拢为六大板块。本文记录这次装修改了什么、为什么这么改，以及之后怎么维护。
aigcRate: 100
aigcModels:
  - claude
---

这次装修把整座站从 **Hexo 7 + Shoka 主题** 换成了 **[TiO₂](https://github.com/CodeBoy2006/TiO2)**。外观、构建方式、分类结构和站名都变了，但旧文章一篇不少，旧链接也都还能打开。下面按「换了什么 → 怎么搬的 → 以后怎么写」的顺序记一笔。

## 一、为什么换

旧站的问题在三月的两篇记录里已经写得很清楚：《[Hexo+Shoka 无限转圈故障复盘](/posts/hexo-shoka-loading-incident-report.md)》和《[站点与 Shoka 主题技术修改报告](/posts/theme-tech-changelog-2026-03.md)》。概括起来：

- 首屏依赖一串第三方同步脚本，任何一个出问题就整页转圈；
- 为了修这些问题，`themes/shoka/` 里改了十几个文件，主题已经没法平滑升级；
- `node_modules/` 和 `public/` 都提交进了仓库，一万多个文件，仓库很重；
- 分类有十个，大多数是空的，分类封面还要求文件夹名和 slug 严格对应。

TiO₂ 是一个为长文写作设计的静态博客框架：宋体标题、克制的留白、明暗两套配色；公式和代码高亮都在构建期完成，页面打开就是成品；坏链接、缺图、数学公式错误会在构建时直接报错。它刚好对上了上面这些痛点。

## 二、这次改了什么

| 项目 | 旧站（Hexo + Shoka） | 新站（TiO₂） |
| --- | --- | --- |
| 站名 | FicrousWAY's Hall of Honor | **FicrousWAY's Stone House 椰子鸡的石头屋** |
| 分类 | 10 个（程序设计、网络安全、CTF、ACM、美术作品、游戏设计、留学语言、体育、生活杂项、学术科研） | **6 个板块**：留学、算法、课程、科研、杂项、开发 |
| 文章目录 | `source/_posts/` 下按分类 slug 分文件夹 | `posts/`，一篇一个文件 |
| 文章网址 | `/:title/`，如 `/acm/test/` | 文件路径即网址，如 `/posts/test.html` |
| 搜索 | Algolia（一直没配置，实际不可用） | 本地全文搜索，`⌘K` / `Ctrl K` 唤起，不依赖外部服务 |
| 订阅 | `rss.xml` / `atom.xml` / `feed.json` | `feed.xml` / `atom.xml` / `feed.json`，另有 `sitemap.xml` |
| 数学与代码 | 浏览器里渲染，需要在 front matter 打开开关 | 构建期渲染，无需开关；代码明暗双色高亮 |
| 写作 | `hexo new` | `npm run new`，或用本地写作工作台 `npm run cms` |
| 仓库体积 | 约 11,900 个跟踪文件 | 只剩源码，几十个文件 |

### 六大板块

| 板块 | 英文 | 打算放什么 |
| --- | --- | --- |
| 留学 | Study Abroad | 申请、语言考试、海外学习与生活 |
| 算法 | Algorithms | 算法竞赛、题解、数据结构 |
| 课程 | Courses | 课程笔记与复习 |
| 科研 | Research | 论文阅读、科研记录 |
| 杂项 | Miscellany | 站务、随笔，以及暂时不好归类的内容 |
| 开发 | Development | 项目开发、工程实践 |

分类页会固定列出全部六个板块，没有文章的板块显示「暂无文章」，不会像以前一样直接消失。每个板块都有独立锚点，例如 [科研](/pages/category.md#research)、[开发](/pages/category.md#development)。

::: tip 分类写错字会直接报错
文章的 `category` 只能是这六个名字之一。写成别的（比如把「杂项」写成「杂谈」），构建会停下来并提示应该改成什么，避免悄悄多出第七个分类。
:::

## 三、怎么搬的

### 文章

原有五篇文章全部保留，正文一字未改，只调整了 front matter：

- `categories: [生活杂项]` → `category: 杂项`（TiO₂ 每篇文章只有一个分类）；
- `updated` → `lastUpdated`；
- 去掉 Shoka 专用的 `math`、`mermaid`、`chart`、`quiz`、`photos` 开关；
- 文件统一搬到 `posts/` 下，原来 `acm/`、`life/` 这些分类文件夹不再需要。

现在五篇旧文和这篇装修报告都在「杂项」里。

### 旧链接

旧站的地址都做了 301 永久重定向，写在仓库的 `netlify.toml` 里：

| 旧地址 | 新地址 |
| --- | --- |
| `/test1/` | `/posts/test1.html` |
| `/acm/test/` | `/posts/test.html` |
| `/hexo-shoka-loading-incident-report/` | `/posts/hexo-shoka-loading-incident-report.html` |
| `/life/blog-global-config-cheatsheet/` | `/posts/blog-global-config-cheatsheet.html` |
| `/life/theme-tech-changelog-2026-03/` | `/posts/theme-tech-changelog-2026-03.html` |
| `/archives/`、`/categories/`、`/tags/` | 对应的归档、分类、标签页 |
| `/about/` | `/pages/about.html` |
| `/rss.xml` | `/feed.xml` |

### 导航与页面

顶栏导航是「分类 · 归档 · 标签 · 关于」。归档（时间线）和标签是 TiO₂ 自带的索引页；分类页用一个小的自定义渲染模块接管，以便固定显示六个板块，样式和交互（标题筛选、只看亲笔、三种排列方式切换）都沿用 TiO₂ 原生的索引页。关于页列出了 GitHub、Steam 和邮箱；顶栏右侧也有 GitHub 和 Steam 的图标。

### 构建与部署

- TiO₂ 还没有发布到 npm，所以把它打包成 `vendor/tio2-1.0.0-preview.1.tgz` 放进仓库，`package.json` 直接引用这个文件，版本完全固定；
- `netlify.toml` 指定构建命令 `npm run build`、发布目录 `.tio2-tmp/site` 和 Node 22，覆盖 Netlify 后台里原来的 Hexo 设置；
- `node_modules/`、构建产物都写进了 `.gitignore`，不再提交。

## 四、有哪些东西没带过来

- **Shoka 的扩展语法**：`{% ... %}` 标签、`;;;` 标签卡、`+++` 折叠、`!!剧透!!`、注音、练习题、Frappe 图表等，TiO₂ 都不支持，会按原文显示。所以《[博文 Markdown 语法写作指南](/posts/test.md)》现在更像一份旧主题的存档，里面的很多「效果」已经看不到了；
- **加载动画、点击烟花、顶部轮播图、打赏二维码**：TiO₂ 走的是安静耐读的路线，这些都不再有；
- **旧分类封面图**：随旧分类一起退役，需要的话可以在 Git 历史里找回。

TiO₂ 也带来了一些以前没有的东西：脚注会显示成页边注；`::: fold` 折叠和 `::: encrypt` 口令加密；`[[双链]]` 引用与悬停预览；文章可以用 `aigcRate`、`aigcModels` 标注 AI 参与程度，或者用 `humanWritten: true` 声明「亲笔」。这篇报告就标注了 AI 生成。

## 五、以后怎么写

```bash
npm install            # 第一次需要
npm run dev            # 本地预览，改动自动刷新
npm run new -- "标题" -c 算法 -t 标签1,标签2
npm run build          # 推送前跑一遍，确认构建能过
```

一篇文章的 front matter 大概长这样：

```yaml
---
title: 文章标题
date: 2026-10-21 10:00:00
category: 算法
tags: [动态规划, 题解]
description: 一句话摘要（可选）
---
```

写完推送到 GitHub，Netlify 会自动构建上线。更详细的说明在仓库根目录的 `README.md`。

石头屋的装修就到这里，接下来该往六个房间里放东西了。
