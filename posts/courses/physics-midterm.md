---
title: "大学物理（下）期中复习：从机械振动到波动光学"
date: "2026-11-12 10:59:53 +08:00"
lastUpdated: "2026-11-12 18:15:00 +08:00"
category: 课程
tags:
  - 大学物理
  - 期中复习
  - 机械振动
  - 机械波
  - 波动光学
description: "以相位、频率与振幅为主线，重梳第九章机械振动、第十章机械波与第十一章波动光学：从微分方程与传播延迟出发推导核心公式，涵盖 21 道典型例题、14 组闭卷自测与 6 张物理图景示意。"
aigcRate: 100
aigcModels:
  - gemini
source: gemini
verified: false
---

机械振动讨论单个质点如何围绕平衡位置往复运动，机械波关心这种运动状态如何在连续介质中传递，波动光学则把同样的相位叠加规律推向高频电磁波——用光程与偏振解释明暗条纹和透射消光。

这三章表面上公式繁多，底层却共用同一套语言：**振幅决定强弱，频率决定快慢，相位决定状态与干涉明暗**。只要抓住“相位如何随时间演化、随空间滞后、在边界跳变”，散落在各节的公式就能顺着同一条物理脉络自然推演出来。[^scope]

::: info 复习建议
1. **顺读建图景**：先顺着“单点振动 → 空间行波 → 多波干涉与衍射 → 横波偏振”的主线理清每个公式的来历，遇到例题先遮住解答自己列式。
2. **精查定边界**：每个物理模型都有明确的成立前提（如小角度、近轴远场、单向行波、同相波源），结合文末的易错对照表逐一核验。
3. **闭卷做自测**：最后独立完成文末 14 组自测题，卡壳处直接回翻对应推导重画图。
:::

## 全局主线与符号约定

### 知识脉络地图

| 模块 | 核心物理问题 | 关键方法与核心任务 |
| --- | --- | --- |
| **简谐振动（SHM）** | 什么样的回复力驱动最基本的周期往复运动？ | 选静平衡点建坐标，列 $\ddot x+\omega_0^2 x=0$，由初值 $(x_0,v_0)$ 唯一定出振幅 $A$ 与初相 $\varphi$ |
| **振动的合成** | 多个周期运动叠加在同一点会画出什么轨迹？ | 同频同向用旋转矢量求和；频差极小看拍频 $|\nu_1-\nu_2|$；正交合成看相位差定椭圆与旋向 |
| **阻尼与受迫振动** | 耗散如何吃掉能量？周期外力如何维持稳态？ | 区分欠阻尼、临界阻尼与过阻尼；辨析固有频率 $\omega_0$、阻尼频率 $\omega_d$ 与位移共振频率 $\Omega_r$ |
| **简谐行波与能量** | 振源的相位状态何时传到空间另一点？ | 用传播延迟 $t-x/u$ 建立波函数；区分波形传播速度 $u$ 与质元振动速度 $v_y$；由相对形变理解行波能量 |
| **波的干涉与驻波** | 两列波相遇时如何重新分配空间的振动强弱？ | 算总相位差定加强与减弱；反向等幅波叠加出驻波，理解波节、波腹、半波损失与分段能量往返 |
| **Doppler 效应** | 波源或观察者相对于介质运动时频率如何改变？ | 以介质为参考系：波源运动改变空间波长，观察者运动改变迎波速率，反射测速连算两次 |
| **光的干涉** | 两束相干光为何在空间形成稳定的明暗条纹？ | 用折射率折算光程 $L=ns$，计入界面反射的半波损失，统一求解双缝、等倾薄膜、劈尖与牛顿环 |
| **光的衍射与分辨** | 波前被有限孔径截断后如何向几何阴影区展宽？ | 用半波带与相量积分算单缝暗纹与包络；拆解光栅的主极大、缺级与斜入射；用 Rayleigh 判据算圆孔分辨极限 |
| **光的偏振** | 横向电场矢量在垂直于传播方向的平面内如何取向？ | 鉴别五种偏振态；用 Malus 定律算级联偏振片；掌握 Brewster 角反射起偏、晶体双折射与波片相位延迟 |

### 全文符号对照

为避免不同章节的同名符号打架，全文统一采用以下记号，所有三角函数相位均以弧度（$\mathrm{rad}$）计：

| 符号 | 物理意义与单位 | 辨析与防混提示 |
| --- | --- | --- |
| $A$、$x$、$y$ | 振幅（恒非负）、振动位移（$\mathrm m$） | 位移可正可负，必须从静平衡位置量起 |
| $\nu$、$T$、$\omega$ | 频率（$\mathrm{Hz}$）、周期（$\mathrm s$）、角频率（$\mathrm{rad/s}$） | $\omega=2\pi\nu=2\pi/T$，$\omega$ 是每秒走过的相位弧度，$\nu$ 才是每秒全振动次数 |
| $k_s$ vs $k$ | 弹簧劲度系数（$\mathrm{N/m}$）vs 角波数 $k=2\pi/\lambda$（$\mathrm{rad/m}$） | 弹簧劲度系数一律加下标 $k_s$，角波数也不与干涉级次 $m$ 混用 |
| $u$ vs $v_y$ | 波形传播速度（波速）vs 介质质元振动速度（$\mathrm{m/s}$） | $u$ 由介质性质决定，$v_y=\partial y/\partial t$ 是质元在平衡位置附近的局部运动速度 |
| $\lambda_0$ vs $\lambda$ | 真空光波长 vs 介质内波长（$\mathrm m$ 或 $\mathrm{nm}$） | 机械波直接用介质波长 $\lambda$；光学中 $\lambda=\lambda_0/n$，光程公式统一折算回 $\lambda_0$ |
| $h$、$a$、$d$ | 薄膜厚度、单缝宽度、双缝间距或光栅常数 | 光栅常数 $d=a+b$ 是相邻狭缝**中心到中心**的距离，而非不透光刻痕宽度 $b$ |
| $D_s$、$D_a$、$f$ | 双缝到屏距离、圆孔孔径直径、透镜焦距（$\mathrm m$） | 三个大尺度几何量各司其职，注意圆孔公式中 $D_a$ 是直径而非半径 |
| $I$、$\mathcal E$ | 平均波强（$\mathrm{W/m^2}$）、振动系统总机械能（$\mathrm J$） | 同一介质同频率下波强 $I\propto A^2$；光学中光强正比于电场振幅平方 $E_0^2$ |

---

## 第九章　机械振动

### 1. 简谐振动的动力学判据与建模

判断一个系统是否作**简谐振动（Simple Harmonic Motion, SHM）**，唯一严格的动力学判据是它满足二阶线性常系数齐次微分方程：

$$
\ddot x+\omega_0^2x=0 \qquad (\omega_0>0)
$$

也就是说，质点所受的净回复力（或加速度）必须始终与它**偏离静平衡位置的位移** $x$ 成正比，且方向相反。“运动具有周期性”只是结果而非充分条件——比如小球在刚性地面上反复弹性碰撞也是周期运动，但绝不是简谐振动。

#### 水平与竖直弹簧振子

对质量为 $m$、劲度系数为 $k_s$ 的理想水平弹簧振子，以原长处为原点，胡克定律给出 $F=-k_sx$，代入牛顿第二定律 $m\ddot x=-k_sx$，立即得到固有角频率与固有周期：

$$
\omega_0=\sqrt{\frac{k_s}{m}}, \qquad T=2\pi\sqrt{\frac{m}{k_s}}
$$

若把弹簧竖直悬挂，重力会介入。设向下为正，弹簧相对**原长**的伸长量为 $z$，运动方程为 $m\ddot z=mg-k_sz$。先令加速度为零找出**静平衡伸长** $z_e=mg/k_s$，再改以静平衡位置为原点定义位移 $x=z-z_e$，代入后重力项与静伸长弹力项恰好抵消，方程回到标准的 $m\ddot x=-k_sx$。可见在线性弹簧模型中，恒定重力只平移平衡位置，完全不改变固有频率和周期（参见 [OpenStax University Physics Vol. 1 §15.1](https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion)）。

#### 单摆与一般势阱的小振动线性化

长为 $l$、摆锤质量为 $m$ 的单摆，沿圆弧切向的运动方程为：

$$
ml\ddot\theta=-mg\sin\theta
$$

由于 $\sin\theta$ 是非线性项，大幅单摆并不是严格的简谐振动，其周期会随振幅增大而变长。只有在小角度近似 $|\theta|\ll 1\,\mathrm{rad}$ 下，用一阶泰勒展开 $\sin\theta\approx\theta$，方程才线性化为标准 SHM：

$$
\ddot\theta+\frac{g}{l}\theta=0, \qquad T\approx 2\pi\sqrt{\frac{l}{g}}
$$

**一般系统的微振建模（补充推导）**：面对陌生的力学系统，建立小振动方程的标准三步是：
1. **找平衡点**：由净力 $F(x_e)=0$（或势能一阶导数 $V'(x_e)=0$）定出静平衡位置 $x_e$；
2. **泰勒展开**：在 $x_e$ 附近将净力展开到一阶项：$F(x)\approx F(x_e)+F'(x_e)(x-x_e)=F'(x_e)\Delta x$；
3. **认等效劲度**：若 $F'(x_e)<0$（对应势能极小值 $V''(x_e)>0$，即稳定平衡），定义等效劲度系数 $k_{\mathrm{eff}}=-F'(x_e)=V''(x_e)$，则微振动的固有角频率就是 $\omega_0=\sqrt{k_{\mathrm{eff}}/m}$。

::: note 例题 1｜竖直弹簧振子：区分原长伸长与振动位移
劲度系数 $k_s=80\,\mathrm{N/m}$ 的轻弹簧竖直悬挂 $m=0.20\,\mathrm{kg}$ 的物体。物体静止在平衡位置后，再将它向下拉 $3.0\,\mathrm{cm}$ 由静止释放，取 $g=9.8\,\mathrm{m/s^2}$，求运动方程与周期。

**解答**：
静平衡时弹簧已伸长 $z_e=mg/k_s=0.0245\,\mathrm m=2.45\,\mathrm{cm}$。振动位移 $x$ 从静平衡位置算起，因此振幅直接由额外下拉的距离给出：$A=3.0\,\mathrm{cm}=0.030\,\mathrm m$。
固有角频率 $\omega_0=\sqrt{k_s/m}=\sqrt{80/0.20}=20\,\mathrm{rad/s}$，周期 $T=2\pi/\omega_0=0.314\,\mathrm s$。
取向下为 $+x$ 方向，释放时刻 $t=0$ 位于正最大位移处（$\varphi=0$），振动方程为：

$$
x(t)=0.030\cos(20t)\,\mathrm m
$$

若问任意时刻弹簧相对**原长**的总伸长量，则是 $z(t)=z_e+x(t)=0.0245+0.030\cos(20t)\,\mathrm m$；绝不能把总伸长 $z$ 直接塞进 $\ddot z=-\omega_0^2 z$。
:::

### 2. 运动学三要素、初值定解与旋转矢量法

#### 位移、速度与加速度的相位关系

全文统一采用余弦函数表示简谐振动。设相位 $\psi(t)=\omega t+\varphi$，对时间逐次求导可得：

$$
x(t)=A\cos(\omega t+\varphi)
$$

$$
v(t)=\dot x(t)=-\omega A\sin(\omega t+\varphi)=\omega A\cos\left(\omega t+\varphi+\frac{\pi}{2}\right)
$$

$$
a(t)=\ddot x(t)=-\omega^2 A\cos(\omega t+\varphi)=-\omega^2 x(t)=\omega^2 A\cos(\omega t+\varphi+\pi)
$$

速度相位比位移**超前 $\pi/2$**，加速度相位与位移**相差 $\pi$**（时刻反向）。在一个周期的四个关键节点上，三者的消长关系如下：

| 瞬时位置与运动趋势 | 位移 $x$ | 速度 $v$ | 加速度 $a$ | 物理图景 |
| --- | --- | --- | --- | --- |
| 正端点（$\psi=0$） | $+A$ | $0$ | $-\omega^2 A$ | 瞬时折返点：速度为零，但指向负方向的回复加速度最大 |
| 向负向过平衡点（$\psi=\pi/2$） | $0$ | $-\omega A$ | $0$ | 净力为零，动能最大，凭惯性冲向负端点 |
| 负端点（$\psi=\pi$） | $-A$ | $0$ | $+\omega^2 A$ | 瞬时折返点：速度为零，指向正方向的回复加速度最大 |
| 向正向过平衡点（$\psi=3\pi/2$） | $0$ | $+\omega A$ | $0$ | 净力为零，动能最大，凭惯性冲向正端点 |

#### 由初始条件求 $A$ 与 $\varphi$：避开反正切象限陷阱

给定 $t=0$ 时的初位移 $x_0$ 和初速度 $v_0$，代入运动学公式有：

$$
x_0=A\cos\varphi, \qquad v_0=-\omega A\sin\varphi
$$

消去 $\varphi$ 得振幅公式；同时联立 $\cos\varphi$ 与 $\sin\varphi$ 的正负号唯一确定初相所在的象限[^phase]：

$$
A=\sqrt{x_0^2+\left(\frac{v_0}{\omega}\right)^2}, \qquad \cos\varphi=\frac{x_0}{A}, \quad \sin\varphi=-\frac{v_0}{\omega A}
$$

若写成单变量形式，应当用四象限反正切函数 $\varphi=\operatorname{atan2}(-v_0/\omega,\,x_0)$。如果只算 $\tan\varphi=-v_0/(\omega x_0)$ 并直接按计算器的 $\arctan$ 键，计算器只会返回 $(-\pi/2,\pi/2)$ 内的主值，一旦 $x_0<0$ 就会把初相错判 $\pi$（当 $A=0$ 即系统完全静止时，初相无意义，无需定义）。

::: note 例题 2｜由初值定初相的四象限判定
简谐振子 $\omega=10\,\mathrm{rad/s}$，在 $t=0$ 时位于 $x_0=-0.030\,\mathrm m$，且正以 $v_0=+0.40\,\mathrm{m/s}$ 向正方向运动，求振幅与初相。

**解答**：
先算 $v_0/\omega=+0.040\,\mathrm m$，故振幅为：

$$
A=\sqrt{(-0.030)^2+(0.040)^2}=0.050\,\mathrm m
$$

再看三角函数符号：$\cos\varphi=x_0/A=-0.6<0$，$\sin\varphi=-v_0/(\omega A)=-0.8<0$。正弦、余弦同为负，说明 $\varphi$ 落在**第三象限**（$(-\pi,-\pi/2)$ 或 $(\pi,3\pi/2)$），查表计算得 $\varphi\approx -2.214\,\mathrm{rad}$（或 $+4.069\,\mathrm{rad}$）。将 $\varphi=-2.214\,\mathrm{rad}$ 回代，即可验证 $x(0)=-0.030\,\mathrm m$ 且 $v(0)=+0.40\,\mathrm{m/s}$。
:::

#### 旋转矢量法（Phasor）与图像读取

为了直观追踪相位，我们在平面上画一个长度为 $A$ 的辅助矢量，令其原点固定，在 $t=0$ 时与 $+x$ 轴夹角为 $\varphi$，随后以恒定角速度 $\omega$ **逆时针旋转**。它在水平轴 $+x$ 上的投影就是 $x(t)=A\cos(\omega t+\varphi)$。

![旋转矢量与简谐振动的四个状态](/images/physics-midterm/phasor.svg "旋转矢量沿圆周逆时针匀速转动，其水平投影即为简谐振动；同一水平位置对应上下两个旋转状态，分别代表相反的速度方向")

使用旋转矢量时要注意两点：
1. **辅助圆不是真实轨迹**：振子始终在一条直线上往复运动，$v$ 和 $a$ 是矢量端点**水平投影坐标**的一阶、二阶时间导数，绝不能把匀速圆周运动的向心加速度直接当成振子的直线加速度。
2. **用转角算历时**：质点从状态 1 运动到状态 2 所花的时间，等于旋转矢量逆时针转过的正角度 $\Delta\psi$ 除以 $\omega$：

$$
\Delta t=\frac{\Delta\psi}{\omega} \qquad (\Delta\psi>0)
$$

同一个位移 $x\in(-A,A)$ 在圆周上对应上下两个对称点（一个在上半圆向左走 $v<0$，一个在下半圆向右走 $v>0$）。审题时看到“第一次到达”“沿正方向经过”“第二次经过”，先在圆上标出起点和终点的象限，数准转过的弧度 $\Delta\psi$，时间就一目了然。

::: note 例题 3｜用旋转矢量心算两点间运动时间
质点作周期为 $T$ 的简谐振动，求：（1）从平衡位置 $x=0$ 沿 $+x$ 方向出发，第一次到达 $x=A/2$ 所需时间；（2）从正端点 $x=+A$ 出发，第一次到达 $x=A/2$ 所需时间。

**解答**：
（1）在 $x=0$ 且 $v>0$，旋转矢量指向正下方，起始相位 $\psi_1=-\pi/2$；继续逆时针转到下半圆的 $x=A/2$ 处，终态相位 $\psi_2=-\pi/3$。转过角度 $\Delta\psi=(-\pi/3)-(-\pi/2)=\pi/6$，故 $\Delta t=(\pi/6)/\omega=T/12$。
（2）从正端点 $\psi_1=0$ 逆时针转到上半圆的 $x=A/2$（此时向负方向运动），终态相位 $\psi_2=+\pi/3$，转过角度 $\Delta\psi=\pi/3$，故 $\Delta t=T/6$。同样是半振幅距离，靠近平衡位置速度大、历时短（$T/12$），靠近端点速度慢、历时长（$T/6$）。
:::

在**振动图（$x\text{-}t$ 图）**上，纵坐标是位移，切线斜率是速度 $v$，曲线的凹凸方向对应加速度 $a$ 的正负；相邻两次过零点的时间间隔是 $T/2$，只有**相邻两次以相同方向通过同一位置**的时间间隔才是一个完整周期 $T$。若消去时间 $t$，则得到**相平面轨迹（相图）**：

$$
x^2+\frac{v^2}{\omega^2}=A^2 \quad\Longleftrightarrow\quad v=\pm\omega\sqrt{A^2-x^2}
$$

相图是一族椭圆，给出位置与速率的瞬时对应关系，但速度的正负号仍需由运动阶段确定。

### 3. 简谐振动的能量转换

对无阻尼理想弹簧振子（竖直弹簧将重力势能与弹性势能合并，并以静平衡点为势能零点），系统的势能、动能与总机械能分别为：

$$
E_p=\frac{1}{2}k_sx^2=\frac{1}{2}k_sA^2\cos^2(\omega t+\varphi)
$$

$$
E_k=\frac{1}{2}mv^2=\frac{1}{2}k_sA^2\sin^2(\omega t+\varphi)
$$

$$
\mathcal E=E_k+E_p=\frac{1}{2}k_sA^2=\frac{1}{2}m\omega_0^2A^2=\text{常量}
$$

简谐振动的机械能守恒且**严格正比于振幅的平方 $A^2$**。由于 $\cos^2\psi=(1+\cos 2\psi)/2$，动能和势能各自以 $2\omega$ 的角频率（即周期为 $T/2$）在 $0$ 与 $\mathcal E$ 之间消长转化；在一个完整周期内，两者的时间平均值严格相等：

$$
\langle E_k\rangle=\langle E_p\rangle=\frac{1}{4}k_sA^2=\frac{1}{2}\mathcal E
$$

::: note 例题 4｜由动势能比例反推位置与速率
简谐振子在某时刻动能恰好是势能的 $3$ 倍（$E_k=3E_p$），求此时质点的位置与速率。

**解答**：
由 $\mathcal E=E_k+E_p=4E_p$ 得 $\frac{1}{2}k_sA^2=4\left(\frac{1}{2}k_sx^2\right)$，故 $x^2=A^2/4$，即 $x=\pm A/2$。
同理 $E_k=\frac{3}{4}\mathcal E$，故 $|v|=\frac{\sqrt 3}{2}\omega A$。仅凭能量这一个标量比例，无法区分质点在正半轴还是负半轴，也无法确定它正向哪边走（共有四个相位点满足该能量比）。
:::

### 4. 振动的合成：同频、拍与正交 Lissajous 图形

#### 同方向、同频率简谐振动的合成

设两个同方向、同角频率 $\omega$ 的简谐振动分别为 $x_1=A_1\cos(\omega t+\varphi_1)$ 与 $x_2=A_2\cos(\omega t+\varphi_2)$。将两者的旋转矢量首尾相接，由余弦定理立得合振动 $x=x_1+x_2=A\cos(\omega t+\varphi)$ 的振幅与初相：

$$
A=\sqrt{A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi}, \qquad \Delta\varphi=\varphi_2-\varphi_1
$$

对两个或更多同频振动的合成，最稳妥的计算方式是投影到正交轴上求分量和：

$$
C=\sum_j A_j\cos\varphi_j, \qquad S=\sum_j A_j\sin\varphi_j \quad\Longrightarrow\quad A=\sqrt{C^2+S^2}, \quad \varphi=\operatorname{atan2}(S,C)
$$

当两分振动同相（$\Delta\varphi=2m\pi$）时，合振幅最大 $A_{\max}=A_1+A_2$；当两分振动反相（$\Delta\varphi=(2m+1)\pi$）时，合振幅最小 $A_{\min}=|A_1-A_2|$。注意：**反相并不等于合振幅为零**，只有反相且等幅（$A_1=A_2$）时合运动才完全抵消静止（此时 $A=0$，不再定义合初相）。

::: note 例题 5｜正交初相的同频合成
求 $x_1=0.030\cos(\omega t)\,\mathrm m$ 与 $x_2=0.040\cos(\omega t+\pi/2)\,\mathrm m$ 的合振动方程。

**解答**：
两分振动相位差为 $\pi/2$，投影分量分别为 $C=0.030+0=0.030\,\mathrm m$，$S=0+0.040=0.040\,\mathrm m$。
合振幅 $A=\sqrt{0.030^2+0.040^2}=0.050\,\mathrm m$（而非代数和 $0.070\,\mathrm m$），合初相 $\varphi=\operatorname{atan2}(0.040,0.030)\approx 0.9273\,\mathrm{rad}$，故 $x(t)=0.050\cos(\omega t+0.9273)\,\mathrm m$。
:::

#### 同方向、相近频率的合成：拍（Beats）

若两个分振动频率不同，合运动一般不再是单一频率的简谐振动。当两者频率非常接近（$|\omega_1-\omega_2|\ll(\omega_1+\omega_2)/2$）时，以等幅初相为零的 $x_1=A\cos\omega_1 t$、$x_2=A\cos\omega_2 t$ 为例，和差化积给出：

$$
x(t)=x_1+x_2=\left[2A\cos\left(\frac{\omega_1-\omega_2}{2}t\right)\right]\cos\left(\frac{\omega_1+\omega_2}{2}t\right)
$$

这表现为角频率为平均频率 $(\omega_1+\omega_2)/2$ 的快速振动，其振幅被慢变因子调制。由于物理振幅非负，慢包络的瞬时振幅为：

$$
A_{\mathrm{env}}(t)=2A\left|\cos\left(\frac{\omega_1-\omega_2}{2}t\right)\right|
$$

因为取了绝对值，$\cos\left(\frac{\Delta\omega}{2}t\right)$ 每周期内的一个正峰和一个负峰都会听成一次“声音最强（合振幅达到 $2A$）”。因此单位时间内强弱起伏的次数——**拍频**——等于两频率之差的绝对值，而非频差的一半：

$$
\nu_b=|\nu_1-\nu_2|, \qquad T_b=\frac{1}{\nu_b}=\frac{1}{|\nu_1-\nu_2|}
$$

例えば $\nu_1=250\,\mathrm{Hz}$ 与 $\nu_2=254\,\mathrm{Hz}$ 的音叉同时发声，每秒听到 $4$ 次拍，相邻两次最强音间隔 $T_b=0.25\,\mathrm s$。若两分振动振幅不等（$A_1\ne A_2$），拍频依然是 $|\nu_1-\nu_2|$，只是包络极小值停在 $|A_1-A_2|$ 而不会降到零。

#### 相互垂直振动的合成与 Lissajous 图形

设质点在平面内同时参与两个相互垂直的同频简谐振动：

$$
x=A_x\cos\psi, \qquad y=A_y\cos(\psi+\delta) \qquad (\psi=\omega t+\varphi_x,\ \delta=\varphi_y-\varphi_x)
$$

将 $y/A_y=\cos\psi\cos\delta-\sin\psi\sin\delta=(x/A_x)\cos\delta-\sin\psi\sin\delta$ 移项平方以消去 $\psi$，得到平面内的轨迹方程：

$$
\frac{x^2}{A_x^2}+\frac{y^2}{A_y^2}-\frac{2xy}{A_xA_y}\cos\delta=\sin^2\delta
$$

| 相位差 $\delta=\varphi_y-\varphi_x$ | 轨迹形状与方程 | 运动方向（取 $+x$ 向右、$+y$ 向上） |
| --- | --- | --- |
| $\delta=0$（同相） | 一、三象限对角直线段 $y=+(A_y/A_x)x$ | 沿直线段往返运动 |
| $\delta=\pi$（反相） | 二、四象限对角直线段 $y=-(A_y/A_x)x$ | 沿直线段往返运动 |
| $\delta=+\pi/2$（$y$ 超前 $x$） | 正椭圆 $\frac{x^2}{A_x^2}+\frac{y^2}{A_y^2}=1$（$A_x=A_y$ 时为圆） | **顺时针**旋转 |
| $\delta=-\pi/2$（$y$ 落后 $x$） | 正椭圆 $\frac{x^2}{A_x^2}+\frac{y^2}{A_y^2}=1$（$A_x=A_y$ 时为圆） | **逆时针**旋转 |
| 其他非退化 $\delta$ | 主轴倾斜的内接椭圆（位于 $[-A_x,A_x]\times[-A_y,A_y]$ 矩形内） | 由 $\sin\delta$ 符号定：$\sin\delta>0$ 顺时针，$\sin\delta<0$ 逆时针 |

**判断椭圆旋向的秒杀法**：不要死背顺逆时针表格，直接看 $\psi=0$ 那一刻——此时质点恰好位于最右端点 $x=+A_x$，其纵向速度为 $v_y=-\omega A_y\sin\delta$。若 $v_y<0$（在最右端向下走），必然是**顺时针**；若 $v_y>0$（在最右端向上走），必然是**逆时针**。这一套几何图景到第十一章讨论光的椭圆偏振与圆偏振时还会原封不动地重现。

若两个垂直振动的频率不同，轨迹一般更加复杂，称为 **Lissajous 图形**。当频率成有理数比 $\nu_x:\nu_y=p:q$（$p,q$ 为互质正整数）时，经过最小公共周期 $T_c=p/\nu_x=q/\nu_y$，$x$ 方向完成 $p$ 次全振动、$y$ 方向完成 $q$ 次全振动，轨迹精确闭合（例如 $x=A\cos 2\Omega t$、$y=B\cos(3\Omega t+\delta)$ 在 $T_c=2\pi/\Omega$ 内横向往返 $2$ 次、纵向往返 $3$ 次）；若频率比为无理数，轨迹永不闭合，将稠密地填满矩形区域。在非退化（无轨迹折返重合）情形下，图形与水平边界相切的点数和与竖直边界相切的点数之比等于 $\nu_y:\nu_x$，但遇退化折返图形时直接回归参数方程数周期最稳妥。

### 5. 阻尼振动与受迫共振

#### 线性阻尼振动的三种形态

真实系统不可避免地存在耗散。在速度不太大时，黏滞阻力与速度成正比：$F_d=-\gamma\dot x$（$\gamma>0$ 为阻力系数）。牛顿第二定律给出阻尼振动方程：

$$
m\ddot x+\gamma\dot x+k_sx=0 \quad\Longleftrightarrow\quad \ddot x+2\beta\dot x+\omega_0^2 x=0
$$

其中 $\beta=\gamma/(2m)$ 称为**阻尼系数**，$\omega_0=\sqrt{k_s/m}$ 仍为无阻尼固有角频率。代入指数试探解 $x=e^{rt}$，特征方程 $r^2+2\beta r+\omega_0^2=0$ 的根为 $r=-\beta\pm\sqrt{\beta^2-\omega_0^2}$。按 $\beta$ 与 $\omega_0$ 的相对大小，解呈现三种截然不同的物理形态（参见 [OpenStax Vol. 1 §15.5](https://openstax.org/books/university-physics-volume-1/pages/15-5-damped-oscillations)）：

| 阻尼状态 | 判据 | 运动方程与物理行为 |
| --- | --- | --- |
| **欠阻尼**（Underdamped） | $0<\beta<\omega_0$ | $x(t)=A_0e^{-\beta t}\cos(\omega_d t+\varphi)$，其中 $\omega_d=\sqrt{\omega_0^2-\beta^2}<\omega_0$。系统往复振荡，振幅按指数包络衰减，准周期 $T_d=2\pi/\omega_d>T_0$ 被阻尼拉长 |
| **临界阻尼**（Critically damped） | $\beta=\omega_0$ | $x(t)=(C_1+C_2 t)e^{-\beta t}$。特征方程有重根，系统不再持续往复振荡，能最快地平缓回到平衡位置，常用于仪表指针、闭门器的快速复位设计（特定初速度下至多越过平衡点一次） |
| **过阻尼**（Overdamped） | $\beta>\omega_0$ | $x(t)=C_1e^{-(\beta-\sqrt{\beta^2-\omega_0^2})t}+C_2e^{-(\beta+\sqrt{\beta^2-\omega_0^2})t}$。阻尼过大拖慢运动，系统不振荡，缓慢爬回平衡位置 |

在欠阻尼情形下，每隔一个准周期 $T_d$，同向相邻两次峰值振幅之比为一常数，其自然对数定义为**对数减量** $\Lambda$：

$$
\Lambda=\ln\frac{A(t)}{A(t+T_d)}=\beta T_d
$$

对机械能 $\mathcal E=\frac{1}{2}m\dot x^2+\frac{1}{2}k_sx^2$ 求时间导数，结合运动方程可得瞬时功率耗散率：

$$
\frac{\mathrm d\mathcal E}{\mathrm dt}=\dot x(m\ddot x+k_sx)=-\gamma\dot x^2\le 0
$$

在经过平衡位置时速率最大、能量耗散最快；在端点折返瞬间 $\dot x=0$，耗散率瞬时为零（因此瞬时机械能呈台阶状下降，而在弱阻尼 $\beta\ll\omega_0$ 下，一个周期内的平均机械能按 $e^{-2\beta t}$ 指数衰减）。

::: note 例题 6｜由相邻振幅衰减测定阻尼系数与固有频率
某欠阻尼振子实测准周期为 $T_d=0.50\,\mathrm s$，连续两个同向波峰的幅度分别为 $4.0\,\mathrm{cm}$ 和 $3.0\,\mathrm{cm}$，求阻尼系数 $\beta$ 与系统的无阻尼固有角频率 $\omega_0$。

**解答**：
由对数减量公式 $\beta T_d=\ln(4.0/3.0)$，得：

$$
\beta=\frac{\ln(4/3)}{0.50}\approx 0.5754\,\mathrm{s^{-1}}
$$

准角频率为 $\omega_d=2\pi/T_d=4\pi\approx 12.566\,\mathrm{rad/s}$。再由 $\omega_d=\sqrt{\omega_0^2-\beta^2}$ 反推无阻尼固有角频率：

$$
\omega_0=\sqrt{\omega_d^2+\beta^2}=\sqrt{(4\pi)^2+0.5754^2}\approx 12.580\,\mathrm{rad/s}
$$
:::

#### 受迫振动、稳态响应与共振频率辨析

给阻尼振子加上周期性简谐驱动力 $F(t)=F_0\cos\Omega t$，运动方程成为非齐次线性常微分方程：

$$
\ddot x+2\beta\dot x+\omega_0^2 x=\frac{F_0}{m}\cos\Omega t
$$

其通解是“齐次通解（按 $e^{-\beta t}$ 衰减的暂态自由振动）”与“非齐次特解（稳态受迫振动）”之和。只要存在阻尼（$\beta>0$），经过足够长时间后暂态项消失，系统进入**稳态受迫振动**（参见 [OpenStax Vol. 1 §15.6](https://openstax.org/books/university-physics-volume-1/pages/15-6-forced-oscillations)）：

$$
x(t)=A(\Omega)\cos(\Omega t-\eta)
$$

$$
A(\Omega)=\frac{F_0/m}{\sqrt{(\omega_0^2-\Omega^2)^2+4\beta^2\Omega^2}}, \qquad \eta=\operatorname{atan2}(2\beta\Omega,\,\omega_0^2-\Omega^2)\in(0,\pi)
$$

这里必须分清**稳态振动的真实频率始终等于驱动力频率 $\Omega$**，而不是固有频率 $\omega_0$。相位落后角 $\eta$ 随驱动频率呈现鲜明的三段特征：
- **低频准静态区（$\Omega\ll\omega_0$）**：$\eta\to 0$，位移与驱动力几乎同相，$A\approx F_0/k_s$；
- **固有频率处（$\Omega=\omega_0$）**：$\eta=\pi/2$，位移落后驱动力 $\pi/2$，此时速度 $v=-\Omega A\sin(\Omega t-\pi/2)=\Omega A\cos\Omega t$ 与驱动力**完全同相**，外力时刻做正功；
- **高频惯性区（$\Omega\gg\omega_0$）**：$\eta\to\pi$，位移与驱动力几乎反相，$A\propto\Omega^{-2}\to 0$。

**位移共振与速度共振的极值推导**：
若问驱动频率 $\Omega$ 取何值时**位移振幅 $A(\Omega)$ 最大**，只需令根号内的分母平方 $g(\Omega)=(\omega_0^2-\Omega^2)^2+4\beta^2\Omega^2$ 对 $\Omega$ 求导：

$$
\frac{\mathrm dg}{\mathrm d\Omega}=4\Omega(\Omega^2-\omega_0^2+2\beta^2)=0
$$

当且仅当阻尼足够小、满足 **$\beta<\omega_0/\sqrt 2$** 时，在非零正频率处存在**位移共振峰**：

$$
\Omega_r=\sqrt{\omega_0^2-2\beta^2}, \qquad A_{\max}=\frac{F_0}{2m\beta\sqrt{\omega_0^2-\beta^2}}
$$

一旦 $\beta\ge\omega_0/\sqrt 2$，$g(\Omega)$ 在 $\Omega>0$ 上单调递增，$A(\Omega)$ 从 $\Omega=0$ 起单调下降，不再出现非零频率的位移共振峰！反之，若考察**速度振幅** $v_{\max}(\Omega)=\Omega A(\Omega)=\frac{F_0/m}{\sqrt{(\omega_0^2/\Omega-\Omega)^2+4\beta^2}}$（或外力平均输入功率），则不论阻尼多大，峰值永远严格落在 **$\Omega=\omega_0$** 处（速度共振 / 功率共振）。

工程上常用**品质因数** $Q=\omega_0/(2\beta)$ 度量共振的尖锐程度：阻尼越小，$Q$ 值越高，共振峰越陡峭，且 $\Omega_r$、$\omega_d$ 与 $\omega_0$ 三者越接近。

| 频率名称 | 符号与表达式 | 出现条件与物理意义 | 数值对照（设 $\omega_0=10\,\mathrm{rad/s},\ \beta=2\,\mathrm{s^{-1}}$） |
| --- | --- | --- | --- |
| 无阻尼固有频率 | $\omega_0=\sqrt{k_s/m}$ | 理想无耗散自由振动频率，也是**速度/功率共振频率** | $10.000\,\mathrm{rad/s}$（此时 $Q=2.5$） |
| 欠阻尼自由频率 | $\omega_d=\sqrt{\omega_0^2-\beta^2}$ | 需 $\beta<\omega_0$（即 $Q>1/2$），无外力时衰减振荡的准频率 | $\sqrt{96}\approx 9.798\,\mathrm{rad/s}$ |
| 位移共振频率 | $\Omega_r=\sqrt{\omega_0^2-2\beta^2}$ | 需 $\beta<\omega_0/\sqrt 2$（即 $Q>1/\sqrt 2$），稳态位移振幅的峰值频率 | $\sqrt{92}\approx 9.592\,\mathrm{rad/s}$ |
| 稳态受迫频率 | $\Omega$（由外部驱动源给定） | 只要系统进入稳态，实际每秒振动的角频率就等于 $\Omega$ | 由外力决定 |

---

## 第十章　机械波

### 1. 波的产生、模式与传播速度

机械波的形成离不开两个要素：**作机械振动的波源**，以及**能够通过弹性相互作用传递局部形变的连续介质**。波在介质中传播时，向外行进的是**振动状态（相位）与能量**，而介质中的各个质元只是在各自的平衡位置附近往复运动，并不随波形做宏观迁移。

按质元振动方向与波传播方向的几何关系，最基本的两类体波是：
- **横波（Transverse wave）**：质元振动方向**垂直**于波的传播方向，依赖介质的剪切弹性（切变模量）。理想流体（液体与气体）内部无法承受静态剪切应力，因此在流体内部不能传播纯横向剪切波；但**水面波属于界面波**，受重力与表面张力共同支配，水面质元作椭圆或圆轨迹的复合运动，兼具横向与纵向分量。
- **纵波（Longitudinal wave）**：质元振动方向**平行**于波的传播方向，表现为介质的疏密相间，依赖体积弹性或拉伸弹性，在固体、液体和气体中均可传播。

在给定的线性非色散介质与确定波模式下，波速 $u$ 完全由介质的**弹性模量**与**惯性（密度）**决定：

$$
u_{\mathrm{string}}=\sqrt{\frac{F_T}{\mu}}, \qquad u_{\mathrm{fluid}}=\sqrt{\frac{B}{\rho}}, \qquad u_{\mathrm{rod}}\approx\sqrt{\frac{Y}{\rho}}
$$

三式分别对应：张力为 $F_T$、线密度为 $\mu$ 的张紧柔绳上的横波；体积模量为 $B$、体密度为 $\rho$ 的流体中的纵波（声波）；以及杨氏模量为 $Y$ 的**细长固体杆**中的一维纵向伸缩波（无限大三维固体中的纵波速度还涉及泊松比，与细杆公式不同）。

一旦波源频率 $\nu$（周期 $T=1/\nu$、角频率 $\omega=2\pi\nu$）和介质波速 $u$ 确定，空间中相邻两个同相点之间的距离——**波长 $\lambda$**——与**角波数 $k$** 即由下式锁定：

$$
u=\lambda\nu=\frac{\lambda}{T}=\frac{\omega}{k}, \qquad k=\frac{2\pi}{\lambda}
$$

当一列周期波穿过两种静止介质的分界面时，界面两侧质元必须同步受迫响应，故**频率 $\nu$（及 $\omega$）跨界面严格保持不变**，而波速 $u$ 与波长 $\lambda$ 按介质性质同步缩放（若介质存在色散，波速 $u(\omega)$ 本身还会随频率变化）。

### 2. 平面简谐行波：从传播延迟建立波函数

设波源位于原点 $x=0$，其振动方程为 $y(0,t)=A\cos(\omega t+\varphi)$。若波以恒定波速 $u$ 沿 $+x$ 方向无衰减地传播，那么空间任意位置 $x$ 处在时刻 $t$ 的振动状态，正是波源在较早时刻 $t'=t-x/u$ 发出的状态（状态传过距离 $x$ 耗时 $\Delta t=x/u$）。直接把 $t$ 替换为延迟时间 $t-x/u$，就得到沿 $+x$ 传播的平面简谐行波函数[^sign]：

$$
y(x,t)=y\left(0,t-\frac{x}{u}\right)=A\cos\left[\omega\left(t-\frac{x}{u}\right)+\varphi\right]=A\cos(\omega t-kx+\varphi)
$$

若波沿 $-x$ 方向传播，位置 $x$ 处的状态比原点**超前** $x/u$（或者说原点接收的是 $+x$ 处传来的滞后状态），时间替换改为 $t+x/u$：

$$
y(x,t)=A\cos\left[\omega\left(t+\frac{x}{u}\right)+\varphi\right]=A\cos(\omega t+kx+\varphi)
$$

更一般地，如果题目已知的是某参考点 $x=x_0$ 处的振动方程 $y(x_0,t)=A\cos(\omega t+\varphi_0)$，只需把相对位移 $(x-x_0)$ 代入延迟项：
- **沿 $+x$ 传播**：$y(x,t)=A\cos\left[\omega\left(t-\frac{x-x_0}{u}\right)+\varphi_0\right]$
- **沿 $-x$ 传播**：$y(x,t)=A\cos\left[\omega\left(t+\frac{x-x_0}{u}\right)+\varphi_0\right]$

（注：若波源从 $t=0$ 才开始起振，上述波函数仅在波前已到达的区域 $|x-x_0|\le ut$ 内成立，波前之外介质仍处于静止未扰动状态。）

::: tip 一眼锁定波的传播方向
不要死记“括号里减号向右、加号向左”（因为 $\cos(kx-\omega t)$ 与 $\cos(\omega t-kx)$ 完全恒等，符号位置变了但传播方向没变）。最可靠的方法是**追踪等相面**：令相位 $\Phi=\omega t\mp kx+\varphi=\text{常数}$，对时间求微分得 $\omega\,\mathrm dt\mp k\,\mathrm dx=0$。
- 若 $t$ 与 $x$ 前的系数**异号**，则 $\frac{\mathrm dx}{\mathrm dt}=+\frac{\omega}{k}=+u>0$，波形沿 $+x$ 传播；
- 若 $t$ 与 $x$ 前的系数**同号**，则 $\frac{\mathrm dx}{\mathrm dt}=-\frac{\omega}{k}=-u<0$，波形沿 $-x$ 传播。
:::

::: note 例题 7｜由非原点处的已知振动建立整列行波方程
已知 $x_0=0.30\,\mathrm m$ 处质元的振动方程为 $y=0.020\cos(4\pi t+\pi/3)\,\mathrm m$，波以 $u=2.0\,\mathrm{m/s}$ 沿 $+x$ 方向传播，求波函数、频率与波长。

**解答**：
由 $\omega=4\pi\,\mathrm{rad/s}$ 得频率 $\nu=\omega/(2\pi)=2.0\,\mathrm{Hz}$，波长 $\lambda=u/\nu=2.0/2.0=1.0\,\mathrm m$。
波沿 $+x$ 传播，直接代入相对坐标 $(x-0.30)$ 的传播延迟：

$$
y(x,t)=0.020\cos\left[4\pi\left(t-\frac{x-0.30}{2.0}\right)+\frac{\pi}{3}\right]=0.020\cos\left(4\pi t-2\pi x+\frac{14\pi}{15}\right)\,\mathrm m
$$

写完后立即将 $x=0.30\,\mathrm m$ 代回，相位还原为 $4\pi t+\pi/3$，验算通过。
:::

### 3. 波形图 vs 振动图：偏导数、质元速度与波动方程

初学者最容易混淆**振动图（$y\text{-}t$ 图）**和**波形图（$y\text{-}x$ 图）**，以及**波速 $u$** 和**质元振动速度 $v_y$**。由于波函数 $y(x,t)$ 是二元函数，两幅图像分别对应固定一个自变量的截面：

| 对比维度 | 振动图 $y\text{-}t$ | 波形图 $y\text{-}x$ |
| --- | --- | --- |
| **物理视角** | 盯住**某一个固定质元** $x=x_0$，连续录像记录它随时间的往复过程 | 在**某一个固定时刻** $t=t_0$，给整条绳子拍一张空间快照 |
| **横轴与周期量** | 横轴为时间 $t$，相邻同相峰间距为**周期 $T$** | 横轴为空间位置 $x$，相邻同相峰间距为**波长 $\lambda$** |
| **切线斜率的物理意义** | 时间偏导数 $v_y=\frac{\partial y}{\partial t}$，直接给出该质元的**瞬时振动速度** | 空间偏导数 $y_x=\frac{\partial y}{\partial x}$，代表该处绳子的**局部倾斜斜率（切应变）** |

对任意单向行波 $y(x,t)=F(x\mp ut)$（上号沿 $+x$，下号沿 $-x$），用链式法则分别对时间和空间求一阶偏导数， immediately reveals the bridge between temporal velocity and spatial slope:

$$
v_y=\frac{\partial y}{\partial t}=\mp u\frac{\partial y}{\partial x}
$$

- **右行波（$v_y=-u\,\partial y/\partial x$）**：质元振动速度与波形斜率反号——在波形图的**上坡段**（$\partial y/\partial x>0$）质元向下运动（$v_y<0$），在**下坡段**（$\partial y/\partial x<0$）质元向上运动（$v_y>0$），可简记为“**右行波：上坡下，下坡上**”（因为右侧稍靠左的波形正要平移过来取代当前位置）。
- **左行波（$v_y=+u\,\partial y/\partial x$）**：符号相反，“**左行波：上坡上，下坡下**”。
- **质元加速度**：对简谐波总是 $a_y=\frac{\partial^2 y}{\partial t^2}=-\omega^2 y$，永远指向平衡位置 $y=0$（在横轴上方则加速度向下，在横轴下方则加速度向上），与波向左还是向右传播毫无关系。

![同一右行波在两个时刻的波形以及质元的运动](/images/physics-midterm/traveling-wave.svg "实线与虚线分别为 t 和 t+Δt 时刻的波形快照：整条波形向右平移 uΔt，而各横坐标处的质元只沿竖直方向升降")

若对 $y=F(x\mp ut)$ 继续求二阶偏导，消去任意波形函数 $F''$，便得到一维线性非色散波普遍遵循的**波动微分方程**：

$$
\frac{\partial^2 y}{\partial t^2}=u^2\frac{\partial^2 y}{\partial x^2}
$$

注意术语区分：偏微分方程 $\partial_{tt}y=u^2\partial_{xx}y$ 是所有一维行波满足的动力学普遍方程，而 $y=A\cos(\omega t-kx+\varphi)$ 是它在简谐波源驱动下的一个特解（中文题目有时将求波函数 $y(x,t)$ 也俗称为“求波动方程”，按题设已知条件写出解析式即可）。

此外，仅凭一张静态波形图 $y(x,t_0)$ 只能读出振幅 $A$ 与波长 $\lambda$，还必须结合波速 $u$、某一质元的瞬时速度方向，或另一时刻 $t_1$ 的波形图才能确定频率与传播方向（若题目给出相隔 $\Delta t$ 的两张波形图且未限制 $\Delta t<T$，要注意波形平移距离可能包含整数个波长 $n\lambda$，带来多解）。

::: note 例题 8｜辨析波速、最大振速与瞬时振速
一列简谐横波的波函数为 $y(x,t)=0.010\cos(20\pi t-5\pi x+\pi/2)\,\mathrm m$（$x$ 以 $\mathrm m$ 计，$t$ 以 $\mathrm s$ 计）。求振幅、频率、波长、波速、质元最大振速，以及 $t=0$ 时原点 $x=0$ 处质元的速度与加速度。

**解答**：
对比标准形式 $A\cos(\omega t-kx+\varphi)$，直接读出 $A=0.010\,\mathrm m$，$\omega=20\pi\,\mathrm{rad/s}$，故 $\nu=\omega/(2\pi)=10\,\mathrm{Hz}$；角波数 $k=5\pi\,\mathrm{rad/m}$，故波长 $\lambda=2\pi/k=0.40\,\mathrm m$。
- **波形传播速度（波速）**：$u=\omega/k=20\pi/(5\pi)=4.0\,\mathrm{m/s}$（沿 $+x$ 方向）。
- **质元最大振动速率**：$v_{y,\max}=\omega A=20\pi\times 0.010=0.20\pi\approx 0.6283\,\mathrm{m/s}$。
- **原点在 $t=0$ 的瞬时状态**：相位 $\Phi(0,0)=\pi/2$，故位移 $y(0,0)=0$，瞬时振速 $v_y(0,0)=-\omega A\sin(\pi/2)=-0.6283\,\mathrm{m/s}$，瞬时加速度 $a_y(0,0)=-\omega^2 y(0,0)=0$。可见波速 $4.0\,\mathrm{m/s}$ 与质元振速完全是两个物理量。
:::

#### 相位差的计算

对沿 $+x$ 传播的简谐波 $\Phi(x,t)=\omega t-kx+\varphi$，任意两个时空事件 $(x_1,t_1)$ 与 $(x_2,t_2)$ 的相位差为：

$$
\Delta\Phi=\Phi(x_2,t_2)-\Phi(x_1,t_1)=\omega(t_2-t_1)-k(x_2-x_1)
$$

- **同一位置比较不同时刻（$\Delta x=0$）**：$\Delta\Phi=\omega\Delta t=\frac{2\pi}{T}\Delta t$；
- **同一时刻比较不同位置（$\Delta t=0$）**：$\Delta\Phi=-k\Delta x=-\frac{2\pi}{\lambda}(x_2-x_1)$。沿波的传播方向每前进一个波长 $\lambda$，相位落后 $2\pi$（同相）；每前进半个波长 $\lambda/2$，相位落后 $\pi$（反相）。回答“谁比谁超前多少”时，顺着波的传播方向看，上游（靠近波源一侧）的质元相位永远超前于下游质元。

### 4. 行波的能量、能流密度与几何衰减

孤立弹簧振子机械能守恒，动能最大时势能为零；**为什么在一列单向行波中，波元动能与势能却是同相变化、同时达到最大、又同时降为零？**

答案在于：**连续介质的弹性势能不取决于该质元的绝对位移 $y$，而取决于相邻质元之间的相对形变（空间斜率 $\partial y/\partial x$ 或体应变）**。以张力为 $F_T$、线密度为 $\mu$ 的张紧柔绳为例，取平衡长度 $\mathrm dx$ 的微元：
- 其动能为 $\mathrm dE_k=\frac{1}{2}(\mu\,\mathrm dx)\left(\frac{\partial y}{\partial t}\right)^2$；
- 其伸长量为 $\mathrm d\ell-\mathrm dx=\sqrt{1+(\partial y/\partial x)^2}\,\mathrm dx-\mathrm dx\approx\frac{1}{2}\left(\frac{\partial y}{\partial x}\right)^2\mathrm dx$，克服张力做功储存的弹性势能为 $\mathrm dE_p=F_T(\mathrm d\ell-\mathrm dx)=\frac{1}{2}F_T\left(\frac{\partial y}{\partial x}\right)^2\mathrm dx$。

因此，单位长度绳上的线动能密度 $\varepsilon_k$ 与线势能密度 $\varepsilon_p$ 分别为：

$$
\varepsilon_k=\frac{1}{2}\mu\left(\frac{\partial y}{\partial t}\right)^2, \qquad \varepsilon_p=\frac{1}{2}F_T\left(\frac{\partial y}{\partial x}\right)^2
$$

对于单向行波，由于 $v_y=\frac{\partial y}{\partial t}=\mp u\frac{\partial y}{\partial x}$ 且 $F_T=\mu u^2$，代入上式立即发现**任一位置、任一时刻的动能密度与势能密度恒相等**（参见 [OpenStax Vol. 1 §16.4](https://openstax.org/books/university-physics-volume-1/pages/16-4-energy-and-power-of-a-wave)）：

$$
\varepsilon_k=\varepsilon_p=\frac{1}{2}\mu\omega^2A^2\sin^2(\omega t-kx+\varphi), \qquad \varepsilon=\varepsilon_k+\varepsilon_p=\mu\omega^2A^2\sin^2(\omega t-kx+\varphi)
$$

- **在波峰和波谷处（$y=\pm A$）**：瞬时振速 $\partial y/\partial t=0$，同时曲线切线水平、局部无拉伸斜率 $\partial y/\partial x=0$，因此**动能密度和势能密度同时为零**！
- **在通过平衡位置处（$y=0$）**：瞬时振速最大，同时绳子倾斜最陡、局部拉伸形变最大，因此**动能密度和势能密度同时达到最大值**！
- 这一结论说明波元绝不是孤立系统，而是上游质元不断对下游质元做功，使能量以波速 $u$ 随波形一并向前推进（细绳平均传输功率 $\overline P=\overline\varepsilon u=\frac{1}{2}\mu u\omega^2A^2$，单位 $\mathrm W$）。

推广到体密度为 $\rho$ 的三维理想弹性介质中，单位体积的瞬时能量密度 $w$、时间平均能量密度 $\overline w$ 以及单位时间穿过垂直于传播方向单位面积的平均能流密度——**波强（Intensity）$I$**——分别为：

$$
w=\rho\omega^2A^2\sin^2\Phi, \qquad \overline w=\frac{1}{2}\rho\omega^2A^2, \qquad I=\overline w u=\frac{1}{2}\rho u\omega^2A^2
$$

在同种非色散介质中，波强 $I\propto\omega^2A^2$；若频率也相同，则 **$I\propto A^2$**。
- **平面波**：在无吸收均匀介质中波前面积不变，波强 $I$ 与振幅 $A$ 均保持恒定。
- **球面波**：各向同性点波源发出的能量均匀分布在半径为 $r$ 的球面上。若介质无吸收，穿过任意球面的总平均功率 $P=4\pi r^2 I=\text{常量}$，因此波强按距离平方反比衰减 **$I\propto 1/r^2$**，振幅按距离反比衰减 **$A\propto 1/r$**。

::: note 例题 9｜频率、振幅与球面扩散对波强的不同影响
（1）同一均匀非色散介质中，波 B 的振幅是波 A 的 $2$ 倍，频率是波 A 的 $3$ 倍，求两者的波强之比 $I_B/I_A$；（2）一列无吸收球面波从距波源 $r$ 处传播到 $3r$ 处，波强与振幅分别变为原来的多少？

**解答**：
（1）同介质中 $\rho,u$ 相同，由 $I=\frac{1}{2}\rho u\omega^2A^2\propto\nu^2A^2$ 得 $I_B/I_A=3^2\times 2^2=36$。
（2）同一球面波频率不变，由球面积扩展 $4\pi r^2 I=\text{常量}$ 得 $I(3r)/I(r)=(1/3)^2=1/9$，振幅 $A(3r)/A(r)=1/3$。
:::

### 5. 波的叠加、干涉与驻波

#### 波的相干叠加与总相位差

在线性介质中，几列波同时传过同一区域时各自独立传播，相遇点的总位移等于各分波位移的矢量和（叠加原理）。若两列波满足**相干条件**——**频率相同、振动方向平行（或有平行分量）、相位差恒定**——它们就会在空间形成稳定的强弱分布，即**干涉（Interference）**（若两列横波振动方向严格正交，则点积交叉项为零，合强度恒为 $I_1+I_2$，不产生干涉相消）。

设两相干波源 $S_1,S_2$ 的初相分别为 $\varphi_1,\varphi_2$，在同种均匀介质中传到空间点 $P$ 的几何路程分别为 $r_1,r_2$，则两波在 $P$ 点的振动方程为 $y_1=A_1\cos(\omega t-kr_1+\varphi_1)$ 与 $y_2=A_2\cos(\omega t-kr_2+\varphi_2)$。这就把空间点的波动叠加直接化归为第九章的**同频简谐振动合成**，总相位差为：

$$
\Delta\Phi=\Phi_2-\Phi_1=(\varphi_2-\varphi_1)-\frac{2\pi}{\lambda}(r_2-r_1)
$$

合振幅与合波强分别为：

$$
A_P^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\Phi, \qquad I_P=I_1+I_2+2\sqrt{I_1I_2}\cos\Delta\Phi
$$

| 干涉结果 | 总相位差判据 $\Delta\Phi$ | 当且仅当两波源同相（$\varphi_1=\varphi_2$）时的波程差 $\Delta r=r_2-r_1$ | 合振幅 $A_P$ 与合波强 $I_P$ |
| --- | --- | --- | --- |
| **干涉加强（明/强）** | $\Delta\Phi=2m\pi \quad (m\in\mathbb Z)$ | $\Delta r=m\lambda$（波长整数倍） | $A_{\max}=A_1+A_2$，$I_{\max}=(\sqrt{I_1}+\sqrt{I_2})^2$（等强时为 $4I_1$） |
| **干涉减弱（暗/弱）** | $\Delta\Phi=(2m+1)\pi \quad (m\in\mathbb Z)$ | $\Delta r=\left(m+\frac{1}{2}\right)\lambda$（半波长奇数倍） | $A_{\min}=|A_1-A_2|$，$I_{\min}=(\sqrt{I_1}-\sqrt{I_2})^2$（等强时为 $0$） |

衡量干涉图样明暗对比清晰度的指标是**条纹可见度（Visibility）**：

$$
V=\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}}=\frac{2\sqrt{I_1I_2}}{I_1+I_2}
$$

当两束波等强（$I_1=I_2$）时，$I_{\min}=0$，$V=1$，条纹反差最鲜明；若两束波振幅不等，减弱点合振幅 $|A_1-A_2|>0$，不会完全归零。

::: note 例题 10｜反相波源的干涉判据反转
两相干波源 $S_1,S_2$ 初相相差 $\pi$（反相），到空间点 $P$ 的路程差为 $r_2-r_1=\lambda/2$，传到 $P$ 点的振幅分别为 $3\,\mathrm{mm}$ 和 $2\,\mathrm{mm}$。判断 $P$ 点是加强还是减弱，并求空间最大与最小合振幅。

**解答**：
不要盲目套用“半波长减弱”的同相口诀，先算总相位差：

$$
\Delta\Phi=(\varphi_2-\varphi_1)-\frac{2\pi}{\lambda}(r_2-r_1)=\pi-\frac{2\pi}{\lambda}\frac{\lambda}{2}=0
$$

总相位差为 $0$，说明两波到达 $P$ 点时恰好**同相加强**，$A_P=3+2=5\,\mathrm{mm}$！空间中合振幅最大值为 $3+2=5\,\mathrm{mm}$，减弱点最小合振幅为 $|3-2|=1\,\mathrm{mm}$。
:::

#### 驻波（Standing Waves）：空间定振幅，时间定节奏

当两列**振幅相同、频率相同、传播方向相反**的相干行波在同一直线上叠加时，设 $y_1=A\cos(\omega t-kx)$、$y_2=A\cos(\omega t+kx)$，由和差化积直接得到**驻波方程**：

$$
y(x,t)=y_1+y_2=(2A\cos kx)\cos\omega t
$$

与行波 $A\cos(\omega t-kx)$ 把时间和空间捆绑在同一个余弦里不同，驻波将**空间分布 $\cos kx$** 与**时间振荡 $\cos\omega t$** 彻底拆成了乘积：
1. **各点振幅由位置 $x$ 锁定**：位置 $x$ 处的振幅为非负量 $A(x)=2A|\cos kx|$。
   - **波腹（Antinodes）**：$|\cos kx|=1\implies kx=m\pi\implies x=m\frac{\lambda}{2}\ (m\in\mathbb Z)$，振幅最大为 $2A$。
   - **波节（Nodes）**：$\cos kx=0\implies kx=\left(m+\frac{1}{2}\right)\pi\implies x=(2m+1)\frac{\lambda}{4}\ (m\in\mathbb Z)$，振幅恒为 $0$，质元始终静止。
   - 注意：$x=0$ 是波腹还是波节取决于坐标系原点选在哪里（例如 $y=2A\sin kx\cos\omega t$ 在 $x=0$ 处就是波节），但无论怎样选坐标，**相邻两波节（或两波腹）间距恒为 $\lambda/2$，相邻波节与波腹间距恒为 $\lambda/4$**。
2. **分段同相，跨节反相**：驻波没有相位随空间的连续滞后。**相邻两个波节之间的所有质元**，$\cos kx$ 同号，它们步调完全一致地同起同落（**相位完全相同**）；而**分居于同一个波节两侧的质元**，$\cos kx$ 异号，一个向上走时另一个必向下走（**相位恒相差 $\pi$**）。

![两端固定弦的前三个驻波模态](/images/physics-midterm/standing-waves.svg "两端固定弦的驻波本征模态：两端恒为波节，第 n 谐波在弦长 L 内恰好容纳 n 个半波长（n 个波腹）")

#### 边界反射、半波损失与简正模式

驻波通常由入射波与界面反射波叠加而成（参见 [OpenStax Vol. 1 §16.6](https://openstax.org/books/university-physics-volume-1/pages/16-6-standing-waves-and-resonance)）：
- **固定端（硬边界）**：边界点位移被钉死为 $y=0$（永久波节），反射位移波在端点处必须与入射波时刻反相抵消，因此反射波发生 **$\pi$ 相位突变**，折合半个波长的波程差，称为**半波损失**。
- **自由端（软边界）**：边界点无横向约束力，要求斜率 $\partial y/\partial x=0$（永久波腹），反射位移波与入射波同相，**无半波损失**。

当波被限制在有限长度 $L$ 的区域内时，两端的边界条件就像筛子一样，只允许能够“整数倍装进边界”的特定波长稳定存在，形成**驻波本征模式（简正模）**：

| 边界约束类型 | 驻波波长条件 | 本征频率序列 $\nu_n=u/\lambda_n$ | 典型物理系统 |
| --- | --- | --- | --- |
| **两端同性**（两端固定，或两端开口/自由） | $L=n\frac{\lambda_n}{2}$ | $\nu_n=n\frac{u}{2L} \quad (n=1,2,3,\ldots)$ | 吉他弦（两端固定）、两端开口空气管（含基频的全部整数倍谐波） |
| **一端固定、一端自由**（一节一腹） | $L=(2n-1)\frac{\lambda_n}{4}$ | $\nu_n=(2n-1)\frac{u}{4L} \quad (n=1,2,3,\ldots)$ | 一端封闭的声管、悬臂梁（仅含基频的**奇数倍**谐波） |

（注：空气管中的声波是纵波，闭口端空气分子无法纵向移动，为**位移波节 / 压强波腹**；开口端与大气连通压强恒定，近似为**位移波腹 / 压强波节**。）

::: note 例题 11｜由弦上波腹个数求驻波频率与节点间距
长 $L=0.90\,\mathrm m$ 的两端固定琴弦上形成了具有 $3$ 个波腹的稳定驻波，已知弦上横波波速 $u=120\,\mathrm{m/s}$，求该驻波的波长、频率与相邻波节间距。

**解答**：
两端固定弦上有 $3$ 个波腹，对应第 $n=3$ 谐波（弦长内容纳 $3$ 个半波长）：
- 相邻波节间距即半波长：$\Delta x_{\mathrm{node}}=\frac{\lambda}{2}=\frac{L}{3}=0.30\,\mathrm m$；
- 波长：$\lambda=2\times 0.30=0.60\,\mathrm m$；
- 振动频率：$\nu=\frac{u}{\lambda}=\frac{120}{0.60}=200\,\mathrm{Hz}$。
:::

#### 驻波的能量局域重排（为什么波腹处的势能反而恒为零？）

把驻波 $y=2A\cos kx\cos\omega t$ 代入细绳的线动能密度 $\varepsilon_k=\frac{1}{2}\mu(\partial y/\partial t)^2$ 与线势能密度 $\varepsilon_p=\frac{1}{2}F_T(\partial y/\partial x)^2$：

$$
\varepsilon_k(x,t)=2\mu A^2\omega^2\cos^2(kx)\sin^2(\omega t)
$$

$$
\varepsilon_p(x,t)=2\mu A^2\omega^2\sin^2(kx)\cos^2(\omega t)
$$

观察这两个式子，驻波的能量转换图景与单向行波截然相反[^standing]：
- **在空间分布上**：**波腹处**（$\cos^2 kx=1,\ \sin^2 kx=0$）绳子始终保持水平切线（$\partial y/\partial x=0$），**局部形变势能密度恒为零**，是纯动能中心；而**波节处**（$\cos^2 kx=0,\ \sin^2 kx=1$）质元静止不动（$\partial y/\partial t=0$），**局部动能密度恒为零**，但波节两侧反向拉扯使此处斜率变化最剧烈，是纯弹性势能中心！
- **在时间演化与局域能流上**：细绳截面瞬时传输功率为 $P(x,t)=-F_T\frac{\partial y}{\partial x}\frac{\partial y}{\partial t}=-F_T A^2 k\omega\sin(2kx)\sin(2\omega t)$。在一个周期内时间平均能流 $\overline P=0$，且在波节与波腹处瞬时能流恒为零（**能量绝不穿过波节**）。每半个周期内：当整条弦经过平衡位置（$\cos\omega t=0$）时，全部能量集中在**波腹附近**表现为动能；当整条弦到达最大位移（$\sin\omega t=0$）时，能量已全部流向相邻的**波节附近**转化为弹性势能。因此，“驻波不传播能量”的严格含义是**跨波节无能量穿透、全周期平均净能流为零**，而在每个半波长区间内部，能量时刻在波腹（动能区）与波节（势能区）之间往返激荡。

### 6. 机械波的 Doppler 效应

当波源 $S$ 或观察者 $O$ **相对于传播介质**运动时，观察者接收到的频率 $\nu_O$ 与波源发射频率 $\nu_S$ 不再相等，这一现象称为 **Doppler 效应**（参见 [OpenStax Vol. 1 §17.7](https://openstax.org/books/university-physics-volume-1/pages/17-7-the-doppler-effect)）。

为什么波源运动和观察者运动必须分开写，而不能只看两者的相对速度？因为机械波的波速 $u$ 是锁死在**静止介质参考系**中的，两者的物理机制完全不同：
1. **波源运动改变介质中的真实波长 $\lambda'$**：设波源以速率 $v_s$ 迎向观察者运动。在一个发射周期 $T_S=1/\nu_S$ 内，第一个波峰向前传了 $uT_S$，而波源自己也向前追了 $v_s T_S$ 才发出第二个波峰。因此波源前方的波峰被压缩，介质中的实际波长缩短为 $\lambda'=(u-v_s)T_S=\frac{u-v_s}{\nu_S}$（若波源背离观察者，则波长被拉长为 $\frac{u+v_s}{\nu_S}$）。
2. **观察者运动改变迎面撞上波峰的相对速率 $u'$**：介质中的波长 $\lambda'$ 已经固定，若观察者以速率 $v_o$ 迎向波源运动，波峰相对于观察者的迎面速率增大为 $u'=u+v_o$（若观察者背离波源，则相对速率减小为 $u-v_o$）。

将观察者每秒遇到的波峰个数 $\nu_O=u'/\lambda'$ 合并，便得到同一直线上亚声速（$v_s<u$）运动的统一公式：

$$
\nu_O=\nu_S\frac{u\pm v_o}{u\mp v_s} \qquad \left(\text{靠近取上号 }\frac{u+v_o}{u-v_s}\text{ 使 }\nu_O\uparrow\text{；远离取下号 }\frac{u-v_o}{u+v_s}\text{ 使 }\nu_O\downarrow\right)
$$

若用矢量坐标统一符号：**规定从波源 $S$ 指向观察者 $O$ 的波传播方向为正方向**，设波源和观察者相对于静止介质的有符号速度分别为 $v_S$ 和 $v_O$，则公式合二为一：

$$
\nu_O=\nu_S\frac{u-v_O}{u-v_S}
$$

（注：光在真空中传播不需要以太介质，仅取决于光源与观察者的相对速度，遵从狭义相对论 Doppler 公式，不适用此处的分子分母不对称形式。）

::: note 例题 12｜声源与观察者相向运动的双重频移
静止空气中声速 $u=340\,\mathrm{m/s}$。一列火车以 $v_s=20\,\mathrm{m/s}$ 鸣笛驶来，笛声固有频率 $\nu_S=600\,\mathrm{Hz}$；另一观察者以 $v_o=10\,\mathrm{m/s}$ 迎面走向火车，求观察者听到的频率。

**解答**：
两者均互相靠近，波源压缩分母（$u-v_s$），观察者增大分子（$u+v_o$）：

$$
\nu_O=600\times\frac{340+10}{340-20}=600\times\frac{350}{320}=656.25\,\mathrm{Hz}
$$

切忌把相对速率 $20+10=30\,\mathrm{m/s}$ 合并塞进分子或分母（若塞进分子得 $652.9\,\mathrm{Hz}$，塞进分母得 $658.1\,\mathrm{Hz}$，均错误）。
:::

#### 运动靶体的回波测速（双程 Doppler 频移）

声呐或超声多普勒测速仪固定在静止介质中，发出频率为 $\nu_0$ 的声波，照射以速率 $v$ 迎面靠近的反射靶体并接收回波。这一过程包含**两次角色转换**：
1. **靶体先当运动观察者**：迎着入射波运动，接收到的频率为 $\nu_1=\nu_0\frac{u+v}{u}$；
2. **靶体再当运动波源**：靶体表面以频率 $\nu_1$ 将波反射回去，由于靶体正迎向仪器运动，回波在介质中的波长被进一步压缩，仪器最终收到的回波频率为：

$$
\nu_{\mathrm{echo}}=\nu_1\frac{u}{u-v}=\nu_0\frac{u+v}{u-v}
$$

将回波与原发射波混频，测得拍频 $\Delta\nu=\nu_{\mathrm{echo}}-\nu_0=\nu_0\frac{2v}{u-v}$，即可精确解出靶体速率（并在低速 $v\ll u$ 时取一阶近似）：

$$
v=\frac{u\,\Delta\nu}{2\nu_0+\Delta\nu}\approx\frac{u\,\Delta\nu}{2\nu_0} \qquad (v\ll u)
$$

例如水下声呐（$u=1500\,\mathrm{m/s}$）发射 $\nu_0=20.0\,\mathrm{kHz}$ 超声波，收到迎面潜艇回波频移 $\Delta\nu=+400\,\mathrm{Hz}$，精确公式给出 $v=\frac{1500\times 400}{40000+400}\approx 14.85\,\mathrm{m/s}$，低速近似给出 $15.0\,\mathrm{m/s}$。

---

## 第十一章　波动光学

光本质上是高频电磁横波。在同种非磁性电介质中，决定感光、视觉和光电效应的主要是电场强度矢量 $\mathbf E$，因此称 $\mathbf E$ 为**光矢量**，光强 $I$ 正比于电场振幅的平方 $E_0^2$。

### 1. 光的干涉：光程差、半波损失与分波前/分振幅装置

#### 为什么引入“光程（Optical Path Length）”？

当单色光从真空进入折射率为 $n$ 的均匀各向同性介质时，频率 $\nu$ 保持不变，相速度降为 $v=c/n$，因此介质中的波长缩短为 $\lambda=\lambda_0/n$（$\lambda_0=c/\nu$ 为真空波长）。
光在折射率为 $n$ 的介质中走过几何路程 $s$ 所经历的相位滞后，为：

$$
\Delta\varphi=ks=\frac{2\pi}{\lambda}s=\frac{2\pi}{\lambda_0/n}s=\frac{2\pi}{\lambda_0}(ns)
$$

这说明：**光在折射率 $n$ 的介质中走过几何路程 $s$ 引起的相位变化，严格等价于它在真空中走过 $ns$ 的路程！** 据此定义**光程** $L$：

$$
L=ns \quad (\text{均匀介质}), \qquad L=\sum_j n_js_j \quad (\text{分段介质}), \qquad L=\int n\,\mathrm ds \quad (\text{连续变折射率})
$$

把不同介质中的几何路程统一折算成光程后，无论光路穿过多少种介质，相位差都只需要除以同一个**真空波长 $\lambda_0$**。设两束同源相干光（初相同相 $\Delta\varphi_{\mathrm{source}}=0$，偏振方向平行）经过各自路径到达同一点，计入传播光程差 $\delta=L_2-L_1$ 与界面反射可能带来的附加相位突变 $\Delta\varphi_{\mathrm{refl}}\in\{0,\pm\pi\}$，总相位差为：

$$
\Delta\Phi=-\frac{2\pi}{\lambda_0}\delta+\Delta\varphi_{\mathrm{refl}}
$$

- **若两束光无相对反射相位突变（$\Delta\varphi_{\mathrm{refl}}=0$）**：$\delta=m\lambda_0$ 为**明纹**，$\delta=\left(m+\frac{1}{2}\right)\lambda_0$ 为**暗纹**（$m\in\mathbb Z$）。
- **若两束光恰有一次相对半波损失（$|\Delta\varphi_{\mathrm{refl}}|=\pi$）**：可将其等效为在光程差上额外加减 $\lambda_0/2$，或直接将明暗条件互换——传播光程差 $\delta=\left(m+\frac{1}{2}\right)\lambda_0$ 为**明纹**，$\delta=m\lambda_0$ 为**暗纹**（注意：要么在 $\delta$ 里加 $\lambda_0/2$ 然后套标准明暗条件，要么不加 $\lambda_0/2$ 直接把明暗条件反过来，**绝不能既加 $\lambda_0/2$ 又把明暗条件翻转，否则负负得正！**）[^reflection]。

#### 相干光的获取方法

普通热光源（如白炽灯、钠灯不同发光区域）依赖大量原子的自发辐射，每次辐射仅持续约 $10^{-8}\,\mathrm s$（对应有限的相干时间与相干长度），两个独立光源或同一扩展光源不同部位发出的光相位差随机剧烈跳变，无法产生肉眼可辨的稳定干涉。因此光学干涉实验总是**从同一波前或同一光束出发拆出两束光**，使任何随机初相涨落在两路中同步发生、相减抵消：
1. **分波前法（Wavefront splitting）**：如 Young 双缝干涉，用小孔或狭缝截取同一波前的两个空间部分作为次波源（要求光源空间尺寸足够小，以保证空间相干性）。
2. **分振幅法（Amplitude splitting）**：如薄膜干涉、劈尖、牛顿环、迈克耳孙干涉仪，利用介质分界面的部分反射与部分折射将同一束光拆成两束（允许使用扩展光源）。

#### Young 双缝干涉与云母薄片平移

设双缝 $S_1$（上）、$S_2$（下）间距为 $d$，双缝到观察屏距离为 $D_s$，观察屏中心对称点为 $O$，向上取坐标 $+x$。真空（或空气 $n\approx 1$）中，双缝同相照明，屏上点 $P(x)$ 到两缝的几何路程差在远场近轴近似（$D_s\gg d$ 且 $|x|\ll D_s$）下为：

$$
\delta=r_2-r_1=\sqrt{D_s^2+\left(x+\frac{d}{2}\right)^2}-\sqrt{D_s^2+\left(x-\frac{d}{2}\right)^2}\approx d\sin\theta\approx d\tan\theta=\frac{dx}{D_s}
$$

由此直接写出明暗纹位置、相邻同类条纹间距 $\Delta x$ 以及等强双缝（单束光强 $I_1$）的屏上光强分布：

$$
x_m^{\mathrm{bright}}=m\frac{\lambda_0 D_s}{d}, \qquad x_m^{\mathrm{dark}}=\left(m+\frac{1}{2}\right)\frac{\lambda_0 D_s}{d} \qquad (m=0,\pm 1,\pm 2,\ldots)
$$

$$
\Delta x=\frac{\lambda_0 D_s}{d}, \qquad I(x)=4I_1\cos^2\left(\frac{\pi\delta}{\lambda_0}\right)=4I_1\cos^2\left(\frac{\pi dx}{\lambda_0 D_s}\right)
$$

（注意：相邻两条明纹或相邻两条暗纹的距离是 $\Delta x$；而**一条明纹中心到紧邻暗纹中心**的距离是 $\Delta x/2$。）

![双缝、单缝与光栅的强度分布对照](/images/physics-midterm/interference-diffraction.svg "横轴为无量纲参量 q = a sinθ / λ：理想极窄双缝为等幅余弦平方条纹；单缝呈 sinc² 衍射包络；有限缝宽双缝与多缝光栅（图示 d = 3a）则是在单缝包络调制下的精细干涉峰，q = ±1, ±2 处发生缺级")

**双缝实验的两类典型变形**：
1. **整套装置浸入折射率 $n$ 的透明液体**：两路全程光程同乘 $n$，$\delta=n\frac{dx}{D_s}$，中央零级明纹仍在 $x=0$ 不动，但条纹间距缩小为 **$\Delta x'=\frac{\lambda_0 D_s}{nd}=\frac{\Delta x}{n}$**（条纹整体变密）。
2. **仅在其中一条缝（如上缝 $S_1$）后垂直插入厚为 $e$、折射率为 $n_p$ 的透明薄片**：薄片把原本厚度为 $e$ 的空气（$n\approx 1$）替换成了折射率 $n_p$ 的介质，使上路 $L_1$ 额外增加了光程 **$\Delta L=(n_p-1)e$**。此时总光程差变为：

$$
\delta=L_2-L_1=\frac{dx}{D_s}-(n_p-1)e
$$

条纹间距 $\Delta x=\frac{\lambda_0 D_s}{d}$ **保持不变**，但原本位于 $x=0$ 的**中央零级明纹**（要求 $\delta=0$）必须移动到上方 $x_0>0$ 处，用更大的下路几何路程 $r_2$ 去补偿上路薄片多出的光程：

$$
x_0=+\frac{D_s}{d}(n_p-1)e>0, \qquad \text{移动的条纹数 } M=\frac{x_0}{\Delta x}=\frac{(n_p-1)e}{\lambda_0}
$$

一句话记住方向：**哪一侧插了高折射率薄片，整套条纹就向哪一侧平移**。

::: note 例题 13｜双缝插入薄片后的条纹间距与零级平移
Young 双缝实验 $d=0.40\,\mathrm{mm}$，$D_s=1.50\,\mathrm m$，入射单色光 $\lambda_0=600\,\mathrm{nm}$。现于上缝 $S_1$ 后放置折射率 $n_p=1.50$、厚度 $e=3.60\,\mathrm{\mu m}$ 的平行玻璃片，求条纹间距、零级明纹移动距离及移过的条纹条数。

**解答**：
条纹间距为：

$$
\Delta x=\frac{\lambda_0 D_s}{d}=\frac{600\times 10^{-9}\times 1.50}{0.40\times 10^{-3}}=2.25\times 10^{-3}\,\mathrm m=2.25\,\mathrm{mm}
$$

薄片引入的附加光程 $(n_p-1)e=(1.50-1)\times 3.60\,\mathrm{\mu m}=1.80\,\mathrm{\mu m}$，折合波长数（即移过的条纹数）为：

$$
M=\frac{(n_p-1)e}{\lambda_0}=\frac{1.80\,\mathrm{\mu m}}{0.60\,\mathrm{\mu m}}=3.0
$$

中央零级明纹向上缝一侧平移 $x_0=M\Delta x=3.0\times 2.25=6.75\,\mathrm{mm}$（此时原来第 $-3$ 级明纹平移到了原点 $O$，因此原点处依然是明纹，但用白光照明时只有 $x_0=6.75\,\mathrm{mm}$ 处才是真正的白色零级中心）。
:::

#### 薄膜干涉：先判两侧折射率阶梯，再代光程公式

设平行透明薄膜厚度为 $h$、折射率为 $n_f$，夹在上方入射介质 $n_0$ 与下方基底介质 $n_s$ 之间。光线以入射角 $i$ 从 $n_0$ 入射，膜内折射角为 $r$（遵从折射定律 $n_0\sin i=n_f\sin r$）。

**第一步：推导纯传播光程差 $\delta_g=2n_fh\cos r$（为什么是 $\cos r$ 而不是 $1/\cos r$？）**
下表面反射光在膜内走过的折线几何长度虽然是 $2h/\cos r$（光程 $2n_fh/\cos r$），但同时上表面反射光在入射介质 $n_0$ 中也多走了一段截距 $2h\tan r\sin i$（利用 $n_0\sin i=n_f\sin r$，这段截距的光程恰为 $2n_fh\sin^2 r/\cos r$）。将两者相减归算到同一出射等相面上，纯传播引起的光程差精确为：

$$
\delta_g=2n_fh\left(\frac{1}{\cos r}-\frac{\sin^2 r}{\cos r}\right)=2n_fh\cos r=2h\sqrt{n_f^2-n_0^2\sin^2 i}
$$

**第二步：由 Fresnel 边界条件判断是否存在相对半波损失**
对于正入射或近法向入射的非磁性透明介质，切向电磁场连续（$E_i+E_r=E_t$，$n_1(E_i-E_r)=n_2E_t$）给出电场振幅反射系数：

$$
r_E=\frac{E_r}{E_i}=\frac{n_1-n_2}{n_1+n_2}
$$

- 当光**从光疏介质射向光密介质界面**（$n_1<n_2$）时，$r_E<0$，反射电场反向，发生 **$\pi$ 相位突变（半波损失）**；
- 当光**从光密介质射向光疏介质界面**（$n_1>n_2$）时，$r_E>0$，反射电场同向，**无半波损失**。

因此，比较薄膜上下两个表面反射回来的两束光，只需看折射率 $n_0,\ n_f,\ n_s$ 是**单调阶梯**还是**中间夹心**（参见 [OpenStax Vol. 3 §3.4](https://openstax.org/books/university-physics-volume-3/pages/3-4-interference-in-thin-films)）：

| 折射率排列特征 | 上下表面反射的相位反转情况 | 相对反射相位差 | 反射光明纹（加强）条件 | 反射光暗纹（减弱）条件 |
| --- | --- | --- | --- | --- |
| **中间夹心型**（$n_0<n_f>n_s$ 或 $n_0>n_f<n_s$，如空气中的肥皂膜、玻璃夹空气层） | 一面有半波损失，另一面无半波损失 | **相差 $\pi$**（有相对半波损失） | $2n_fh\cos r=\left(m+\frac{1}{2}\right)\lambda_0 \quad (m=0,1,2,\ldots)$ | $2n_fh\cos r=m\lambda_0 \quad (m=0,1,2,\ldots)$ |
| **单调阶梯型**（$n_0<n_f<n_s$ 或 $n_0>n_f>n_s$，如光学镜头上的单层增透膜） | 两面都有半波损失，或两面都无半波损失 | **相差 $0$**（两次反转互相抵消） | $2n_fh\cos r=m\lambda_0 \quad (m=1,2,\ldots)$ | $2n_fh\cos r=\left(m+\frac{1}{2}\right)\lambda_0 \quad (m=0,1,2,\ldots)$ |

在无吸收薄膜中，由能量守恒可知**透射光图样与反射光图样明暗严格互补**：反射加强的波长透射必减弱，反射相消（增透）的波长透射必增强。

::: note 例题 14｜光学镜头增透膜（减反射膜）的折射率与最小厚度
在折射率 $n_s=1.50$ 的玻璃镜头表面镀一层折射率介于空气（$n_0=1.00$）和玻璃之间的氟化镁薄膜，要求对真空波长 $\lambda_0=550\,\mathrm{nm}$ 的垂直入射绿光实现反射相消（增透），求薄膜的最小非零厚度及理想完全消反射所需的折射率 $n_f$。

**解答**：
由于 $n_0=1.00<n_f<n_s=1.50$ 呈单调阶梯递增，上下两表面反射均发生半波损失，**相对反射相位差为 $0$**。
正入射 $\cos r=1$，反射减弱条件为 $2n_fh=\left(m+\frac{1}{2}\right)\lambda_0$，取 $m=0$ 得最小非零厚度（四分之一媒质波长膜）：

$$
h_{\min}=\frac{\lambda_0}{4n_f}
$$

**补充（振幅匹配条件）**：若要使两束反射光不仅反相而且**等振幅完全抵消**，还需令上下界面的反射率相等：$\left(\frac{n_0-n_f}{n_0+n_f}\right)^2=\left(\frac{n_f-n_s}{n_f+n_s}\right)^2\implies n_f=\sqrt{n_0n_s}=\sqrt{1.50}\approx 1.225$，此时对应理想厚度 $h_{\min}=\frac{550}{4\sqrt{1.50}}\approx 112.27\,\mathrm{nm}$。
:::

#### 等倾干涉 vs 等厚干涉：劈尖与牛顿环

根据薄膜光程差 $\delta_g=2n_fh\cos r$ 中哪个变量在空间变化，分振幅薄膜干涉分为两类：
- **等倾干涉（Haidinger fringes）**：薄膜厚度 $h$ 处处均匀不变，发散光源以不同倾角 $i$（对应不同折射角 $r$）入射，相同倾角 $r$ 的光线经透镜汇聚在焦平面上形成同心圆环，内圈对应的膜内倾角 $r$ 小、光程差 $2n_fh\cos r$ 大、干涉级次 $m$ 高。
- **等厚干涉（Fizeau fringes）**：平行光近法向入射（$\cos r\approx 1$），薄膜厚度 $h(x,y)$ 随空间位置变化，**每一条明纹或暗纹就是薄膜的一条等厚线**。实验室最常考的两种等厚干涉模型是**劈尖**和**牛顿环**（注意：牛顿环虽然形状是圆环，但它是平凸透镜下表面球冠的等厚线，属于**等厚干涉**而非等倾干涉！）。

![空气劈尖与牛顿环的厚度和条纹对应](/images/physics-midterm/thin-films.svg "左：劈尖薄膜厚度 h = αx 随距离线性增长，生成等间距平行直条纹；右：牛顿环厚度 h ≈ r²/(2R) 随半径平方增长，生成内疏外密的同心圆环")

##### （1）劈尖干涉（Wedge Film）

两块平面玻璃板一端接触（棱边 $x=0$），另一端垫入细丝形成微小楔角 $\alpha\ll 1\,\mathrm{rad}$，夹层介质折射率 $n_f$ 低于两侧玻璃（存在一次相对半波损失）。法向入射时，距棱边 $x$ 处的膜厚为 $h(x)=x\tan\alpha\approx\alpha x$：
- **明暗纹条件**：$2n_fh(x)=\begin{cases} m\lambda_0 & (\text{暗纹},\ m=0,1,2,\ldots) \\ (m+1/2)\lambda_0 & (\text{明纹},\ m=0,1,2,\ldots) \end{cases}$
- **棱边特征**：理想接触处 $x=0\implies h=0$，由于存在相对半波损失，**棱边是一条暗纹（$m=0$）**。
- **相邻条纹间距 $\ell$ 与厚度差 $\Delta h$**：每向外跨过一条明纹（或暗纹），膜厚固定增加半个介质波长 **$\Delta h=\frac{\lambda_0}{2n_f}$**，因此屏上条纹是平行于棱边的**等间距直条纹**，相邻同类条纹间距为：

$$
\ell=\frac{\Delta h}{\alpha}=\frac{\lambda_0}{2n_f\alpha}
$$

若劈尖总长为 $L$，末端垫片厚度（或待测细丝直径）为 $H$，则 $\alpha=H/L$，数出间距 $\ell$（或总长 $L$ 内的条纹总数 $N=L/\ell$）即可精密测厚：

$$
H=L\alpha=\frac{L\lambda_0}{2n_f\ell}=N\frac{\lambda_0}{2n_f}
$$

**劈尖条纹动态移动判据**：盯住同一级条纹的固定厚度 $h_m=m\lambda_0/(2n_f)$：
- **若将上板平行向上平移（劈角 $\alpha$ 不变，整体膜厚增加 $h_0$）**：原本厚度为 $h_m$ 的等厚线必须向更薄的一侧退却，因此**所有条纹向棱边方向平移**，条纹间距 $\ell$ 不变。
- **若减小劈角 $\alpha$（棱边不动）**：条纹间距 $\ell=\frac{\lambda_0}{2n_f\alpha}$ 变大，**条纹背离棱边向外稀疏散开**；增大劈角 $\alpha$ 则**条纹向棱边方向靠拢变密**。

::: note 例题 15｜用空气劈尖测量细丝直径及充液后的条纹变化
两块长 $L=50.0\,\mathrm{mm}$ 的平玻璃板一端接触，另一端夹入一根细金属丝形成空气劈尖（$n_f=1.00$）。用 $\lambda_0=600\,\mathrm{nm}$ 的单色光垂直照射，测得相邻暗纹间距 $\ell=0.50\,\mathrm{mm}$，求金属丝直径 $H$。若保持几何结构不变，在劈尖中注满水（$n_f=1.33$，仍小于玻璃折射率），相邻暗纹间距变为多少？

**解答**：
金属丝直径为：

$$
H=\frac{L\lambda_0}{2n_f\ell}=\frac{50.0\times 10^{-3}\times 600\times 10^{-9}}{2\times 1.00\times 0.50\times 10^{-3}}=3.00\times 10^{-5}\,\mathrm m=30.0\,\mathrm{\mu m}
$$

注满水后 $n_f=1.33$，相邻暗纹间距按折射率反比缩小为 $\ell'=\ell/n_f=0.50/1.33\approx 0.376\,\mathrm{mm}$。
:::

##### （2）牛顿环（Newton's Rings）

将曲率半径很大（$R\sim 1\,\mathrm m$）的平凸透镜凸面朝下放在平板玻璃上，设中心点可能存在微小间隙 $h_0$（理想接触时 $h_0=0$）。在傍轴近似 $r\ll R$ 下，距中心半径 $r$ 处的环形夹层厚度由圆幂定理（或泰勒展开）给出：

$$
h(r)=h_0+R-\sqrt{R^2-r^2}\approx h_0+\frac{r^2}{2R}
$$

当夹层介质折射率 $n_f$ 低于上下两块玻璃时，两束反射光存在相对半波损失，反射暗环条件 $2n_fh(r)=m\lambda_0$ 给出：

$$
r_m^2=\frac{mR\lambda_0}{n_f}-2Rh_0
$$

在**理想接触（$h_0=0$）**下，反射光暗环与明环半径公式分别为（参见 [University of Colorado Newton's Rings](https://physicslabs.colorado.edu/demos/optics/interference/thin-films/newtons-rings/)）：

$$
r_{m,\mathrm{dark}}=\sqrt{\frac{mR\lambda_0}{n_f}} \quad (m=0,1,2,\ldots), \qquad r_{m,\mathrm{bright}}=\sqrt{\frac{\left(m+\frac{1}{2}\right)R\lambda_0}{n_f}} \quad (m=0,1,2,\ldots)
$$

牛顿环的三个关键几何与实验特征：
1. **内疏外密，$r_m^2$ 等差**：理想接触时中心 $m=0$ 为**暗斑**；向外由于 $r_m\propto\sqrt m$，相邻圆环的**半径平方差 $\Delta(r^2)=R\lambda_0/n_f$ 是常数**，而半径差 $\Delta r$ 随 $m$ 增大越来越小，故圆环**内疏外密**。
2. **用弦长/直径平方差消去中心接触误差 $h_0$**：真实实验中透镜中心往往因灰尘或应力存在未知的 $h_0\ne 0$（甚至使中心变成亮斑）。因此实验测量从不单测某一级半径，而是测量第 $m+p$ 级与第 $m$ 级暗环的**直径** $\mathcal D_{m+p}=2r_{m+p}$ 与 $\mathcal D_m=2r_m$，作平方差直接消去 $h_0$：

$$
\mathcal D_{m+p}^2-\mathcal D_m^2=4\left(r_{m+p}^2-r_m^2\right)=\frac{4pR\lambda_0}{n_f}
$$

3. **向上抬起透镜时的“缩环”现象**：若缓慢将平凸透镜向上提起使 $h_0$ 增大，盯住固定级次 $m$（对应固定膜厚 $h_m$），由 $r_m^2=\frac{mR\lambda_0}{n_f}-2Rh_0$ 可见 $r_m$ 随 $h_0$ 增大而减小——**各级圆环向中心收缩并逐一在中心湮灭（每抬高 $\Delta h_0=\lambda_0/(2n_f)$，中心就吞掉一个环）**；反之向下压紧透镜时，圆环从中心向外吐出扩张。

::: note 例题 16｜存在未知间隙时用直径平方差测定透镜曲率半径
在空气牛顿环实验中，用 $\lambda_0=600\,\mathrm{nm}$ 的单色光垂直照射，测得某第 $m$ 级暗环的直径为 $\mathcal D_m=4.00\,\mathrm{mm}$，由该环再向外数 $p=5$ 个暗环，测得第 $m+5$ 级暗环的直径为 $\mathcal D_{m+5}=5.00\,\mathrm{mm}$。求平凸透镜的曲率半径 $R$。

**解答**：
直接代入消去 $h_0$ 的直径平方差公式（注意左边是直径平方差，分母必有系数 $4$）：

$$
R=\frac{\mathcal D_{m+p}^2-\mathcal D_m^2}{4p\lambda_0}=\frac{(5.00^2-4.00^2)\times 10^{-6}}{4\times 5\times 600\times 10^{-9}}=\frac{9.00\times 10^{-6}}{1.20\times 10^{-5}}=0.750\,\mathrm m
$$
:::

---

### 2. 光的衍射与空间分辨极限

#### Huygens–Fresnel 原理与 Fraunhofer 远场衍射

光在传播途中遇到障碍物或小孔时，不再严格沿直线行进，而是绕过边缘进入几何阴影区并形成明暗条纹，称为**衍射（Diffraction）**。**Huygens–Fresnel 原理**指出：同一波前上的每个面元 $\mathrm dS$ 都可视为发出次级球面子波的相干波源，空间任意观察点 $P$ 的光场正是波前上所有未被遮挡面元发出的次波在该点的**相干叠加（连续无穷多束子波的干涉）**。

按光源、衍射孔与观察屏之间的距离关系，衍射分为两类：
- **Fresnel（菲涅耳）近场衍射**：光源或观察屏距衍射孔有限远，必须计入球面波前的曲率（二次相位因子）。
- **Fraunhofer（夫琅禾费）远场衍射**：照射孔径的是平行光（平面波前），且观察屏汇报的是同一衍射角 $\theta$ 方向的平行出射光束。在自由空间中需满足远场条件 $L\gg a^2/\lambda$；而在实验室里，只需在孔后放一块焦距为 $f$ 的会聚透镜，**透镜后焦平面**就会把衍射角为 $\theta$ 的平行光束汇聚到离轴距离 $x=f\tan\theta\approx f\theta$ 处，从而在有限距离内精确观察 Fraunhofer 衍射。

#### 单缝 Fraunhofer 衍射：半波带法与精确相量积分

设单缝宽度为 $a$，单色平行光（介质内波长 $\lambda$）垂直入射，考察衍射角为 $\theta$ 的平行出射光束，缝的上下边缘光线的波程差为 $\Delta=a\sin\theta$。

**（1）Fresnel 半波带法（定性解释暗纹与近似副极大）**
以 $\lambda/2$ 为台阶，将波程差 $\Delta=a|\sin\theta|$ 拆成 $N_h=\frac{\Delta}{\lambda/2}=\frac{2a|\sin\theta|}{\lambda}$ 个等宽的**半波带**。每两个相邻半波带上的对应点间距为 $a/N_h$，发出的子波波程差恰好为 $\lambda/2$（相位差 $\pi$），在远场两两完全相消：
- **当 $\Delta=a\sin\theta=m\lambda\ (m=\pm 1,\pm 2,\ldots)$ 时**：单缝恰好被均分为 $2|m|$（**偶数**）个半波带，相邻两带成对抵消，合振幅严格为零，形成**精确暗纹**！
- **当 $\theta=0$（即 $m=0$）时**：缝内所有子波波程差为零，完全同相叠加，形成最亮、最宽的**中央主极大**（切记：$m=0$ 绝不是暗纹！）。
- **当 $a\sin\theta\approx\left(m+\frac{1}{2}\right)\lambda\ (m=\pm 1,\pm 2,\ldots)$ 时**：单缝被分为 $2|m|+1$（**奇数**）个半波带，前 $2|m|$ 个带两两抵消，剩下一个半波带未被抵消，近似对应**第 $|m|$ 级副极大（次亮纹）**（参见 [OpenStax Vol. 3 §4.1](https://openstax.org/books/university-physics-volume-3/pages/4-1-single-slit-diffraction)）。

**（2）相量积分与精确光强分布（为什么半奇数波长只是近似峰值？）**
以缝中心为原点 $\xi=0$，位置 $\xi\in[-a/2,a/2]$ 处的微元 $\mathrm d\xi$ 相对于中心的波程差为 $\xi\sin\theta$，相位差为 $\frac{2\pi}{\lambda}\xi\sin\theta$。令单缝边缘相对中心的半相位差为 $\zeta=\frac{\pi a\sin\theta}{\lambda}$，将整个缝内的子波对 $\xi$ 积分（参见 [OpenStax Vol. 3 §4.2](https://openstax.org/books/university-physics-volume-3/pages/4-2-intensity-in-single-slit-diffraction)）：

$$
E(\theta)\propto\int_{-a/2}^{a/2}e^{\mathrm i\frac{2\pi\xi\sin\theta}{\lambda}}\,\mathrm d\xi=a\frac{\sin\zeta}{\zeta} \quad\Longrightarrow\quad I(\theta)=I_0\left(\frac{\sin\zeta}{\zeta}\right)^2, \qquad \zeta=\frac{\pi a\sin\theta}{\lambda}
$$

由此可严格看清单缝衍射的全部定量细节：
- **暗纹位置（精确）**：$\sin\zeta=0$ 且 $\zeta\ne 0\implies\zeta=m\pi\implies a\sin\theta=m\lambda\ (m=\pm 1,\pm 2,\ldots)$。
- **副极大位置（精确 vs 近似）**：对 $(\sin\zeta/\zeta)^2$ 求导令其为零，得超越方程 **$\tan\zeta=\zeta$**。第一、二副极大的精确解为 $\zeta=\pm 1.4303\pi,\ \pm 2.4590\pi$（即 $a|\sin\theta|\approx 1.43\lambda,\ 2.46\lambda$），之所以比半波带法的 $\pm 1.5\pi,\ \pm 2.5\pi$ 略向中央偏移，是因为分母 $\zeta$ 随角度增大而单调压低了包络。在 $\zeta=3\pi/2,5\pi/2$ 处，相对强度仅为 $I/I_0=\frac{4}{9\pi^2}\approx 4.50\%$、$\frac{4}{25\pi^2}\approx 1.62\%$，可见 $90\%$ 以上的光能都集中在中央主极大内。
- **中央亮纹宽度 $W_0$**：定义为两侧**第一级暗纹（$m=\pm 1$）之间的距离**。在小角度近似 $|\theta|\ll 1$ 下，$\sin\theta_1\approx\tan\theta_1=\frac{x_1}{f}\approx\frac{\lambda}{a}$，因此中央亮纹的角宽度与焦平面线宽度分别为：

$$
\Delta\theta_0=2\theta_1\approx\frac{2\lambda}{a}, \qquad W_0=2x_1\approx\frac{2f\lambda}{a}
$$

而其余相邻两条暗纹之间的副亮纹宽度均为 $\Delta x=\frac{f\lambda}{a}$，即**单缝中央亮纹宽度是其余各级副亮纹宽度的 $2$ 倍**！狭缝 $a$ 越窄、波长 $\lambda$ 越长，衍射展宽越显著。

::: note 例题 17｜单缝中央亮纹宽度与半波带方向的相对光强
单缝宽 $a=0.20\,\mathrm{mm}$，透镜焦距 $f=0.50\,\mathrm m$，垂直入射单色光 $\lambda=500\,\mathrm{nm}$。求：（1）中央亮纹的线宽度 $W_0$；（2）在 $a\sin\theta=1.5\lambda$ 方向上的光强与中央峰值 $I_0$ 之比。

**解答**：
（1）第一级暗纹坐标为 $x_{\pm 1}\approx\pm\frac{f\lambda}{a}=\pm\frac{0.50\times 500\times 10^{-9}}{0.20\times 10^{-3}}=\pm 1.25\,\mathrm{mm}$，故中央亮纹全宽为：

$$
W_0=2|x_1|=2.50\,\mathrm{mm}
$$

（2）当 $a\sin\theta=1.5\lambda$ 时，$\zeta=\frac{\pi a\sin\theta}{\lambda}=\frac{3\pi}{2}$，代入光强公式得：

$$
\frac{I}{I_0}=\left(\frac{\sin(3\pi/2)}{3\pi/2}\right)^2=\frac{1}{(3\pi/2)^2}=\frac{4}{9\pi^2}\approx 0.0450=4.50\%
$$
:::

#### 衍射光栅：多缝干涉与单缝包络的乘积

由 $N$ 条等宽、等间距平行狭缝组成的光学器件称为**衍射光栅（Diffraction Grating）**。设每条透光狭缝宽度为 $a$，相邻两缝之间不透光刻痕宽度为 $b$，则相邻两缝中心之间的距离 $d=a+b$ 称为**光栅常数**（若光栅铭牌标明“每毫米 $n_0$ 条刻线”，则 $d=\frac{1\,\mathrm{mm}}{n_0}$）。

光栅的远场光强分布由**单缝衍射因子**与 **$N$ 缝相干干涉因子**共同相乘决定（参见 [OpenStax Vol. 3 §4.3](https://openstax.org/books/university-physics-volume-3/pages/4-3-double-slit-diffraction)、[§4.4](https://openstax.org/books/university-physics-volume-3/pages/4-4-diffraction-gratings)）：

$$
I(\theta)=I_{\mathrm{single}}(0)\underbrace{\left(\frac{\sin\zeta}{\zeta}\right)^2}_{\text{单缝衍射包络}}\underbrace{\left(\frac{\sin N\chi}{\sin\chi}\right)^2}_{N\text{ 缝干涉因子}}, \qquad \zeta=\frac{\pi a\sin\theta}{\lambda}, \quad \chi=\frac{\pi d\sin\theta}{\lambda}
$$

把握光栅问题只需拆解以下五个核心维度：

1. **主极大位置（光栅方程）**：当相邻两缝的光程差为波长整数倍，即 $\chi=m\pi$ 时，通过洛必达法则求极限可知多缝干涉因子达到峰值 $\lim_{\chi\to m\pi}\left(\frac{\sin N\chi}{\sin\chi}\right)^2=N^2$（峰值强度是单缝的 $N^2$ 倍，能量高度集中，谱线极细锐）：

$$
d\sin\theta=m\lambda \qquad (m=0,\pm 1,\pm 2,\ldots)
$$

   - **斜入射光栅方程**：若平行光以入射角 $i$ 斜入射（规定入射波矢与衍射波矢在光栅法线同侧或按同一正方向度量切向投影），相邻两缝在入射段与衍射段的总光程差为 **$(a+b)(\sin\theta\mp\sin i)=m\lambda$**（入射光线与衍射光线分居法线两侧时路程差相减 $\sin\theta-\sin i$，位于法线同侧折回时路程差相加 $\sin\theta+\sin i$，画一下两条相邻光线在缝前后的垂足即可直观定号）。

2. **两个相邻主极大之间的暗纹与次极大**：在 $\chi=m\pi$ 与 $(m+1)\pi$ 之间，当 $\sin N\chi=0$ 但 $\sin\chi\ne 0$ 时（即 $d\sin\theta=\left(m+\frac{k}{N}\right)\lambda,\ k=1,2,\ldots,N-1$），多缝干涉因子为零。因此**相邻两个主极大之间有 $N-1$ 条暗纹，夹着 $N-2$ 个极其微弱的次极大**；缝数 $N$ 越大，主极大旁的第一暗纹 $\Delta\theta\approx\frac{\lambda}{Nd\cos\theta}$ 离主峰越近，谱线越细锐。

3. **缺级现象（Missing Orders）**：如果某个方向既满足多缝干涉的主极大条件，**又恰好落在了单缝衍射包络的暗纹点上**（此时单缝包络因子 $(\sin\zeta/\zeta)^2=0$，连每一条缝自己发出的光都在该方向完全自相抵消了），该级主极大就会从屏上彻底消失，称为**缺级**：

$$
\begin{cases} d\sin\theta=m\lambda \\ a\sin\theta=p\lambda \quad (p=\pm 1,\pm 2,\ldots,\ p\ne 0) \end{cases} \quad\Longrightarrow\quad \frac{m}{p}=\frac{d}{a}=\frac{a+b}{a}
$$

   - 若 $d/a$ 是整数 $K$，则缺级级次为 **$m=\pm K,\ \pm 2K,\ \pm 3K,\ldots$**；
   - 更一般地，若 $d/a=P/Q$ 为最简既约分数（$P,Q$ 互质），要使 $m=\frac{P}{Q}p$ 为整数，$p$ 必须取 $Q$ 的非零整数倍，故**缺级级次为 $m=\pm P,\ \pm 2P,\ \pm 3P,\ldots$**（注意：$p\ne 0$，因此**中央零级 $m=0$ 永远不会缺级**！）。

4. **最高可见级次与屏上实际亮条纹总数**：
   - 几何方向存在要求 $|\sin\theta|=\frac{|m|\lambda}{d}\le 1\implies |m|\le\frac{d}{\lambda}$；
   - 若接收屏是有限大的平面屏，$|\theta|=90^\circ$ 的掠射方向平行于光栅面，永远无法落到有限远的平面屏上，故平面屏严格要求 **$|m|<\frac{d}{\lambda}$**；
   - **数条纹标准三步**：① 先由 $|m|<d/\lambda$（或题目给定的角度范围）列出所有整数 $m$（含 $0$ 和正负级次）；② 算出缺级序列并从列表中剔除；③ 统计剩余级次总数。

5. **角色散率与光谱分辨本领（补充推导）**：
   - **角色散率**：固定级次 $m$，对 $d\sin\theta=m\lambda$ 求微分得 $\frac{\mathrm d\theta}{\mathrm d\lambda}=\frac{m}{d\cos\theta}$，表示单位波长差张开的角度间隔。
   - **色分辨本领 $\mathcal R$**：要刚好分辨开波长为 $\lambda$ 与 $\lambda+\Delta\lambda$ 的两条紧邻谱线，按 Rayleigh 判据，波长 $\lambda+\Delta\lambda$ 的第 $m$ 级主极大中心（$d\sin\theta=m(\lambda+\Delta\lambda)$）须恰好落在波长 $\lambda$ 的第 $m$ 级主极大旁的第一极小处（$d\sin\theta=\left(m+\frac{1}{N}\right)\lambda$）。联立两式消去 $d\sin\theta$，立得 $m\Delta\lambda_{\min}=\frac{\lambda}{N}$，故光栅的色分辨本领为（参见 [UT Austin Grating Notes](https://web2.ph.utexas.edu/~coker2/index.files/grating.htm)）：

$$
\mathcal R=\frac{\lambda}{\Delta\lambda_{\min}}=|m|N
$$

   注意公式中的 $N$ 是**光束实际照亮的总刻线数**（$N=\text{光束照亮宽度 } W\times\text{单位长度刻线数 } n_0$），而不是单位长度刻线密度 $n_0$。例如每毫米 $500$ 条刻线的光栅被宽 $10\,\mathrm{mm}$ 的光束照亮，$N=5000$，在二级光谱（$m=2$）处分辨本领为 $\mathcal R=10000$，在 $\lambda=600\,\mathrm{nm}$ 附近可分辨的最小波长差为 $\Delta\lambda_{\min}=600/10000=0.060\,\mathrm{nm}$。

::: note 例题 18｜含缺级与掠射边界的光栅条纹计数
光栅常数 $d=3.0\,\mathrm{\mu m}$，透光缝宽 $a=1.0\,\mathrm{\mu m}$，用 $\lambda=600\,\mathrm{nm}$ 的单色光垂直照射，求在足够大的有限平面接收屏上实际能观察到的主极大亮条纹总数及最高可见级次。

**解答**：
1. **定角度上界**：$d/\lambda=3.0\,\mathrm{\mu m}/0.60\,\mathrm{\mu m}=5$。由于 $m=\pm 5$ 对应 $|\theta|=90^\circ$ 平行于光栅面掠射，落不到有限平面屏上，因此候选整数级次为 $|m|<5\implies m\in\{-4,-3,-2,-1,0,1,2,3,4\}$，共 $9$ 个。
2. **剔除缺级**：由 $d/a=3.0/1.0=3$，缺级级次为 $m=\pm 3p\ (p=1,2,\ldots)$，在候选范围内 $m=\pm 3$ 缺级消失。
3. **汇总结果**：屏上实际可见级次为 $m\in\{0,\pm 1,\pm 2,\pm 4\}$，共 **$7$ 条**主极大亮纹，最高可见级次为 **$\pm 4$ 级**。
:::

#### 圆孔衍射与光学仪器的 Rayleigh 分辨判据

当平行光穿过直径为 $D_a$ 的圆孔时，远场焦平面上的衍射图样不再是直条纹，而是中央一个亮斑——包含约 $84\%$ 光能的 **Airy 斑（艾里斑）**——周围环绕着明暗相间的同心圆环。由于圆孔沿弦长方向的宽度不均匀，通过贝塞尔函数积分求得第一暗环的极小值系数不再是单缝的 $1.00$，而是 **$1.22$**。在小角度近似下，Airy 斑的**角半径** $\theta_A$ 与焦平面上的**线半径** $r_A$ 为（参见 [OpenStax Vol. 3 §4.5](https://openstax.org/books/university-physics-volume-3/pages/4-5-circular-apertures-and-resolution)）：

$$
\theta_A\approx 1.22\frac{\lambda}{D_a}, \qquad r_A\approx 1.22\frac{f\lambda}{D_a}
$$

（审题留心：上式给出的是**角半径 / 线半径**；若题目问中央 Airy 亮斑的**角直径**或**线直径**，需要乘以 $2$，即 $2.44\lambda/D_a$ 或 $2.44f\lambda/D_a$。）

**Rayleigh（瑞利）空间分辨判据**：对于两个不相干的等亮远场点光源，每个点源都在透镜焦面上形成各自的 Airy 衍射斑。当**一个像斑的中央主极大中心恰好落在另一个像斑的第一级暗环上**时，两峰之间的鞍部光强约为单峰最大值的 $73.5\%$（约 $8/\pi^2$），规定此时两点源**恰可分辨**。对应的**最小分辨角** $\Delta\theta_{\min}$ 与仪器**分辨本领** $R_{\mathrm{spatial}}$ 为：

$$
\Delta\theta_{\min}\approx 1.22\frac{\lambda}{D_a}, \qquad R_{\mathrm{spatial}}=\frac{1}{\Delta\theta_{\min}}=\frac{D_a}{1.22\lambda}
$$

这揭示了光学成像的物理极限：**望远镜或显微镜能不能看清精细结构，根本上受制于孔径衍射极限 $\lambda/D_a$**。要提高空间分辨率（减小 $\Delta\theta_{\min}$），要么**增大通光孔径 $D_a$**（如巨型天文望远镜），要么**缩短照明波长 $\lambda$**（如紫外光刻、电子显微镜）；如果两个点源在物镜处已经因为 $\Delta\theta<\Delta\theta_{\min}$ 混成一团模糊的 Airy 斑，后续目镜把图像放大多少倍（空放大）都无法把它们重新分开。

::: note 例题 19｜人眼瞳孔对远处双点源的衍射分辨极限
设人眼瞳孔直径 $D_a=5.0\,\mathrm{mm}$，对空气中波长 $\lambda=550\,\mathrm{nm}$ 的黄绿光最敏感（按理想圆孔空气折射率模型直接估算）。求最小分辨角 $\Delta\theta_{\min}$，以及在距离 $L=100\,\mathrm m$ 远处恰能分辨的两个发光点之间的最小横向间距 $s_{\min}$。

**解答**：
最小分辨角为：

$$
\Delta\theta_{\min}=1.22\frac{\lambda}{D_a}=1.22\times\frac{550\times 10^{-9}}{5.0\times 10^{-3}}=1.342\times 10^{-4}\,\mathrm{rad}
$$

在 $L=100\,\mathrm m$ 远处，两点源张角为 $\Delta\theta=s/L$，故最小可分辨间距为：

$$
s_{\min}=L\,\Delta\theta_{\min}=100\times 1.342\times 10^{-4}=0.01342\,\mathrm m=13.42\,\mathrm{mm}
$$
:::

---

### 3. 光的偏振：五种偏振态、Malus 定律、Brewster 角与晶体双折射

干涉和衍射只证明了光是波，而**偏振（Polarization）是横波独有的指纹**——纵波振动方向永远平行于传播方向，对传播轴旋转完全对称；只有横波的电场矢量 $\mathbf E$ 在垂直于传播方向（设沿 $+z$ 轴）的 $xy$ 横截面内具有方向自由度：

$$
E_x(t)=A_x\cos(\omega t+\varphi_x), \qquad E_y(t)=A_y\cos(\omega t+\varphi_y), \qquad \delta=\varphi_y-\varphi_x
$$

#### 五种偏振态及其实验鉴别

根据横截面上 $E_x$ 与 $E_y$ 的相干性与相位差 $\delta$，光分为五种偏振态[^polar]：

| 偏振态 | 电场矢量 $\mathbf E$ 的微观图景 | 仅旋转一片理想检偏器（Polarizer）看到的透射光强 $I(\alpha)$ | 如何进一步与“外观相同者”鉴别？ |
| --- | --- | --- | --- |
| **线偏振光**（平面偏振光） | $\delta=0$ 或 $\pi$，或仅有一个分量；$\mathbf E$ 始终沿固定直线往复振动 | 随转角按 $\cos^2\alpha$ 变化，每转一周出现**两次最强、两次完全消光（$I_{\min}=0$）** | 单靠一片检偏器即可唯一确认（唯一能实现 $I_{\min}=0$ 的状态） |
| **圆偏振光** | $A_x=A_y$ 且 $\delta=\pm\pi/2$；$\mathbf E$ 大小恒定，矢端在横截面内匀速画圆 | **透射光强恒定不变**（恒为入射光强的一半 $I_0/2$），无明暗变化 | 先垫一片**四分之一波片（$\lambda/4$ 波片）**：圆偏振光经过 $\lambda/4$ 波片后会消除 $\pi/2$ 相位差变成**线偏振光**，再转检偏器即可看到完全消光 |
| **自然光**（非偏振光） | 大量原子随机辐射的统计混杂，横截面上各方向振幅统计均等、正交分量间无固定相位差 | **透射光强恒定不变**（恒为 $I_0/2$），与圆偏振光用单检偏器无法区分 | 先垫一片 $\lambda/4$ 波片：自然光正交分量本就不相干，过 $\lambda/4$ 波片后仍是自然光，再转检偏器光强**依旧恒定不变** |
| **椭圆偏振光** | 一般的稳定相位差 $\delta$，矢端在横截面内周期性画椭圆 | 光强在最大值 $I_{\max}$ 与非零最小值 $I_{\min}>0$ 之间周期起伏，**不能完全消光** | 先垫一片 $\lambda/4$ 波片并使其光轴对准椭圆长/短轴（即原来检偏器测出 $I_{\max}/I_{\min}$ 的方向）：椭圆偏振光被补偿为**线偏振光**，随后转动检偏器可完全消光 |
| **部分偏振光** | 自然光 $I_u$ 与偏振光 $I_p$ 的非相干叠加，某一方向振动占优势 | 光强在 $I_{\max}$ 与 $I_{\min}>0$ 之间周期起伏，**不能完全消光** | 无论怎样放置 $\lambda/4$ 波片，其中的自然光基底 $I_u$ 都无法被完全消去，转动检偏器永远无法实现 $I_{\min}=0$ |

#### 起偏、检偏与 Malus（马吕斯）定律

理想线偏振片有一条特定的**透振方向（偏振化方向）**：只允许平行于透振轴的电场分量无损通过，而将垂直于透振轴的电场分量完全吸收或阻挡（参见 [OpenStax Vol. 3 §1.7](https://openstax.org/books/university-physics-volume-3/pages/1-7-polarization)）。

1. **自然光通过第一片偏振片（起偏器）**：设自然光总光强为 $I_0$，由于各方向振动在统计上完全均等，任意瞬时电场沿透振轴方向投影的平方平均值为 $\langle\cos^2\theta\rangle=\frac{1}{2\pi}\int_0^{2\pi}\cos^2\theta\,\mathrm d\theta=\frac{1}{2}$。因此自然光透过第一片理想偏振片后，**变为振动方向沿该片透振轴的线偏振光，且光强减半**：

$$
I_1=\frac{1}{2}I_0
$$

2. **线偏振光通过偏振片（Malus 定律）**：设振幅为 $E_{\mathrm{in}}$、光强为 $I_{\mathrm{in}}$ 的线偏振光入射到偏振片上，其偏振方向与该片透振轴夹角为 $\alpha$。透射电场振幅按矢量投影折减为 $E_{\mathrm{out}}=E_{\mathrm{in}}\cos\alpha$，且透射后的偏振方向**被扭转到沿当前偏振片的透振轴方向**；由于光强正比于电场振幅平方，透射光强遵循 **Malus 定律**：

$$
I_{\mathrm{out}}=I_{\mathrm{in}}\cos^2\alpha
$$

3. **多片偏振片级联**：当光依次穿过透振轴角度分别为 $\theta_1,\theta_2,\ldots,\theta_n$ 的 $n$ 片偏振片时，每一片偏振片的输入光都是**刚刚从上一片出来、偏振方向沿 $\theta_{j-1}$ 的线偏振光**！因此每一步的夹角必须是**相邻两片透振轴之差 $(\theta_j-\theta_{j-1})$**，绝不是拿后面的偏振片去和第一片算夹角：

$$
I_n=I_1\prod_{j=2}^n\cos^2(\theta_j-\theta_{j-1})=\frac{1}{2}I_0\cos^2(\theta_2-\theta_1)\cos^2(\theta_3-\theta_2)\cdots\cos^2(\theta_n-\theta_{n-1})
$$

![三片偏振片逐步投影电场的示意](/images/physics-midterm/polarizers.svg "自然光通过第一片起偏器光强减半并成为 0° 线偏振光；中间插入的偏振片将电场投影旋转到 α 方向，使原本正交的 90° 末片重新获得非零投影分量")

::: note 例题 20｜正交偏振片之间插入第三片偏振片的透射复兴
两片偏振片 $P_1,P_3$ 透振轴相互正交（$0^\circ$ 与 $90^\circ$），光强为 $I_0$ 的自然光入射时透射光强为零。现于两者中间插入第三片偏振片 $P_2$，其透振轴与 $P_1$ 夹角为 $\alpha$，求最终透射光强 $I(\alpha)$ 及其最大值。

**解答**：
自然光过 $P_1$ 后光强为 $I_1=I_0/2$，偏振方向沿 $0^\circ$；
再过 $P_2$（夹角 $\alpha$）后，光强为 $I_2=\frac{1}{2}I_0\cos^2\alpha$，且**偏振方向已扭转到 $\alpha$ 方向**；
最后过 $P_3$（透振轴 $90^\circ$，与 $P_2$ 夹角为 $90^\circ-\alpha$），出射光强为：

$$
I_3=I_2\cos^2(90^\circ-\alpha)=\frac{1}{2}I_0\cos^2\alpha\sin^2\alpha=\frac{1}{8}I_0\sin^2(2\alpha)
$$

当 $\alpha=45^\circ$ 时，$\sin(2\alpha)=1$，最终透射光强达到最大值 **$I_{\max}=I_0/8$**。这完全是经典矢量连续两次非正交投影的结果（若把 $P_2$ 放在正交的 $P_1,P_3$ **之后**，在 $P_3$ 出口处电场已经归零，再放偏振片自然仍是零）。
:::

**补充：部分偏振光的偏振度 $\mathcal P$**
对于由非相干的自然光成分 $I_u$ 与线偏振光成分 $I_p$ 叠加而成的部分偏振光（总光强 $I_{\mathrm{tot}}=I_u+I_p$），旋转理想检偏器时，自然光部分恒透过 $I_u/2$，线偏振部分按 $I_p\cos^2\alpha$ 变化：

$$
I(\alpha)=\frac{1}{2}I_u+I_p\cos^2\alpha \quad\Longrightarrow\quad I_{\max}=\frac{1}{2}I_u+I_p, \quad I_{\min}=\frac{1}{2}I_u
$$

定义线偏振成分占总光强的比例为**偏振度（Degree of Polarization）**：

$$
\mathcal P=\frac{I_p}{I_u+I_p}=\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}} \qquad (0\le\mathcal P\le 1)
$$

自然光 $I_p=0\implies\mathcal P=0$；完全线偏振光 $I_u=0\implies I_{\min}=0,\ \mathcal P=1$。

#### 反射与折射起偏：Brewster（布儒斯特）定律

把入射光线与界面法线张成的平面称为**入射面**。将自然光分解为两个正交分量：**垂直于入射面的 $s$ 分量**（德语 *senkrecht*，在纸面图上通常画成圆点 $\boldsymbol\cdot$）和**平行于入射面的 $p$ 分量**（*parallel*，画成双箭头 $\leftrightarrow$）。

当自然光以任意斜入射角照射到两种透明电介质（折射率 $n_1\to n_2$）的分界面上时，Fresnel 公式表明界面对 $s$ 分量的反射本领总是强于 $p$ 分量。因此一般斜入射下，反射光是以 $s$ 分量占优的部分偏振光，折射光是以 $p$ 分量占优的部分偏振光。

特别地，当入射角 $i$ 恰好取 **Brewster 角（起偏角）$i_B$**，使得**反射光线与折射光线相互垂直（$i_B+r_B=90^\circ$）**时，介质中的振荡偶极子方向（平行于折射光中的 $p$ 电场方向）恰好沿着反射光线的传播方向——偶极子沿自身轴线方向辐射的横波振幅为零！于是 **$p$ 分量的反射率严格降为零**：

$$
i_B+r_B=90^\circ \quad\stackrel{n_1\sin i_B=n_2\sin r_B}{\Longrightarrow}\quad n_1\sin i_B=n_2\sin(90^\circ-i_B)=n_2\cos i_B \quad\Longrightarrow\quad \tan i_B=\frac{n_2}{n_1}
$$

在 Brewster 角 $i_B=\arctan(n_2/n_1)$ 入射下，反射光与折射光的偏振状态必须严格区分：
- **反射光**：全部 $p$ 分量都透射了，反射光中**只含垂直于入射面的 $s$ 分量，是 $100\%$ 的完全线偏振光**（但仅含约 $15\%$ 的 $s$ 分量反射，光强较弱）；
- **折射光**：包含了 $100\%$ 的 $p$ 分量和剩余约 $85\%$ 未被反射的 $s$ 分量，因此**折射光依然是部分偏振光，绝不是完全线偏振光**（工程上常将多块平行玻璃片叠成“玻璃片堆”置于 $i_B$ 角下，经十几次连续反射滤除 $s$ 分量后，透射光才接近完全 $p$ 线偏振光）。

::: note 例题 21｜空气—玻璃界面的 Brewster 角与检偏消光方向
光从空气（$n_1=1.00$）射向折射率 $n_2=1.50$ 的玻璃表面，求 Brewster 角 $i_B$、此时对应的折射角 $r_B$，并说明如何放置检偏器可使反射光完全消光。

**解答**：
由 Brewster 定律（入射介质 $n_1$ 在分母，折射介质 $n_2$ 在分子）：

$$
\tan i_B=\frac{n_2}{n_1}=1.50 \quad\Longrightarrow\quad i_B=\arctan(1.50)\approx 56.31^\circ
$$

由 $i_B+r_B=90^\circ$ 立得折射角 $r_B=90^\circ-56.31^\circ=33.69^\circ$。此时反射光是振动方向**垂直于入射面**（$s$ 偏振）的完全线偏振光，只需将检偏器的透振轴转到**平行于入射面**的方向，反射光即被完全阻挡消光。
:::

#### 晶体双折射与相干波片（$\lambda/4$ 波片与 $\lambda/2$ 波片）

方解石、石英等各向异性单轴晶体内部原子排列具有方向性，导致介电常数随电场方向而异。一束自然光射入单轴晶体后，一般会分裂为两束偏振方向相互正交、传播速度不同的折射光，称为**双折射（Birefringence）**（参见 [MIT 2.71 Optics Lecture 22](https://ocw.mit.edu/courses/2-71-optics-spring-2014/c683c04243df558f6048cc11924ff44f_MIT2_71S14_lec22_notes.pdf)、[RIT Imaging Science §8.6](https://www.cis.rit.edu/class/simg712-90/notes/basic_principles_notes-high_quality-2-12-2005.pdf)）：

| 核心概念 | 物理定义与光学性质 | 易混辨析 |
| --- | --- | --- |
| **光轴（Optical Axis）** | 晶体内部的一个特殊**方向**：当光沿该方向传播时，$o$ 光与 $e$ 光传播速度完全相同，不发生双折射分裂 | 光轴代表的是晶体中的一个**方向族**（平行于该方向的任意直线都是光轴），而不是晶体内部某一条固定的实体轴线 |
| **主平面（Principal Plane）** | 某束光在晶体内的传播方向与晶体光轴共同张成的平面 | $o$ 光与 $e$ 光走不同路线时有各自的主平面；特殊切割下光轴在入射面内时，两者主平面才与入射面重合 |
| **寻常光（$o$ 光，Ordinary ray）** | 电位移（振动方向）**垂直于 $o$ 光主平面**；在晶体中向各个方向传播的相速度均恒为 $v_o=c/n_o$ | 波阵面为球面，能量传播方向（光线）与波矢方向一致，严格遵守普通 Snell 折射定律 |
| **非寻常光（$e$ 光，Extraordinary ray）** | 电位移（振动方向）**平行于 $e$ 光主平面**；相速度随传播方向与光轴的夹角而变，垂直光轴传播时极值速度为 $v_e=c/n_e$（$n_e$ 称主折射率） | 波阵面为旋转椭球面（$n_e>n_o$ 称正晶体，$n_e<n_o$ 称负晶体），一般方向上光线（能流方向）与波法线不重合，不能用常数折射率套普通 Snell 定律 |

**相干波片（Waveplate）的工作原理**：
将单轴晶体切割成厚度为 $h$ 的平行薄片，并使**光轴平行于晶片表面**。当单色光（真空波长 $\lambda_0$）**垂直入射**到晶片上时，$o$ 光与 $e$ 光都垂直于光轴沿同一法线方向向前传播，**在空间上不分开**，但因为传播速度不同（折射率分别为 $n_o$ 和 $n_e$），穿过厚度 $h$ 后两正交分量之间积累了光程差与相位差：

$$
\delta=|n_o-n_e|h, \qquad \Delta\varphi=\frac{2\pi}{\lambda_0}|n_o-n_e|h
$$

- **四分之一波片（$\lambda/4$ 波片）**：$|n_o-n_e|h=\left(m+\frac{1}{4}\right)\lambda_0$（或 $\left(m-\frac{1}{4}\right)\lambda_0$），使 $o,e$ 两正交分量产生 **$\pm\pi/2$** 的附加相位差。
  - 若入射的是线偏振光，偏振方向与波片光轴夹角为 $\theta$，则分解出的振幅为 $A_e=A\cos\theta$、$A_o=A\sin\theta$，出射后两者相位差为 $\pm\pi/2$：
    - 当 **$\theta=45^\circ$** 时，$A_o=A_e$，出射光合成为**圆偏振光**！
    - 当 $\theta=0^\circ$ 或 $90^\circ$（即沿波片主轴入射）时，只有一个分量，出射光**保持原线偏振方向不变**！
    - 当 $\theta$ 取其他角度时，$A_o\ne A_e$ 且相差 $\pm\pi/2$，出射光成为主轴沿波片光轴方向的**正椭圆偏振光**。
- **二分之一波片（$\lambda/2$ 波片，半波片）**：$|n_o-n_e|h=\left(m+\frac{1}{2}\right)\lambda_0$，使 $o,e$ 两正交分量产生 **$\pi$** 的附加相位差（相当于将其中一个分量反向）。线偏振光以与光轴成 $\theta$ 角入射后，出射光**仍然是线偏振光**，但其偏振方向关于光轴对称翻转，**整体转过了 $2\theta$ 角**！

---

## 全局易错点对照与考场五步审题法

### 二十一项高频概念误区速查

| 序号 | 考场常见误判 | 物理实质与正确判断标准 |
| --- | --- | --- |
| 1 | “凡是周期往复运动都是简谐振动” | 错。必须检验净回复力是否满足线性关系 $F=-k_{\mathrm{eff}}x$（即 $\ddot x=-\omega_0^2 x$），且坐标 $x$ 必须从静平衡位置量起 |
| 2 | “直接用 $\varphi=\arctan(-v_0/\omega x_0)$ 求初相” | 错。$\arctan$ 只返回一、四象限主值；必须同时结合 $\cos\varphi\propto x_0$ 与 $\sin\varphi\propto -v_0$ 的正负号定象限（即 $\operatorname{atan2}$） |
| 3 | “两次经过同一位置 $x$ 就是走了一个周期 $T$” | 错。同一位置对应正负两个相反的速度方向，必须**位置与速度方向同时复原**才算一个完整周期 $T$ |
| 4 | “和差化积里慢变因子是 $\cos\left(\frac{\Delta\omega}{2}t\right)$，所以拍频是 $\frac{1}{2}|\nu_1-\nu_2|$” | 错。物理振幅是 $|\cos\left(\frac{\Delta\omega}{2}t\right)|$，每周期内正负两峰均对应一次最强音，故拍频为 $\nu_b=|\nu_1-\nu_2|$ |
| 5 | “受迫振动稳定后的振动频率等于系统的固有频率 $\omega_0$” | 错。暂态衰减后，稳态受迫振动的频率严格等于**外部驱动力频率 $\Omega$**；当 $\Omega\approx\omega_0$ 时只是振幅最大（共振） |
| 6 | “只要是欠阻尼（$\beta<\omega_0$），受迫振动就一定有位移共振峰” | 错。非零频率处出现位移共振峰 $\Omega_r=\sqrt{\omega_0^2-2\beta^2}$ 要求更严苛的 **$\beta<\omega_0/\sqrt 2$**；在 $\omega_0/\sqrt 2\le\beta<\omega_0$ 区间内虽能自由衰减振荡，但受迫位移振幅单调下降 |
| 7 | “横波向右传播时，波峰处的质元也跟着向右移动” | 错。质元只在平衡位置附近作纵向往复运动（右行波满足 $v_y=-u\,\partial y/\partial x$，上坡向下、下坡向上），向右平移的是相位状态与波形 |
| 8 | “所有机械波都是动能最大时势能最小、两者反相转化” | 错。孤立振子动势能反相；**单向行波**中任意波元的动能密度与势能密度**同相变化、同时最大（在平衡位置）、同时为零（在波峰波谷）** |
| 9 | “驻波波腹振幅最大所以势能最大，且驻波内部没有任何能量流动” | 错。驻波**波腹处斜率为零（$\partial y/\partial x=0$），局部势能恒为零**（纯动能中心），**波节处才是纯势能中心**；驻波每半个周期在相邻波腹与波节间往返输运能量，只是跨波节无能流、全周期净能流为零 |
| 10 | “两列波的路程差等于 $m\lambda$ 就一定是干涉加强” | 错。必须看**总相位差** $\Delta\Phi=(\varphi_2-\varphi_1)-\frac{2\pi}{\lambda}(r_2-r_1)+\Delta\varphi_{\mathrm{refl}}$；若两波源反相或有一次半波损失，路程差 $m\lambda$ 反而是减弱 |
| 11 | “薄膜干涉光程差永远要加 $\lambda_0/2$” | 错。先比对入射介质 $n_0$、膜 $n_f$、基底 $n_s$ 的大小：中间夹心型（一疏一密）有相对半波损失，单调阶梯型（$n_0<n_f<n_s$ 或 $n_0>n_f>n_s$）两次反转抵消，无相对半波损失 |
| 12 | “牛顿环中心永远是暗斑，且抬高透镜时圆环向外扩张” | 错。只有理想接触（$h_0=0$）且有相对半波损失时中心才是暗斑；由 $r_m^2=\frac{mR\lambda_0}{n_f}-2Rh_0$ 可知，抬高透镜使 $h_0\uparrow$ 时，同级半径 $r_m\downarrow$，圆环**向内收缩并在中心消失** |
| 13 | “单缝衍射中 $a\sin\theta=(m+1/2)\lambda$ 是精确的副极大峰值位置” | 错。偶数半波带 $a\sin\theta=m\lambda\ (m\ne 0)$ 是**精确暗纹**；奇数半波带只是副极大的近似定位，精确峰值满足超越方程 $\tan\zeta=\zeta$（如第一副极大在 $1.4303\lambda$） |
| 14 | “单缝衍射所有亮条纹一样宽，均为 $f\lambda/a$” | 错。中央主极大夹在 $m=\pm 1$ 暗纹之间，**中央亮纹宽度 $W_0=2f\lambda/a$ 是其余各级副亮纹宽度的 $2$ 倍** |
| 15 | “光栅常数 $d$ 是两条缝之间不透光部分的宽度 $b$” | 错。光栅常数 $d=a+b$ 是相邻两缝**中心到中心**的周期距离；$d$ 决定主极大位置，$a$ 决定单缝包络暗纹，两者之比 $d/a$ 决定缺级 |
| 16 | “光栅缺级公式 $m=(d/a)p$ 中取 $p=0$ 可知中央零级也会缺级” | 错。单缝衍射在 $p=0$（$\theta=0$）处是中央最强亮纹而非暗纹，因此 $p\ne 0$，**光栅零级主极大永远不会缺级** |
| 17 | “光栅在有限平面屏上的谱线总数直接取 $|m|\le d/\lambda$” | 错。当 $d/\lambda$ 恰为整数时，等号对应 $|\theta|=90^\circ$ 的平行掠射方向，落不到有限大的平面屏上，平面屏计数需取严格不等号 **$|m|<d/\lambda$** 并扣除缺级 |
| 18 | “自然光通过偏振片直接代 Malus 定律 $I=I_0\cos^2\alpha$” | 错。Malus 定律只适用于**线偏振光**入射；自然光通过第一片理想偏振片时各方向平均，光强恒减半为 **$I_1=I_0/2$**，之后才成为线偏振光 |
| 19 | “三片偏振片级联时，第三片的夹角是拿第三片与第一片比” | 错。光线每穿过一片偏振片，偏振方向就被重置到该片透振轴上，因此每一步都必须用**相邻两片偏振片透振轴的夹角** |
| 20 | “旋转一片检偏器看到透射光强恒定不变，入射光就一定是自然光” | 错。**圆偏振光**单过检偏器光强也恒为 $I_0/2$；必须先垫一片 $\lambda/4$ 波片再转检偏器（能消光者为圆偏振光，仍不变者为自然光） |
| 21 | “以 Brewster 角 $i_B$ 入射时，反射光和折射光都变成了完全线偏振光” | 错。只有**反射光**是 $100\%$ 垂直于入射面的 $s$ 完全线偏振光；**折射光**含有全部 $p$ 分量和大部分未被反射的 $s$ 分量，仍是**部分偏振光** |

### 考场解题五步核验清单

1. **定模型**：题干描述的是孤立振子、单向行波、反向波驻波、双波干涉、单缝/多缝/圆孔衍射，还是偏振片/波片级联？
2. **建坐标与正方向**：平衡位置在哪里？波沿 $+x$ 还是 $-x$ 传播？Doppler 效应中谁迎向谁？相位差与光程差是谁减谁？
3. **查附加相位与约束**：波源初相是否同相？薄膜上下界面折射率是“夹心”还是“阶梯”？光栅是否有缺级和 $90^\circ$ 掠射边界？
4. **列符号式再代数值**：先写出纯符号解析式，把 $\mathrm{mm},\ \mathrm{\mu m},\ \mathrm{nm}$ 全部统一换算成国际单位 $\mathrm m$ 后再代入计算。
5. **物理量级与极限自检**：振幅 $A\ge 0$、衍射角 $|\sin\theta|\le 1$、透射光强 $I_{\mathrm{out}}\le I_{\mathrm{in}}$ 是否成立？令参数取特殊极限（如 $t=0,\ x=x_0,\ h_0=0,\ \alpha=0$）能否还原已知初态？

---

## 闭卷自测：十四组综合练习与折叠精析

请先在草稿纸上独立写出完整推导与数值结果，再点击展开核对解析。

### 自测 1｜简谐振动初值、相图与速度方向判定

质量 $m=0.50\,\mathrm{kg}$ 的振子连在劲度系数 $k_s=50\,\mathrm{N/m}$ 的理想水平弹簧上，$t=0$ 时位于 $x_0=+0.060\,\mathrm m$，初速度为 $v_0=-0.80\,\mathrm{m/s}$。求：（1）振幅 $A$、初相 $\varphi$、周期 $T$ 及总机械能 $\mathcal E$；（2）质点在 $t>0$ 后**第一次**经过 $x=+0.080\,\mathrm m$ 时的速度。

::: details 展开解析 1
（1）固有角频率 $\omega=\sqrt{k_s/m}=\sqrt{50/0.50}=10\,\mathrm{rad/s}$，周期 $T=2\pi/\omega=0.20\pi\approx 0.6283\,\mathrm s$。
由 $v_0/\omega=-0.080\,\mathrm m$，得振幅：

$$
A=\sqrt{x_0^2+(v_0/\omega)^2}=\sqrt{0.060^2+(-0.080)^2}=0.100\,\mathrm m
$$

由于 $\cos\varphi=x_0/A=+0.6>0$，$\sin\varphi=-v_0/(\omega A)=+0.8>0$，初相位于**第一象限**，$\varphi=\operatorname{atan2}(0.8,0.6)\approx +0.9273\,\mathrm{rad}$。
总机械能 $\mathcal E=\frac{1}{2}k_sA^2=\frac{1}{2}\times 50\times 0.100^2=0.250\,\mathrm J$。
（2）在 $x=0.080\,\mathrm m$ 处，由相图椭圆关系得速率 $|v|=\omega\sqrt{A^2-x^2}=10\sqrt{0.100^2-0.080^2}=0.600\,\mathrm{m/s}$。
判断方向：$t=0$ 时质点在 $x_0=+0.060\,\mathrm m$ 且向负方向（左）运动，它必须先向左穿过平衡位置到达负端点 $-0.100\,\mathrm m$ 折返后，向右运动才能**第一次**到达 $+0.080\,\mathrm m$，因此首次到达该处时速度为正：**$v=+0.600\,\mathrm{m/s}$**。
:::

### 自测 2｜同频合成、拍频与正交轨迹旋向

（a）两个同方向同频率简谐振动振幅均为 $A$，相位差为 $2\pi/3$，求合振幅。
（b）频率分别为 $440\,\mathrm{Hz}$ 与 $443\,\mathrm{Hz}$ 的两列声波同时到达耳膜，求拍频与拍周期。
（c）质点同时参与正交振动 $x=2\cos\omega t$、$y=\sin\omega t$（长度单位相同），求轨迹方程并判断旋转方向（取 $+x$ 向右、$+y$ 向上）。

::: details 展开解析 2
（a）$A_{\mathrm{sum}}=\sqrt{A^2+A^2+2A^2\cos(2\pi/3)}=\sqrt{2A^2-A^2}=A$（等幅且夹角 $120^\circ$ 的两个旋转矢量合成后长度仍为 $A$）。
（b）拍频 $\nu_b=|440-443|=3\,\mathrm{Hz}$，拍周期 $T_b=1/\nu_b=1/3\,\mathrm s\approx 0.333\,\mathrm s$。
（c）由 $\cos\omega t=x/2$、$\sin\omega t=y$ 平方相加得正椭圆方程：

$$
\frac{x^2}{4}+y^2=1
$$

将 $y=\sin\omega t=\cos(\omega t-\pi/2)$ 写成余弦形式，可见 $\delta=-\pi/2$；或直接看 $t=0$ 时质点位于最右端点 $(2,0)$，此刻纵向速度 $v_y(0)=\omega\cos 0=+\omega>0$（在最右端向上走），故沿椭圆**逆时针**旋转。
:::

### 自测 3｜欠阻尼振荡判据 vs 位移共振峰判据

某振动系统固有角频率 $\omega_0=20\,\mathrm{rad/s}$。（a）当阻尼系数 $\beta=4\,\mathrm{s^{-1}}$ 时，求欠阻尼准角频率 $\omega_d$、位移共振角频率 $\Omega_r$ 及品质因数 $Q$；（b）若加大阻尼使 $\beta=15\,\mathrm{s^{-1}}$，系统撤去外力后还能否作衰减振荡？受迫振动时还会不会出现非零频率的位移共振峰？

::: details 展开解析 3
（a）当 $\beta=4\,\mathrm{s^{-1}}$ 时：

$$
\omega_d=\sqrt{\omega_0^2-\beta^2}=\sqrt{400-16}=\sqrt{384}\approx 19.596\,\mathrm{rad/s}
$$

$$
\Omega_r=\sqrt{\omega_0^2-2\beta^2}=\sqrt{400-32}=\sqrt{368}\approx 19.183\,\mathrm{rad/s}, \qquad Q=\frac{\omega_0}{2\beta}=\frac{20}{8}=2.5
$$

（b）当 $\beta=15\,\mathrm{s^{-1}}$ 时：
- 由于 $\beta=15<\omega_0=20$，系统**仍处于欠阻尼状态**，撤去外力后依然会作准角频率 $\omega_d=\sqrt{400-225}=\sqrt{175}\approx 13.23\,\mathrm{rad/s}$ 的衰减往复振荡；
- 但位移共振峰要求 $\beta<\omega_0/\sqrt 2\approx 14.14\,\mathrm{s^{-1}}$，现在 $\beta=15>14.14$（$\omega_0^2-2\beta^2=400-450=-50<0$），因此受迫振动的位移—频率响应曲线从 $\Omega=0$ 起单调递减，**不再存在非零频率处的位移共振峰**！
:::

### 自测 4｜由原点振动建立左行波函数并求指定点运动状态

一列简谐横波沿 $-x$ 方向以波速 $u=3.0\,\mathrm{m/s}$ 传播。已知原点 $x=0$ 处质元的振幅为 $A=0.020\,\mathrm m$、周期为 $T=0.50\,\mathrm s$，且在 $t=0$ 时原点质元恰通过平衡位置向 $+y$ 方向运动。求：（1）该波的波函数；（2）$t=0$ 时刻位于 $x=0.125\,\mathrm m$ 处质元的位移、振动速度与加速度。

::: details 展开解析 4
（1）角频率 $\omega=2\pi/T=4\pi\,\mathrm{rad/s}$，波长 $\lambda=uT=3.0\times 0.50=1.50\,\mathrm m$，角波数 $k=2\pi/\lambda=4\pi/3\,\mathrm{rad/m}$。
原点在 $t=0$ 时 $y(0,0)=0$ 且 $v_y(0,0)>0$，由旋转矢量法得原点初相 $\varphi=-\pi/2$。
因为波沿 **$-x$ 方向（左行）** 传播，时间延迟项取加号 $t+x/u$，波函数为：

$$
y(x,t)=0.020\cos\left(4\pi t+\frac{4\pi}{3}x-\frac{\pi}{2}\right)\,\mathrm m
$$

（2）将 $x=0.125=1/8\,\mathrm m$、$t=0$ 代入，相位为 $\Phi=\frac{4\pi}{3}\times\frac{1}{8}-\frac{\pi}{2}=-\frac{\pi}{3}$：
- 位移：$y=0.020\cos(-\pi/3)=+0.010\,\mathrm m$；
- 振动速度：$v_y=\frac{\partial y}{\partial t}=-0.080\pi\sin(-\pi/3)=+0.040\sqrt 3\pi\approx +0.2177\,\mathrm{m/s}$；
- 加速度：$a_y=-\omega^2 y=-(4\pi)^2\times 0.010=-0.160\pi^2\approx -1.579\,\mathrm{m/s^2}$（位移在平衡位置上方，故回复加速度向下，而速度向上正朝波峰冲刺）。
:::

### 自测 5｜张紧细绳上的波速、平均传输功率与波峰势能辨析

一根线密度 $\mu=0.010\,\mathrm{kg/m}$ 的长柔绳受恒定张力 $F_T=25\,\mathrm N$ 作用，沿绳传播一列振幅 $A=2.0\,\mathrm{mm}$、频率 $\nu=20\,\mathrm{Hz}$ 的单向简谐横波。求波速 $u$、波长 $\lambda$ 与平均传输功率 $\overline P$，并说明当某质元到达波峰瞬间，该微元的动能和弹性势能各是多少。

::: details 展开解析 5
波速与波长分别为：

$$
u=\sqrt{\frac{F_T}{\mu}}=\sqrt{\frac{25}{0.010}}=50\,\mathrm{m/s}, \qquad \lambda=\frac{u}{\nu}=\frac{50}{20}=2.50\,\mathrm m
$$

角频率 $\omega=2\pi\nu=40\pi\,\mathrm{rad/s}$，细绳平均传输功率为：

$$
\overline P=\frac{1}{2}\mu u\omega^2 A^2=\frac{1}{2}\times 0.010\times 50\times(40\pi)^2\times(2.0\times 10^{-3})^2\approx 0.01579\,\mathrm W
$$

当质元处于波峰瞬间，其瞬时振动速度 $\partial y/\partial t=0$，故动能为零；同时波峰切线水平、局部斜率 $\partial y/\partial x=0$，微元无相对拉伸形变，故**局部弹性势能也为零**。
:::

### 自测 6｜非同相波源干涉与驻波跨节相位对比

（a）两同频相干波源初相相差 $\varphi_2-\varphi_1=\pi/2$，到空间某点 $P$ 的路程差为 $r_2-r_1=\lambda/4$（同种均匀介质，无反射），判断 $P$ 点是干涉加强还是减弱。
（b）已知驻波方程为 $y(x,t)=0.040\sin(2\pi x)\cos(10\pi t)\,\mathrm m$（$x$ 以 $\mathrm m$ 计，$t$ 以 $\mathrm s$ 计），求波长、波节与波腹位置、波腹最大振幅，并判断 $x_1=0.10\,\mathrm m$ 与 $x_2=0.60\,\mathrm m$ 两处质元的振动相位关系。

::: details 展开解析 6
（a）计算 $P$ 点总相位差：

$$
\Delta\Phi=(\varphi_2-\varphi_1)-\frac{2\pi}{\lambda}(r_2-r_1)=\frac{\pi}{2}-\frac{2\pi}{\lambda}\frac{\lambda}{4}=0
$$

相位差为零，两波到达 $P$ 点时完全同相，故为**干涉加强（极大）**。
（b）由 $k=2\pi\,\mathrm{rad/m}$ 得波长 $\lambda=2\pi/k=1.0\,\mathrm m$，相邻波节间距 $\lambda/2=0.50\,\mathrm m$。
- **波节位置**：令 $\sin(2\pi x)=0\implies 2\pi x=m\pi\implies x=\frac{m}{2}\,\mathrm m\ (m\in\mathbb Z)$，即 $x=0,\ \pm 0.50,\ \pm 1.00\,\mathrm m\ldots$
- **波腹位置**：令 $|\sin(2\pi x)|=1\implies 2\pi x=\left(m+\frac{1}{2}\right)\pi\implies x=\frac{2m+1}{4}\,\mathrm m\ (m\in\mathbb Z)$。波腹处最大振幅即式首系数 **$0.040\,\mathrm m$**（已经是合成后的驻波方程，不要再乘 $2$！）。
- **两点相位关系**：$x_1=0.10\,\mathrm m$ 位于 $(0,0.50)$ 区间内（$\sin(0.2\pi)>0$），$x_2=0.60\,\mathrm m$ 位于 $(0.50,1.00)$ 区间内（$\sin(1.2\pi)<0$），两点之间跨过了 $x=0.50\,\mathrm m$ 这一个波节，因此两质元振动**反相（相位差为 $\pi$）**。
:::

### 自测 7｜Doppler 效应中“声源靠近”与“观察者靠近”的不对称性

静止空气中声速 $u=330\,\mathrm{m/s}$，声源固有频率 $\nu_S=500\,\mathrm{Hz}$。分别计算以下两种情形下观察者接收到的频率：（a）声源静止，观察者以 $30\,\mathrm{m/s}$ 迎向声源运动；（b）观察者静止，声源以 $30\,\mathrm{m/s}$ 迎向观察者运动。

::: details 展开解析 7
（a）观察者运动改变分子迎波速率：

$$
\nu_a=\nu_S\frac{u+v_o}{u}=500\times\frac{330+30}{330}=500\times\frac{12}{11}\approx 545.45\,\mathrm{Hz}
$$

（b）声源运动压缩分母介质波长：

$$
\nu_b=\nu_S\frac{u}{u-v_s}=500\times\frac{330}{330-30}=500\times\frac{11}{10}=550.00\,\mathrm{Hz}
$$

虽然两种情形下两者的相对靠近速率都是 $30\,\mathrm{m/s}$，但由于声波速度锚定在空气介质上，声源靠近压缩分母带来的频移（$+50\,\mathrm{Hz}$）显著大于观察者靠近带来的频移（$+45.45\,\mathrm{Hz}$）；只有在 $v\ll u$ 的一阶泰勒近似 $\nu\approx\nu_S(1+v/u)$ 下两者才近似相等。
:::

### 自测 8｜Young 双缝单侧插薄片 vs 整体浸入液体

空气中双缝间距 $d=0.30\,\mathrm{mm}$，缝屏距 $D_s=1.20\,\mathrm m$，入射单色光真空波长 $\lambda_0=600\,\mathrm{nm}$。
（a）在下缝 $S_2$ 后垂直放入折射率 $n_p=1.60$、厚度 $e=2.0\,\mathrm{\mu m}$ 的平行透明薄片，求屏上相邻明纹间距、中央零级明纹的移动方向与移动距离。
（b）撤去薄片，将整套双缝装置浸入折射率 $n=1.50$ 的透明液体中，求此时中央零级明纹的位置与相邻明纹间距。

::: details 展开解析 8
（a）在空气中，相邻明纹间距为：

$$
\Delta x=\frac{\lambda_0 D_s}{d}=\frac{600\times 10^{-9}\times 1.20}{0.30\times 10^{-3}}=2.40\,\mathrm{mm}
$$

单侧插入平行薄片**不改变条纹间距 $\Delta x$**，仍为 $2.40\,\mathrm{mm}$。下缝光程增加了 $(n_p-1)e=(1.60-1)\times 2.0\,\mathrm{\mu m}=1.20\,\mathrm{\mu m}=2\lambda_0$，因此中央零级明纹**向下缝一侧**平移 $2$ 个条纹间距：

$$
|\Delta x_0|=2\Delta x=4.80\,\mathrm{mm} \quad (\text{向下移动})
$$

（b）撤去薄片整套浸入 $n=1.50$ 液体后，上下两路完全对称，**中央零级明纹仍在对称中心 $x=0$ 不动**；介质内波长缩短为 $\lambda=\lambda_0/n$，条纹间距缩小为：

$$
\Delta x'=\frac{\Delta x}{n}=\frac{2.40}{1.50}=1.60\,\mathrm{mm}
$$
:::

### 自测 9｜肥皂膜、空气劈尖与牛顿环的抬升缩环

单色光真空波长均为 $\lambda_0=600\,\mathrm{nm}$，垂直入射：
（a）空气中悬空的肥皂液膜（折射率 $n_f=4/3$），求反射光干涉加强的最薄非零膜厚 $h_{\min}$。
（b）空气劈尖测得相邻暗纹间距 $\ell=0.30\,\mathrm{mm}$，求劈尖夹角 $\alpha$。
（c）空气牛顿环透镜曲率半径 $R=0.80\,\mathrm m$，最初理想接触（$h_0=0$），求第 $5$ 级暗环半径 $r_5$；若将透镜向上平行抬高 $h_0=150\,\mathrm{nm}$，求原本第 $5$ 级暗环的新半径 $r_5'$ 及此时环心的明暗状态。

::: details 展开解析 9
（a）空气—肥皂膜—空气属于 $1<4/3>1$ 的中间夹心型，上下表面反射恰有一次半波损失。反射加强条件为 $2n_fh=\left(m+\frac{1}{2}\right)\lambda_0$，取 $m=0$ 得：

$$
h_{\min}=\frac{\lambda_0}{4n_f}=\frac{600}{4\times(4/3)}=112.5\,\mathrm{nm}
$$

（b）空气劈尖 $n_f=1.00$，由 $\ell=\frac{\lambda_0}{2\alpha}$ 得劈角：

$$
\alpha=\frac{\lambda_0}{2\ell}=\frac{600\times 10^{-9}}{2\times 0.30\times 10^{-3}}=1.00\times 10^{-3}\,\mathrm{rad}
$$

（c）理想接触 $h_0=0$ 时，第 $5$ 级暗环半径为：

$$
r_5=\sqrt{5R\lambda_0}=\sqrt{5\times 0.80\times 600\times 10^{-9}}=\sqrt{2.40\times 10^{-6}}\approx 1.549\,\mathrm{mm}
$$

将透镜抬高 $h_0=150\,\mathrm{nm}$ 后，第 $5$ 级暗环收缩至新半径：

$$
r_5'=\sqrt{5R\lambda_0-2Rh_0}=\sqrt{2.40\times 10^{-6}-2\times 0.80\times 150\times 10^{-9}}=\sqrt{2.16\times 10^{-6}}\approx 1.470\,\mathrm{mm}
$$

此时中心点传播光程差为 $2h_0=300\,\mathrm{nm}=\lambda_0/2$，叠加上下界面的相对半波损失后满足反射加强条件，因此**环心从原本的暗斑变成了亮斑**。
:::

### 自测 10｜单缝衍射条纹宽度与半波带数目

空气中单缝宽 $a=0.10\,\mathrm{mm}$，垂直入射单色光 $\lambda_0=500\,\mathrm{nm}$，缝后会聚透镜焦距 $f=0.40\,\mathrm m$。求：（1）焦平面上中央亮纹的全宽 $W_0$ 与第二级暗纹离中心的距离 $x_2$；（2）在缝边缘波程差为 $\Delta=2.5\lambda_0$ 的衍射方向上，单缝可划分为多少个半波带？该方向是否为精确的第二级副极大中心？

::: details 展开解析 10
（1）第一级暗纹距离 $x_1\approx\frac{f\lambda_0}{a}=\frac{0.40\times 500\times 10^{-9}}{0.10\times 10^{-3}}=2.0\,\mathrm{mm}$，故中央亮纹全宽为：

$$
W_0=2x_1=4.0\,\mathrm{mm}
$$

第二级暗纹（$m=2$）离中心距离为 $x_2\approx 2\frac{f\lambda_0}{a}=4.0\,\mathrm{mm}$。
（2）半波带数目为 $N_h=\frac{\Delta}{\lambda_0/2}=\frac{2.5\lambda_0}{0.5\lambda_0}=5$ 个（奇数）。在半波带近似下它对应第二级副亮纹区域，但由于 $\zeta=2.5\pi$ 不满足精确极值条件 $\tan\zeta=\zeta$（精确峰在 $\zeta\approx 2.459\pi$），它只是近似位置而非精确峰值点。
:::

### 自测 11｜非整数比缺级与掠射边界重合的光栅计数

衍射光栅的光栅常数 $d=2.5\,\mathrm{\mu m}$、透光缝宽 $a=1.0\,\mathrm{\mu m}$，用 $\lambda_0=500\,\mathrm{nm}$ 的单色光垂直照射。写出该光栅的全部缺级级次通式，并求在足够大的有限平面屏上能看到的全部主极大条纹总数。

::: details 展开解析 11
光栅常数与缝宽之比为既约分数：

$$
\frac{d}{a}=\frac{2.5}{1.0}=\frac{5}{2}
$$

由缺级条件 $m=\frac{d}{a}p=\frac{5}{2}p\ (p=\pm 1,\pm 2,\ldots)$，要使 $m$ 为整数，单缝暗纹级次 $p$ 必须取偶数 $p=\pm 2,\pm 4,\ldots$，故**缺级级次为 $m=\pm 5,\ \pm 10,\ \pm 15,\ldots$**。
再看有限平面屏的角度限制：$\frac{d}{\lambda_0}=\frac{2.5\,\mathrm{\mu m}}{0.50\,\mathrm{\mu m}}=5$，平面屏要求严格不等式 $|m|<\frac{d}{\lambda_0}=5$，故候选整数级次为 $m\in\{-4,-3,-2,-1,0,1,2,3,4\}$，共 $9$ 个。
由于第一个缺级级次 $m=\pm 5$ 本来就已经因为 $|\theta|=90^\circ$ 掠射而被排除在区间 $(-4,4)$ 之外，区间内的 $9$ 个级次无一缺级，故平面屏上实际能看到 **$9$ 条**主极大亮纹（切勿在 $9$ 条的基础上再重复减去 $2$ 条！）。
:::

### 自测 12｜天文望远镜的圆孔衍射分辨口径

用波长 $\lambda=600\,\mathrm{nm}$ 的可见光观测角距离为 $\Delta\theta=1.0\times 10^{-5}\,\mathrm{rad}$ 的双星系统，按理想圆孔 Rayleigh 判据，望远镜物镜的最小通光口径 $D_a$ 应为多少？如果物镜口径不够，单纯更换高倍目镜把放大倍率提高一倍，能否将双星分辨开？

::: details 展开解析 12
由 Rayleigh 判据 $\Delta\theta_{\min}=1.22\frac{\lambda}{D_a}\le\Delta\theta$，解得最小物镜口径：

$$
D_a\ge\frac{1.22\lambda}{\Delta\theta}=\frac{1.22\times 600\times 10^{-9}}{1.0\times 10^{-5}}=0.0732\,\mathrm m=7.32\,\mathrm{cm}
$$

**不能**通过更换高倍目镜来替代增大物镜口径：物镜口径不足时，两颗星的 Airy 衍射斑在物镜焦平面上已经重叠成单一亮团，目镜只是把这团已经混叠的像同步放大，无法改变 $\lambda/D_a$ 决定的角分辨率。
:::

### 自测 13｜三片偏振片级联与部分偏振光的偏振度测定

（a）光强为 $I_0$ 的自然光依次垂直穿过透振轴角度分别为 $0^\circ,\ 30^\circ,\ 90^\circ$ 的三片理想偏振片，求最终透射光强 $I_3$。
（b）一束由自然光与线偏振光构成的混合光（部分偏振光）通过一片理想检偏器，旋转检偏器一周，测得透射光强的最大值为 $8$、最小值为 $2$（同一相对光强单位）。求入射光中自然光强度 $I_u$、线偏振光强度 $I_p$ 以及该束光的偏振度 $\mathcal P$。

::: details 展开解析 13
（a）自然光过第一片（$0^\circ$）后减半为 $I_1=I_0/2$；第一片与第二片（$30^\circ$）夹角为 $30^\circ$，第二片与第三片（$90^\circ$）**相邻夹角为 $90^\circ-30^\circ=60^\circ$**。由 Malus 定律递推：

$$
I_3=\frac{1}{2}I_0\cos^2 30^\circ\cos^2 60^\circ=\frac{1}{2}I_0\times\left(\frac{\sqrt 3}{2}\right)^2\times\left(\frac{1}{2}\right)^2=\frac{3}{32}I_0
$$

（b）检偏器转到消去线偏振分量时，$I_{\min}=\frac{1}{2}I_u=2\implies I_u=4$；
检偏器转到平行于线偏振分量时，$I_{\max}=\frac{1}{2}I_u+I_p=8\implies I_p=8-2=6$。
入射总光强 $I_{\mathrm{tot}}=I_u+I_p=10$，偏振度为：

$$
\mathcal P=\frac{I_p}{I_u+I_p}=\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}}=\frac{8-2}{8+2}=0.60
$$
:::

### 自测 14｜光密到光疏的 Brewster 角与四分之一波片输出态

（a）一束自然光从折射率 $n_1=1.50$ 的玻璃内部射向空气（$n_2=1.00$）界面，求 Brewster 起偏角 $i_B$、对应的折射角 $r_B$，并指出反射光的电场振动方向。
（b）一束线偏振光垂直入射到四分之一波片上，在什么入射方位角下出射光为圆偏振光？若入射偏振方向平行于波片光轴，出射光是什么偏振态？

::: details 展开解析 14
（a）注意这次是从玻璃（入射介质 $n_1=1.50$）射向空气（折射介质 $n_2=1.00$），分母是入射介质折射率 $n_1$：

$$
\tan i_B=\frac{n_2}{n_1}=\frac{1.00}{1.50}=\frac{2}{3} \quad\Longrightarrow\quad i_B=\arctan\left(\frac{2}{3}\right)\approx 33.69^\circ
$$

折射角为 $r_B=90^\circ-i_B=56.31^\circ$（且由于 $\sin i_B=\frac{2}{\sqrt{13}}<\frac{1}{1.50}=\frac{2}{3}=\sin i_c$，Brewster 角总是小于全反射临界角 $i_c=41.81^\circ$，故一定有折射光）。反射光为电场振动方向**垂直于入射面**（$s$ 分量）的完全线偏振光。
（b）当入射线的偏振方向与四分之一波片的光轴成 **$\theta=45^\circ$** 角时，$o$ 光与 $e$ 光两正交分量振幅相等（$A_o=A_e$）且经波片后相位相差 $\pm\pi/2$，合成为**圆偏振光**；若平行于波片光轴（$\theta=0^\circ$）或垂直于光轴（$\theta=90^\circ$）入射，则只有单一本征分量，出射光**仍为原方向的线偏振光**。
:::

---

## 考前核心公式速查表

| 章节与物理模型 | 核心解析公式 | 代入前必查前提 |
| --- | --- | --- |
| **简谐振动（SHM）** | $\ddot x+\omega_0^2 x=0,\quad x=A\cos(\omega t+\varphi),\quad v=-\omega A\sin\psi,\quad a=-\omega^2 x$ | 位移 $x$ 从静平衡位置量起；单摆 $\omega_0=\sqrt{g/l}$ 需小角度 $|\theta|\ll 1$ |
| **SHM 初值与能量** | $A=\sqrt{x_0^2+(v_0/\omega)^2},\quad \varphi=\operatorname{atan2}(-v_0/\omega,x_0),\quad \mathcal E=\frac{1}{2}k_sA^2$ | 初相由 $(\cos\varphi,\sin\varphi)$ 双符号定象限；无阻尼平均动势能各占 $\mathcal E/2$ |
| **同频合成与拍** | $A^2=A_1^2+A_2^2+2A_1A_2\cos\Delta\varphi,\qquad \nu_{\mathrm{beat}}=\lvert\nu_1-\nu_2\rvert$ | 同频合成需振动方向平行；拍频适用于两频率接近的强弱调制 |
| **阻尼与受迫共振** | $\omega_d=\sqrt{\omega_0^2-\beta^2}\ (\beta<\omega_0),\quad \Omega_r=\sqrt{\omega_0^2-2\beta^2}\ (\beta<\omega_0/\sqrt 2),\quad Q=\frac{\omega_0}{2\beta}$ | 稳态频率恒为外力频率 $\Omega$；速度与功率共振恒在 $\Omega=\omega_0$ |
| **平面简谐行波** | $y(x,t)=A\cos\left[\omega\left(t\mp\frac{x-x_0}{u}\right)+\varphi_0\right],\quad u=\lambda\nu=\frac{\omega}{k}$ | 上号沿 $+x$ 传播，下号沿 $-x$ 传播；跨界面频率 $\nu$ 不变 |
| **质元速度与波强** | $v_y=\mp u\frac{\partial y}{\partial x},\quad w=\rho\omega^2A^2\sin^2\Phi,\quad I=\overline w u=\frac{1}{2}\rho u\omega^2A^2$ | 单向行波中 $\varepsilon_k=\varepsilon_p$ 同相变化；无吸收球面波 $I\propto r^{-2},\ A\propto r^{-1}$ |
| **干涉与驻波** | $\Delta\Phi=(\varphi_2-\varphi_1)-k(r_2-r_1),\quad y_{\mathrm{stand}}=2A\cos kx\cos\omega t$ | 相邻波节距 $\lambda/2$；两端同性本征频 $\nu_n=nu/(2L)$，一节一腹为 $(2n-1)u/(4L)$ |
| **Doppler 效应** | $\nu_O=\nu_S\frac{u-v_O}{u-v_S}=\nu_S\frac{u\pm v_o}{u\mp v_s},\quad \nu_{\mathrm{echo}}=\nu_0\frac{u+v}{u-v}$ | 速度相对于静止介质定义；靠近使频率升高，运动反射靶连算两次 |
| **Young 双缝干涉** | $\delta=n\frac{dx}{D_s}=m\lambda_0\ (\text{明}),\quad \Delta x=\frac{\lambda_0 D_s}{nd},\quad \lvert x_0\rvert=\frac{D_s}{d}(n_p-1)e$ | 远场近轴 $D_s\gg d$；单侧插薄片条纹间距不变，零级向薄片侧平移 |
| **薄膜等倾干涉** | $\delta_g=2n_fh\cos r=2h\sqrt{n_f^2-n_0^2\sin^2 i}$ | 先比对 $n_0,n_f,n_s$：夹心型加减 $\lambda_0/2$（一疏一密），阶梯型无相对半波损失 |
| **劈尖与牛顿环** | $\ell=\frac{\lambda_0}{2n_f\alpha},\quad \Delta h=\frac{\lambda_0}{2n_f},\quad r_m^2=\frac{mR\lambda_0}{n_f}-2Rh_0,\quad \mathcal D_{m+p}^2-\mathcal D_m^2=\frac{4pR\lambda_0}{n_f}$ | 均属等厚干涉；牛顿环抬高 $h_0\uparrow$ 时圆环向内收缩，直径差公式分母含 $4$ |
| **单缝 Fraunhofer 衍射** | $a\sin\theta=m\lambda\ (m=\pm 1,\pm 2,\ldots\text{ 暗}),\quad W_0\approx\frac{2f\lambda}{a},\quad I=I_0\left(\frac{\sin\zeta}{\zeta}\right)^2$ | $m=0$ 为中央主极大，全宽是副亮纹的 $2$ 倍；精确副极大满足 $\tan\zeta=\zeta$ |
| **衍射光栅** | $d\sin\theta=m\lambda,\quad m_{\mathrm{missing}}=\frac{d}{a}p\ (p\ne 0),\quad \lvert m\rvert<\frac{d}{\lambda},\quad \mathcal R=\lvert m\rvert N$ | $d=a+b$；零级永不缺级；有限平面屏不含 $90^\circ$ 掠射级；$N$ 为实际照亮总缝数 |
| **圆孔 Rayleigh 判据** | $\theta_A=\Delta\theta_{\min}\approx 1.22\frac{\lambda}{D_a},\qquad r_A\approx 1.22\frac{f\lambda}{D_a}$ | $D_a$ 为圆孔直径；给出的是角半径與线半径（算亮斑直径需乘 $2$） |
| **偏振与 Malus 定律** | $I_1=\frac{1}{2}I_0\ (\text{自然光}),\quad I_n=\frac{1}{2}I_0\prod_{j=2}^n\cos^2(\theta_j-\theta_{j-1}),\quad \mathcal P=\frac{I_{\max}-I_{\min}}{I_{\max}+I_{\min}}$ | 级联偏振片用相邻轴夹角；鉴别圆偏振与自然光需加 $\lambda/4$ 波片 |
| **Brewster 角与波片** | $\tan i_B=\frac{n_2}{n_1}\ (i_B+r_B=90^\circ),\qquad \Delta\varphi=\frac{2\pi}{\lambda_0}\lvert n_o-n_e\rvert h$ | $i_B$ 下反射光为完全 $s$ 线偏振、折射光为部分偏振；$45^\circ$ 线偏振过 $\lambda/4$ 波片得圆偏振 |

---

## 参考资料与延伸阅读

- **机械振动与机械波**：[OpenStax University Physics Volume 1, Chapters 15–17](https://openstax.org/books/university-physics-volume-1/pages/15-1-simple-harmonic-motion)（涵盖简谐运动、阻尼与受迫振荡、行波能量、驻波与声波 Doppler 效应）
- **波动光学（干涉、衍射与偏振）**：[OpenStax University Physics Volume 3, Chapters 1, 3, 4](https://openstax.org/books/university-physics-volume-3/pages/3-4-interference-in-thin-films)（涵盖偏振与 Brewster 角、薄膜干涉、单缝衍射相量积分、光栅与圆孔分辨极限）
- **专题教学讲义**：[University of Colorado: Newton's Rings](https://physicslabs.colorado.edu/demos/optics/interference/thin-films/newtons-rings/)、[UT Austin: Diffraction Gratings](https://web2.ph.utexas.edu/~coker2/index.files/grating.htm)、[MIT 2.71 Optics Lecture 22: Birefringence](https://ocw.mit.edu/courses/2-71-optics-spring-2014/c683c04243df558f6048cc11924ff44f_MIT2_71S14_lec22_notes.pdf)、[RIT Imaging Science §8.6](https://www.cis.rit.edu/class/simg712-90/notes/basic_principles_notes-high_quality-2-12-2005.pdf)

[^scope]: 本文覆盖大学物理（下）期中范围的三大板块：第九章机械振动、第十章机械波与第十一章波动光学。正文中标注“补充推导”的小节（如一般势阱微振线性化、受迫共振极值求导、单缝相量积分、光栅色分辨本领等）用于打通公式背后的数学来龙去脉，读懂后能显著减少死记硬背的负担。
[^phase]: 余弦函数是偶函数，在 $[-\pi,\pi)$ 内同一个余弦值 $x_0/A$ 对应一正一负两个角，分别代表相反的初速度方向；只有同时联立 $\cos\varphi=x_0/A$ 与 $\sin\varphi=-v_0/(\omega A)$，才能唯一锁定初相所在的象限。
[^sign]: 全文行波统一采用 $\cos(\omega t-kx+\varphi)$ 的时间在前约定，此时沿着波的传播方向 $+x$ 越往远处走，相位越滞后（$-kx$）。若部分参考书采用 $\cos(kx-\omega t+\varphi')$ 的空间在前约定，只需注意 $\varphi'=-\varphi$，物理演化与传播方向完全一致。
[^standing]: 教材中常说“驻波在最大位移时刻全部能量为势能”，这句话针对的是**整条弦（或整个半波长驻波段）的积分总能量**；若细看那个时刻各点的局部能量密度，势能其实全部集中在斜率最大的**波节附近**，而位移最大的**波腹点**切线水平（$\partial y/\partial x=0$），局部势能密度反而恒为零。
[^reflection]: 将界面反射的 $\pi$ 相位跃变折算为 $\pm\lambda_0/2$ 的附加光程，只是为了把总相位差 $\Delta\Phi$ 统一写成 $\frac{2\pi}{\lambda_0}\delta_{\mathrm{eff}}$ 的等效记法，并不代表光线在界面处真的多走了一段物理距离。
[^polar]: 仅靠旋转一片检偏器只能测量光强在各个横截面方向上的投影平方均值，丢失了正交分量之间的相位相干信息；因此“圆偏振光 vs 自然光”以及“椭圆偏振光 vs 部分偏振光”必须引入四分之一波片做相位补偿后才能区分。
