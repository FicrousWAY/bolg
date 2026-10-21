---
title: 博文 Markdown 语法写作指南（TiO₂ 全效果展示）
date: 2026-10-21 14:30:00
category: 杂项
tags:
  - TiO2
  - Markdown
  - 教程
description: 石头屋换成 TiO₂ 之后的写作手册：每项功能先给效果、再给可复制的写法，涵盖公式、代码、提示框、折叠、加密、页边注、双链引用等，并附 Shoka 旧语法对照表。
cover:
  src: /covers/tio2-syntax-guide.svg
  alt: 刻着 Markdown 符号的几块石头
aigcRate: 100
aigcModels:
  - claude
---

本站现在由 **TiO₂** 构建（换主题的经过见 [[石头屋装修报告：从 Hexo + Shoka 迁移到 TiO₂|装修报告]]）。这篇是旧文 [[博文 Markdown 语法写作指南（Shoka 全效果展示）|Shoka 语法指南]] 的新版：下文每项先给**效果**，再给**编写语法（可复制）**；最后一节是 Shoka 旧语法与 TiO₂ 写法的对照表。

---

## 〇、文章放在哪里（必读）

TiO₂ 没有「分类文件夹」和「分类封面」这套规则，**文件路径就是网址**，分类只看 front matter。

| 要求 | 说明 |
|------|------|
| 文章目录 | `posts/`，一篇一个 `.md` 文件，可以再分子目录 |
| 网址 | `posts/foo.md` → `/posts/foo.html`；建议用英文文件名，网址更干净 |
| 页面 | `pages/` 下的 `about.md` 等；`archives.md`、`category.md`、`tags.md` 是索引页 |
| 文内图片 | 放在 `assets/images/` 下，用 `/images/…` 引用；也可以放在文章旁边用相对路径 |
| 原样复制的文件 | 放在 `public/` 下（如封面图），构建后位于站点根目录；**不要放 `.html`** |
| 草稿 | 放进任意 `draft/` 目录，生产构建会跳过（`trash/`、`private-notes/` 同理） |

**编写语法（目录示意，非 Markdown）**

```text
bolg/
  posts/
    my-first-post.md        → /posts/my-first-post.html
    algorithms/dp-intro.md  → /posts/algorithms/dp-intro.html
    draft/half-done.md      （不会发布）
  assets/images/
    dp/table.png            → 正文里写 /images/dp/table.png
  public/
    covers/dp.svg           → 封面写 /covers/dp.svg
```

新建文章最省事的方式是命令行，会自动填好日期并创建同名图片目录：

```bash
npm run new -- "动态规划入门" -c 算法 -t 动态规划,题解
```

---

## 一、Front Matter 常用项

### 效果

| 字段 | 作用 |
|------|------|
| `title` / `date` | 标题与发布时间（时区按站点配置 `+08:00`） |
| `lastUpdated` | 最后修改时间，显示在文末 |
| `category` | **只能填一个**，且必须是六大板块之一：留学 / 算法 / 课程 / 科研 / 杂项 / 开发，写错会让构建报错 |
| `tags` | 标签，可多个 |
| `description` | 摘要，用于首页列表、搜索和分享卡片；不写就自动截取正文开头 |
| `cover` | 封面图，最新一篇带封面的文章会在首页大图展示（本文就有） |
| `order` | 排序权重，数字越大越靠前，相当于 Shoka 的置顶 |
| `topics` | 把文章同时挂到某个专题下（见第十六节） |
| `aigcRate` / `aigcModels` | AI 参与比例与模型，文章标题旁会显示 AI 声明 |
| `humanWritten` | 写 `true` 表示亲笔，获得一枚「亲笔」签名，与 AI 字段互斥 |

### 编写语法

~~~yaml
---
title: 文章标题
date: 2026-10-21 12:00:00
lastUpdated: 2026-10-22 18:00:00
category: 算法
tags:
  - 动态规划
  - 题解
description: 一句话摘要。
cover:
  src: /covers/dp.svg      # 放在 public/covers/dp.svg
  alt: 封面图说明
  fit: cover               # cover（裁切铺满，默认）或 contain（完整显示）
  position: center         # 裁切时的对齐位置，CSS object-position 写法
order: 1                   # 可选，置顶
humanWritten: true         # 亲笔声明；或改用下面两行
# aigcRate: 30             # 0–100
# aigcModels: [claude]     # 可选：claude / openai / gemini
---
~~~

数学公式、代码高亮都**不需要**再写 `math: true` 之类的开关；摘要也不再用 `<!-- more -->`，改写 `description`。

---

## 二、标题与目录

### 效果

### 三级标题

#### 四级标题

正文从 `##` 起跳，`#` 一级标题由页面标题占用。所有标题会自动编号进入左侧目录，阅读时显示当前位置、阅读进度和剩余时间；每个标题旁有锚点链接，可以直接分享到某一节。

### 编写语法

~~~markdown
## 二级标题
### 三级标题
#### 四级标题
~~~

---

## 三、文字样式

### 效果

*斜体*、**粗体**、***粗斜体***、`行内代码`、~~删除线~~。

下面这些靠 HTML 标签实现：<mark>荧光高亮</mark>、<ins>下划线</ins>、H<sub>2</sub>O、29<sup>th</sup>、快捷键 <kbd>Ctrl</kbd> + <kbd>K</kbd>、<abbr title="Static Site Generator">SSG</abbr>（悬停看全称）、注音 <ruby>石头屋<rt>shí tou wū</rt></ruby>。

中文与 **加粗**、*斜体* 混排时不用刻意加空格，TiO₂ 会正确识别「**中文**」这类紧贴标点的强调。

Emoji 直接输入即可：🪨 🥥 🐔 🏠

### 编写语法

~~~markdown
*斜体* **粗体** ***粗斜体*** `行内代码` ~~删除线~~

<mark>荧光高亮</mark> <ins>下划线</ins>
H<sub>2</sub>O 29<sup>th</sup>
<kbd>Ctrl</kbd> + <kbd>K</kbd>
<abbr title="Static Site Generator">SSG</abbr>
<ruby>石头屋<rt>shí tou wū</rt></ruby>

🪨 🥥 🐔 🏠
~~~

正文支持直接写 HTML，Markdown 没有的效果都可以用标签补上。

---

## 四、列表

### 效果

1. 第一项
2. 第二项
   - 嵌套的无序项
   - 再嵌套一项
3. 第三项

- 苹果
- 椰子
- 鸡

### 编写语法

~~~markdown
1. 第一项
2. 第二项
   - 嵌套的无序项
3. 第三项

- 苹果
- 椰子
~~~

（`- [ ]` 任务列表**不支持**，会按原文显示。）

---

## 五、引用与分割线

### 效果

> 普通引用一段文字。
>
> —— 也可以在末尾写上出处

在文章里**选中任意一段文字**，会弹出小工具条：可以复制带出处的引文，或者复制直达这一段的链接。

### 编写语法

~~~markdown
> 引用内容
>
> —— 出处
~~~

水平分割线：单独一行的 `---`（上下空行）。

---

## 六、链接与图片

### 效果

站内链接：[装修报告](/posts/tio2-renovation-report.md)、[分类页的「科研」板块](/pages/category.md#research)、[跳到本文第八节](#八、代码块)

外链会在新标签页打开：[TiO₂ 仓库](https://github.com/CodeBoy2006/TiO2)；裸网址自动变成链接：https://www.ficrousway.top

单独一行的图片会居中展示，`"…"` 里的文字作为图注；**点击图片可以放大**。下面这张 SVG 在深色模式下会自动换成深色版本（切换右上角的明暗开关试试）：

![TiO₂ 构建流程示意](/images/syntax-guide/build-flow.svg "TiO₂ 构建流程：深色模式下自动换色")

连续几张图片写在同一段里，会排成一组：

![左边的石头](/images/syntax-guide/pebble-1.svg)
![右边的石头](/images/syntax-guide/pebble-2.svg)

### 编写语法

~~~markdown
[站内文章](/posts/tio2-renovation-report.md)        ← 直接写 .md，构建时换成 .html
[某页的某一节](/pages/category.md#research)
[本文某一节](#八、代码块)
[外链](https://github.com/CodeBoy2006/TiO2)

![替代文字](/images/目录/图.png "图注")             ← 对应 assets/images/目录/图.png

![图一](/images/a.png)
![图二](/images/b.png)                              ← 同一段里连续写，排成一组
~~~

本地图片（png / jpg / webp / avif / svg）在构建时会自动生成 AVIF / WebP 多尺寸版本并懒加载；**图片路径写错会让构建直接失败**，不会悄悄出现裂图。站内 `.html` 链接指向不存在的页面也会报错。

---

## 七、表格

### 效果

| 左对齐 | 居中 | 右对齐 |
|:-------|:----:|-------:|
| 椰子 | 鸡 | 12 |
| 石头 | 屋 | 345 |

表格太宽时可以横向滚动。

### 编写语法

~~~markdown
| 左对齐 | 居中 | 右对齐 |
|:-------|:----:|-------:|
| 椰子   | 鸡   | 12     |
~~~

---

## 八、代码块

### 效果

普通代码块，自带行号、语言标签和复制按钮，配色跟随明暗模式：

```javascript
function hello(name) {
  console.log('Hello, ' + name)
}
```

在语言名后写 `{行号}` 高亮指定行：

```python {2,4-5}
def fib(n):
    if n < 2:
        return n
    a, b = 0, 1
    for _ in range(n - 1):
        a, b = b, a + b
    return b
```

关掉行号，或者让行号从指定数字开始：

```bash :no-line-numbers
npm install
npm run dev
```

```cpp :line-numbers=42
int main() {
    return 0;
}
```

在行尾写特殊注释，标出增删、错误、警告和重点行：

```ts
const site = 'Hall of Honor' // [!code --]
const site = 'Stone House' // [!code ++]
const theme = 'TiO2' // [!code highlight]
throw new Error('构建失败') // [!code error]
console.warn('图片过大') // [!code warning]
```

```ts
const a = 1
const b = 2 // [!code focus]
const c = 3
```

（最后一块只突出第 2 行，其余行变淡，鼠标移上去恢复。）

### 编写语法

~~~~markdown
```javascript
console.log(1)
```

```python {2,4-5}
第 2、4、5 行高亮
```

```bash :no-line-numbers
不显示行号
```

```cpp :line-numbers=42
行号从 42 开始
```
~~~~

行尾注释的写法（注释符号随语言变化，如 Python 用 `#`）：

~~~text
const old = 1 // [!code --]
const now = 2 // [!code ++]
const key = 3 // [!code highlight]
oops()        // [!code error]
hmm()         // [!code warning]
look()        // [!code focus]
~~~

很长的代码可以包进 `::: code-fold`，见第十一节。

---

## 九、数学公式

### 效果

行内公式：$E = mc^2$，也可以写成 \(\sqrt{x^2+y^2}\)。

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

\[
\begin{aligned}
f(n) &= f(n-1) + f(n-2) \\
     &= \BigO(\varphi^n)
\end{aligned}
\]

内置简写：$\R^n$、$\N$、$\Z$、$\E[X]$、$\argmin_x f(x)$；化学式：$\ce{2H2 + O2 -> 2H2O}$。

公式在构建时就排好版，页面打开即是成品；**选中公式复制时会自动还原成 LaTeX 源码**。

### 编写语法

~~~markdown
行内：$E = mc^2$ 或 \(\sqrt{x^2+y^2}\)

$$
\int_0^1 x^2 \, dx = \frac{1}{3}
$$

\[
\begin{aligned}
f(n) &= f(n-1) + f(n-2) \\
     &= \BigO(\varphi^n)
\end{aligned}
\]

$\R^n$ $\N$ $\Z$ $\E[X]$ $\argmin_x f(x)$ $\ce{2H2 + O2 -> 2H2O}$
~~~

不需要任何开关。正文里要写美元符号本身时，用 `\$` 转义。公式写错（比如括号不配对）会让构建报错。

---

## 十、提示框

### 效果

::: tip
小技巧：按 <kbd>⌘</kbd> <kbd>K</kbd> 或 <kbd>Ctrl</kbd> <kbd>K</kbd> 打开站内搜索。
:::

::: info
info 信息
:::

::: note
note 备注
:::

::: important
important 重要
:::

::: warning
warning 警告
:::

::: caution
caution 小心
:::

::: danger 自定义标题
类型名后面的文字会成为标题。
:::

::: details 点击展开（可以当剧透用）
藏起来的内容。
:::

### 编写语法

~~~markdown
::: tip
内容
:::

::: warning 自定义标题
内容
:::

::: details 点击展开
默认收起的内容
:::
~~~

可用类型：`tip`、`info`、`note`、`important`、`warning`、`caution`、`danger`、`details`。

---

## 十一、折叠

### 效果

::: fold title="六大板块" summary="默认只露出前几行，点按钮展开"
1. 留学：申请、语言考试、海外学习与生活
2. 算法：算法竞赛、题解、数据结构
3. 课程：课程笔记与复习
4. 科研：论文阅读、科研记录
5. 杂项：站务、随笔
6. 开发：项目开发、工程实践
7. 第七行：上面是全部板块
8. 第八行：再多写几行
9. 第九行：折叠效果才明显
10. 第十行：完
:::

::: fold mode=full title="完全折叠" summary="收起时一行都不露"
完全折叠时，正文全部藏起来，只留标题栏。
:::

::: code-fold lines=6 title="长代码折叠"
```javascript
function quickSort(arr) {
  if (arr.length <= 1) return arr
  const [pivot, ...rest] = arr
  const left = rest.filter((x) => x < pivot)
  const right = rest.filter((x) => x >= pivot)
  return [...quickSort(left), pivot, ...quickSort(right)]
}

function binarySearch(arr, target) {
  let lo = 0
  let hi = arr.length - 1
  while (lo <= hi) {
    const mid = (lo + hi) >> 1
    if (arr[mid] === target) return mid
    if (arr[mid] < target) lo = mid + 1
    else hi = mid - 1
  }
  return -1
}
```
:::

### 编写语法

~~~~markdown
::: fold title="标题" summary="一句说明"
默认露出前 8 行，其余折叠
:::

::: fold mode=full title="完全折叠"
收起时全部隐藏
:::

::: fold lines=3 open
只露 3 行；open 表示默认展开
:::

::: code-fold lines=6
```javascript
很长的代码……
```
:::
~~~~

可选参数：`mode`（`partial` 露出一部分 / `full` 全部隐藏）、`lines`（露出行数）、`height`（直接指定露出高度，如 `height="12rem"`）、`title`、`summary`、`expand-text` / `collapse-text`（按钮文字）、`open`（默认展开）。

---

## 十二、口令加密

### 效果

::: encrypt password="stone" title="加密示例" hint="口令是 stone"
你解开了！这段内容在构建时用 AES-GCM 加密，网页里只有密文，**解密完全在浏览器里完成**。加密内容也不会出现在搜索索引和摘要里。
:::

### 编写语法

~~~markdown
::: encrypt password="stone" title="加密示例" hint="口令提示"
要加密的内容，支持完整 Markdown
:::
~~~

::: warning 注意
`password="…"` 会以明文留在 Markdown 源文件里，**仓库公开时口令也就公开了**，只适合演示。正式使用改写成 `secret="名字"`，口令放进 Netlify 的环境变量 `BLOG_ENCRYPTION_SECRETS`，格式为 JSON：`{"名字": "真正的口令"}`。
:::

---

## 十三、脚注与页边注

### 效果

TiO₂ 的脚注会同步显示在正文旁边的页边[^margin]，宽屏阅读时不用跳到文末；窄屏则照常放在文末[^narrow]。

[^margin]: 这就是一条页边注。
[^narrow]: 手机上看，脚注在文章最后。

### 编写语法

~~~markdown
正文里的标记[^1]，可以用任意名字[^note]。

[^1]: 脚注内容。
[^note]: 另一条脚注。
~~~

---

## 十四、双链引用与嵌入

### 效果

用 `[[文章标题]]` 直接引用站内文章，不必记网址：[[致每一个打开此网站的人]]。鼠标悬停在链接上会弹出预览卡片。

自定义链接文字：[[石头屋装修报告：从 Hexo + Shoka 迁移到 TiO₂|这次装修]]；引用到某一节：[[石头屋装修报告：从 Hexo + Shoka 迁移到 TiO₂#六大板块]]；引用本文的某一节：[[#九、数学公式]]。

给段落加块锚点后，可以精确引用这一段：

石头屋的地基是一份份 Markdown 文件，没有数据库，没有后端，写下的每个字都是硬盘上的一份文件。
^stone-house

引用这一段：[[#stone-house]]

把前面的 `[[` 改成 `![[`，就会把内容嵌入成一张引文卡片：

![[#stone-house]]

![[致每一个打开此网站的人]]

被引用的文章末尾会自动列出「反向链接」，告诉读者哪些文章提到了它。

### 编写语法

~~~markdown
[[文章标题]]
[[文章标题|显示文字]]
[[文章标题#某个小标题]]
[[#本文的某个小标题]]

某一段文字……
^my-block                 ← 单独一行写在段落末尾，作为块锚点

[[#my-block]]             ← 引用本文的这一段
[[文章标题#my-block]]     ← 引用别的文章里的段落

![[文章标题]]             ← 嵌入成引文卡片
![[#my-block]]
~~~

引用的目标找不到时不会报错，只会显示成普通文字，写完记得在预览里点一下。

---

## 十五、AI 声明与亲笔

### 效果

本文 front matter 写了 `aigcRate: 100` 和 `aigcModels: [claude]`，所以标题附近和文章列表里都会显示 AI 生成的标记。亲手写的文章写 `humanWritten: true`，会得到一枚「亲笔」签名；归档页的「只看亲笔」按钮就是按它筛选的。

### 编写语法

~~~yaml
humanWritten: true        # 亲笔

# 或者
aigcRate: 30              # AI 参与比例，0–100
aigcModels: [claude, openai]
~~~

两者不能同时写，冲突时构建会报错。

---

## 十六、专题与知识库（暂未启用）

TiO₂ 还有两个本站暂时没开的功能，需要时再启用：

- **专题**：连载文章放进 `topics/专题名/` 目录（每个目录一个专题，可放 `_meta.md` 写简介），再新建 `pages/topics.md`，就会生成专题树。文章网址会变成 `/topics/…`。
- **知识库**：一个概念一页，放在 `foundations/` 下，用「前置、使用、实现、特例、等价、对照」六种关系把概念连起来，自动生成关系图、概念全图和学习路线。正文里用 `[[foundation:概念ID]]` 引用。适合以后整理算法或课程里的知识点。

---

## 十七、Shoka 旧语法对照表

| Shoka 写法 | TiO₂ 写法 |
|------------|-----------|
| `==高亮==` | `<mark>高亮</mark>` |
| `++下划线++` | `<ins>下划线</ins>` |
| `H~2~O`、`29^th^` | `H<sub>2</sub>O`、`29<sup>th</sup>` |
| `[Ctrl]{.kbd}` | `<kbd>Ctrl</kbd>` |
| `{汉字^hàn zì}` 注音 | `<ruby>汉字<rt>hàn zì</rt></ruby>` |
| `!!剧透!!` | `::: details` 或 `::: fold mode=full` |
| `:::info` / `:::warning` / `:::danger` | 同名可直接用；`primary`、`success`、`default` 不支持，改用 `tip` / `note` |
| `+++ 折叠 +++` | `::: fold` 或 `::: details` |
| `;;;` 标签卡 | 不支持 |
| `{% codeblock mark:1,4 %}`、`mark:1,4` | ```` ```js {1,4} ```` |
| `{% blockquote %}`、`{% pullquote %}` | `>` 引用 |
| `{% media %}`、`{% links %}` | 直接写 HTML 或普通列表 |
| quiz 练习题、mermaid、chart | 不支持；图表可以画成 SVG 图片 |
| `math: true` 等开关 | 不需要 |
| `<!-- more -->` | front matter 写 `description` |
| `categories: [父类, 子类]` | `category: 算法`（只能一个，六选一） |
| `updated` | `lastUpdated` |
| `sticky` | `order` |
| `photos` | 正文里直接放图片 |

---

## 十八、参考

- [TiO₂ 仓库与说明](https://github.com/CodeBoy2006/TiO2)
- 博客仓库根目录的 `README.md`：目录结构、命令、部署
- [[博文 Markdown 语法写作指南（Shoka 全效果展示）|旧版 Shoka 语法指南]]（存档）

---

*写完之后在本地跑一次 `npm run build`：坏链接、缺图、公式错误、分类写错，都会在这一步报出来，而不是被读者发现。*
