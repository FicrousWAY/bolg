---
title: "高等数学上册期中笔记：极限、导数、中值定理与极坐标"
date: 2026-11-10 20:41:33
category: 课程
tags:
  - 高等数学
  - 微积分
  - 期中复习
  - 等价无穷小
  - 极坐标
description: "按上册期中大纲串联函数、极限与连续、导数与微分、中值定理、洛必达法则和极坐标。附 60 项等价无穷小表、任意阶生成法、公式推导及八道自编练习。"
aigcRate: 100
aigcModels:
  - openai
source: codex
verified: false
---

极限回答“趋近哪里”，导数回答“此刻怎样变化”，中值定理把一点的变化率连接到整个区间，极坐标则把曲线放进“距离与方向”的语言里。沿着这条线学习，公式之间就有了来路。

本篇按高等数学上册期中大纲展开：第一章函数、极限与连续，第二章导数与微分，第三章微分中值定理与 L’Hôpital’s Rule，另加极坐标专项。等价无穷小整理为 **60 项速查表**，并补充任意阶主项的生成方法。高阶展开、双曲函数和极坐标积分标为扩充，可在基础部分读完后回查。[^scope]

## 学习路线与题型地图

| 模块 | 先掌握的概念 | 要能独立完成的任务 |
| --- | --- | --- |
| 函数与极限 | 定义域、单侧极限、收敛 | 判断极限是否存在，证明简单极限 |
| 无穷小与连续 | 阶、主项、连续性 | 选择代换精度，处理分段与相消 |
| 导数与微分 | 差商、线性近似、Chain Rule | 求导，求切线，处理参数和隐函数 |
| 中值定理 | 端点条件、割线与切线 | 证明存在性、唯一性和不等式 |
| L’Hôpital’s Rule | 未定式、导数比 | 把复杂极限转成可计算的基本型 |
| 极坐标 | 极径、极角、参数化 | 互化方程，识图，求切线与面积 |

**Interpretation:** 把每一道题都读成三件事：变量在走向哪里，哪些量支配结果，现有条件支持哪一步变形。下面的解题路线和例题按这个思路组织。

## 第一章　函数、极限与连续

### 函数从定义域开始

函数由定义域与对应法则共同确定。例如 $f(x)=x/x$ 的定义域是 $\mathbb R\setminus\{0\}$，而 $g(x)=1$ 可以定义在整个 $\mathbb R$ 上。它们在共同定义域上的值相同，作为函数仍有区别。

复合函数 $f(g(x))$ 的定义域要同时满足 $x\in D(g)$ 和 $g(x)\in D(f)$。求 $\ln\sqrt{1-x^2}$ 的定义域时，外层对数要求根号内的结果严格为正，于是 $1-x^2>0$，得到 $(-1,1)$。

| 性质 | 判断方法 | 常用推论 |
| --- | --- | --- |
| 有界 | 找到统一常数 $M$，使 $\lvert f(x)\rvert\le M$ | 有界函数与无穷小的乘积趋于零 |
| 单调 | 比较任意 $x_1<x_2$ 的函数值；可导时可用导数 | 严格单调函数至多与某条水平线相交一次 |
| 奇偶 | 先检查定义域关于原点对称，再比较 $f(-x)$ 与 $f(x)$ | 可导偶函数在原点的导数为零 |
| 周期 | 找 $T>0$，验证定义域平移与 $f(x+T)=f(x)$ | 图象可由一个周期复制得到 |

常见的五类基本初等函数是幂、指数、对数、三角和反三角函数。由它们经过有限次四则运算与复合得到初等函数；这类函数在其定义区间内连续，求极限时往往可以先直接代入。

### 极限的两种严格语言

数列 $a_n\to A$ 的定义是：

$$
\forall\varepsilon>0,\quad
\exists N\in\mathbb N,\quad
n>N\Longrightarrow \lvert a_n-A\rvert<\varepsilon.
$$

函数 $f(x)\to A$（$x\to x_0$）的定义是：

$$
\forall\varepsilon>0,\quad
\exists\delta>0,\quad
0<\lvert x-x_0\rvert<\delta
\Longrightarrow \lvert f(x)-A\rvert<\varepsilon.
$$

这里的 $0<\lvert x-x_0\rvert$ 表示研究去心邻域。极限由附近的行为决定，$f(x_0)$ 可以是别的值，甚至没有定义。证明时先从目标误差倒推输入要多近，再明确选出 $N$ 或 $\delta$。

::: note 例题｜用定义证明一个极限

证明 $\lim_{x\to2}x^2=4$。先写

$$
\lvert x^2-4\rvert=\lvert x-2\rvert\lvert x+2\rvert.
$$

先限制 $\lvert x-2\rvert<1$，便有 $1<x<3$，从而 $\lvert x+2\rvert<5$。给定 $\varepsilon>0$，取 $\delta=\min\{1,\varepsilon/5\}$，则 $0<\lvert x-2\rvert<\delta$ 时，$\lvert x^2-4\rvert<5\delta\le\varepsilon$。

这类证明的关键是先控制额外因子，再控制真正趋于零的因子。
:::

双侧极限存在，当且仅当左右极限都存在且相等。对 $\arctan(1/x)$，$x\to0^+$ 时趋于 $\pi/2$，$x\to0^-$ 时趋于 $-\pi/2$，因此在零点没有双侧极限。

还可以用数列检验极限：若能找到两列 $x_n,y_n\to x_0$，都不等于 $x_0$，而 $f(x_n)$ 与 $f(y_n)$ 趋于不同结果，则函数极限不存在。例如对 $\sin(1/x)$，取

$$
x_n=\frac1{2n\pi+\pi/2},\qquad
y_n=\frac1{2n\pi+3\pi/2},
$$

两列函数值分别恒为 $1$ 与 $-1$。

### 极限的性质与运算

有限极限具有唯一性、局部有界性和局部保号性。若 $f(x)\to A>0$，可以取误差 $\varepsilon=A/2$，得到附近的 $f(x)>A/2>0$。这也解释了为什么趋于非零常数的分母，在充分靠近目标点后保持非零。

若 $f\to A$、$g\to B$，且 $A,B$ 都是有限数，则

$$
f\pm g\to A\pm B,\qquad fg\to AB,\qquad
\frac fg\to\frac AB\quad(B\ne0).
$$

遇到两个发散项相减，应先合并。例如

$$
\sqrt{x^2+x}-x
=\frac{x}{\sqrt{x^2+x}+x}
=\frac1{\sqrt{1+1/x}+1}\to\frac12
\quad(x\to+\infty).
$$

复合极限可以从外层连续性入手：$g(x)\to b$，且 $f$ 在 $b$ 连续，就有 $f(g(x))\to f(b)$。若只知道外层在去心邻域上的极限，则还要保证内层最终避开 $b$，或外层在 $b$ 的取值与极限一致。

### 夹逼与单调有界：先证明会收敛

夹逼准则适合“一个受控的小量乘上振荡项”。例如

$$
\left\lvert x^2\sin\frac1x\right\rvert\le x^2\to0,
\qquad
\lim_{x\to0}x^2\sin\frac1x=0.
$$

数列的单调有界准则则适合递推关系：递增且有上界，或递减且有下界，都能保证收敛。先证明这些性质，再在递推式中取极限。

::: note 例题｜递推数列的极限

设 $a_1=1$，$a_{n+1}=\sqrt{3+a_n}$，记 $L=(1+\sqrt{13})/2$，它满足 $L^2=L+3$。归纳可得 $0<a_n<L$：若 $a_n<L$，则 $a_{n+1}<\sqrt{3+L}=L$。

在 $0<a_n<L$ 上，$a_n^2-a_n-3<0$，所以

$$
a_{n+1}^2-a_n^2=3+a_n-a_n^2>0.
$$

正数平方的大小关系给出 $a_{n+1}>a_n$。于是数列递增有上界，极限存在；设为 $\ell$，则 $\ell=\sqrt{3+\ell}$，取正根得到 $\ell=L$。
:::

### 两个重要极限与指数型极限

两个基础极限是

$$
\lim_{u\to0}\frac{\sin u}{u}=1,\qquad
\lim_{u\to0}(1+u)^{1/u}=e.
$$

第二个也可写成 $\lim_{t\to+\infty}(1+1/t)^t=e$。把内部小量整体记成 $u$，公式就能处理 $\sin(3x)/(3x)$、$\sin(x^2)/x^2$ 等复合形式。

更通用的指数型处理是先取对数。若 $u(x)\to0$，$1+u(x)>0$，且 $v(x)u(x)\to L$，则

$$
\ln\bigl((1+u)^v\bigr)=v\ln(1+u)
=vu\,\frac{\ln(1+u)}u\to L,
\qquad (1+u)^v\to e^L.
$$

例如 $\left(1+2x\right)^{3/x}\to e^6$。对于变量指数，真正要计算的是“指数乘底数的对数”。

### 连续、间断与闭区间上的整体性质

函数在 $x_0$ 连续，就是 $f(x_0)$ 有定义，且 $\lim_{x\to x_0}f(x)=f(x_0)$。若已知极限为 $A$，把点值补成 $A$ 就能修复可去间断。

| 类型 | 左右极限 | 例子（考察 $x=0$） |
| --- | --- | --- |
| 可去间断 | 都有限且相等，但点值缺失或不匹配 | $\sin x/x$ 未补定义时 |
| 跳跃间断 | 都有限，但不相等 | 左侧为 $-1$，右侧为 $1$ |
| 无穷间断 | 至少一侧趋于无穷 | $1/x$ |
| 振荡间断 | 至少一侧因振荡没有极限 | $\sin(1/x)$ |

前两种合称第一类间断，后两种是常见的第二类间断。一般第二类的判据是至少有一个有限单侧极限不存在。

若 $f\in C[a,b]$，就能把局部连续性转成整体结论：函数有界、取得最大与最小值，并取到最大最小值之间的每个数。尤其当 $f(a)f(b)<0$ 时，区间内部至少有一个零点。证明唯一性时，再加入严格单调性，或用 Rolle 定理排除两个零点。

::: note 例题｜分段函数连续性的配平

设

$$
f(x)=\begin{cases}
\dfrac{\sin(ax)}x,&x<0,\\
b,&x=0,\\
\dfrac{\ln(1+3x)}x,&x>0.
\end{cases}
$$

左极限为 $a$，右极限为 $3$，所以连续条件是 $a=b=3$。当 $a=0$ 时左支恒为零，可以直接计算；$\sin(ax)\sim ax$ 的写法则用于固定 $a\ne0$。
:::

## 等价无穷小：主项、全表与相消精度

### 无穷小是一个极限过程中的量

在同一个极限过程中，$\alpha\to0$ 就称 $\alpha$ 为无穷小。$f\to A$ 等价于 $f=A+\alpha$，其中 $\alpha\to0$。无穷大表示绝对值无界增大，它的倒数趋于零；反过来需要无穷小在所讨论的去心邻域保持非零。

比较阶数时，默认分母最终非零：

| 比值的极限 | 关系 | 写法 |
| --- | --- | --- |
| $\beta/\alpha\to0$ | $\beta$ 比 $\alpha$ 高阶 | $\beta=o(\alpha)$ |
| $\beta/\alpha\to c\ne0$，$c$ 有限 | 同阶 | 主项相差常数倍 |
| $\beta/\alpha\to1$ | 等价 | $\beta\sim\alpha$ |
| $\beta/\alpha^k\to c\ne0$ | $\beta$ 是关于 $\alpha$ 的 $k$ 阶无穷小 | $\beta\sim c\alpha^k$ |

阶数比较也可能没有确定结果，例如 $x\sin(1/x)$ 与 $x$ 的比值振荡。$O(\alpha)$ 表示比值在附近有界，$o(\alpha)$ 则要求比值趋于零。

最实用的等价刻画是

$$
f\sim g\quad\Longleftrightarrow\quad f=g+o(g).
$$

因此，等价代换是在保留主项，同时记住误差小于主项的量级。

### 基础等价式一览

下表默认 **$u\to0$，角度使用弧度**，且表达式在对应实数定义域内。$u$ 可以是 $x$、$x^2$、$\sin x$ 或任意趋于零的复合小量。参数均为固定常数，零系数情形单独计算。双曲函数满足 $\sinh u=(e^u-e^{-u})/2$、$\cosh u=(e^u+e^{-u})/2$、$\tanh u=\sinh u/\cosh u$；$\operatorname{arsinh}$ 与 $\operatorname{artanh}$ 是相应反函数。

| 无穷小 | 等价主项 | 条件 / 备注 |
| --- | --- | --- |
| $\sin u$ | $u$ | — |
| $\tan u$ | $u$ | — |
| $\arcsin u$ | $u$ | — |
| $\arctan u$ | $u$ | — |
| $e^u-1$ | $u$ | — |
| $\ln(1+u)$ | $u$ | — |
| $\sinh u$ | $u$ | 扩充 |
| $\tanh u$ | $u$ | 扩充 |
| $\operatorname{arsinh}u$ | $u$ | 扩充 |
| $\operatorname{artanh}u$ | $u$ | 扩充 |
| $a^u-1$ | $u\ln a$ | $a>0,\ a\ne1$；固定常数 |
| $\log_a(1+u)$ | $\frac{u}{\ln a}$ | $a>0,\ a\ne1$ |
| $(1+u)^\alpha-1$ | $\alpha u$ | $\alpha\ne0$；固定常数，1+u>0 |
| $1-\cos u$ | $\frac{u^2}{2}$ | — |
| $\cos u-1$ | $-\frac{u^2}{2}$ | — |
| $\sec u-1$ | $\frac{u^2}{2}$ | — |
| $\sqrt{1+u}-1$ | $\frac{u}{2}$ | — |
| $\frac1{1+u}-1$ | $-u$ | — |
| $1-(1+u)^{-\alpha}$ | $\alpha u$ | $\alpha\ne0$；固定常数 |
| $\arccos(1-u)$ | $\sqrt{2u}$ | $u\to0^+$ |
| $\frac\pi2-\arccos u$ | $u$ | — |
| $\ln(\cos u)$ | $-\frac{u^2}{2}$ | — |
| $\cosh u-1$ | $\frac{u^2}{2}$ | 扩充 |

其中 $1-\cos u\sim u^2/2$ 可以直接从半角公式得到：

$$
1-\cos u=2\sin^2\frac u2
\sim 2\left(\frac u2\right)^2=\frac{u^2}{2}.
$$

根式则可有理化：$\sqrt{1+u}-1=u/(\sqrt{1+u}+1)\sim u/2$。指数与幂的系数由链式结构产生，例如 $a^u-1=e^{u\ln a}-1\sim u\ln a$。

### 首项相消后用到的高阶等价式

这一组是对期中基本表的扩充。先把相消后的整个差式看成一个新函数，再读取它的第一个非零主项。三角、指数、对数与幂函数的展开可分别对照 [NIST DLMF §4.19](https://dlmf.nist.gov/4.19)、[§4.24](https://dlmf.nist.gov/4.24)、[§4.2](https://dlmf.nist.gov/4.2) 和 [§4.6](https://dlmf.nist.gov/4.6)。

| 无穷小 | 等价主项 | 条件 / 备注 |
| --- | --- | --- |
| $u-\sin u$ | $\frac{u^3}{6}$ | — |
| $\tan u-u$ | $\frac{u^3}{3}$ | — |
| $\arcsin u-u$ | $\frac{u^3}{6}$ | — |
| $u-\arctan u$ | $\frac{u^3}{3}$ | — |
| $\tan u-\sin u$ | $\frac{u^3}{2}$ | — |
| $\arcsin u-\arctan u$ | $\frac{u^3}{2}$ | — |
| $\frac{\sin u}{u}-1$ | $-\frac{u^2}{6}$ | — |
| $\frac{\tan u}{u}-1$ | $\frac{u^2}{3}$ | — |
| $\frac{\arcsin u}{u}-1$ | $\frac{u^2}{6}$ | — |
| $\frac{\arctan u}{u}-1$ | $-\frac{u^2}{3}$ | — |
| $e^u-1-u$ | $\frac{u^2}{2}$ | — |
| $\ln(1+u)-u$ | $-\frac{u^2}{2}$ | — |
| $e^u-1-u-\frac{u^2}{2}$ | $\frac{u^3}{6}$ | — |
| $\ln(1+u)-u+\frac{u^2}{2}$ | $\frac{u^3}{3}$ | — |
| $\ln\frac{1+u}{1-u}-2u$ | $\frac{2u^3}{3}$ | — |
| $1-\cos u-\frac{u^2}{2}$ | $-\frac{u^4}{24}$ | — |
| $\sin u-u+\frac{u^3}{6}$ | $\frac{u^5}{120}$ | — |
| $\tan u-u-\frac{u^3}{3}$ | $\frac{2u^5}{15}$ | — |
| $\arcsin u-u-\frac{u^3}{6}$ | $\frac{3u^5}{40}$ | — |
| $\arctan u-u+\frac{u^3}{3}$ | $\frac{u^5}{5}$ | — |
| $\sqrt{1+u}-1-\frac u2$ | $-\frac{u^2}{8}$ | — |
| $\sqrt{1+u}+\sqrt{1-u}-2$ | $-\frac{u^2}{4}$ | — |
| $\frac1{1+u}-1+u$ | $u^2$ | — |
| $\sinh u-u$ | $\frac{u^3}{6}$ | — |
| $\tanh u-u$ | $-\frac{u^3}{3}$ | — |
| $(1+u)^\alpha-1-\alpha u$ | $\frac{\alpha(\alpha-1)}2u^2$ | $\alpha\notin\{0,1\}$；固定常数 |
| $(1+u)^\alpha-1-\alpha u-\frac{\alpha(\alpha-1)}2u^2$ | $\frac{\alpha(\alpha-1)(\alpha-2)}6u^3$ | $\alpha\notin\{0,1,2\}$；固定常数 |

### 常见复合式一览

| 无穷小 | 等价主项 | 条件 / 备注 |
| --- | --- | --- |
| $\ln(1+\sin u)$ | $u$ | — |
| $e^{\tan u}-1$ | $u$ | — |
| $1-\cos(\ln(1+u))$ | $\frac{u^2}{2}$ | — |
| $\sqrt{1+\sin u}-1$ | $\frac u2$ | — |
| $\ln\frac{\sin u}{u}$ | $-\frac{u^2}{6}$ | — |
| $\ln\frac{\tan u}{u}$ | $\frac{u^2}{3}$ | — |
| $e^{u^2}-1$ | $u^2$ | — |
| $1-\cos(u^2)$ | $\frac{u^4}{2}$ | — |
| $(1+u)^u-1$ | $u^2$ | — |
| $(\cos u)^\beta-1$ | $-\frac\beta2u^2$ | $\beta\ne0$；固定常数 |

对于含两个小量的差式，有一个比逐项相减更强的工具。若 $u,v\to0$、最终 $u\ne v$，则由中值定理得到：

$$
\begin{aligned}
\sin u-\sin v&\sim u-v,\\
e^u-e^v&\sim u-v,\\
\ln(1+u)-\ln(1+v)&\sim u-v,\\
(1+u)^\alpha-(1+v)^\alpha&\sim\alpha(u-v)\quad(\alpha\ne0).
\end{aligned}
$$

例如 $e^{x+x^2}-e^x=e^x(e^{x^2}-1)\sim x^2$。分别把两个指数函数只近似到一阶，会把这个二阶差异丢掉。

### 有限表之外：怎样生成任意阶主项

对于在零点附近具有所需阶数连续导数的函数，若 $f(0)=0$，且最先非零的导数是 $f^{(m)}(0)$，则

$$
f(u)\sim\frac{f^{(m)}(0)}{m!}u^m.
$$

对于趋于常数的函数，先减去该常数再应用。这给出三个层次：$f(0)\ne0$ 时主项是常数；$f(0)=0,f'(0)\ne0$ 时主项是一次项；前若干阶为零时继续找到第一个非零阶。[^flat]

常用的任意阶余项模板是：

$$
\begin{aligned}
e^u-\sum_{k=0}^n\frac{u^k}{k!}
&\sim\frac{u^{n+1}}{(n+1)!},&&n\ge0,\\
\ln(1+u)-\sum_{k=1}^n\frac{(-1)^{k-1}}k u^k
&\sim\frac{(-1)^n}{n+1}u^{n+1},&&n\ge1,\\
\sin u-\sum_{k=0}^n\frac{(-1)^k}{(2k+1)!}u^{2k+1}
&\sim\frac{(-1)^{n+1}}{(2n+3)!}u^{2n+3},&&n\ge0,\\
\cos u-\sum_{k=0}^n\frac{(-1)^k}{(2k)!}u^{2k}
&\sim\frac{(-1)^{n+1}}{(2n+2)!}u^{2n+2},&&n\ge0,\\
(1+u)^\alpha-\sum_{k=0}^n\binom\alpha k u^k
&\sim\binom\alpha{n+1}u^{n+1},&&\binom\alpha{n+1}\ne0.
\end{aligned}
$$

这里 $\binom\alpha k=\alpha(\alpha-1)\cdots(\alpha-k+1)/k!$，$\binom\alpha0=1$，$n$ 为整数。若系数为零，就继续检查后项；当 $\alpha$ 是非负整数且已减去整个多项式时，余式恒为零。

期中尚未学 Taylor 公式时，可以用恒等变形、中值定理或 L’Hôpital’s Rule 证明具体高阶式。例如

$$
\lim_{u\to0}\frac{u-\sin u}{u^3}
=\lim_{u\to0}\frac{1-\cos u}{3u^2}
=\frac16.
$$

### 代换的精度由最终差式决定

乘除因子里的等价代换直接来自比值相乘：若 $f\sim F$、$g\sim G$，则 $f/g\sim F/G$，并在相应极限存在时得到相同的极限。

加减时，写成误差就能看清条件：

$$
f=F+r,\quad g=G+s,\qquad
f-g=(F-G)+(r-s).
$$

要得到 $f-g\sim F-G$，需要 $r-s=o(F-G)$。当 $F,G$ 的首项相消时，$F-G$ 比原来的项更小，原有精度就可能不足。

::: note 例题｜一个恒等式解决三阶相消

求 $\lim_{x\to0}(\tan x-\sin x)/x^3$。先变形为

$$
\tan x-\sin x=\tan x(1-\cos x)
\sim x\cdot\frac{x^2}{2}=\frac{x^3}{2}.
$$

因此极限为 $1/2$。这里代换作用在变形后的两个乘法因子上。
:::

::: note 例题｜复合小量与四阶相消

求 $\lim_{x\to0}\bigl(\ln(1+\sin^2x)-\sin^2x\bigr)/x^4$。设 $u=\sin^2x\sim x^2$，整块差式满足 $\ln(1+u)-u\sim-u^2/2$，所以结果为 $-1/2$。

判断精度的顺序是：先看到分母的四阶，再看到分子是关于 $u$ 的二阶，而 $u$ 本身是关于 $x$ 的二阶。
:::

当目标点不是零时，先换成小量。比如 $x\to1$ 时令 $u=x-1$，于是 $\ln x\sim x-1$；$x\to+\infty$ 时令 $u=1/x$，于是 $\ln(1+1/x)\sim1/x$。对固定 $a$，局部差式也可由 $f(a+h)-f(a)\sim f'(a)h$ 生成，条件是 $f'(a)\ne0$。

## 第二章　导数与微分

### 从差商到局部线性化

导数是差商的有限极限：

$$
f'(x_0)=\lim_{h\to0}\frac{f(x_0+h)-f(x_0)}h.
$$

它描述瞬时变化率，也给出图象在该点的切线斜率。由定义整理可得

$$
f(x_0+h)=f(x_0)+f'(x_0)h+o(h).
$$

因而在一元函数中，可导等价于可微，并推出连续。逆向关系可用 $f(x)=\lvert x\rvert$ 检验：它在零点连续，但左、右导数分别为 $-1$ 与 $1$。

导函数本身也可能不连续。令 $f(0)=0$，$f(x)=x^2\sin(1/x)$（$x\ne0$），由定义 $f'(0)=\lim_{h\to0}h\sin(1/h)=0$；而 $x\ne0$ 时

$$
f'(x)=2x\sin\frac1x-\cos\frac1x,
$$

它在零点附近振荡。这类题在分界点使用差商，其他点再使用求导公式。

### 基本导数表与 Chain Rule

下表在相应函数可导的实数区间内使用。一般实指数的 $x^\alpha$ 取 $x>0$；整数幂可按自身定义域扩展。

| $f(x)$ | $f'(x)$ | 条件 / 配对 |
| --- | --- | --- |
| $C$，$x^\alpha$ | $0$，$\alpha x^{\alpha-1}$ | 常数与幂 |
| $e^x$，$a^x$ | $e^x$，$a^x\ln a$ | $a>0$ |
| $\ln x$，$\ln\lvert x\rvert$ | $1/x$，$1/x$ | 分别为 $x>0$、$x\ne0$ |
| $\log_a x$ | $1/(x\ln a)$ | $x>0,a>0,a\ne1$ |
| $\sin x$，$\cos x$ | $\cos x$，$-\sin x$ | 正弦、余弦 |
| $\tan x$，$\cot x$ | $\sec^2x$，$-\csc^2x$ | 正切、余切 |
| $\sec x$，$\csc x$ | $\sec x\tan x$，$-\csc x\cot x$ | 正割、余割 |
| $\arcsin x$，$\arccos x$ | $1/\sqrt{1-x^2}$，$-1/\sqrt{1-x^2}$ | $-1<x<1$ |
| $\arctan x$，$\operatorname{arccot}x$ | $1/(1+x^2)$，$-1/(1+x^2)$ | arccot 取值范围 $(0,\pi)$ |
| $\sinh x$，$\cosh x$ | $\cosh x$，$\sinh x$ | 扩充 |

四则法则与 Chain Rule 为：

$$
\begin{aligned}
(u\pm v)'&=u'\pm v',\\
(uv)'&=u'v+uv',\\
\left(\frac uv\right)'&=\frac{u'v-uv'}{v^2},\quad v\ne0,\\
\frac{d}{dx}f(g(x))&=f'(g(x))g'(x).
\end{aligned}
$$

求 $\ln(1+\sin^2x)$ 的导数，可以从外到内读出三层：对数、平方、正弦，得到 $2\sin x\cos x/(1+\sin^2x)$。指数、对数的导数及对数求导法可对读 [OpenStax §3.9](https://openstax.org/books/calculus-volume-1/pages/3-9-derivatives-of-exponential-and-logarithmic-functions)。

反函数的导数来自恒等式 $\phi(f(x))=x$。若 $y=f(x)$ 是 $x=\phi(y)$ 的局部可导反函数，且 $\phi'(y)\ne0$，则

$$
\frac{dy}{dx}=\frac1{\phi'(y)},\qquad
\frac{d^2y}{dx^2}=-\frac{\phi''(y)}{[\phi'(y)]^3}.
$$

### 隐函数与对数求导

对 $F(x,y)=0$，把 $y$ 当成 $y(x)$ 求导：

$$
F_x+F_y y'=0,\qquad y'=-\frac{F_x}{F_y}\quad(F_y\ne0).
$$

在 $F$ 一阶连续可微等通常条件下，$F_y\ne0$ 也保证该点附近可以把曲线写成 $y(x)$。例如 $x^2+xy+y^2=3$ 给出

$$
2x+y+(x+2y)y'=0,\qquad
y'=-\frac{2x+y}{x+2y}.
$$

在 $(1,1)$ 处 $y'=-1$；再对已求得的一阶关系求导，得到

$$
2+2y'+2(y')^2+(x+2y)y''=0,
\qquad y''(1)=-\frac23.
$$

对变量幂 $y=u(x)^{v(x)}$，在 $u(x)>0$ 的区间上先取对数：

$$
\ln y=v\ln u,\qquad
y'=u^v\left(v'\ln u+v\frac{u'}u\right).
$$

因此 $(x^x)'=x^x(\ln x+1)$（$x>0$）。多个非零因子相乘相除时，对 $\ln\lvert y\rvert$ 求导也能把乘积化成求和。

### 参数方程：对谁求导，就除以谁的变化率

若 $x=\phi(t)$、$y=\psi(t)$，且 $\phi'(t)\ne0$，则

$$
\frac d{dx}=\frac1{\phi'(t)}\frac d{dt},\qquad
\frac{dy}{dx}=\frac{\psi'(t)}{\phi'(t)}.
$$

再用同一个算子一次，得到

$$
\frac{d^2y}{dx^2}
=\frac1{\phi'(t)}\frac d{dt}\left(\frac{\psi'(t)}{\phi'(t)}\right)
=\frac{\psi''(t)\phi'(t)-\psi'(t)\phi''(t)}{[\phi'(t)]^3}.
$$

::: note 例题｜摆线的一阶与二阶导数

设 $x=a(t-\sin t)$、$y=a(1-\cos t)$，$a>0$。当 $t\ne2k\pi$ 时，

$$
\frac{dy}{dx}=\frac{\sin t}{1-\cos t}=\cot\frac t2,
\qquad
\frac{d^2y}{dx^2}
=\frac{-\tfrac12\csc^2(t/2)}{a(1-\cos t)}
=-\frac1{4a\sin^4(t/2)}.
$$

分母的三次方来自“商求导出现二次方，再除一次 $x'(t)$”。$t=2k\pi$ 是参数速度同时为零的尖点，需要从曲线本身另行分析。
:::

### 高阶导数与 Leibniz 公式

高阶导数先找可重复结构：指数函数保持自身形状，三角函数按相位循环，多项式经过有限次求导后消失。

| 函数 | $n$ 阶导数 |
| --- | --- |
| $e^{kx}$ | $k^n e^{kx}$ |
| $\sin(kx+b)$ | $k^n\sin(kx+b+n\pi/2)$ |
| $\cos(kx+b)$ | $k^n\cos(kx+b+n\pi/2)$ |
| $(x+a)^{-1}$ | $(-1)^n n!/(x+a)^{n+1}$ |
| $\ln(x+a)$，$n\ge1$ | $(-1)^{n-1}(n-1)!/(x+a)^n$ |

乘积用 Leibniz 公式：

$$
(uv)^{(n)}=\sum_{k=0}^n\binom nk u^{(k)}v^{(n-k)}.
$$

::: note 例题｜多项式乘指数，只保留三项

对 $y=x^2e^{2x}$，$n\ge2$ 时，$x^2$ 只贡献零、一、二阶导数：

$$
\begin{aligned}
y^{(n)}
&=x^2\,2^ne^{2x}
+n(2x)2^{n-1}e^{2x}
+\binom n2\,2\,2^{n-2}e^{2x}\\
&=2^{n-2}e^{2x}\bigl(4x^2+4nx+n(n-1)\bigr).
\end{aligned}
$$

代入 $n=2$ 得 $e^{2x}(4x^2+8x+2)$，可以直接两次求导核对。
:::

高阶导数在特定点的值，还可以先看对称性。例如光滑奇函数在零点的偶数阶导数都为零，能省去很多展开。

### 微分、近似计算与切线

对一元可微函数，$\Delta y=f'(x)\Delta x+o(\Delta x)$。定义 $dx=\Delta x$、$dy=f'(x)dx$，微分就是增量的一阶线性部分。

若 $y=f(u)$、$u=g(x)$，则 $dy=f'(u)du$，而 $du=g'(x)dx$，得到 $dy=f'(u)g'(x)dx$。这就是一阶微分形式不变性：换了中间变量，表达式仍保留“外层导数乘内部微分”的形式。

例如 $\sqrt{4.04}$ 在 $x_0=4$ 附近的一阶近似为

$$
\sqrt{4.04}\approx2+\frac1{2\sqrt4}\cdot0.04=2.01.
$$

由于平方根图象向下弯，切线在曲线上方，这个近似略大于真值。切线与法线在有限斜率 $m=f'(x_0)$ 下分别写为

$$
y-y_0=m(x-x_0),\qquad
y-y_0=-\frac1m(x-x_0)\quad(m\ne0).
$$

当切线水平时，法线为 $x=x_0$；垂直切线可以通过参数曲线的切向量识别。

## 第三章　微分中值定理与导数的应用

### 四个结论怎样连起来

| 结论 | 条件 | 得到什么 |
| --- | --- | --- |
| Fermat 引理 | 内点取得局部极值，且该点可导 | $f'(x_0)=0$ |
| Rolle 定理 | $[a,b]$ 连续、$(a,b)$ 可导，$f(a)=f(b)$ | 某个 $\xi\in(a,b)$ 满足 $f'(\xi)=0$ |
| Lagrange 中值定理 | $[a,b]$ 连续、$(a,b)$ 可导 | $f(b)-f(a)=f'(\xi)(b-a)$ |
| Cauchy 中值定理 | $f,g$ 在闭区间连续、开区间可导 | $[f(b)-f(a)]g'(\xi)=[g(b)-g(a)]f'(\xi)$ |

Fermat 把极值连接到水平切线。Rolle 用相等端点保证内部出现水平切线。Lagrange 减去端点间的割线，便回到 Rolle。Cauchy 则把自变量的增量替换成另一个函数的增量。

证明 Lagrange 定理时构造

$$
F(x)=f(x)-f(a)-\frac{f(b)-f(a)}{b-a}(x-a).
$$

于是 $F(a)=F(b)=0$，由 Rolle 得到 $F'(\xi)=0$，整理就是结论。几何上，减去割线相当于把倾斜的弦“放平”。[OpenStax §4.4](https://openstax.org/books/calculus-volume-1/pages/4-4-the-mean-value-theorem)

对 Cauchy 定理，若进一步有 $g'(x)\ne0$，则 $g(b)\ne g(a)$，可以写成

$$
\frac{f(b)-f(a)}{g(b)-g(a)}=\frac{f'(\xi)}{g'(\xi)}.
$$

两边的导数必须取在同一个 $\xi$。分别对 $f$ 和 $g$ 使用 Lagrange，只能分别得到两个未必相同的中间点。

### 从局部导数得到单调、根与误差界

取任意 $x_1<x_2$，Lagrange 给出

$$
f(x_2)-f(x_1)=f'(\xi)(x_2-x_1).
$$

因此，区间内 $f'>0$ 推出严格递增，$f'\ge0$ 推出不减，$f'\equiv0$ 推出常数。严格递增函数的导数也可以在个别点为零，如 $x^3$。

若 $\lvert f'\rvert\le M$，则 $\lvert f(x_2)-f(x_1)\rvert\le M\lvert x_2-x_1\rvert$，这是用导数控制误差的通用形式。若 $f$ 在同一连通区间内有 $n+1$ 个不同零点，反复用 Rolle 能推出 $f^{(n)}$ 至少有一个零点，前提是各阶所需的连续与可导条件成立。

::: note 例题｜先证明存在，再证明唯一

对 $F(x)=x^3+2x-2$，有 $F(0)=-2$、$F(1)=1$，故 $(0,1)$ 内有根。又 $F'(x)=3x^2+2>0$，所以函数在整个实轴严格递增，实根唯一。

也可以反设有两个根：Rolle 将给出一个 $F'(\xi)=0$ 的点，与导数始终为正矛盾。
:::

驻点是 $f'=0$ 的点，是否为极值要继续看两侧导数符号：由正变负为极大，由负变正为极小。导数不变号的驻点可能只是水平穿过，如 $x^3$ 在零点。闭区间求最大最小值时，把内部驻点、不可导点与端点的函数值一起比较。

### 辅助函数的构造表

先把目标式识别成某个导数，再检查构造后的两个端点是否相等。

| 目标中出现的结构 | 候选辅助函数 $\Phi(x)$ | 求导后的结构 |
| --- | --- | --- |
| $f'+kf$ | $e^{kx}f(x)$ | $e^{kx}(f'+kf)$ |
| $xf'+nf$ | $x^nf(x)$ | $x^{n-1}(xf'+nf)$ |
| $f'-f\tan x$ | $f(x)\cos x$ | $\cos x(f'-f\tan x)$，在 $\cos x\ne0$ 处 |
| $f'g+fg'$ | $fg$ | $f'g+fg'$ |
| $f'g-fg'$ | $f/g$，$g\ne0$ | $(f'g-fg')/g^2$ |
| $f'-$ 常数斜率 | $f-$ 对应直线 | 把割线变为水平线 |

::: note 例题｜用乘积凑出目标导数

设 $f\in C[0,1]$，在 $(0,1)$ 可导，且 $f(1)=0$。要证明某点满足 $\xi f'(\xi)+3f(\xi)=0$，取 $\Phi(x)=x^3f(x)$。

由 $\Phi(0)=\Phi(1)=0$，Rolle 给出

$$
0=\Phi'(\xi)=\xi^2\bigl(\xi f'(\xi)+3f(\xi)\bigr).
$$

由于 $0<\xi<1$，除去 $\xi^2$ 得到目标式。$x^3$ 同时完成了两件事：求导后产生系数 $3$，并把左端点压成零。
:::

::: note 例题｜不等式也可以由中值定理读出

对 $x>0$，将 $f(t)=\ln t$ 用在 $[1,1+x]$ 上，存在 $\xi\in(1,1+x)$ 使 $\ln(1+x)=x/\xi$。于是

$$
\frac{x}{1+x}<\ln(1+x)<x.
$$

这种做法把函数值的比较转成导数 $1/t$ 在区间上的大小比较。
:::

## L’Hôpital’s Rule 与极限计算路线

### 基本法则与使用条件

对 $x\to a$、单侧趋近或趋于无穷的过程，若 $f,g$ 在对应去心区间可导，$g'\ne0$，且呈 $0/0$ 型，或 $\lvert g\rvert\to\infty$，再有

$$
\lim\frac{f'}{g'}=L
$$

存在于扩展实数中，则可推出 $\lim f/g=L$。期中最常用的是 $0/0$ 与 $\infty/\infty$ 两型。实际计算时每次求导后重新看表达式：化简、直接求极限，或再次验证法则条件。[OpenStax §4.8](https://openstax.org/books/calculus-volume-1/pages/4-8-lhopitals-rule)

这里计算的是 $f'/g'$，并非对整个 $f/g$ 使用商的求导公式。导数比没有极限时，原式可能仍有极限；例如

$$
\frac{x+\sin x}{x}=1+\frac{\sin x}{x}\to1
\quad(x\to+\infty),
$$

而导数比 $1+\cos x$ 振荡。

### 七类未定式的转化

| 类型 | 先做的变形 | 示例 |
| --- | --- | --- |
| $0/0$ | 恒等变形、等价代换或导数比 | $(x-\sin x)/x^3$ |
| $\infty/\infty$ | 提最高阶或导数比 | $\ln x/x$ |
| $0\cdot\infty$ | $fg=f/(1/g)$ 或 $g/(1/f)$ | $x\ln x$（$x\to0^+$） |
| $\infty-\infty$ | 通分、有理化、提公因式 | $1/x-1/\sin x$（$x\to0^+$） |
| $1^\infty$ | 计算 $v\ln u$，再取指数 | $(\cos x)^{1/x^2}$ |
| $0^0$ | 同上，实数变量幂取底数 $u>0$ | $x^x$（$x\to0^+$） |
| $\infty^0$ | 同上 | $x^{1/x}$（$x\to+\infty$） |

::: note 例题｜先代换一个因子，再用一次 L’Hôpital

$$
\lim_{x\to0}\frac{x-\sin x}{x^2\tan x}
=\lim_{x\to0}\frac{x-\sin x}{x^3}
=\lim_{x\to0}\frac{1-\cos x}{3x^2}
=\frac16.
$$

分母先用 $\tan x\sim x$ 降低复杂度，分子作为完整差式保留。求导一次后出现已经知道的二阶等价式。
:::

::: note 例题｜幂指型只计算指数部分

对 $x$ 充分接近零，$\cos x>0$。设 $y=(\cos x)^{1/x^2}$，则

$$
\ln y=\frac{\ln(\cos x)}{x^2}
\sim\frac{\cos x-1}{x^2}\to-\frac12.
$$

所以 $y\to e^{-1/2}$。同样，$x\to0^+$ 时 $\ln(x^x)=x\ln x$，将它改写为 $\ln x/(1/x)$，导数比为 $-x\to0$，从而 $x^x\to1$。
:::

### 怎样选方法

先检查定义域、趋近方向与直接代入的结果。出现根式差先有理化，出现三角差先考虑恒等式，出现乘除因子先读取主项，出现首项相消再提高精度。表达式仍是适合求导的基本未定式时使用 L’Hôpital；振荡项通常通过有界性和夹逼处理。

当 $x\to+\infty$，对任意固定 $p,q>0$、$a>1$，有

$$
\frac{(\ln x)^p}{x^q}\to0,\qquad
\frac{x^q}{a^x}\to0.
$$

这两条分别说明对数幂增长慢于正幂，正幂增长慢于指数。可以通过换元与反复 L’Hôpital 证明，也可用于快速判断增长主项。

## 极坐标专项：从识图到切线与面积

### 一个点的多种表示

以原点为极点、$x$ 正半轴为极轴，逆时针为正方向，极坐标与直角坐标的关系为

$$
x=r\cos\theta,\qquad y=r\sin\theta,\qquad r^2=x^2+y^2.
$$

取 $r\ge0$ 时，$r$ 是到极点的距离；允许负极径时，它表示沿角度 $\theta$ 的反方向取点。因此

$$
(r,\theta)\equiv(r,\theta+2k\pi)
\equiv(-r,\theta+(2k+1)\pi),\qquad k\in\mathbb Z.
$$

极点可由 $(0,\theta)$ 的任意角表示。对非极点，限制 $r>0,\theta\in[0,2\pi)$ 可得到唯一表示。

从 $(x,y)$ 反求角度时，$\tan\theta=y/x$ 只提供斜率，还要结合象限。例如 $(-1,\sqrt3)$ 的一个表示是 $(2,2\pi/3)$，也可以写成 $(-2,-\pi/3)$。数值计算可使用 $\operatorname{atan2}(y,x)$ 来保留象限信息。[OpenStax §7.3](https://openstax.org/books/calculus-volume-2/pages/7-3-polar-coordinates)

### 方程互化与对称性

将 $r=2a\cos\theta$ 两边乘以 $r$，得到 $x^2+y^2=2ax$，即 $(x-a)^2+y^2=a^2$。乘法变形后检查原点是否属于原曲线；原式含 $1/r$ 时，原点尤其需要单独核对。

| 在方程中尝试的替换 | 体现的几何对称 |
| --- | --- |
| $\theta\mapsto-\theta$，$r$ 不变 | 关于极轴，即 $x$ 轴对称 |
| $\theta\mapsto\pi-\theta$，$r$ 不变 | 关于 $y$ 轴对称 |
| $\theta\mapsto\theta+\pi$，或 $r\mapsto-r$ | 关于极点对称 |

替换后方程不变是方便的充分判据。因为坐标表示不唯一，某个替换检验失败时，还可以直接从曲线的点集判断。

### 常见曲线方程表

以下 $a,R,d,p>0$，玫瑰线参数 $n$ 为正整数。

| 曲线 | 代表方程 | 图象与参数范围 |
| --- | --- | --- |
| 过极点的射线 | $\theta=\alpha,r\ge0$ | 允许有符号 $r$ 后可描述整条直线 |
| 一般直线 | $r\cos(\theta-\alpha)=d$ | 对应 $x\cos\alpha+y\sin\alpha=d$ |
| 圆心为极点的圆 | $r=R$ | 一次描完用 $0\le\theta\le2\pi$ |
| 过极点、圆心 $(a,0)$ 的圆 | $r=2a\cos\theta$ | 取 $r\ge0$ 时用 $-\pi/2\le\theta\le\pi/2$ |
| 过极点、圆心 $(0,a)$ 的圆 | $r=2a\sin\theta$ | 取 $r\ge0$ 时用 $0\le\theta\le\pi$ |
| 心脏线 Cardioid | $r=a(1+\cos\theta)$ | 向右，$\theta=\pi$ 到达尖点；减号版本向左 |
| 双纽线 Lemniscate | $r^2=a^2\cos2\theta$ | 两叶沿 $x$ 轴；$\cos2\theta\ge0$ |
| 旋转后的双纽线 | $r^2=a^2\sin2\theta$ | 轴沿 $y=x$；$\sin2\theta\ge0$ |
| 玫瑰线 Rose | $r=a\cos n\theta$ 或 $a\sin n\theta$ | $n$ 奇数有 $n$ 瓣，偶数有 $2n$ 瓣 |
| Archimedean 螺线 | $r=a\theta$ | 常用 $\theta\ge0$，相邻圈径向间距 $2\pi a$ |
| 对数螺线 | $r=ae^{b\theta}$ | 每转一周极径乘 $e^{2\pi b}$ |

圆锥曲线统一式最好连同准线一起记。若极点是焦点，准线为 $x=d$，离心率为 $e>0$，在 $r\ge0$、$x<d$ 的分支上，焦点到点的距离等于到准线距离的 $e$ 倍：

$$
r=e(d-r\cos\theta),\qquad
r=\frac{ed}{1+e\cos\theta}.
$$

把 $p=ed$ 记作半通径，可写 $r=p/(1+e\cos\theta)$。$0<e<1$、$e=1$、$e>1$ 分别对应椭圆、抛物线、双曲线；双曲线完整曲线要同时检查绝对距离关系及另一分支。改变准线位置会改变分母正负号或把余弦换成正弦。

![四种极坐标曲线及一次描绘的参数范围](/images/calculus-midterm/polar-gallery.svg "圆、心脏线、双纽线与三叶玫瑰线；每幅图等比例显示横纵坐标")

### 极坐标求导就是参数求导

把 $r=r(\theta)$ 代入 $x=r\cos\theta$、$y=r\sin\theta$：

$$
x'=r'\cos\theta-r\sin\theta,\qquad
y'=r'\sin\theta+r\cos\theta.
$$

因此在 $x'\ne0$ 时，

$$
\frac{dy}{dx}=\frac{r'\sin\theta+r\cos\theta}
{r'\cos\theta-r\sin\theta}.
$$

切向量是 $(x',y')$。$y'=0,x'\ne0$ 时切线水平；$x'=0,y'\ne0$ 时切线垂直；两者都为零则继续考察更高阶或参数差商。

若 $r(\theta_0)=0,r'(\theta_0)\ne0$，切向量为 $r'(\theta_0)(\cos\theta_0,\sin\theta_0)$，所以穿过极点时的切线方向就是 $\theta_0$ 模 $\pi$。[^pole]

::: note 例题｜心脏线的切线

对 $r=a(1+\cos\theta)$，有 $r'=-a\sin\theta$。在 $\theta=\pi/2$ 时，$r=a,r'=-a$，切点为 $(0,a)$，$x'=-a,y'=-a$，斜率为 $1$，切线是 $y=x+a$。
:::

### 面积：确认描绘区间与重复次数

半径为 $r$、小角度为 $d\theta$ 的扇形面积是一半的半径平方乘角度，累加便得到

$$
A=\frac12\int_\alpha^\beta r(\theta)^2\,d\theta.
$$

选择参数范围时，让目标区域只被覆盖一次。允许有符号极径时也可以用这个公式，面积中的 $r^2$ 会消去符号；需要分析的是实际描绘的区域、方向和重复覆盖。对同一射线上的内外边界，$0\le r_{\mathrm{in}}\le r_{\mathrm{out}}$ 时，有

$$
A=\frac12\int_\alpha^\beta
\bigl(r_{\mathrm{out}}^2-r_{\mathrm{in}}^2\bigr)\,d\theta.
$$

两曲线交点先用统一坐标表示求解，再检查极点和不同角度表示同一点的情形。相交区域有时还需要按哪条曲线更靠内来分段。[OpenStax §7.4](https://openstax.org/books/calculus-volume-2/pages/7-4-area-and-arc-length-in-polar-coordinates)

::: note 例题｜心脏线的总面积

$r=a(1+\cos\theta)$ 在 $[0,2\pi]$ 描绘一次完整曲线，于是

$$
\begin{aligned}
A&=\frac{a^2}{2}\int_0^{2\pi}(1+2\cos\theta+\cos^2\theta)\,d\theta\\
&=\frac{a^2}{2}(2\pi+0+\pi)=\frac{3\pi a^2}{2}.
\end{aligned}
$$

这里用到 $\cos^2\theta=(1+\cos2\theta)/2$。
:::

::: note 例题｜玫瑰线的一瓣与整图

对 $r=a\sin3\theta$，$0\le\theta\le\pi/3$ 正好画出一瓣。面积为

$$
A_{\mathrm{petal}}
=\frac{a^2}{2}\int_0^{\pi/3}\sin^2(3\theta)\,d\theta
=\frac{\pi a^2}{12}.
$$

三瓣的总面积为 $\pi a^2/4$。若直接在 $[0,2\pi]$ 积分，三瓣被描绘两次，所得数值是总面积的两倍。
:::

作为几何微积分的扩充，弧长公式也能由参数曲线直接得到：

$$
ds=\sqrt{(dx)^2+(dy)^2}
=\sqrt{(r')^2+r^2}\,d\theta,\qquad
L=\int_\alpha^\beta\sqrt{r^2+(r')^2}\,d\theta.
$$

它要求按目标曲线段的一次描绘积分；心脏线一周的弧长由 $\sqrt{r^2+(r')^2}=2a\lvert\cos(\theta/2)\rvert$ 得到 $L=8a$。

## 自编练习：从选方法到完整解答

先判断每题需要保留到几阶，或需要构造什么函数，再展开解析。

### 练习一：四阶差式

求 $\displaystyle\lim_{x\to0}\frac{e^{x^2}-1-x^2}{1-\cos(x^2)}$。

::: details 展开解析
取 $u=x^2\to0$，分子 $e^u-1-u\sim u^2/2$，分母 $1-\cos u\sim u^2/2$，所以极限为 $1$。若只把 $e^{x^2}-1$ 换成 $x^2$，会丢掉四阶主项。
:::

### 练习二：连续与可导一起配平

设 $f(x)=(e^x-1)/x$（$x<0$），$f(0)=b$，$f(x)=1+cx$（$x>0$）。求使 $f$ 在零点可导的 $b,c$。

::: details 展开解析
连续先给出 $b=1$。左导数为

$$
\lim_{x\to0^-}\frac{(e^x-1)/x-1}{x}
=\lim_{x\to0^-}\frac{e^x-1-x}{x^2}=\frac12.
$$

右导数为 $c$，所以 $c=1/2$，并有 $f'(0)=1/2$。
:::

### 练习三：高阶导数只留两项

求 $y=xe^{3x}$ 的 $n$ 阶导数（$n\ge1$）。

::: details 展开解析
$x$ 的二阶导数为零，Leibniz 公式给出

$$
y^{(n)}=x\,3^ne^{3x}+n\,3^{n-1}e^{3x}
=3^{n-1}e^{3x}(3x+n).
$$

代入 $n=1$ 得 $e^{3x}(3x+1)$，与直接求导一致。
:::

### 练习四：参数曲线的切线和二阶导数

设 $x=t^2+1,y=t^3-t$，求 $t=1$ 处的切线及 $d^2y/dx^2$。

::: details 展开解析
切点 $(2,0)$，$x'=2t,y'=3t^2-1$，在 $t=1$ 时斜率为 $1$，切线 $y=x-2$。

$$
\frac{dy}{dx}=\frac32t-\frac1{2t},\qquad
\frac{d^2y}{dx^2}=\frac{\tfrac32+\tfrac1{2t^2}}{2t}.
$$

因此在 $t=1$ 时二阶导数也是 $1$。
:::

### 练习五：连续使用两次 Rolle

设 $f\in C[0,2]$，在 $(0,2)$ 二阶可导，且 $f(0)=1,f(1)=3,f(2)=5$。证明某个 $\xi\in(0,2)$ 满足 $f''(\xi)=0$。

::: details 展开解析
减去通过三点的直线，令 $g(x)=f(x)-(2x+1)$。于是 $g(0)=g(1)=g(2)=0$。在 $[0,1]$ 与 $[1,2]$ 分别用 Rolle，得到 $g'(\xi_1)=g'(\xi_2)=0$，且 $\xi_1<\xi_2$。

由于 $g$ 在 $(0,2)$ 二阶可导，$g'$ 在内部处处可导，从而在 $[\xi_1,\xi_2]$ 连续。再用 Rolle，得到 $g''(\xi)=0$。直线的二阶导数为零，故 $f''(\xi)=0$。
:::

### 练习六：对数后的相消

求 $\displaystyle\lim_{x\to0}\left(\frac{\sin x}{x}\right)^{1/x^2}$。

::: details 展开解析
底数在零点附近为正，取对数得到 $\ln(\sin x/x)/x^2$。由表中的复合等价式，$\ln(\sin x/x)\sim-x^2/6$，于是极限为 $e^{-1/6}$。

如果先把底数直接代换成 $1$，会失去底数偏离 $1$ 的二阶量；这个小偏离乘上 $1/x^2$ 后留下非零结果。
:::

### 练习七：极坐标圆与面积

把 $r=4\sin\theta$ 化为直角坐标方程，并求所围面积。

::: details 展开解析
乘以 $r$ 得 $x^2+y^2=4y$，所以 $x^2+(y-2)^2=4$，是半径 $2$ 的圆。在 $[0,\pi]$ 上 $r\ge0$ 且曲线恰好描绘一次，

$$
A=\frac12\int_0^\pi16\sin^2\theta\,d\theta=4\pi,
$$

与圆面积 $\pi\cdot2^2$ 一致。
:::

### 练习八：极点处的切线

求 $r=2\sin2\theta$ 在 $\theta=0$ 对应分支的切线。

::: details 展开解析
$r(0)=0,r'(0)=4$。切向量为 $(4,0)$，所以该分支在极点的切线是 $y=0$。同一几何点可能由其他角度到达，并对应另一条切线；这里明确分析 $\theta=0$ 的分支。
:::

## 复习时怎样把这些知识串起来

第一遍围绕四个核心问题：极限怎样证明存在，等价代换怎样保留主项，导数怎样实现线性近似，中值定理怎样把局部信息推广到区间。第二遍按题型做交叉练习：在分段函数里同时用连续与导数定义，在极限题里组合恒等变形与 L’Hôpital，在极坐标题里同时用参数求导和对称性。

| 题目里最醒目的信号 | 第一笔可以写什么 |
| --- | --- |
| 分段函数的连接点 | 左极限、右极限、点值；随后计算两侧差商 |
| 两个首项相同的量相减 | 找完整差式的第一个非零主项 |
| 指数也含变量 | $u^v=\exp(v\ln u)$ |
| 递推数列 | 猜候选界，归纳证明，再证单调 |
| 多项式乘指数或三角函数 | Leibniz 公式，只保留有限项 |
| 证明“存在一个导数满足关系的点” | 将目标式凑成辅助函数的导数 |
| 证明根唯一 | 连续性给存在，单调或 Rolle 给至多一个 |
| 极坐标面积 | 先确定一段怎样描出一次目标区域 |

## 资料与扩充来源

课程结构依据《高等数学（上册）期中全景复习笔记与核心考点深度提纲（含极坐标专项）》整理。正文重写概念讲解与推导，自编练习用于串联各模块；高阶等价式、双曲函数及极坐标弧长为扩充内容。

- [OpenStax Calculus Volume 1：极限与微分学](https://openstax.org/details/books/calculus-volume-1)。
- [OpenStax Calculus Volume 2：参数曲线与极坐标](https://openstax.org/details/books/calculus-volume-2)。
- [NIST DLMF Chapter 4：Elementary Functions](https://dlmf.nist.gov/4)，用于核对初等函数展开及其系数。

[^scope]: 期中主线到 Taylor 公式之前。表中的高阶结果可先当作待证明的速查结论，再用恒等变形或 L’Hôpital 逐项推导；任意阶模板用于衔接后续 Taylor 公式。
[^flat]: 第一个非零导数法适用于确有这种有限阶导数的情形。扩充例子：$f(u)=e^{-1/u^2}$（$u\ne0$），补 $f(0)=0$ 后各阶导数在零点都为零，却在非零点为正，而且比任意固定正幂都更快趋于零。
[^pole]: 若 $r$ 在零点附近有更高阶的首个非零项，也可直接从 $x(\theta),y(\theta)$ 的首个非零增量读出方向；心脏线尖点便属于需要继续展开的情形。
