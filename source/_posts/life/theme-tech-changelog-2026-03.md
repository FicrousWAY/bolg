---
title: 站点与 Shoka 主题技术修改报告（2026 年 3 月）
date: 2026-03-31 22:30:00
categories:
  - 生活杂项
tags:
  - Hexo
  - Shoka
  - 运维
---

本文汇总本轮对 Hexo 站点与 `themes/shoka` 的定制修改，便于日后升级主题或换机时做 diff 合并。细节实现以仓库内文件为准。

<!-- more -->

---

## 一、构建与站点配置

| 项目 | 说明 |
|------|------|
| `package.json` | Windows 下若全局未安装 `hexo`，脚本改为 `node ./node_modules/hexo/bin/hexo`，保证 `npm run build` 可用。 |
| `_config.yml` | 修正 `url`、关闭冲突的 `syntax_highlighter` 默认项、配置 `prism_plugin`（与主题 Prism 资源配合）。 |
| `_config.shoka.yml` | 修正社交里 `mailto:` 等链接；**保持 `statics: /`**，避免分类封面被错误拼到 CDN 前缀。 |

---

## 二、首屏加载与「无限转圈」修复

**现象**：页面长期停在 Shoka loading，主内容不显示。

**方向**：去掉首屏阻塞型同步外链；Algolia 等能力在配置不完整时不初始化；核心初始化加 try/catch 与超时兜底；第三方对象（`lozad`、`anime`、`Pjax` 等）先检测再调用。

**涉及文件（节选）**：

- `themes/shoka/layout/_partials/layout.njk`：移除 `polyfill.io`、首屏同步 `_vendor_js()` 等高风险阻塞。
- `themes/shoka/scripts/generaters/script.js`：仅当 Algolia `appId` / `apiKey` / `indexName` 齐全时注入搜索逻辑。
- `themes/shoka/source/js/_app/pjax.js`：`siteInit` 容错、loading 超时关闭。
- `themes/shoka/source/js/_app/global.js`：`lozad` 缺失时提供空实现。
- `themes/shoka/source/js/_app/utils.js`：`anime` 缺失时无动画降级。

（故障背景与排查过程见同分类下《Hexo+Shoka 无限转圈故障复盘》一文。）

---

## 三、分类封面与文章缩略图（`_cover`）

### 3.1 分类卡片 URL

分类区封面链接使用 **`url_for('<slug>/cover.jpg')`**，**不再**与 `theme.statics`（CDN）拼接，否则本地生成的 `public/<slug>/cover.jpg` 无法命中。

### 3.2 磁盘检测路径

构建时检测 `cover.jpg` 是否存在的逻辑，统一基于 **`hexo.source_dir`（或 `base_dir` + `config.source_dir`）下的 `_posts/<slug>/cover.jpg`**，避免工作目录或相对路径误判。

**相关脚本**：`themes/shoka/scripts/generaters/index.js`、`themes/shoka/scripts/helpers/list_categories.js`。

### 3.3 `_cover` 解析顺序（`themes/shoka/scripts/helpers/engine.js`）

对**单张**场景（文章列表、上下篇等，即未传 `num` 或 `num ≤ 1`）：

1. 文章 Front Matter **`cover`**（写了则**不再**用分类封面；不需要时请删除该字段）。  
2. **分类封面**：从 `categories.toArray()` **从最后一项向根**查找，第一个在磁盘存在 `cover.jpg` 的分类生效；URL 带 **`?v=文件 mtime`** 作缓存刷新。  
3. **`photos` 第一张**。  
4. 皆无则返回空字符串——**不再用随机图**；模板侧用灰底占位。

仅 **`_cover(page, 6)`** 这类**多张头图**（`typeof num === 'number' && num > 1`）在无 `cover`/`photos` 时仍走主题随机图池或 `image_server`。

新增/注册辅助方法包括：`sourcePostsDir`、`categoryCoverAbs`、`categoryCoverPublicUrl`、`resolvePostCategoryCoverUrl`、**`_categoryCoverUrl`**。

### 3.4 首页文章列表：懒加载改为背景图

列表宏原先用 `<img data-src>` 依赖 **lozad**；若 PJAX/懒加载未执行，缩略图表现为空白，而分类卡片因内联背景一直正常。

**修改**：`themes/shoka/layout/_macro/segment.njk` 中 `.cover` 使用与卡片一致的 **`style="background-image: url(...); background-size: cover; background-position: center"`**，可点击区域为 **`a.cover-hit`**。样式配合 `themes/shoka/source/css/_common/components/pages/home.styl`（含占位与 hover）。

### 3.5 随机头图池条目数

`themes/shoka/scripts/generaters/config.js`：自定义 `source/_data/images.yml` 时，列表长度判断由「**多于 6 条**」改为「**不少于 6 条**」，与顶栏六张轮播需求一致。

---

## 四、维护建议

1. **升级主题前**：对上述路径执行 `git diff`，逐项合并，避免覆盖加载安全与封面逻辑。  
2. **分类封面**：文件路径永远是 **`source/_posts/<slug>/cover.jpg`**，`slug` 以 `_config.yml` 的 `category_map` 为准（例如本站「网络安全」→ `cyberscurity`）。  
3. **文章归类**：仅改 Front Matter `categories` 即可；磁盘子目录（如 `life/`）主要用于整理源文件，默认永久链接仍由 `permalink` 规则与 **`source/_posts/` 相对路径**决定。若目录下已有 **`acm/cover.jpg`** 等资源，**不要**对文章使用 `permalink: acm/xxx` 覆盖，否则可能与生成产物冲突（`EISDIR`）；应保留原文件路径（如 **`acm/test.md`**）以维持 **`/acm/test/`** 等旧链接。  
4. **2026-03-31 文档整理**：《博文 Markdown 语法写作指南》与《Hexo+Shoka 无限转圈故障复盘》已归入 **生活杂项**；前者仍放在 **`source/_posts/acm/test.md`**，后者仍在 **`source/_posts/hexo-shoka-loading-incident-report.md`**，避免 URL 变化。本报告与《博客全局配置指南》位于 **`source/_posts/life/`**。

---

*若与仓库实际代码不一致，以当前分支为准；本文仅作变更说明索引。*
