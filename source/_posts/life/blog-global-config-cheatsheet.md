---
title: FicrousWAY 博客全局配置指南（速查）
date: 2026-03-31 23:00:00
categories:
  - 生活杂项
tags:
  - Hexo
  - Shoka
  - 配置
---

本文在仓库根目录 `BLOG_GUIDE.md` 与近期主题定制的基础上，把「改哪里、管什么」收成一篇速查；写具体语法与插件细节仍以 `BLOG_GUIDE.md` 与官方文档为准。

<!-- more -->

---

## 一、根目录里该看哪些文件

| 文件 | 作用 |
|------|------|
| `_config.yml` | 站点标题、作者、`url`、`permalink`、**分类映射 `category_map`**、Markdown 渲染器、Prism、`feed`、Algolia 等。 |
| `_config.shoka.yml` | 合并进主题的配置：**菜单、社交、侧栏、字体、加载动画、烟花**等；未写明的项继承 `themes/shoka/_config.yml`。 |
| `package.json` | 依赖与 `hexo`/`hexo server`/`hexo generate` 等脚本。 |
| `source/` | 除 `_posts` 外的页面与静态资源（如 `about/`、`images/`）；构建后映射到站点根路径。 |
| `source/_posts/` | 所有博文；可用子目录整理，**分类以 Front Matter 为准**。 |
| `BLOG_GUIDE.md` | 站内维护用长文档：目录结构、分类封面、`_cover` 顺序、书写语法等。 |

构建命令（项目根）：

```bash
npx hexo clean && npx hexo generate
npx hexo server
```

---

## 二、站点信息与 URL（`_config.yml`）

- **`title` / `subtitle` / `description` / `keywords` / `author` / `language`**：全站元数据与页头展示。  
- **`url`**：须与线上地址一致（含 `https`），否则 Feed、绝对链接、部分脚本判断会错。  
- **`permalink`**：当前为 `:title/`；`:title` 表示相对 `source/_posts/` 的路径（无扩展名）。若用 **`permalink:`** 强行改成与现有 **`source/_posts/某段/`** 资源目录同路径（例如已有 `acm/cover.jpg` 时又设 `permalink: acm/test`），可能与静态产物冲突导致构建失败；**优先通过文件路径表达 URL**，必要时再单独评估 `permalink`。  
- **`category_map`**：把中文分类名映射成英文 **slug**（URL 片段），并决定分类封面目录名（见下文）。

---

## 三、顶栏背景图（首页 `#imgs` 六张轮播）

逻辑在主题里通过 **`_cover(page, 6)`** 调用（见 `themes/shoka/layout/_partials/layout.njk`）。

优先级概要：

1. 当前页有 **`cover` / `photos`** 时优先用其凑图；  
2. 否则用主题 **`image_list`** 随机抽 6 张；  
3. 可在站点 **`source/_data/images.yml`** 提供字符串数组作为自定义池（**至少 6 条**）；  
4. 或在主题配置里设 **`image_server`**，走随机接口 URL。

默认未配置时，使用主题内置图床 ID 列表（`themes/shoka/_images.yml`）。

---

## 四、浏览器顶栏主题色（`theme-color`）

Shoka 在 **`themes/shoka/layout/_partials/head/head.njk`** 中有：

```html
<meta name="theme-color" content="#FFF">
```

需要改移动端浏览器地址栏颜色时，直接改这里的 **`content`** 为目标色值（如暗色主题可用深灰背景色）。升级主题后若被覆盖，需重新合并该修改。

---

## 五、侧栏头像

在 **`_config.shoka.yml`** 的 **`sidebar.avatar`** 填写文件名（当前为 `avatar.jpg`）。

图片须能通过站点 URL 访问：常见做法是放到 **`source/images/avatar.jpg`**（文中引用 **`/images/avatar.jpg`**），或与主题静态目录一致的路径；以你部署后浏览器能打开的地址为准。

---

## 六、Favicon 与 Apple 触摸图标

主题默认在 **`themes/shoka/_config.yml`** 的 **`favicon`** 段配置路径，例如 `apple_touch_icon` 等。可在 **`_config.shoka.yml`** 中覆盖同名键。

文件放在 **`source/`** 下对应路径（如 `source/images/favicon.ico`），保证构建后位于站点根或你配置的路径下。

---

## 七、打赏图片

主题默认 **`themes/shoka/_config.yml`** 中 **`reward`**：

- **`reward.enable`**：是否默认在文章页显示打赏。  
- **`reward.account.wechatpay` / `alipay` / `paypal`**：图片路径，如 `/wechatpay.png`。

在 **`_config.shoka.yml`** 增加 `reward:` 段即可覆盖；把 **`wechatpay.png`、`alipay.png`** 等放到 **`source/`** 根目录或你配置的路径下（与路径字符串一致）。

---

## 八、菜单、社交、字体与动效（`_config.shoka.yml`）

| 配置块 | 用途 |
|--------|------|
| **`alternate`** | 角标/副品牌名等展示用文案。 |
| **`statics`** | 静态资源 URL 前缀；**建议保持 `/`**，以免分类封面等本站生成资源被错误指到 CDN。 |
| **`loader`** | 首屏与 Tab 切换是否显示 loading 猫。 |
| **`fireworks`** | 点击烟花效果与颜色列表。 |
| **`darkmode` / `auto_scroll`** | 深色模式与自动滚动位置（留空可走主题默认）。 |
| **`font.*`** | 全局/标题/正文/代码字体与是否从外链加载。 |
| **`iconfont`** | 阿里 iconfont 项目 id。 |
| **`menu`** | 导航项：`路径 || 图标名`。 |
| **`social`** | `名称: 完整URL || 图标 || 颜色`；注意 YAML 引号成对。 |
| **`sidebar.position`** | 侧栏左/右。 |
| **`widgets` / `footer` / `post`** | 侧栏小工具、页脚年份与统计、文章字数等。 |

---

## 九、分类封面与文章列表缩略图

- **文件位置**：`source/_posts/<slug>/cover.jpg`（`<slug>` 来自 `category_map`，不是中文分类名）。  
- **首页分类卡片**：依赖上述文件存在；模板使用本站路径 **`/<slug>/cover.jpg`**，并带 **`?v=mtime`**。  
- **文章列表/导航缩略图**：由主题 **`_cover`** 按 **`cover` → 分类封面（深→浅）→ `photos[0]` → 空** 顺序解析；无图时为灰底占位。列表区已改为 **CSS `background-image`**，不依赖懒加载脚本。

单篇若写了 **`cover:`**，会跳过分类封面；希望显示分类图时请去掉 **`cover`**。

---

## 十、单篇文章里常改的项

在对应 **`source/_posts/...md`** 的 Front Matter：**`title`、`date`、`categories`、`tags`、`cover`、`photos`、`sticky`、以及 `math` / `mermaid` / `chart` / `quiz` 等开关**。摘要分隔使用正文中的 **`<!-- more -->`**。

---

## 十一、延伸阅读

- 仓库内 **`BLOG_GUIDE.md`**（完整书写与插件说明）。  
- [Hexo 文档](https://hexo.io/docs/)  
- [Shoka 主题仓库](https://github.com/amehime/hexo-theme-shoka)  

---

*配置以你当前 `_config.yml` 与 `_config.shoka.yml` 为准；升级主题后请核对本文涉及的模板与脚本是否仍需手工合并。*
