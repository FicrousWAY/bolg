---
title: "大学物理（下）期中复习：从机械振动到波动光学"
date: "2026-11-12 10:59:53 +08:00"
category: 课程
tags:
  - 大学物理
  - 期中复习
  - 机械振动
  - 机械波
  - 波动光学
description: "串联第九至十一章：简谐振动、阻尼与共振、行波与驻波、Doppler 效应、光的干涉衍射与偏振。含适用条件、公式推导、21 个例题、14 组闭卷自测和六张示意图。"
aigcRate: 100
aigcModels:
  - openai
source: codex
verified: false
---

振动看一个点怎样随时间往复，波动看这种状态怎样传到别处，波动光学再用相位解释光的明暗与偏振。三章共同的语言是 **振幅、频率和相位**。把这三件事辨清，许多看似分散的公式就能从同一条思路推出来。

本文依据本次课程导出整理，范围为**第九章机械振动、第十章机械波、第十一章波动光学**。从基本定义开始，逐步讲到建模、推导、图像判断和综合计算；例题与闭卷练习均为重新编写。[^scope]

::: info 怎样使用这篇长笔记
第一遍顺着正文建立物理图景，遇到例题先自己列式；第二遍从“易错点对照”反查条件；最后闭卷完成文末自测。文中标为“补充”的推导帮助理解，不代表老师额外划定的考试范围。
:::

## 复习地图：从一个点到一片波场

| 课程模块 | 核心问题 | 复习完成后应能做到 |
| --- | --- | --- |
| 简谐振动 | 什么力产生怎样的往复运动？ | 建立微分方程，由初始条件求振幅和初相，读运动图像 |
| 振动合成 | 两个周期运动叠在一起会怎样？ | 算同频合振幅，辨拍频，判椭圆与转向 |
| 阻尼与受迫振动 | 能量怎样损失、怎样补入？ | 区分三类阻尼，读共振曲线，分清三种频率 |
| 简谐行波 | 波源的状态何时传到某点？ | 从传播延迟写波函数，区分波速与质元速度 |
| 波能量与干涉 | 能量怎样传播，相位怎样叠加？ | 算波强与相位差，判断加强、减弱和驻波 |
| Doppler Effect | 谁在改变波长，谁在改变遇波速度？ | 正确选介质参考系，计算一次与反射两次频移 |
| 光的干涉 | 两束光为何在这里亮、在那里暗？ | 算光程与反射相位，处理双缝、薄膜、劈尖和牛顿环 |
| 光的衍射 | 有限孔径为何让光展开？ | 求单缝暗纹、光栅缺级与谱线数、圆孔分辨极限 |
| 光的偏振 | 电场沿哪个方向振动？ | 用 Malus 定律算级联透射，判断 Brewster 角与双折射 |

**Interpretation:** 解题时先画图、定正方向、写相位，再代入特定公式。很多错题其实出在“没有说明比较哪两束波”或“把不同条件下的公式拼到一起”。

### 全文符号约定

| 符号 | 意义与单位 | 容易混淆的对象 |
| --- | --- | --- |
| $A$、$x$、$y$ | 振幅、位移，$\mathrm m$ | 振幅非负，位移可正可负 |
| $\nu$、$T$、$\omega$ | 频率 $\mathrm{Hz}$、周期 $\mathrm s$、角频率 $\mathrm{rad/s}$ | $\omega=2\pi\nu=2\pi/T$ |
| $k_s$ | 弹簧劲度系数，$\mathrm{N/m}$ | 不与角波数 $k$ 混用 |
| $k=2\pi/\lambda$ | 角波数，$\mathrm{rad/m}$ | 不与干涉级次 $m$ 混用 |
| $u$、$v_y$ | 波速、质元振动速度，$\mathrm{m/s}$ | 一个描述波形传播，一个描述物质运动 |
| $\lambda_0$、$\lambda$ | 真空光波长、所在介质的波长 | 光学公式中优先保留 $\lambda_0$ 与折射率 $n$ |
| $h$、$a$、$d$ | 膜厚、缝宽、缝间距或光栅常数 | $d$ 是相邻缝中心距离，光栅中 $d=a+b$ |
| $D_s$、$D_a$、$f$ | 缝屏距、圆孔直径、透镜焦距 | 三个长度在公式中承担不同作用 |
| $I$、$\mathcal E$ | 平均波强、机械能 | 光强正比于电场振幅平方 |

三角函数的相位用弧度。机械波中的 $\lambda$ 是介质内实际波长；光在均匀非色散近似介质中满足 $\lambda=\lambda_0/n$。

## 第九章　机械振动

### 1. 从平衡位置建立简谐振动方程

简谐振动（Simple Harmonic Motion，SHM）的判据是

$$
\ddot x+\omega_0^2x=0,
\qquad \omega_0>0.
$$

即加速度与偏离**平衡位置**的位移成正比，方向相反。运动周期性只是必要的外观特征，不能据此断言是简谐振动。

对理想水平弹簧振子，$F=-k_sx$，代入 Newton 第二定律：

$$
m\ddot x=-k_sx
\quad\Longrightarrow\quad
\omega_0=\sqrt{\frac{k_s}{m}},
\qquad T=2\pi\sqrt{\frac m{k_s}}.
$$

竖直弹簧要先找静平衡点。设向下为正，弹簧相对原长的伸长为 $z$，则 $m\ddot z=mg-k_sz$。静平衡伸长 $z_e=mg/k_s$，令 $x=z-z_e$，得到相同的 SHM 方程。重力改变平衡位置；在线性弹簧模型中不改变振动周期。[OpenStax §15.1](https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion)

单摆的切向方程是

$$
ml\ddot\theta=-mg\sin\theta.
$$

在 $|\theta|\ll1$、用弧度度量时，$\sin\theta\approx\theta$，于是

$$
\ddot\theta+\frac gl\theta=0,
\qquad T\approx2\pi\sqrt{\frac lg}.
$$

这是小角度近似，大幅摆动的周期会依赖振幅。对其他系统，先求平衡点 $x_e$，再在附近展开净力：$F(x)\approx F'(x_e)(x-x_e)$。若 $F'(x_e)<0$，令 $k_{\mathrm{eff}}=-F'(x_e)$，小振动近似为 $\omega_0=\sqrt{k_{\mathrm{eff}}/m}$。这是本篇对 SHM 建模的补充推导。

::: note 例题 1｜竖直弹簧中什么是振幅
质量 $m=0.20\,\mathrm{kg}$，$k_s=80\,\mathrm{N/m}$，将物体从静平衡位置再向下拉 $3.0\,\mathrm{cm}$ 后由静止释放，取 $g=9.8\,\mathrm{m/s^2}$。

静平衡伸长为 $2.45\,\mathrm{cm}$，但振幅是相对平衡位置的 $A=3.0\,\mathrm{cm}$。取向下为正、释放时 $t=0$：

$$
\omega_0=20\,\mathrm{rad/s},\qquad
x=0.030\cos(20t)\,\mathrm m,
\qquad T=0.314\,\mathrm s.
$$

相对弹簧原长的伸长是 $z=0.0245+x$，不能把 $z$ 直接代入 $\ddot z=-\omega_0^2z$。
:::

### 2. 位移、速度、加速度与相位

统一使用余弦形式：

$$
x=A\cos\psi,\qquad \psi=\omega t+\varphi,
$$

$$
v=-\omega A\sin\psi,
\qquad a=-\omega^2A\cos\psi=-\omega^2x.
$$

$A$ 决定运动范围；$\omega$ 是**相位每秒增加多少弧度**；$\varphi$ 决定零时刻处于哪一个状态。频率 $\nu$ 才是每秒全振动次数。[^phase]

| 位置或状态 | 速度 | 加速度 | 接下来如何运动 |
| --- | --- | --- | --- |
| $x=+A$ | $v=0$ | $a=-\omega^2A$ | 转向负方向 |
| $x=0$，向负方向经过 | $v=-\omega A$ | $a=0$ | 继续向负端点 |
| $x=-A$ | $v=0$ | $a=+\omega^2A$ | 转向正方向 |
| $x=0$，向正方向经过 | $v=+\omega A$ | $a=0$ | 继续向正端点 |

用余弦统一表示，$v$ 的相位比 $x$ 超前 $\pi/2$，$a$ 与 $x$ 相差 $\pi$。位移为零不表示静止，速度为零也不表示没有加速度。

### 3. 初始条件：不能只按计算器的反正切键

在 $t=0$：

$$
x_0=A\cos\varphi,\qquad
v_0=-\omega A\sin\varphi.
$$

平方相加得

$$
A=\sqrt{x_0^2+\left(\frac{v_0}{\omega}\right)^2}.
$$

再由 $\cos\varphi=x_0/A$、$\sin\varphi=-v_0/(\omega A)$ 定象限。若使用数值工具，可写

$$
\varphi=\operatorname{atan2}\left(-\frac{v_0}{\omega},x_0\right).
$$

这里 $\operatorname{atan2}(Y,X)$ 同时利用两个坐标的符号，避免 $\tan\varphi=-v_0/(\omega x_0)$ 丢失象限；$A=0$ 的静止情形无须定义初相。

::: note 例题 2｜由位移和速度反求初相
已知 $\omega=10\,\mathrm{rad/s}$，$x_0=-0.030\,\mathrm m$，$v_0=+0.40\,\mathrm{m/s}$。

$$
A=\sqrt{0.030^2+0.040^2}=0.050\,\mathrm m.
$$

$\cos\varphi=-0.6$、$\sin\varphi=-0.8$，所以可选 $\varphi=-2.214\,\mathrm{rad}$。回代得到 $x(0)=-0.030\,\mathrm m$、$v(0)=+0.40\,\mathrm{m/s}$，两个初始条件都成立。
:::

### 4. 旋转矢量、时间间隔与图像

把长度 $A$ 的辅助矢量以角速度 $\omega$ 逆时针旋转，它在水平轴上的投影就是 $x=A\cos\psi$。这个矢量用于表示相位；真实物体依然沿直线运动。矢端**水平坐标的一阶、二阶时间导数**对应 $v$ 和 $a$，不能把匀速转动的角加速度当成振子的加速度。

![旋转矢量与简谐振动的四个状态](/images/physics-midterm/phasor.svg "沿圆周按相位前进，再投影到水平轴；相同位移通常对应两个不同的速度方向")

计算到达某位置的时间时，先确定相位及方向：

$$
\Delta t=\frac{\Delta\psi}{\omega},\qquad \Delta\psi>0.
$$

“第一次到达”“沿正方向经过”“第二次经过”等词都决定选哪个相位。相同位移的两个状态通常不等价；周期要求位移和速度同时恢复。

::: note 例题 3｜从平衡点到半振幅
质点从 $x=0$ 沿正方向运动，求第一次到 $x=A/2$ 的时间。

起始相位可取 $-\pi/2$，终相为 $-\pi/3$，相位前进 $\pi/6$，所以 $\Delta t=T/12$。若从正端点出发第一次到同一位置，则相位从 $0$ 到 $\pi/3$，时间变为 $T/6$。
:::

读 $x-t$ 图时，纵坐标是位移，切线斜率是速度，曲线的凹凸对应加速度。两次相邻过零之间通常是 $T/2$；两次同方向过零之间才是 $T$。从 SHM 方程还能得到相图

$$
x^2+\frac{v^2}{\omega^2}=A^2,
\qquad v^2=\omega^2(A^2-x^2).
$$

它给出速度大小，方向仍须由运动过程判定。

### 5. 能量：以平衡位置为势能参考点

对理想弹簧振子（竖直情形取弹性势能与重力势能之和并减去常数）：

$$
E_p=\frac12k_sx^2=\frac12k_sA^2\cos^2\psi,
$$

$$
E_k=\frac12mv^2=\frac12k_sA^2\sin^2\psi,
\qquad \mathcal E=E_k+E_p=\frac12k_sA^2.
$$

能量正比于 $A^2$。动能和势能相互转化，各自以 $T/2$ 为周期变化，一个振动周期上的平均值相等：

$$
\langle E_k\rangle=\langle E_p\rangle=\frac14k_sA^2=\frac{\mathcal E}{2}.
$$

::: note 例题 4｜能量比例反求位置
若 $E_k=3E_p$，则 $\mathcal E=4E_p$，所以 $x^2/A^2=1/4$，即 $x=\pm A/2$。此时 $|v|=\sqrt3\,\omega A/2$。只给能量比例不能决定位置正负和速度方向。
:::

### 6. 同方向同频率合成：把初相放进矢量里

设 $x_j=A_j\cos(\omega t+\varphi_j)$，则

$$
x=x_1+x_2=A\cos(\omega t+\varphi),
$$

$$
A^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi,
\qquad \Delta\varphi=\varphi_2-\varphi_1.
$$

合初相由

$$
C=\sum_j A_j\cos\varphi_j,\qquad
S=\sum_j A_j\sin\varphi_j,
\qquad A=\sqrt{C^2+S^2},\quad\varphi=\operatorname{atan2}(S,C)
$$

确定。这也适用于多个同频振动。$A=0$ 时合运动静止，不再谈合初相。

同相时 $A=A_1+A_2$；反相时 $A=|A_1-A_2|$。**反相不一定完全抵消**，还要 $A_1=A_2$。

::: note 例题 5｜合振幅不能直接相加
$x_1=0.030\cos(\omega t)$、$x_2=0.040\cos(\omega t+\pi/2)$，单位为米。

$C=0.030$、$S=0.040$，所以 $A=0.050\,\mathrm m$、$\varphi=0.9273\,\mathrm{rad}$。合运动为 $0.050\cos(\omega t+0.9273)$，而不是振幅 $0.070\,\mathrm m$ 的振动。
:::

### 7. 频率接近产生拍：分清有符号包络与拍频

对等振幅、初相相同的两振动，和差化积给出

$$
x=2A\cos\left(\frac{\omega_1-\omega_2}{2}t\right)
\cos\left(\frac{\omega_1+\omega_2}{2}t\right).
$$

当 $|\omega_1-\omega_2|\ll(\omega_1+\omega_2)/2$ 时，快振动被慢包络调制。实际振幅为

$$
A_{\mathrm{env}}=2A\left|\cos\frac{\Delta\omega t}{2}\right|,
\qquad \nu_b=|\nu_1-\nu_2|,
\qquad T_b=\frac1{\nu_b}.
$$

绝对值使包络的正峰、负峰都成为一次“最响”，因此拍频不是频差的一半。两振动振幅不相等时仍会强弱交替，但最低振幅为 $|A_1-A_2|$，不一定降到零。频率不同的合运动一般不再是单一频率的 SHM。

例如 $250\,\mathrm{Hz}$ 与 $254\,\mathrm{Hz}$ 产生每秒 $4$ 次拍，拍周期 $0.25\,\mathrm s$。

### 8. 垂直振动合成：轨迹与转向都要会判断

设

$$
x=A_x\cos\psi,\qquad y=A_y\cos(\psi+\delta).
$$

由 $y/A_y=(x/A_x)\cos\delta-\sin\psi\sin\delta$ 消去 $\psi$：

$$
\frac{x^2}{A_x^2}+\frac{y^2}{A_y^2}
-\frac{2xy}{A_xA_y}\cos\delta=\sin^2\delta.
$$

| 相位差 $\delta$ | 轨迹 | 方向（$x$ 向右、$y$ 向上） |
| --- | --- | --- |
| $0$ | $y=(A_y/A_x)x$，直线段 | 往返运动 |
| $\pi$ | $y=-(A_y/A_x)x$，直线段 | 往返运动 |
| $+\pi/2$ | 坐标轴为主轴的椭圆 | 顺时针 |
| $-\pi/2$ | 同样的椭圆 | 逆时针 |
| $\pm\pi/2$ 且 $A_x=A_y$ | 圆 | 按相位差判定 |
| 其他非退化相位差 | 一般椭圆 | 看某一时刻的速度 |

最可靠的转向判断是取 $\psi=0$：此时 $x=A_x$，$v_y=-\omega A_y\sin\delta$。右端点向下就是顺时针，向上就是逆时针；不要只凭椭圆方程猜方向。

不同频率形成 Lissajous 图形。若 $\nu_x:\nu_y=p:q$，其中 $p,q$ 为互质正整数，则经过共同周期 $T_c=p/\nu_x=q/\nu_y$ 后轨迹闭合；频率比无理时不会精确闭合。例如 $x=A\cos(2\Omega t)$、$y=B\cos(3\Omega t+\delta)$，在 $T_c=2\pi/\Omega$ 内，横向完成两次、纵向完成三次，轨迹闭合。用切点数反推频率比需要说明计数方向，并排除重合与退化图形；遇到这种题先写参数方程或在一个共同周期内数 $x,y$ 各完成多少次振动。

### 9. 阻尼振动：回复力仍在，机械能持续减少

线性黏滞阻力 $F_d=-\gamma\dot x$ 下，

$$
m\ddot x+\gamma\dot x+k_sx=0
\quad\Longleftrightarrow\quad
\ddot x+2\beta\dot x+\omega_0^2x=0,
\qquad \beta=\frac\gamma{2m}.
$$

特征根为 $r=-\beta\pm\sqrt{\beta^2-\omega_0^2}$。

| 类型 | 判据 | 解的形式与物理意义 |
| --- | --- | --- |
| 欠阻尼 | $0<\beta<\omega_0$ | $x=A_0e^{-\beta t}\cos(\omega_dt+\varphi)$，$\omega_d=\sqrt{\omega_0^2-\beta^2}$，振荡并衰减 |
| 临界阻尼 | $\beta=\omega_0$ | $x=(C_1+C_2t)e^{-\beta t}$，不持续振荡 |
| 过阻尼 | $\beta>\omega_0$ | 两个负实根对应指数项的线性组合，不持续振荡 |

欠阻尼的准周期 $T_d=2\pi/\omega_d>T_0$。同向相邻峰的振幅比给出对数减量

$$
\ln\frac{A_n}{A_{n+1}}=\beta T_d.
$$

机械能变化率可以直接用方程推出：

$$
\frac{\mathrm d\mathcal E}{\mathrm dt}
=\dot x(m\ddot x+k_sx)=-\gamma\dot x^2\le0.
$$

弱阻尼下，周期平均能量近似按 $e^{-2\beta t}$ 衰减；瞬时机械能一般不能简单写成一个常系数乘 $e^{-2\beta t}$。临界阻尼常用于快速复位设计，“最快返回”是在指定初始条件和比较范围下的工程概括，不应理解为任意初态下都严格不越过平衡点。[OpenStax §15.5](https://openstax.org/books/university-physics-volume-1/pages/15-5-damped-oscillations)

::: note 例题 6｜从衰减测阻尼
若准周期为 $0.50\,\mathrm s$，连续两个同向峰的幅度分别为 $4.0$ 与 $3.0\,\mathrm{cm}$，则

$$
\beta=\frac{\ln(4/3)}{0.50}=0.5754\,\mathrm{s^{-1}},
\qquad \omega_d=4\pi\,\mathrm{rad/s}.
$$

再由 $\omega_0=\sqrt{\omega_d^2+\beta^2}$ 得固有角频率约 $12.580\,\mathrm{rad/s}$。
:::

### 10. 受迫振动与共振：三种频率不能混为一谈

外力 $F_0\cos\Omega t$ 驱动系统：

$$
\ddot x+2\beta\dot x+\omega_0^2x=\frac{F_0}{m}\cos\Omega t.
$$

完整解是衰减的自由振动与稳态响应之和。$\beta>0$ 时，经过足够长时间，留下

$$
x=A(\Omega)\cos(\Omega t-\eta),
$$

$$
A(\Omega)=\frac{F_0/m}
{\sqrt{(\omega_0^2-\Omega^2)^2+4\beta^2\Omega^2}},
\qquad
\eta=\operatorname{atan2}(2\beta\Omega,\omega_0^2-\Omega^2).
$$

稳态频率等于**外力频率 $\Omega$**；$\omega_0$ 是无阻尼固有频率；$\omega_d$ 是欠阻尼自由振动频率。$\Omega\ll\omega_0$ 时位移接近同相，$\Omega=\omega_0$ 时落后 $\pi/2$，$\Omega\gg\omega_0$ 时接近反相。[OpenStax §15.6](https://openstax.org/books/university-physics-volume-1/pages/15-6-forced-oscillations)

**补充推导：** 对振幅分母的平方求导：

$$
\frac{\mathrm d}{\mathrm d\Omega}
\left[(\omega_0^2-\Omega^2)^2+4\beta^2\Omega^2\right]
=4\Omega(\Omega^2-\omega_0^2+2\beta^2).
$$

故非零频率处的**位移共振**峰满足

$$
\Omega_r=\sqrt{\omega_0^2-2\beta^2},
\qquad \beta<\frac{\omega_0}{\sqrt2}.
$$

达到或超过这个阻尼阈值后，不再有非零频率处的位移共振峰。品质因数 $Q=\omega_0/(2\beta)$，弱阻尼时 $Q$ 大、共振峰尖。速度振幅 $\Omega A$ 和平均吸收功率的峰值位于 $\Omega=\omega_0$；“共振发生在哪里”必须先说明比较的是哪个量。

例如 $\omega_0=10\,\mathrm{rad/s}$、$\beta=2\,\mathrm{s^{-1}}$ 时，$\omega_d=\sqrt{96}=9.798$、$\Omega_r=\sqrt{92}=9.592\,\mathrm{rad/s}$，$Q=2.5$，三者数值不同。

## 第十章　机械波

### 1. 波传的是状态，质元在原地附近振动

机械波需要扰动源，以及能通过相互作用传递扰动的介质。横波的振动方向垂直于传播方向，纵波的振动方向平行于传播方向。流体内部不能支持静态剪切弹性，通常不传播体横向剪切波；**水面波不能因此被排除**，它是受重力、表面张力等影响的表面波，质点运动也通常不是纯横向直线振动。

在介质和传播模式确定的线性非色散近似下，

$$
u=\lambda\nu=\frac\lambda T,
\qquad k=\frac{2\pi}{\lambda},\qquad u=\frac\omega k.
$$

注意左式中的 $u$ 表示波速。周期性波跨越静止介质界面时，频率保持连续，波速和波长可改变。若介质有色散，波速还可能依赖频率，不能说“任何波的速度都与频率无关”。

几个模型要区分：

$$
u_{\mathrm{string}}=\sqrt{\frac{F_T}{\mu}},
\qquad u_{\mathrm{fluid}}=\sqrt{\frac B\rho},
\qquad u_{\mathrm{rod}}\approx\sqrt{\frac Y\rho}.
$$

这里第一项的 $u_{\mathrm{string}}$ 是绳波速度，$F_T$ 为张力、$\mu$ 为线密度；$B$ 为流体体积模量，$Y$ 为细长杆的 Young 模量。$\sqrt{Y/\rho}$ 对应细长杆中的伸缩波近似，不能套到一般三维无限固体的所有纵波。后续题目若直接给 $u$，优先使用题设。

### 2. 用传播延迟建立波函数

波源在 $x=0$ 作 $y(0,t)=A\cos(\omega t+\varphi)$。沿 $+x$ 传播时，到 $x$ 点需 $x/u$，所以

$$
y(x,t)=y\left(0,t-\frac xu\right)
=A\cos\left[\omega\left(t-\frac xu\right)+\varphi\right]
=A\cos(\omega t-kx+\varphi).
$$

沿 $-x$ 传播则为

$$
y(x,t)=A\cos(\omega t+kx+\varphi).
$$

更通用地，若已知 $x=x_0$ 处的振动方程 $g(t)$：沿 $+x$ 传播写 $g(t-(x-x_0)/u)$；沿 $-x$ 传播写 $g(t+(x-x_0)/u)$。若波从有限时刻才开始，必须另加“波前已到达”的范围，不能把持续行波公式延伸到尚未受扰动的区域。

::: tip 判断传播方向的可靠方法
令相位为常数。$\omega t-kx+\varphi=C$ 给出 $\mathrm dx/\mathrm dt=+\omega/k$；$\omega t+kx+\varphi=C$ 给出负速度。写成 $\cos(kx-\omega t)$ 也仍然是向右传播，不能只盯某个负号。
:::

::: note 例题 7｜已知某点振动方程写整列波
$x_0=0.30\,\mathrm m$ 处有 $y=0.020\cos(4\pi t+\pi/3)\,\mathrm m$，波沿 $+x$ 以 $2.0\,\mathrm{m/s}$ 传播。

$$
y(x,t)=0.020\cos\left[4\pi\left(t-\frac{x-0.30}{2.0}\right)+\frac\pi3\right]\,\mathrm m.
$$

$\nu=2.0\,\mathrm{Hz}$、$\lambda=u/\nu=1.0\,\mathrm m$。令 $x=0.30$ 就恢复原振动方程，这是写完后的第一项检查。
:::

### 3. 波形图与振动图：先看横轴是什么

| 图像 | 固定什么 | 横轴 | 斜率含义 |
| --- | --- | --- | --- |
| 振动图 $y-t$ | 某一个质元 $x=x_0$ | 时间 | $\partial y/\partial t=v_y$ |
| 波形图 $y-x$ | 某一个时刻 $t=t_0$ | 空间 | $\partial y/\partial x$，形变率 |

对右行波 $y=F(x-ut)$，链式法则给出

$$
v_y=\frac{\partial y}{\partial t}
=-u\frac{\partial y}{\partial x}.
$$

左行波则是 $v_y=+u\,\partial y/\partial x$。因此右行波上“上坡点向下、下坡点向上”，左行波反过来。对简谐波还有 $a_y=-\omega^2y$：图像在平衡线上方，质元加速度就向下，与传播方向无关。

![同一右行波在两个时刻的波形以及质元的运动](/images/physics-midterm/traveling-wave.svg "整条波形向右移动；固定位置的质元只改变纵向位移，不能跟着波峰向右走")

::: note 例题 8｜从波函数求三种“速度”
波为 $y=0.010\cos(20\pi t-5\pi x+\pi/2)\,\mathrm m$，$x$ 用米、$t$ 用秒。

$$
A=0.010\,\mathrm m,\quad \nu=10\,\mathrm{Hz},\quad
\lambda=0.40\,\mathrm m,\quad u=4.0\,\mathrm{m/s}.
$$

质元最大振速为 $\omega A=0.20\pi=0.6283\,\mathrm{m/s}$。原点在 $t=0$ 的 $v_y=-0.6283\,\mathrm{m/s}$、$a_y=0$。波形传播速度 $4.0\,\mathrm{m/s}$ 与质元的最大、瞬时振速是不同量。
:::

若只有一张波形图，能读出振幅与波长，却不能单独决定频率和传播方向；需要波速、第二时刻的波形或某点运动方向等补充信息。两张相隔 $\Delta t$ 的周期波形还存在“平移了整数个波长”的多解，需结合题设选择。

### 4. 波动方程与相位差

**补充推导：** 对 $y=F(x\mp ut)$ 求二阶偏导可验证

$$
\frac{\partial^2y}{\partial t^2}
=u^2\frac{\partial^2y}{\partial x^2}.
$$

这是理想一维非色散波的波动方程；$y=A\cos(\omega t-kx+\varphi)$ 是它的一个解。教材有时也把具体波函数称作“波动方程”，做推导题时要区分二者。

右行简谐波的相位 $\Phi=\omega t-kx+\varphi$，于是

$$
\Phi(x_2,t_2)-\Phi(x_1,t_1)
=\omega(t_2-t_1)-k(x_2-x_1).
$$

同一点比较两个时刻：$\Delta\Phi=\omega\Delta t$；同一时刻比较两点：$\Delta\Phi=-k\Delta x$。相差整波长的点同相，相差半波长的点反相。问“超前多少”时，要明确谁减谁，不能只给相位差的绝对值。

### 5. 行波能量：势能看相邻质元的相对形变

孤立弹簧振子的势能取决于自己的位移；连续介质的形变能取决于相邻位置的**位移差**。以张紧细绳为例，每单位平衡长度的动能和势能分别是

$$
\varepsilon_k=\frac12\mu y_t^2,
\qquad \varepsilon_p=\frac12F_T y_x^2,
$$

其中 $y_t=\partial y/\partial t$、$y_x=\partial y/\partial x$。绳形变能可由 $\mathrm d\ell\approx[1+(y_x)^2/2]\mathrm dx$ 推出；$u^2=F_T/\mu$。

对单向简谐行波，$y_t=-uy_x$，故

$$
\varepsilon_k=\varepsilon_p
=\frac12\mu\omega^2A^2\sin^2\Phi,
\qquad
\varepsilon=\mu\omega^2A^2\sin^2\Phi.
$$

此时波峰、波谷的斜率和速度都为零，局部这两项能量都为零；经过平衡位置时二者同时最大。**这是理想单向行波的局部结论，不能推广到任意叠加波或驻波。**[OpenStax §16.4](https://openstax.org/books/university-physics-volume-1/pages/16-4-energy-and-power-of-a-wave)

理想弹性介质中的对应体积能量密度及平均波强为

$$
w=\rho\omega^2A^2\sin^2\Phi,
\qquad \overline w=\frac12\rho\omega^2A^2,
\qquad I=\overline wu=\frac12\rho u\omega^2A^2.
$$

细绳的平均功率则为 $\overline P=\tfrac12\mu u\omega^2A^2$。量纲分别是 $I:\mathrm{W/m^2}$ 和 $P:\mathrm W$，不可把线密度 $\mu$ 与体密度 $\rho$ 混用。

同一介质、同一频率下 $I\propto A^2$。无吸收的球面波总功率 $P=4\pi r^2I$ 守恒，因此 $I\propto r^{-2}$、$A\propto r^{-1}$；这由球面面积增长推出，平面波不必有相同的几何衰减。

::: note 例题 9｜振幅变化与强度变化
同一非色散介质中，第二列波的位移振幅为第一列的两倍、频率为三倍，则 $I_2/I_1=2^2\times3^2=36$。若只是同一球面波从距离 $r$ 走到 $3r$，则强度变为 $1/9$、振幅变为 $1/3$；两题的变化原因不同。
:::

### 6. 波的干涉：从总相位差开始

线性介质中位移可相加。要形成稳定可见的干涉分布，需要频率相同、相位关系稳定，并有可相互干涉的振动分量。完全平行是最方便的充分条件；两个严格正交的分量没有相应交叉项，不能产生完全相消。

设波源初相分别为 $\varphi_1,\varphi_2$，到 $P$ 的路程分别为 $r_1,r_2$，同种介质中

$$
\Delta\Phi=\Phi_2-\Phi_1
=(\varphi_2-\varphi_1)-\frac{2\pi}{\lambda}(r_2-r_1).
$$

于是

$$
A_P^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\Phi,
$$

$$
I=I_1+I_2+2\sqrt{I_1I_2}\cos\Delta\Phi.
$$

$\Delta\Phi=2m\pi$ 时加强，$\Delta\Phi=(2m+1)\pi$ 时减弱。只有源同相、没有额外反射相位时，才能直接写“路程差 $m\lambda$ 加强、半奇数波长减弱”。若源反相，两个条件交换。

条纹可见度为

$$
V=\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}}
=\frac{2\sqrt{I_1I_2}}{I_1+I_2}
$$

（相干、平行、稳定条件下）。两束等强时 $V=1$；不等强时暗纹不一定全黑。

::: note 例题 10｜同相口诀遇到反相波源
两波源初相差 $\pi$，到 $P$ 的路程差为 $\lambda/2$，则 $\Delta\Phi=\pi-\pi=0$，$P$ 反而是加强点。若到达振幅分别为 $3$ 和 $2\,\mathrm{mm}$，最大、最小合振幅为 $5$ 和 $1\,\mathrm{mm}$，不会完全消失。
:::

### 7. 驻波：位置决定振幅，时间决定共同节奏

两列等振幅反向波相加：

$$
y_1=A\cos(\omega t-kx),\qquad
y_2=A\cos(\omega t+kx),
$$

$$
y=2A\cos kx\cos\omega t.
$$

振幅是 $A(x)=2A|\cos kx|$，不是可能为负的 $2A\cos kx$。对于这个具体坐标选择：

$$
\text{波节： }x=\frac{(2m+1)\lambda}{4},\qquad
\text{波腹： }x=\frac{m\lambda}{2},\qquad m\in\mathbb Z.
$$

若改写成 $y=2A\sin kx\cos\omega t$，原点就是波节。**波节位置必须从题设方程或边界条件确定**；不变的是相邻波节间距 $\lambda/2$、相邻波节与波腹间距 $\lambda/4$。

同一对相邻波节之间的点同相，跨过一个波节后反相；波节振幅为零，谈其振动相位没有意义。

![两端固定弦的前三个驻波模态](/images/physics-midterm/standing-waves.svg "固定端是波节；第 n 模态在长度 L 内放入 n 个半波长，虚线表示另一个时刻的形状")

固定端要求 $y=0$，入射位移波与反射位移波在端点反相，出现 $\pi$ 相位跃变，称半波损失。理想自由端要求横向力为零，即 $y_x=0$，形成位移波腹，位移反射不反相。对不同介质连接，应由阻抗与边界条件判断，不能把“固定端”和“任意更密介质”当作完全相同的边界。[OpenStax §16.6](https://openstax.org/books/university-physics-volume-1/pages/16-6-standing-waves-and-resonance)

#### 允许的驻波频率：先用端点装下波长

两端固定、长度 $L$ 的理想细绳：

$$
L=n\frac\lambda2,
\qquad \lambda_n=\frac{2L}{n},
\qquad \nu_n=\frac{nu}{2L},\quad n=1,2,\ldots.
$$

一端节点、一端腹点时，$L=(2n-1)\lambda/4$，只有基频的奇数倍。声管的开口近似为位移波腹、闭口为位移波节；压强波的节点与腹点恰好相反。端部修正不在这个理想模型中。

::: note 例题 11｜由弦的形状认模态
长度 $0.90\,\mathrm m$ 的两端固定弦形成三个波腹，波速 $120\,\mathrm{m/s}$。这就是 $n=3$ 模态，故 $\lambda=2L/3=0.60\,\mathrm m$，$\nu=u/\lambda=200\,\mathrm{Hz}$。相邻波节间距为 $0.30\,\mathrm m$，不是 $0.60\,\mathrm m$。
:::

#### 驻波的能量不是“波腹位移最大，所以波腹势能最大”

**补充推导：** 将 $y=2A\cos kx\cos\omega t$ 代入细绳局部能量：

$$
\varepsilon_k=2\mu A^2\omega^2\cos^2kx\sin^2\omega t,
$$

$$
\varepsilon_p=2\mu A^2\omega^2\sin^2kx\cos^2\omega t.
$$

在位移波腹，$y_x=0$，局部形变能密度恒为零；在位移波节，$y_t=0$，动能恒为零，但相邻部分可有很大的形变能。整个驻波形变最大时，总能量全为势能；整条弦通过平衡直线时，总能量全为动能。必须区分**整个波段**与**某个位置的局部能量密度**。

细绳瞬时能流

$$
P(x,t)=-F_Ty_xy_t
=-F_TA^2k\omega\sin(2kx)\sin(2\omega t).
$$

周期平均 $\overline P=0$。能量可以在相邻节点之间往返流动；理想节点处 $P=0$，没有穿过节点的能流。因此“驻波不传能”准确地说是**没有平均净能量输运**，而非处处、时时能流为零。[^standing]

### 8. Doppler Effect：速度必须相对介质定义

对静止均匀介质中的直线声波，波速为 $u$。令源到观察者的波传播方向为正方向，源、观察者相对介质的有符号速度分别为 $v_S,v_O$，在亚声速、同一直线的模型中

$$
\nu_O=\nu_S\frac{u-v_O}{u-v_S}.
$$

源在一个发射周期内移动 $v_ST_S$，所以前方实际波长为 $\lambda'=(u-v_S)/\nu_S$；观察者以相对速度 $u-v_O$ 遇到波峰。二者相除得到上式。实际图中方向反过来时，重新定义波传播的正向。[OpenStax §17.7](https://openstax.org/books/university-physics-volume-1/pages/17-7-the-doppler-effect)

也可用便于记忆的靠近版本：观察者以速率 $v_o$ 迎向源、源以速率 $v_s$ 迎向观察者，

$$
\nu_O=\nu_S\frac{u+v_o}{u-v_s}.
$$

远离时分别改为分子减、分母加。“靠近频率升高”适合检查结果，但不能用简单相对速度 $v_o+v_s$ 取代两个独立因素。光在真空中的相对论 Doppler 公式也不适用这套介质模型。

::: note 例题 12｜两个运动角色要分开
空气静止，$u=340\,\mathrm{m/s}$，声源发出 $600\,\mathrm{Hz}$，以 $20\,\mathrm{m/s}$ 迎向观察者，观察者也以 $10\,\mathrm{m/s}$ 迎向声源。

$$
\nu_O=600\frac{340+10}{340-20}=656.25\,\mathrm{Hz}.
$$

源移动改变波长，观察者移动改变遇波速率，这两步不能合并为把 $30\,\mathrm{m/s}$ 塞进某一个位置。
:::

#### 补充：反射测速为什么算两次

静止发射接收器前方的反射体以速率 $v$ 迎面靠近。反射体先作为运动观察者接收：

$$
\nu_1=\nu_0\frac{u+v}{u}.
$$

若在反射体参考系中反射保持频率，它再作为迎向接收器的运动波源发回：

$$
\nu_{\mathrm{echo}}=\nu_1\frac u{u-v}
=\nu_0\frac{u+v}{u-v}.
$$

因此拍频 $\Delta\nu=\nu_{\mathrm{echo}}-\nu_0$ 对应

$$
v=\frac{u\Delta\nu}{2\nu_0+\Delta\nu}
\approx\frac{u\Delta\nu}{2\nu_0}\quad(v\ll u).
$$

例如水中 $u=1500\,\mathrm{m/s}$、$\nu_0=20.0\,\mathrm{kHz}$，回波比原声高 $400\,\mathrm{Hz}$，则 $v=14.85\,\mathrm{m/s}$，低速近似给 $15.0\,\mathrm{m/s}$。

## 第十一章　波动光学：干涉

### 1. 光矢量、光程与相干条件

在通常的光学讨论中，用电场矢量 $\mathbf E$ 描述光的振动。光在均匀各向同性介质中的相速度 $v=c/n$，跨越静止界面时频率不变，介质内波长 $\lambda=\lambda_0/n$。

光程把传播引起的相位变化转换成等效真空路程：

$$
L=ns,\qquad L=\sum_jn_js_j\quad\text{或}\quad L=\int n\,\mathrm ds.
$$

本文定义 $\delta=L_2-L_1$、$\Delta\Phi=\Phi_2-\Phi_1$。沿用 $\cos(\omega t-ks+\varphi)$ 的约定，则

$$
\Delta\Phi=\Delta\varphi_{\mathrm{source}}
-\frac{2\pi}{\lambda_0}\delta
+\Delta\varphi_{\mathrm{reflection}}.
$$

这个式子包含源的初相、传播光程和反射相位。只考虑同源、没有额外反射相位的两束平行偏振光时，明纹为 $\delta=m\lambda_0$，暗纹为 $\delta=(m+\tfrac12)\lambda_0$。若把相位差定义为反向相减，正负号整体改变，物理结果不变。[^sign]

干涉强度仍是 $I=I_1+I_2+2\sqrt{I_1I_2}\cos\Delta\Phi$。相干性要求在观察时间内保持稳定的相位关系；独立普通光源通常做不到，所以实验采用分波前或分振幅法获取同源光。实际还要注意光程差不能远大于相干长度、光源尺寸不能使条纹平均掉，以及偏振分量是否能相互干涉。

### 2. Young 双缝：先几何路程，后光程

设两缝间距 $d$、缝屏距 $D_s$，上缝为 $S_1$，下缝为 $S_2$，屏幕坐标 $x$ 向上为正。两缝关于中心对称，则

$$
r_2-r_1=\sqrt{D_s^2+(x+d/2)^2}
-\sqrt{D_s^2+(x-d/2)^2}.
$$

$D_s\gg d$、$|x|\ll D_s$ 时，在空气近似真空中

$$
\delta\approx d\sin\theta\approx\frac{dx}{D_s},
$$

$$
x_m^{\mathrm{bright}}=\frac{m\lambda_0D_s}{d},
\qquad x_m^{\mathrm{dark}}=\frac{(m+1/2)\lambda_0D_s}{d},
\quad m\in\mathbb Z,
$$

$$
\Delta x=\frac{\lambda_0D_s}{d}.
$$

相邻同类条纹间距是 $\Delta x$；一条明纹到相邻暗纹的距离是 $\Delta x/2$。等强理想窄缝还给出

$$
I(x)=4I_1\cos^2\left(\frac{\pi dx}{\lambda_0D_s}\right).
$$

整套装置浸入折射率 $n$ 的均匀介质，几何不变时，$\delta=n(r_2-r_1)$，所以 $\Delta x=\lambda_0D_s/(nd)$，条纹变密。这与“只在一条光路插入薄片”的整体平移不同。

![双缝、单缝与光栅的强度分布对照](/images/physics-midterm/interference-diffraction.svg "横轴统一用无量纲 q=a sinθ/λ；双缝和六缝示例取 d=3a，细密干涉条纹受到单缝包络调制，q=±1 处对应缺级")

#### 单缝后放薄片：中央明纹向哪边移动

在上缝 $S_1$ 后插入厚 $e$、折射率 $n_p$ 的平行薄片，替代等厚空气，近法向入射时新增光程

$$
\Delta L=(n_p-1)e.
$$

由于 $L_1$ 增大，新的差为 $\delta=dx/D_s-(n_p-1)e$。零级明纹要求 $\delta=0$，故

$$
x_0=\frac{D_s}{d}(n_p-1)e,
\qquad M=\frac{x_0}{\Delta x}=\frac{(n_p-1)e}{\lambda_0}.
$$

$x_0>0$，即整体向放薄片的上缝一侧移动；理想薄片只改变常量光程差，条纹间距不变。

::: note 例题 13｜同时计算间距、位移与经过条纹数
$d=0.40\,\mathrm{mm}$、$D_s=1.50\,\mathrm m$、$\lambda_0=600\,\mathrm{nm}$，在上缝后放 $n_p=1.50$、$e=3.60\,\mathrm{\mu m}$ 的薄片。

$$
\Delta x=2.25\,\mathrm{mm},\qquad
M=3.0,\qquad x_0=6.75\,\mathrm{mm}.
$$

零级明纹向上移三个条纹间距。因为此例恰好移动整数条纹间距，无标记的理想周期图样最终看起来可与原图样重合；“零级位置移动”和“最终某点亮不亮”要分别回答。
:::

### 3. 薄膜：先数两束反射各自有没有相位反转

在透明、非吸收介质的近法向入射模型中，电场从低折射率介质向高折射率界面反射时相位反转 $\pi$；反向反射不反转。两束反射若都反转或都不反转，**相对**反射相位为零；恰有一束反转，相对反射相位为 $\pi$。[OpenStax §3.4](https://openstax.org/books/university-physics-volume-3/pages/3-4-interference-in-thin-films)

膜厚 $h$、膜折射率 $n_f$、膜内折射角 $r$。两反射光在同一出射方向比较时，传播造成的光程差大小是

$$
\delta_g=2n_fh\cos r
=2h\sqrt{n_f^2-n_0^2\sin^2i},
$$

其中 $n_0$ 为入射介质折射率、$i$ 为入射角，使用了 $n_0\sin i=n_f\sin r$。它不是简单的膜内折线路程 $2n_fh/\cos r$，因为还需把两束光比较到同一波前。

| 两束反射的相对相位 | 反射加强 | 反射减弱 |
| --- | --- | --- |
| 相差 $\pi$ | $2n_fh\cos r=(m+1/2)\lambda_0$ | $2n_fh\cos r=m\lambda_0$ |
| 相差 $0$ | $2n_fh\cos r=m\lambda_0$ | $2n_fh\cos r=(m+1/2)\lambda_0$ |

这里 $m=0,1,\ldots$，并应取满足物理膜厚的解。把半波损失等效成 $\lambda_0/2$ 后，就不能在条件中再额外翻转一次明暗。薄膜反射两束振幅不等时，“减弱”也未必全黑。无吸收理想系统的总反射与总透射强度互补；真实多界面膜的精确强度需要计入多次反射。

::: note 例题 14｜增透膜的相位条件与振幅条件
空气 $n_0=1$、玻璃 $n_s=1.50$，膜的折射率在二者之间。两个反射都从低折射率一侧射向高折射率界面，故相对反射相位为零。设计 $\lambda_0=550\,\mathrm{nm}$ 的法向反射减弱，最薄非零膜满足

$$
h=\frac{\lambda_0}{4n_f}.
$$

**补充：** 完全消反射还需匹配反射振幅，理想无吸收四分之一波膜要求 $n_f=\sqrt{n_0n_s}=\sqrt{1.5}$，对应 $h\approx112.27\,\mathrm{nm}$。只满足四分之一波厚度不能保证任意折射率膜都完全增透。
:::

#### 补充：半波损失的边界条件来源

正入射、非磁性、无吸收介质中，切向电场与磁场连续给出

$$
E_i+E_r=E_t,\qquad
n_1(E_i-E_r)=n_2E_t.
$$

解得电场振幅反射系数

$$
r_E=\frac{E_r}{E_i}=\frac{n_1-n_2}{n_1+n_2}.
$$

$n_2>n_1$ 时 $r_E<0$，负号就是 $\pi$ 相位反转。这是本篇对反射规则的推导。斜入射要区分 $s,p$ 偏振；全反射、吸收介质可能产生一般相位差，不能继续只用“有或无半波损失”的二选一口诀。[^reflection]

### 4. 等厚与等倾：什么变量在变

同一均匀膜厚 $h$，不同倾角 $r$ 对应不同光程差，得到**等倾干涉**，典型图样在适当光路中表现为同心环。若入射角近似不变，膜厚 $h$ 随位置变化，条纹连接的是等厚位置，称**等厚干涉**。劈尖与牛顿环属于后者，不能因牛顿环是圆环就把它认成等倾条纹。

### 5. 劈尖：把条纹间距变成膜厚梯度

两玻璃板间形成折射率 $n_f$ 的微小楔形膜，若 $n_f$ 小于两侧玻璃折射率，则两束反射只有一次反转。法向入射，距棱边 $x$ 处

$$
h(x)\approx\alpha x,\qquad \alpha\ll1.
$$

反射暗纹条件为 $2n_fh=m\lambda_0$，所以

$$
x_m=\frac{m\lambda_0}{2n_f\alpha},
\qquad \ell=\frac{\lambda_0}{2n_f\alpha},
\qquad \Delta h=\frac{\lambda_0}{2n_f}.
$$

理想接触线 $h=0$ 是暗纹。条纹平行棱边、等间距；$n_f$ 或 $\alpha$ 增大，条纹变密。若末端距棱边 $L$、垫片厚 $H$，$\alpha\approx H/L$，从而

$$
H=\frac{L\lambda_0}{2n_f\ell}.
$$

::: note 例题 15｜测细丝直径
空气劈尖的 $L=50.0\,\mathrm{mm}$，$\lambda_0=600\,\mathrm{nm}$，相邻暗纹间距 $\ell=0.50\,\mathrm{mm}$。

$$
H=\frac{0.0500\times600\times10^{-9}}{2\times0.00050}
=30.0\,\mathrm{\mu m}.
$$

若几何不变、充入 $n_f=1.33$ 且仍低于玻璃折射率的液体，间距变成 $0.50/1.33=0.376\,\mathrm{mm}$。
:::

动态条纹要追踪**同一级次**。由 $x_m\propto1/\alpha$，角度减小，同级条纹远离棱边；角度增大，同级条纹靠近棱边。若整块上板平行抬起 $h_0$ 而斜率不变，$h=h_0+\alpha x$，同级条纹反而向棱边移动。可见“条纹移动”不能只看膜厚增加这一个词，要看改变的是斜率还是常量。

### 6. 牛顿环：条纹的平方半径等间距

平凸透镜曲率半径 $R$，与平板间的中心间隙 $h_0$。近接触、$r\ll R$ 时

$$
h(r)=h_0+R-\sqrt{R^2-r^2}
\approx h_0+\frac{r^2}{2R}.
$$

膜折射率 $n_f$ 低于两侧玻璃，法向观察反射光，暗环条件为

$$
2n_fh(r)=m\lambda_0
\quad\Longrightarrow\quad
r_m^2=\frac{mR\lambda_0}{n_f}-2Rh_0.
$$

理想接触 $h_0=0$：

$$
r_{m,\mathrm{dark}}=\sqrt{\frac{mR\lambda_0}{n_f}},\quad m=0,1,2,\ldots,
$$

$$
r_{m,\mathrm{bright}}=\sqrt{\frac{(m+1/2)R\lambda_0}{n_f}},\quad m=0,1,2,\ldots.
$$

中心为暗斑，外侧环越来越密。等间距的是 $r_m^2$，不是 $r_m$。充液后同级环半径缩小为原来的 $1/\sqrt{n_f}$（从空气近似开始）。[University of Colorado 牛顿环演示](https://physicslabs.colorado.edu/demos/optics/interference/thin-films/newtons-rings/)

以直径 $\mathcal D_m=2r_m$ 测量，消去未知中心间隙：

$$
\mathcal D_{m+p}^2-\mathcal D_m^2
=\frac{4pR\lambda_0}{n_f}.
$$

::: note 例题 16｜不用找到接触点也能测曲率
空气膜中，$\lambda_0=600\,\mathrm{nm}$，某暗环直径 $4.00\,\mathrm{mm}$，再向外数五个暗环，直径为 $5.00\,\mathrm{mm}$。

$$
R=\frac{(5.00^2-4.00^2)\times10^{-6}}
{4\times5\times600\times10^{-9}}
=0.750\,\mathrm m.
$$

测直径时分母有 $4$；若测的是半径平方差，不能保留这个因子。
:::

抬起透镜使 $h_0$ 增大，固定级次的 $r_m^2$ 变小，圆环**向内收缩并在中心消失**；压低则向外扩张。中心只有在理想接触等相应暗纹条件下才暗，有尘粒或间隙时可明可暗。以上移动方向直接来自带 $h_0$ 的方程，避免混用“吐环”“吞环”的口语描述。

![空气劈尖与牛顿环的厚度和条纹对应](/images/physics-midterm/thin-films.svg "劈尖的厚度正比于 x，牛顿环的厚度正比于 r²；同样的等厚条件得到不同几何图样")

## 第十一章　波动光学：衍射与分辨

### 7. Huygens–Fresnel 原理与远场条件

波前上的各面元可视为次波源，观察点的波是各次波的相干叠加。有限孔径截取了波前，来自不同位置的次波在不同方向上相长或相消，形成衍射。

Fresnel 衍射保留有限距离波前曲率；Fraunhofer 衍射研究远场角分布。实际可用准直光照明，并在透镜后焦面观察各平行出射方向。自由传播时可用 $a^2/(\lambda L)\ll1$ 作为远场量级判据；采用透镜焦平面时，不必真的把屏放到无穷远。

### 8. 单缝：暗纹条件精确，副极大要说明近似

缝宽 $a$，介质波长 $\lambda$，垂直入射。上下缝边在出射方向 $\theta$ 的光程对应相位差由 $a\sin\theta$ 决定。若 $a\sin\theta=\lambda$，可把缝分为上下两半，每一半内的位置都能找到相距 $a/2$ 的伙伴，相位相差 $\pi$，两两抵消。一般暗纹条件为

$$
a\sin\theta=m\lambda,\qquad m=\pm1,\pm2,\ldots.
$$

$m=0$ 不是暗纹，此时所有次波同相，是中央极大。半波带数可写成 $N_h=2a|\sin\theta|/\lambda$；偶数个半波带对应暗纹。奇数个半波带“余下一带”能粗略定位副亮纹，但**不是精确副极大条件**。[OpenStax §4.1](https://openstax.org/books/university-physics-volume-3/pages/4-1-single-slit-diffraction)

**补充推导：** 把缝内各点的相量积分，令 $\xi$ 为缝内横坐标：

$$
E(\theta)\propto\int_{-a/2}^{a/2}
\exp\left(i\frac{2\pi\xi\sin\theta}{\lambda}\right)\,\mathrm d\xi
=a\frac{\sin\zeta}{\zeta},
\qquad \zeta=\frac{\pi a\sin\theta}{\lambda}.
$$

故

$$
I(\theta)=I(0)\left(\frac{\sin\zeta}{\zeta}\right)^2.
$$

$\zeta=0$ 取极限值 $1$。非零副极大满足 $\zeta\cos\zeta-\sin\zeta=0$，即

$$
\tan\zeta=\zeta.
$$

第一副极大的 $a|\sin\theta|/\lambda\approx1.4303$，而半波带估计给 $1.5$。做概念题可以采用教材要求的近似，但推导或数值精算应使用强度公式。[OpenStax §4.2](https://openstax.org/books/university-physics-volume-3/pages/4-2-intensity-in-single-slit-diffraction)

第一对暗纹夹出中央亮纹。小角度下

$$
\Delta\theta_0\approx\frac{2\lambda}{a},
\qquad W_0\approx\frac{2f\lambda}{a}.
$$

相邻暗纹之间的副亮区宽度约 $f\lambda/a$，中央亮区约为其两倍；大角度时，屏坐标 $x=f\tan\theta$ 不再线性，不能继续说“恰好两倍”。缝变窄，衍射展开更宽；波长变长，同样更宽。

::: note 例题 17｜中央亮纹宽度与指定点强度
$a=0.20\,\mathrm{mm}$、$f=0.50\,\mathrm m$、$\lambda=500\,\mathrm{nm}$，有

$$
x_{\pm1}\approx\pm1.25\,\mathrm{mm},
\qquad W_0\approx2.50\,\mathrm{mm}.
$$

若某方向满足 $a\sin\theta=3\lambda/2$，则 $\zeta=3\pi/2$，相对强度为 $I/I(0)=4/(9\pi^2)=0.0450$。它接近第一副亮纹，仍不是精确峰值位置。
:::

### 9. 光栅：主极大位置、包络和峰宽各由什么控制

光栅有 $N$ 条等宽缝，缝宽 $a$，相邻缝中心距 $d=a+b$。垂直入射，主极大满足

$$
d\sin\theta=m\lambda,\qquad m\in\mathbb Z.
$$

同一方向波长越长，$|\theta|$ 越大；零级各波长重合。增加总照明缝数 $N$，峰变窄、等幅照明条件下主峰强度相对单缝峰值随 $N^2$ 增长，但主极大位置仍由 $d$ 决定。[OpenStax §4.4](https://openstax.org/books/university-physics-volume-3/pages/4-4-diffraction-gratings)

有限宽度的 $N$ 缝强度为

$$
I(\theta)=I_{\mathrm{one}}(0)
\left(\frac{\sin\zeta}{\zeta}\right)^2
\left(\frac{\sin N\chi}{\sin\chi}\right)^2,
\quad
\zeta=\frac{\pi a\sin\theta}{\lambda},
\quad\chi=\frac{\pi d\sin\theta}{\lambda}.
$$

第一因子是单缝衍射包络，第二因子是多缝干涉。$\chi=m\pi$ 处用极限得到第二因子 $N^2$，不是把 $0/0$ 当零。$N=2$ 时得到有限缝宽双缝图样；可见“干涉”和“衍射”都来自相干叠加，只是分组方式不同。[OpenStax §4.3](https://openstax.org/books/university-physics-volume-3/pages/4-3-double-slit-diffraction)

斜入射时，建议从波矢切向分量写起。若入射传播方向与出射传播方向相对同一正向法线的有符号角分别为 $i,\theta$，可选级次符号使

$$
d(\sin\theta-\sin i)=m\lambda.
$$

换一种图中角度定义就会出现加号；不说明方向而死背“同侧加异侧减”很容易出错。

#### 缺级：两个条件在同一方向同时成立

光栅主极大若落在单缝暗纹方向，

$$
d\sin\theta=m\lambda,\qquad
a\sin\theta=p\lambda,\quad p\ne0,
$$

则

$$
m=\frac da p
$$

对应主极大消失。若 $d/a=3$，$m=\pm3,\pm6,\ldots$ 缺级，**零级不缺**。更一般地，若 $d/a=P/Q$ 为最简正有理数，则缺级为 $m=\pm P,\pm2P,\ldots$；只说“比值为整数才会缺级”不够完整。若没有精确的整数级次重合，则可有明显变弱而没有严格缺级。

#### 最高级次与条纹总数：要检查掠射极限

方向存在要求 $|m|\lambda\le d$。普通平面屏有限位置能接到的方向要求 $|\theta|<90^\circ$，所以

$$
|m|<\frac d\lambda.
$$

若 $d/\lambda$ 是整数，等号对应掠射方向，不能算作有限屏幕上的一条谱线。先列出允许整数 $m$，再删除缺级，最后考虑实际屏幕角度范围；正负级都要计数，零级只算一次。

::: note 例题 18｜有限屏幕上有几条主亮纹
$d=3.0\,\mathrm{\mu m}$、$a=1.0\,\mathrm{\mu m}$、$\lambda=600\,\mathrm{nm}$。

$d/\lambda=5$，非掠射级次为 $m=-4,-3,\ldots,4$，共 $9$ 个；$d/a=3$ 使 $m=\pm3$ 缺级，因此剩 **7 条**。最高可见级次是 $\pm4$。$m=\pm5$ 只是 $90^\circ$ 的方向极限。
:::

#### 补充：色散与分辨本领

对 $d\sin\theta=m\lambda$ 求导：

$$
\frac{\mathrm d\theta}{\mathrm d\lambda}
=\frac m{d\cos\theta}.
$$

这是角色散率。相邻波长谱线能否分开还取决于峰宽；理想光栅在第 $m$ 级的分辨本领

$$
\mathcal R=\frac\lambda{\Delta\lambda_{\min}}=|m|N.
$$

$N$ 是**实际被照亮的总缝数**，不是每毫米刻线数。若每毫米 $500$ 条、照亮宽 $10\,\mathrm{mm}$，$N=5000$；在二级、$\lambda=600\,\mathrm{nm}$ 处，理想 $\Delta\lambda_{\min}=0.060\,\mathrm{nm}$。这属于导出主线之外的光栅应用补充。[University of Texas 光栅讲义](https://web2.ph.utexas.edu/~coker2/index.files/grating.htm)

### 10. 圆孔与 Rayleigh 判据：孔径限制空间分辨率

直径 $D_a$ 的圆孔产生 Airy 图样，中央亮斑到第一暗环的角半径在小角度下是

$$
\theta_A\approx1.22\frac\lambda{D_a},
\qquad r_A\approx1.22\frac{f\lambda}{D_a}.
$$

这是半径或半角；若问中央亮斑直径，需要乘 $2$。Rayleigh 判据把一个点源像的中央极大落在另一点源像第一极小处作为恰可分辨条件：

$$
\Delta\theta_{\min}\approx1.22\frac\lambda{D_a}.
$$

因此缩短波长、增大孔径，都能降低最小分辨角；单纯增大放大倍率不能恢复已经被衍射模糊的细节。这个判据针对理想圆孔成像的常用分辨标准，与光栅区分波长的 $\mathcal R$ 不是同一个物理量。[OpenStax §4.5](https://openstax.org/books/university-physics-volume-3/pages/4-5-circular-apertures-and-resolution)

::: note 例题 19｜求远处两个点的最小间距
$D_a=5.0\,\mathrm{mm}$、$\lambda=550\,\mathrm{nm}$，有 $\Delta\theta_{\min}=1.342\times10^{-4}\,\mathrm{rad}$。两点在 $100\,\mathrm m$ 远处，横向间距需约 $s_{\min}=L\Delta\theta_{\min}=13.42\,\mathrm{mm}$ 才满足此理想判据。
:::

## 第十一章　波动光学：偏振

### 11. 五种偏振状态怎样识别

横波在垂直传播方向的平面内有方向自由度，偏振描述这些横向分量的规律。对沿 $+z$ 传播的光，固定空间点看

$$
E_x=A_x\cos\psi,\qquad
E_y=A_y\cos(\psi+\delta).
$$

这与垂直 SHM 合成是同一个数学问题。

| 光的状态 | 电场矢端的规律 | 理想旋转检偏器的观察结果 |
| --- | --- | --- |
| 线偏振 | 沿固定直线往复 | 强度随角度改变，某方向完全消光 |
| 圆偏振 | $A_x=A_y$、$\delta=\pm\pi/2$，画圆 | 强度恒定，不能消光 |
| 椭圆偏振 | 一般稳定相干正交分量形成椭圆 | 强度有最大、最小，通常不全消光 |
| 自然光 | 没有固定偏振方向与稳定横向相位关系，统计各向等价 | 强度恒为入射的一半 |
| 部分偏振光 | 无偏振分量与偏振分量的统计叠加 | 一般有强弱变化，但不全消光 |

只用一片旋转检偏器，**不能区分圆偏振光与自然光**；一般也不能唯一地区分椭圆偏振和部分偏振。可加入已知轴向的四分之一波片做进一步检验。圆偏振的左右旋命名还依赖观察方向和约定，答题需说明自己是顺传播方向看还是迎着光看。[^polar]

### 12. Malus 定律与多片偏振片

理想检偏器只保留沿透振轴的电场分量。线偏振光入射，与透振轴夹角 $\alpha$：

$$
E_{\mathrm{out}}=E_{\mathrm{in}}\cos\alpha,
\qquad I_{\mathrm{out}}=I_{\mathrm{in}}\cos^2\alpha.
$$

自然光的统计平均 $\langle\cos^2\alpha\rangle=1/2$，通过第一片理想偏振片后成为线偏振光，$I_1=I_0/2$。后续每片用**相邻两片透振轴夹角**，不是都与第一片比较。[OpenStax §1.7](https://openstax.org/books/university-physics-volume-3/pages/1-7-polarization)

若自然光经过 $n$ 片，轴角依次为 $\theta_1,\ldots,\theta_n$：

$$
I_n=\frac{I_0}{2}
\prod_{j=2}^{n}\cos^2(\theta_j-\theta_{j-1}).
$$

![三片偏振片逐步投影电场的示意](/images/physics-midterm/polarizers.svg "自然光先减半，再依次使用相邻透振轴的夹角；中间片改变了进入末片的偏振方向")

::: note 例题 20｜正交偏振片之间插入一片
第一片轴向 $0^\circ$、末片 $90^\circ$，中间片为 $\alpha$。自然光入射：

$$
I=\frac{I_0}{2}\cos^2\alpha\cos^2(90^\circ-\alpha)
=\frac{I_0}{8}\sin^2(2\alpha).
$$

$\alpha=45^\circ$ 时最大，为 $I_0/8$。中间片让输出偏振方向重新沿自己的轴，末片因而有非零投影；这完全可以用经典电磁场投影解释，不需要借助“违反直觉的量子效应”。若末片已使光消失，再在它后面加偏振片，当然不能恢复光。
:::

**补充：** 可将常见部分偏振光写为自然光强度 $I_u$ 与线偏振部分强度 $I_p$ 的非相干叠加。检偏器转角 $\alpha$ 时

$$
I(\alpha)=\frac{I_u}{2}+I_p\cos^2\alpha.
$$

故 $I_{\max}=I_u/2+I_p$、$I_{\min}=I_u/2$，这类模型的偏振度

$$
\mathcal P=\frac{I_p}{I_u+I_p}
=\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}}.
$$

这个转动检偏器测法有模型前提，不能据此把圆偏振的恒定输出判作“偏振度为零”。

### 13. Brewster 定律：反射光完全偏振，折射光通常仍部分偏振

入射面由入射光线与界面法线张成。电场垂直入射面的分量称 $s$，平行入射面的分量称 $p$。一般斜入射时，两种分量的反射、透射比例不同。

自然光从透明非磁性介质 $n_1$ 射向 $n_2$，在 Brewster 角

$$
\tan i_B=\frac{n_2}{n_1}
$$

处，$p$ 分量不反射，反射光成为 $s$ 线偏振光。此时反射光与折射光垂直，即 $i_B+r_B=90^\circ$。由 Snell 定律 $n_1\sin i_B=n_2\sin r_B=n_2\cos i_B$ 就可得到正切公式。折射光通常仍含 $s,p$ 两种成分，不能说也完全偏振。[OpenStax §1.7](https://openstax.org/books/university-physics-volume-3/pages/1-7-polarization)

::: note 例题 21｜角度与偏振方向都要回答
空气到玻璃 $n_1=1.00$、$n_2=1.50$，$i_B=\arctan1.50=56.31^\circ$，$r_B=33.69^\circ$，反射与折射光夹角 $90^\circ$。若检偏轴平行入射面，理想反射光被完全挡住。
:::

正入射时，两个横向方向没有反射优势，不能笼统说“只要发生反射，自然光就一定变成部分偏振光”。金属反射、吸收介质也不能直接套用这个简单 Brewster 模型。

### 14. 双折射：区分光轴、主平面、波法线与光线

各向异性晶体对不同偏振响应不同。单轴晶体通常可分出两种本征传播模式：

| 名称 | 主要性质 | 复习时要辨清 |
| --- | --- | --- |
| 寻常光 $o$ | 相折射率 $n_o$ 与传播方向无关 | 相速度面为球面，常规折射作图较直接 |
| 非寻常光 $e$ | 有效相折射率随传播方向变化 | 相速度面与球面不同，能流方向可能不平行波法线 |
| 光轴 | 沿此波法线方向两模式相速度相同 | 不是“晶体中一条特殊的实体直线” |
| 主平面 | 某模式波法线与光轴张成的平面 | 不应与界面入射面混为一谈 |

教材常用“$o$ 光振动垂直主平面，$e$ 光振动在主平面内”识别模式；严格描述各向异性介质时，电位移 $\mathbf D$ 横向，电场 $\mathbf E$ 则不一定严格垂直于波法线。常规共线波法线讨论的两本征偏振正交；两束射线已经沿不同方向传播时，不宜无条件把它们当成同一横截面上的两个正交电场。[MIT Optics Lecture 22](https://ocw.mit.edu/courses/2-71-optics-spring-2014/c683c04243df558f6048cc11924ff44f_MIT2_71S14_lec22_notes.pdf)

沿光轴传播时不发生通常的双折射分裂。$e$ 光的光线即能量传播方向可能偏离波法线，因此“$e$ 光不遵守折射定律”应理解为不能用一个方向无关的折射率，直接对其能流光线套普通 Snell 公式；波矢的切向相位匹配仍成立。[RIT Imaging Science §8.6](https://www.cis.rit.edu/class/simg712-90/notes/basic_principles_notes-high_quality-2-12-2005.pdf)

#### 补充：波片把正交分量的相位差改掉

厚度 $h$ 的波片，让沿两主轴分量积累相位差大小

$$
\Delta\Phi=\frac{2\pi}{\lambda_0}|n_e-n_o|h
$$

（此处取适用传播方向的两个折射率）。四分之一波片给 $\pi/2$ 模 $2\pi$ 的延迟，半波片给 $\pi$ 模 $2\pi$ 的延迟。线偏振与两轴成 $45^\circ$ 时，两分量等幅，经四分之一波片可得到圆偏振；一般轴角则得到椭圆偏振。线偏振若沿某一主轴入射，只有一个分量，四分之一波片也不会把它变成圆偏振。

## 易错点对照：先找条件，再检查结果

| 常见误读 | 应当怎样判断 |
| --- | --- |
| 周期运动一定是 SHM | 检查 $\ddot x=-\omega_0^2x$，以及坐标是否从平衡点量起 |
| 用 $\arctan$ 直接得初相 | 同时核对 $x_0$ 与 $v_0$ 的符号，排除象限歧义 |
| 位移相同就是同一状态 | 还要速度大小与方向相同 |
| 拍频等于频差的一半 | 物理振幅是慢因子的绝对值，拍频等于频差 |
| 受迫振动频率等于固有频率 | 稳态频率跟随外力；自由频率、阻尼频率、共振峰频率分别定义 |
| 阻尼多大都有位移共振峰 | 非零位移峰需要 $\beta<\omega_0/\sqrt2$ |
| 波形向右，质元也向右走 | 右行横波的质元在纵向振动，$v_y=-uy_x$ |
| 所有机械波的局部动势能都同相 | 该结论适用于本文的理想单向行波，驻波须重新求导 |
| 驻波没有任何能量流动 | 平均净能流为零，局部瞬时能流一般不为零 |
| 路程差为整数波长一定加强 | 还需源相位、反射相位及偏振条件相容 |
| 薄膜公式总是 $2nh+\lambda_0/2$ | 先数两束反射之间有几次相对相位反转 |
| 牛顿环中心永远暗 | 理想接触且相对反射相位为 $\pi$ 时成立；有间隙需重算 |
| 单缝半奇数波长位置是精确副极大 | 这是近似，精确峰由 $\tan\zeta=\zeta$ 决定 |
| 中央亮纹宽度是 $f\lambda/a$ | 中央两侧第一暗纹夹出的全宽约 $2f\lambda/a$ |
| 光栅常数等于透光缝宽 | $d=a+b$；$d$ 定主峰位置，$a$ 定包络暗纹 |
| 光栅零级也属于缺级倍数 | 单缝暗纹要求非零级次，零级保留 |
| $90^\circ$ 衍射方向能落到有限平面屏 | 它是掠射极限，需从普通屏幕谱线数中排除 |
| 自然光直接用某个固定角的 Malus 定律 | 第一片理想偏振片先减半，之后才有确定透振方向 |
| 三片偏振片的夹角都与第一片比较 | 每一步使用相邻输入偏振与当前透振轴的夹角 |
| 检偏器转动时强度不变就是自然光 | 圆偏振也如此，需要波片等额外器件鉴别 |
| Brewster 角下两束出射光都完全偏振 | 反射光完全 $s$ 偏振，折射光通常仍部分偏振 |

### 解题时的五步检查

1. **模型。** 是一个振子、一列行波、两列叠加波，还是有限孔径的次波叠加？
2. **坐标与相位。** 零点在哪里，正方向怎样选，所求相位差是谁减谁？
3. **条件。** 小角度、线性、无吸收、非色散、正入射、同偏振等条件是否实际满足？
4. **计算。** 先写带符号和单位的关系，再代数字；所有长度统一换成同一单位。
5. **验算。** 回代初值与边界，查振幅非负、$|\sin\theta|\le1$、透射强度不超过输入值，并看极限是否合理。

## 闭卷自测：十四组原创练习与折叠解析

以下练习覆盖本篇主要任务，数值与情境重新设计。先写出自己的完整列式，再展开解析；只看答案不能检验是否真正掌握。

### 自测 1｜初始条件、相图与能量

$m=0.50\,\mathrm{kg}$、$k_s=50\,\mathrm{N/m}$，$x_0=+0.060\,\mathrm m$、$v_0=-0.80\,\mathrm{m/s}$。求 $A,\varphi,T,\mathcal E$，并求 $x=0.080\,\mathrm m$ 时的速度大小。

::: details 展开解析 1
$\omega=10\,\mathrm{rad/s}$。由 $A=\sqrt{0.060^2+0.080^2}$ 得 $A=0.100\,\mathrm m$。$\cos\varphi=0.6$、$\sin\varphi=0.8$，所以 $\varphi=0.9273\,\mathrm{rad}$。

$$
T=\frac{2\pi}{10}=0.6283\,\mathrm s,
\quad \mathcal E=\frac12\times50\times0.100^2=0.250\,\mathrm J.
$$

在给定位置，$|v|=\omega\sqrt{A^2-x^2}=0.600\,\mathrm{m/s}$。仅给位置不能选定正负；若指初始后第一次到达该处，质点先向负方向走，绕到负端点再返回，首次到此处时 $v>0$。
:::

### 自测 2｜三种合成问题

（a）两个同方向振动振幅均为 $A$、相位差 $2\pi/3$，合振幅多少？（b）$440\,\mathrm{Hz}$ 与 $443\,\mathrm{Hz}$ 的拍周期多少？（c）$x=2\cos\omega t$、$y=\sin\omega t$ 的轨迹和转向如何？长度单位相同。

::: details 展开解析 2
（a）$A_{\mathrm{sum}}^2=2A^2+2A^2\cos(2\pi/3)=A^2$，合振幅为 $A$。

（b）拍频 $3\,\mathrm{Hz}$，$T_b=1/3\,\mathrm s$。

（c）$x^2/4+y^2=1$，$t=0$ 在 $(2,0)$，随后 $y>0$，从右端点向上，逆时针。若将 $y$ 改成 $-\sin\omega t$，轨迹不变而转向反过来。
:::

### 自测 3｜阻尼与位移共振阈值

系统 $\omega_0=20\,\mathrm{rad/s}$、$\beta=4\,\mathrm{s^{-1}}$。求 $\omega_d,\Omega_r,Q$。若保持 $\omega_0$ 不变而令 $\beta=15\,\mathrm{s^{-1}}$，还会不会自由振荡？还会不会出现非零位移共振峰？

::: details 展开解析 3
原参数下：

$$
\omega_d=\sqrt{400-16}=19.596\,\mathrm{rad/s},
\quad \Omega_r=\sqrt{400-32}=19.183\,\mathrm{rad/s},
\quad Q=2.5.
$$

$\beta=15<20$ 仍为欠阻尼，故仍有衰减自由振荡；但 $15>20/\sqrt2$，没有非零频率位移峰。**欠阻尼与有位移共振峰不是同一个判据。**
:::

### 自测 4｜由局部运动建立左行波

波沿 $-x$ 以 $u=3.0\,\mathrm{m/s}$ 传播，原点振幅 $0.020\,\mathrm m$、周期 $0.50\,\mathrm s$，$t=0$ 时原点经过平衡位置且向上。写出波函数，并求 $x=0.125\,\mathrm m,t=0$ 的位移、速度、加速度。

::: details 展开解析 4
$\omega=4\pi$、$\lambda=uT=1.50\,\mathrm m$、$k=4\pi/3$。原点 $y_0=0,v_0>0$，可取 $\varphi=-\pi/2$，所以

$$
y=0.020\cos\left(4\pi t+\frac{4\pi}{3}x-\frac\pi2\right)\,\mathrm m.
$$

给定点相位 $-\pi/3$：

$$
y=0.010\,\mathrm m,\quad
v_y=0.040\sqrt3\pi=0.2177\,\mathrm{m/s},\quad
 a_y=-0.160\pi^2=-1.579\,\mathrm{m/s^2}.
$$

位移为正，所以加速度向下；速度向上说明它此刻正在远离平衡位置，两者并不矛盾。
:::

### 自测 5｜行波的局部能量与平均功率

一根绳 $\mu=0.010\,\mathrm{kg/m}$、张力 $F_T=25\,\mathrm N$，右行简谐波 $A=2.0\,\mathrm{mm}$、$\nu=20\,\mathrm{Hz}$。求波速、波长、平均功率。再解释波峰处为什么不是局部势能最大。

::: details 展开解析 5
$u=\sqrt{F_T/\mu}=50\,\mathrm{m/s}$，$\lambda=u/\nu=2.50\,\mathrm m$。

$$
\overline P=\frac12\mu u(2\pi\nu)^2A^2
=0.01579\,\mathrm W.
$$

理想行波峰处 $y_t=0$、$y_x=0$，动能与局部形变能密度同时为零。绳的形变势能由 $y_x^2$ 决定，不能照搬孤立弹簧的 $x^2$。
:::

### 自测 6｜带初相的干涉与驻波相位

（a）两同频源初相差 $\pi/2$，到观察点路程差 $\lambda/4$，是加强还是减弱？（b）驻波 $y=0.040\sin(2\pi x)\cos(10\pi t)$，长度单位为米，求节点位置、腹点位置和相邻节点间距；比较 $x=0.10$ 与 $x=0.60$ 两点的振动相位。

::: details 展开解析 6
（a）$\Delta\Phi=\pi/2-2\pi(1/4)=0$，加强。

（b）$k=2\pi$，$\lambda=1.0\,\mathrm m$。节点 $x=m/2\,\mathrm m$，腹点 $x=(2m+1)/4\,\mathrm m$，相邻节点 $0.50\,\mathrm m$。给定两点的空间因子异号，中间跨过 $x=0.50$ 的节点，故振动相位相差 $\pi$。腹点最大振幅为 $0.040\,\mathrm m$，不是再乘 $2$。
:::

### 自测 7｜同样的相对速率，结果是否相同

介质静止，$u=330\,\mathrm{m/s}$、源频率 $500\,\mathrm{Hz}$。（a）源静止、观察者以 $30\,\mathrm{m/s}$ 靠近；（b）观察者静止、源以同样速率靠近。分别求接收频率。

::: details 展开解析 7
（a）$\nu_a=500(330+30)/330=545.45\,\mathrm{Hz}$。

（b）$\nu_b=500\times330/(330-30)=550.00\,\mathrm{Hz}$。

相对靠近速率一样，但相对介质的运动角色不同，精确结果不同；低速一阶近似才相同。
:::

### 自测 8｜双缝薄片与浸液

空气中 $d=0.30\,\mathrm{mm}$、$D_s=1.20\,\mathrm m$、$\lambda_0=600\,\mathrm{nm}$。先在下缝后放 $n_p=1.60$、$e=2.0\,\mathrm{\mu m}$ 的薄片，求条纹间距、零级移动方向与距离。再去掉薄片，把整个装置浸入 $n=1.50$ 介质，新的间距是多少？

::: details 展开解析 8
原间距为 $\Delta x=2.40\,\mathrm{mm}$。薄片增加下缝光程 $1.20\,\mathrm{\mu m}=2\lambda_0$，零级向下移动 $2\Delta x=4.80\,\mathrm{mm}$，间距不变。

浸液后没有单侧光程偏置，中央零级仍在对称中心，间距变为 $2.40/1.50=1.60\,\mathrm{mm}$。不能把这两个不同操作都理解成条纹平移。
:::

### 自测 9｜薄膜、劈尖与牛顿环

（a）空气—水膜—空气，$n_f=4/3$，法向入射 $\lambda_0=600\,\mathrm{nm}$，最薄非零反射加强膜厚多少？（b）空气劈尖条纹间距 $0.30\,\mathrm{mm}$，求劈角。（c）空气牛顿环 $R=0.80\,\mathrm m$、理想接触，求第 $5$ 级暗环半径；把透镜抬高 $150\,\mathrm{nm}$ 后同一级环半径怎样改变？

::: details 展开解析 9
（a）两反射只有一次反转，反射加强 $2n_fh=\lambda_0/2$，故 $h=\lambda_0/(4n_f)=112.5\,\mathrm{nm}$。

（b）$\alpha=\lambda_0/(2\ell)=1.00\times10^{-3}\,\mathrm{rad}$。

（c）原半径 $r_5=\sqrt{5R\lambda_0}=1.549\,\mathrm{mm}$。抬高后

$$
r_5'^2=5R\lambda_0-2Rh_0
=2.16\times10^{-6}\,\mathrm{m^2},
\quad r_5'=1.470\,\mathrm{mm}.
$$

同级环向内收缩。中心光程传播项 $2h_0=300\,\mathrm{nm}=\lambda_0/2$，加上相对反射相位后中心从暗转亮。
:::

### 自测 10｜单缝宽度与半波带的适用性

空气中单缝 $a=0.10\,\mathrm{mm}$、$\lambda_0=500\,\mathrm{nm}$、透镜焦距 $f=0.40\,\mathrm m$。求中央亮区全宽、第二暗纹坐标；某方向缝边光程差 $5\lambda_0/2$ 时有多少半波带，是精确副极大吗？

::: details 展开解析 10
第一暗纹 $x_{\pm1}\approx\pm f\lambda_0/a=\pm2.0\,\mathrm{mm}$，所以中央全宽 $4.0\,\mathrm{mm}$。第二暗纹在 $x_{\pm2}\approx\pm4.0\,\mathrm{mm}$。

半波带数 $N_h=2(5\lambda_0/2)/\lambda_0=5$。奇数带粗略对应第二副亮区，但 $\zeta=5\pi/2$ 不满足精确极值方程 $\tan\zeta=\zeta$，不是精确副极大。
:::

### 自测 11｜缺级比例不是整数的光栅

光栅 $d=2.5\,\mathrm{\mu m}$、$a=1.0\,\mathrm{\mu m}$，空气中垂直入射 $\lambda_0=500\,\mathrm{nm}$。写出一般缺级序列，并统计理想足够大的有限平面屏上保留的主极大条数。

::: details 展开解析 11
$d/a=5/2$。需 $m=(5/2)p$ 为整数，所以 $p=2,4,\ldots$，缺级为 $m=\pm5,\pm10,\ldots$。

这里 $d/\lambda_0=5$，普通有限屏非掠射级次只有 $m=-4,\ldots,4$，这些都不缺，故共 $9$ 条。$\pm5$ 同时在掠射极限且符合缺级条件，不能从这九条中再减去两条。
:::

### 自测 12｜望远镜分辨率与孔径

用 $\lambda=600\,\mathrm{nm}$ 的光观察角距离 $10^{-5}\,\mathrm{rad}$ 的两颗等亮点源，按理想圆孔 Rayleigh 判据需要的最小口径多少？若只把放大倍率翻倍能否替代增大口径？

::: details 展开解析 12
要求 $1.22\lambda/D_a\le10^{-5}$，故

$$
D_a\ge\frac{1.22\times600\times10^{-9}}{10^{-5}}
=0.0732\,\mathrm m=7.32\,\mathrm{cm}.
$$

单纯提高放大倍率不改变 $\lambda/D_a$，不能替代孔径增加。这是理想衍射限制，真实仪器还可能受像差和其他因素影响。
:::

### 自测 13｜多片透射与部分偏振

（a）自然光依次通过轴向 $0^\circ,30^\circ,90^\circ$ 的三片理想偏振片，出射强度是多少？（b）在“自然光与线偏振光叠加”模型下，转动检偏器测得最大强度 $8$、最小强度 $2$（同一单位），求原光总强度与偏振度。

::: details 展开解析 13
（a）相邻夹角 $30^\circ$、$60^\circ$：

$$
I=\frac{I_0}{2}\cos^230^\circ\cos^260^\circ
=\frac{3I_0}{32}.
$$

（b）$I_u=2I_{\min}=4$，$I_p=I_{\max}-I_{\min}=6$，原光总强度 $10$，$\mathcal P=6/10=0.60$。
:::

### 自测 14｜Brewster 角与波片

（a）光从 $n_1=1.50$ 的透明介质入射到空气，求 Brewster 角和折射角，说明反射光偏振方向。（b）线偏振光通过四分之一波片，什么条件下成为圆偏振？沿主轴入射又如何？

::: details 展开解析 14
（a）$i_B=\arctan(1/1.50)=33.69^\circ$，$r_B=56.31^\circ$，反射光电场垂直入射面。这里是从玻璃向空气入射，折射率比不能倒用。

（b）需入射偏振与两主轴成 $45^\circ$，使两个本征分量等幅，再由波片提供 $\pm\pi/2$ 相位差。若沿主轴入射，只有一个分量，仍为线偏振。
:::

## 考前公式回查

这些式子用于在已经理解条件后回忆，不宜脱离模型直接套用。

| 模型 | 核心关系 | 使用前确认 |
| --- | --- | --- |
| SHM | $x=A\cos(\omega t+\varphi)$，$a=-\omega^2x$ | 以平衡位置为原点 |
| 初值 | $A^2=x_0^2+(v_0/\omega)^2$ | 初相还要定象限 |
| 能量 | $\mathcal E=\tfrac12k_sA^2$ | 无阻尼理想振子 |
| 同频合成 | $A^2=A_1^2+A_2^2+2A_1A_2\cos\delta$ | 振动方向相同 |
| 拍频 | $\nu_b=\lvert\nu_1-\nu_2\rvert$ | 频率接近，观察强弱节奏 |
| 欠阻尼 | $\omega_d^2=\omega_0^2-\beta^2$ | $\beta<\omega_0$ |
| 位移共振 | $\Omega_r^2=\omega_0^2-2\beta^2$ | 非零峰需 $\beta<\omega_0/\sqrt2$ |
| 右行波 | $y=A\cos(\omega t-kx+\varphi)$ | $k,\omega>0$，波前已到达 |
| 质元速度 | $v_y=-uy_x$（右行） | 这是固定位置的时间变化 |
| 波强 | $I=\tfrac12\rho u\omega^2A^2$ | 理想弹性介质、位移振幅 |
| 固定端驻波 | $\nu_n=nu/(2L)$ | 两端均为位移节点 |
| Doppler | $\nu_O=\nu_S(u-v_O)/(u-v_S)$ | 有符号速度沿传播方向、相对介质 |
| 双缝间距 | $\Delta x=\lambda_0D_s/(nd)$ | 均匀介质、小角度、近同相入射 |
| 薄片位移 | $\vert x_0\vert =(D_s/d)(n_p-1)e$ | 替代空气、近法向，向薄片侧 |
| 膜传播差 | $\delta_g=2n_fh\cos r$ | 另计相对反射相位 |
| 劈尖间距 | $\ell=\lambda_0/(2n_f\alpha)$ | 等厚、微小劈角、近法向 |
| 暗环 | $r_m^2=mR\lambda_0/n_f-2Rh_0$ | 两反射相对反转、近接触 |
| 单缝暗纹 | $a\sin\theta=m\lambda$ | $m\ne0$ |
| 单缝中央全宽 | $W_0\approx2f\lambda/a$ | 小角度焦平面 |
| 光栅主峰 | $d\sin\theta=m\lambda$ | 正入射，随后检查缺级与角度范围 |
| 圆孔分辨角 | $\Delta\theta_{\min}\approx1.22\lambda/D_a$ | 圆孔直径、小角度 Rayleigh 判据 |
| Malus 定律 | $I=I_{\mathrm{in}}\cos^2\alpha$ | 输入是线偏振，$\alpha$ 为当前夹角 |
| Brewster 角 | $\tan i_B=n_2/n_1$ | 透明非磁性界面，入射介质在分母 |

## 资料来源与范围说明

课程范围依据本次 NotebookLM 导出的《大学物理期中考试全景复习笔记与备考精要》，包括其中的概念、公式、题型、术语和综合讨论主题。本文对这些主题重新组织和推导，练习题重新编写，未转载原导出的测验题，也未引用未提供的试卷。

核对中采用的公开教材和大学教学材料已在相关段落直接链接。OpenStax 的 SHM、阻尼、波能量、干涉、衍射和偏振章节用于检查基本定义与适用条件；MIT、RIT、University of Texas 及 University of Colorado 的教学材料用于补充双折射、光栅分辨与牛顿环背景。相位、能流和运动方向的具体推导标为补充或在正文中列出计算过程。

**Interpretation:** 本篇把“会背公式”转化为三个检验：能说明公式从哪里来，能识别何时不能使用，能在换一组参数后独立列式。完成十四组闭卷题后，若某一组仍需查看正文，就回到对应模块，自己重画图、重新推导一次。

[^scope]: 本篇覆盖的是这份导出明确列出的三章。导出未附教师原始考试通知、完整课件目录或可核验教材版次与页码，因此不据此承诺试卷绝无其他内容，也不编造分值比例。新增内容均服务于三章理解，并标明补充。
[^phase]: 同一余弦值通常对应两个不同相位。位置和运动方向共同确定状态；相位相差 $2\pi$ 的整数倍则描述相同周期状态。
[^standing]: “波腹位移最大时全为势能”只能在“该时刻整个驻波系统”的意义下理解。局部势能由形变决定，位移波腹的空间斜率反而为零。
[^sign]: 本篇采用 $\cos(\omega t-ks+\varphi)$。若教材采用 $\cos(ks-\omega t+\varphi)$，应整体变换初相和相位差约定，不能只改其中一个负号。
[^reflection]: $\lambda_0/2$ 是等效光程记法，没有真的多走一段路，也不表示能量凭空损失。斜入射和全反射的相位需要更完整的 Fresnel 系数。
[^polar]: “旋转检偏器看强度”只测得有限的偏振信息；圆偏振与自然光的区别在相干关系，不能凭输出是否随角度变化单独判定。
