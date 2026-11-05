---
title: "无机化学期中复习：前四章知识点、公式推导与例题"
date: 2026-11-06 04:47:33
category: 课程
tags:
  - 无机化学
  - 期中复习
  - 化学平衡
description: "按前四章讲清气体与依数性、热力学、动力学与化学平衡、酸碱与沉淀平衡，逐步推导公式，配原创算例与七道可折叠解析的闭卷自测。"
aigcRate: 100
aigcModels:
  - openai
---

这篇复习笔记覆盖课程期中前四章。做计算题时，先写配平反应式与物态，再把给定条件换成模型所需的量，最后用单位、守恒、方向或数量级验算。每章的例题都可以遮住解答先做一遍。

| 看到什么条件 | 先写什么 | 最后检查什么 |
| --- | --- | --- |
| 混合气、排水集气 | $p_i=x_i p_{\mathrm{tot}}$，分清总压与分压 | $\sum_i p_i=p_{\mathrm{tot}}$ |
| 溶液沸点、凝固点、渗透压 | $b$ 用每千克溶剂，$c$ 用每升溶液 | 温度差方向、溶质粒子数 |
| 量热、热化学方程式 | $q_v=\Delta U$ 或 $q_p=\Delta H$，注明条件 | 正负号、物态、每摩尔反应的基准 |
| 随时间变化或不同温度的速率 | 确认速率定义、级数和 $k$ 的单位 | 浓度非负，$T$ 用 K |
| 平衡移动、转化率 | 配平方程，写 $Q$，与同温度的 $K^\circ$ 比较 | 初始量、变化量、平衡量守恒 |
| 酸碱混合、沉淀 | 先算定量反应与混合体积，再列平衡 | 近似是否成立、剩余物种是否存在 |

记 $\lg=\log_{10}$，$\ln=\log_e$，用 $\circ$ 表示课件中也可能写作 $\theta$ 的标准态。数值例题按题设采用理想气体或稀溶液模型。凡在对数里使用浓度，都取其除以标准浓度后的无量纲数值。

## 第一章　气体与溶液的性质

### 理想气体、密度和混合气体

理想气体忽略分子的占位体积与相互作用。低压下分子距离大，较高温度下分子动能相对较大，许多实际气体在这些条件下可近似为理想气体。

$$
pV=nRT,\qquad T/\mathrm K=t/{}^\circ\mathrm C+273.15,\qquad
M=\frac{mRT}{pV}=\frac{\rho RT}{p}.
$$

这里 $p$ 是绝对压强，$V$ 是气体体积，$n=m/M$，$\rho=m/V$。取 $R=8.314\,\mathrm{J\,mol^{-1}\,K^{-1}}$ 时，可配 $\mathrm{Pa,m^3}$ 或 $\mathrm{kPa,L}$，因为 $1\,\mathrm{kPa\,L}=1\,\mathrm J$。用 $\mathrm{atm,L}$ 时取 $R=0.08206\,\mathrm{L\,atm\,mol^{-1}\,K^{-1}}$。在 $0\,^\circ\mathrm C$，$1\,\mathrm{atm}$ 对应约 $22.414\,\mathrm{L\,mol^{-1}}$，$100\,\mathrm{kPa}$ 对应约 $22.711\,\mathrm{L\,mol^{-1}}$。

混合气体中的组分 $i$ 单独占据容器全部体积 $V$ 时，在同温度下会产生 $p_i=n_iRT/V$。把各组分相加得到 Dalton 分压定律。若改为让组分 $i$ 单独承受混合物总压，则其假想分体积 $V_i=n_iRT/p_{\mathrm{tot}}$。

$$
x_i=\frac{n_i}{n_{\mathrm{tot}}},\qquad
p_i=x_i p_{\mathrm{tot}},\qquad
p_{\mathrm{tot}}=\sum_i p_i,\qquad
\frac{V_i}{V}=x_i.
$$

**例题｜排水集气。** $25.00\,^\circ\mathrm C$ 收集 $0.500\,\mathrm L$ 氧气与饱和水蒸气，内外液面等高，大气压为 $100.0\,\mathrm{kPa}$，该温度水的饱和蒸气压为 $3.17\,\mathrm{kPa}$。液面等高给出瓶内总压等于大气压，故干氧分压为 $96.83\,\mathrm{kPa}$，物质的量为 $96.83(0.500)/(8.314\times298.15)=1.95\times10^{-2}\,\mathrm{mol}$。若液面有高度差，先根据液柱静压修正瓶内总压，再减水蒸气分压。 [OpenStax 9.3 气体计量与排水集气](https://openstax.org/books/chemistry-2e/pages/9-3-stoichiometry-of-gaseous-substances-mixtures-and-reactions)

真实气体可用 van der Waals 方程理解两种偏差。

$$
\left(p+a\frac{n^2}{V^2}\right)(V-nb)=nRT,\qquad Z=\frac{pV}{nRT}.
$$

参数 $a$ 补偿分子间引力使实测压强降低的影响，$b$ 表示每摩尔的排除体积参数，因此可用空间写作 $V-nb$。$Z=1$ 对应理想气体预测，$Z<1$ 时同温同压下实际摩尔体积较小，$Z>1$ 时较大。 [OpenStax 9.6 真实气体](https://openstax.org/books/chemistry-2e/pages/9-6-non-ideal-gas-behavior)

### 四种浓度和溶解度

| 名称 | 定义 | 分母与单位 |
| --- | --- | --- |
| 物质的量浓度 $c_B$ | $n_B/V$ | 溶液体积，$\mathrm{mol\,L^{-1}}$ |
| 质量摩尔浓度 $b_B$ | $n_B/m_{\mathrm{solvent}}$ | 溶剂质量，$\mathrm{mol\,kg^{-1}}$ |
| 摩尔分数 $x_B$ | $n_B/\sum_i n_i$ | 总物质的量，无量纲 |
| 质量分数 $w_B$ | $m_B/m_{\mathrm{solution}}$ | 溶液质量，无量纲 |

二元溶液取 $1.000\,\mathrm L$ 作计算基准。若 $\rho$ 以 $\mathrm{g\,mL^{-1}}$ 计、$M_B$ 以 $\mathrm{g\,mol^{-1}}$ 计，溶液质量为 $1000\rho$ 克，溶质为 $1000\rho w_B$ 克，溶剂为 $\rho(1-w_B)$ 千克。分别除以对应分母，得到数值关系

$$
c_B=\frac{1000\rho w_B}{M_B},\qquad
b_B=\frac{1000 w_B}{M_B(1-w_B)}.
$$

例如 $w_B=0.100$、$\rho=1.04\,\mathrm{g\,mL^{-1}}$、$M_B=60.0\,\mathrm{g\,mol^{-1}}$，则 $c_B=1.73\,\mathrm{mol\,L^{-1}}$，$b_B=1.85\,\mathrm{mol\,kg^{-1}}$。稀水溶液中，每升溶液含近 $1\,\mathrm{kg}$ 水，二者的**数值**才可近似相等。加溶剂稀释且溶质守恒时用 $c_1V_1=c_2V_2$。

**溶解度**是指定条件下溶解达到平衡时的浓度。溶液浓或稀描述当前组成，饱和与否要和该温度的溶解度比较。**相似相溶**可从相互作用判断，例如水能与乙醇形成氢键，也能通过离子–偶极作用水合许多离子。能否溶解还受原有作用力与混合熵影响，例如水合能力强也未必抵得过离子晶格稳定性。

**Henry 定律**在固定温度、低溶解浓度且气液平衡下可写为 $c_{\mathrm{gas,aq}}=k_{\mathrm H}p_{\mathrm{gas}}$。这里选用浓度/压强定义的 $k_{\mathrm H}$。若题目给的是 $p=k_{\mathrm H}'x$，要按题给定义与单位使用。氧气分压从 $20$ 升到 $40\,\mathrm{kPa}$ 时，在定律适用范围内其平衡溶解浓度加倍。发生电离或化学反应时，需区分未反应的溶解分子和各种形态加总的浓度。 [OpenStax 11.3 溶解度](https://openstax.org/books/chemistry-2e/pages/11-3-solubility)

### 四种稀溶液依数性

溶剂掺入溶质后，理想混合使液相溶剂的化学势降低。用相平衡来理解三个方向。溶液与蒸气达到平衡所需的溶剂分压变小，因此要升温才能达到给定外压并沸腾。若析出的固相是纯溶剂，需降温才能重新达到液相与固相的平衡。半透膜只让溶剂通过时，溶剂净流向溶液一侧，增加溶液侧压强可抵消驱动力。 [OpenStax 11.4 依数性](https://openstax.org/books/chemistry-2e/pages/11-4-colligative-properties)

| 现象 | 公式 | 使用条件 |
| --- | --- | --- |
| 蒸气压下降 | $p_A=x_Ap_A^*$，$\Delta p=p_A^*(1-x_A)$ | $p_A^*$ 是同温纯溶剂蒸气压。若溶质也挥发，理想溶液的总压为 $\sum_i x_i p_i^*$ |
| 沸点升高 | $\Delta T_b=T_b-T_b^*=iK_b b$ | 稀溶液，同一外压 |
| 凝固点降低 | $\Delta T_f=T_f^*-T_f=iK_f b$ | 稀溶液，初始析出纯溶剂 |
| 渗透压 | $\Pi=i cRT$ | 稀溶液，膜仅透溶剂，另一侧为纯溶剂 |

$K_b$ 和 $K_f$ 由溶剂决定，水的常用近似值分别为 $0.512$ 和 $1.86\,\mathrm{K\,kg\,mol^{-1}}$。$b$、$c$ 按投入的溶质化学式单元计。van 't Hoff 因子 $i$ 反映有效粒子数，非缔合非电解质取 $1$，理想完全解离时 $\ce{CaCl2}$ 取 $3$，真实电解质溶液会偏离整数。

**例题｜反推摩尔质量。** $3.00\,\mathrm g$ 非挥发非电解质溶于 $50.0\,\mathrm g$ 水，凝固点下降 $0.620\,\mathrm K$。由 $b=\Delta T_f/K_f=0.333\,\mathrm{mol\,kg^{-1}}$ 得 $n=b\,m_{\mathrm{solvent}}=0.0167\,\mathrm{mol}$，$M=3.00/0.0167\approx180\,\mathrm{g\,mol^{-1}}$。渗透压题则改用 $n=\Pi V/(iRT)$。两种方法都先求物质的量，再用 $M=m/n$。

## 第二章　化学热力学基础

### 系统、状态函数和反应进度

开放系统可交换物质和能量，封闭系统可交换能量，孤立系统两者均无交换。温度与压强是强度量，均匀体系加倍时它们保持原值。体积、内能 $U$、焓 $H$、熵 $S$ 和 Gibbs 自由能 $G$ 是广度量。它们的变化只由始末状态确定。热 $q$ 和功 $w$ 描述过程中的能量传递，数值取决于路径。

标准态按指定温度定义。气相标准压强 $p^\circ=100\,\mathrm{kPa}$，纯固体和纯液体取该温度、标准压强下的纯物质。溶质用选定标准态的活度度量，浓度制常用 $c^\circ=1\,\mathrm{mol\,L^{-1}}$ 归一化。表格常列 $298.15\,\mathrm K$ 的数据，$^\circ$ 本身只标明标准态。

配平方程写作 $0=\sum_i\nu_iB_i$，产物 $\nu_i>0$，反应物 $\nu_i<0$。单一反应的进度 $\xi$ 满足

$$
n_i=n_{i,0}+\nu_i\xi,\qquad
\Delta\xi=\frac{\Delta n_i}{\nu_i}.
$$

例如 $\ce{N2 + 3H2 -> 2NH3}$ 消耗 $0.60\,\mathrm{mol}$ $\ce{H2}$ 时，$\Delta\xi=0.20\,\mathrm{mol}$，生成 $0.40\,\mathrm{mol}$ $\ce{NH3}$。反应方程整体乘二，同一次实验的 $\Delta\xi$ 减半，每摩尔反应焓变则乘二。

### 第一律与量热

以系统为主语，吸热 $q>0$，环境对系统做功 $w>0$。体积功为 $w_{\mathrm{PV}}=-\int p_{\mathrm{ext}}\,dV$。恒外压膨胀时它等于 $-p_{\mathrm{ext}}\Delta V$。

$$
\Delta U=q+w,\qquad H=U+pV,\qquad
\Delta H=\Delta U+\Delta(pV).
$$

在封闭系统且仅有体积功时，恒容得 $q_v=\Delta U$。恒压且系统始末压强等于恒定外压时，$q_p=\Delta H$。对同一温度的反应，若气体近似理想且凝聚相的 $pV$ 贡献可忽略，则

$$
\Delta_{\mathrm r}H_m\simeq\Delta_{\mathrm r}U_m+RT\Delta\nu_g,\qquad
\Delta\nu_g=\sum_{i\ \mathrm{gas}}\nu_i .
$$

这是每摩尔反应的式子。实际进行 $\Delta\xi$ 摩尔反应时，热量差对应 $\Delta n_g RT=\Delta\xi\Delta\nu_gRT$。

**例题｜从弹式量热到恒压热。** 对 $\ce{2CO(g) + O2(g) -> 2CO2(g)}$，假设 $298.15\,\mathrm K$ 的恒容量热给出 $\Delta_{\mathrm r}U_m=-563.5\,\mathrm{kJ\,mol^{-1}}$。$\Delta\nu_g=2-3=-1$，$RT\Delta\nu_g=-2.479\,\mathrm{kJ\,mol^{-1}}$，故 $\Delta_{\mathrm r}H_m\approx-566.0\,\mathrm{kJ\,mol^{-1}}$。量热仪升温时 $q_{\mathrm{cal}}=C_{\mathrm{cal}}\Delta T>0$，若与外界隔热且已校正其他热效应，反应放热 $q_{\mathrm{rxn}}=-q_{\mathrm{cal}}$。 [OpenStax 5.3 焓、第一律与 Hess 定律](https://openstax.org/books/chemistry-2e/pages/5-3-enthalpy)

### Hess 定律、生成焓、燃烧焓和键焓

焓是状态函数。可将热化学方程翻转、倍乘、相加，只要各物质的系数与物态消元后得到目标式。反向要变号，倍乘要等比例放大焓变。

- **标准摩尔生成焓** $\Delta_{\mathrm f}H_{m,i}^\circ$ 是由参考态单质生成 $1\,\mathrm{mol}$ 指定物态的物质时的反应焓。参考态单质的生成焓规定为零，例如 $\ce{O2(g)}$ 和石墨。用带符号的 $\nu_i$ 统一写为 $\Delta_{\mathrm r}H_m^\circ=\sum_i\nu_i\Delta_{\mathrm f}H_{m,i}^\circ$。
- **标准摩尔燃烧焓** $\Delta_{\mathrm c}H_{m,i}^\circ$ 是 $1\,\mathrm{mol}$ 物质完全燃烧到规定产物时的反应焓。当两侧能通往同一套终态时，两条燃烧路径相减得到 $\Delta_{\mathrm r}H_m^\circ=-\sum_i\nu_i\Delta_{\mathrm c}H_{m,i}^\circ$。处于共同终态的物质在该循环中无额外燃烧焓贡献。水写成液态还是气态必须统一。
- **平均键焓**适合估算气相反应，$\Delta_{\mathrm r}H_m\approx\sum D_{\mathrm{断键}}-\sum D_{\mathrm{成键}}$。断键耗能，形成同种键释放能量。平均键焓依化学环境而有误差，液体或固体涉及相变时还需加相变焓。

**例题｜用燃烧焓求氢化焓。** 对 $\ce{C2H4(g) + H2(g) -> C2H6(g)}$，题给三者燃烧焓依次为 $-1411$、$-286$、$-1560\,\mathrm{kJ\,mol^{-1}}$，水的终态均为液态。反应物燃烧放出 $1697\,\mathrm{kJ}$，产物燃烧放出 $1560\,\mathrm{kJ}$，路径相减得氢化焓 $(-1411-286)-(-1560)=-137\,\mathrm{kJ\,mol^{-1}}$。

### 熵、自由能和标准转向温度

熵衡量能量与微观状态的分布，热力学上 $dS=\delta q_{\mathrm{rev}}/T$。第二定律判断的是系统与环境的总熵变，自发过程满足 $\Delta S_{\mathrm{univ}}>0$。第三定律将 $0\,\mathrm K$ 下理想完美晶体的熵取为零。标准摩尔熵 $S_{m,i}^\circ$ 在 $298.15\,\mathrm K$ 下通常为正，单质也应查表。$\Delta_{\mathrm r}S_m^\circ=\sum_i\nu_i S_{m,i}^\circ$。产气常使熵增，定量判断用表值。

对只涉及体积功的封闭体系，在恒温恒压并与恒温热库交换热量时，$\Delta S_{\mathrm{surr}}=-\Delta H/T$。于是

$$
G=H-TS,\qquad
\Delta G=\Delta H-T\Delta S=-T\Delta S_{\mathrm{univ}}.
$$

即时方向由当前组成的 $\Delta_{\mathrm r}G_m=(\partial G/\partial\xi)_{T,p}$ 决定。它小于零时向正向移动，大于零时向逆向移动。两方向可达的化学平衡满足 $\Delta_{\mathrm r}G_m=0$。标准反应自由能可由 $\sum_i\nu_i\Delta_{\mathrm f}G_{m,i}^\circ$ 或 $\Delta_{\mathrm r}H_m^\circ-T\Delta_{\mathrm r}S_m^\circ$ 求出。

| $\Delta_{\mathrm r}H_m^\circ$ | $\Delta_{\mathrm r}S_m^\circ$ | 在同一相区间内把两者近似为常量时 |
| --- | --- | --- |
| 负 | 正 | $\Delta_{\mathrm r}G_m^\circ<0$ |
| 正 | 负 | $\Delta_{\mathrm r}G_m^\circ>0$ |
| 负 | 负 | 低温 $\Delta_{\mathrm r}G_m^\circ<0$ |
| 正 | 正 | 高温 $\Delta_{\mathrm r}G_m^\circ<0$ |

**例题｜转向温度。** 假设 $\Delta_{\mathrm r}H_m^\circ=+90.0\,\mathrm{kJ\,mol^{-1}}$，$\Delta_{\mathrm r}S_m^\circ=+150\,\mathrm{J\,mol^{-1}\,K^{-1}}$，在题给温区内近似恒定。换成统一的 J 单位后，$T_*=\Delta_{\mathrm r}H_m^\circ/\Delta_{\mathrm r}S_m^\circ=600\,\mathrm K$。$750\,\mathrm K$ 时 $\Delta_{\mathrm r}G_m^\circ=-22.5\,\mathrm{kJ\,mol^{-1}}$，所以此时 $K^\circ>1$。给出实际组成时，还要加上 $RT\ln Q$。 [OpenStax 16.4 自由能](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy)

## 第三章　化学反应速率与化学平衡

### 反应速率、基元反应与初速法

对 $aA+bB\to eE+fF$，恒容时用各组分的浓度变化定义同一个体积反应速率。

$$
v=\frac{1}{V}\frac{d\xi}{dt}
=-\frac1a\frac{dc_A}{dt}=-\frac1b\frac{dc_B}{dt}
=\frac1e\frac{dc_E}{dt}=\frac1f\frac{dc_F}{dt}.
$$

平均速率可用对应时间段的 $\Delta c_i/\Delta t$ 除以带符号的 $\nu_i$。变容时从 $dn_i/dt$ 或 $d\xi/dt$ 出发，因为浓度还随体积改变。若 $\ce{2A -> B}$ 中 $A$ 的消耗速率为 $0.040\,\mathrm{mol\,L^{-1}\,s^{-1}}$，则统一的反应速率和 $B$ 的生成速率均为 $0.020\,\mathrm{mol\,L^{-1}\,s^{-1}}$。

微分速率方程常写成 $v=k[A]^m[B]^n$，总级数为 $m+n$。固定温度和其他实验条件时，$k$ 为常数，其量纲为浓度的 $1-m-n$ 次方除以时间。基元步骤的分子数决定该步骤速率式的反应物指数。复杂总反应的级数由实验确定，也可检验机理导出的预测，允许分数、零或负级数。

**例题｜控制变量取比值。** 初始浓度单位为 $\mathrm{mol\,L^{-1}}$，速率单位为 $\mathrm{mol\,L^{-1}\,s^{-1}}$。第一组为 $(0.10,0.20,0.012)$，第二组为 $(0.20,0.20,0.048)$，第三组为 $(0.10,0.40,0.024)$，每组依次列 $[A]_0,[B]_0,v_0$。第二组除第一组，$4=2^m$，故 $m=2$。第三组除第一组，$2=2^n$，故 $n=1$。代回第一组得 $k=6.0\,\mathrm{L^2\,mol^{-2}\,s^{-1}}$。任一组均应算出同一个 $k$。 [OpenStax 12.3 初速法与反应级数](https://openstax.org/books/chemistry-2e/pages/12-3-rate-laws)

### 零级、一级、二级的积分式

下表以单一物种的**消耗速率** $-dc/dt=kc^n$ 为定义。若题给的是除过计量系数的 $v=k_{\mathrm r}c^n$，先换成 $-dc/dt=|\nu|k_{\mathrm r}c^n$ 再套表。令 $c_0,c_t$ 分别为初始和时刻 $t$ 的浓度，分离变量得到 $\int_{c_0}^{c_t} c^{-n}\,dc=-kt$。分别积分并令 $c_t=c_0/2$，得到下表。

| 级数 | 浓度随时间 | 半衰期 | 判级作图 | $k$ 的单位，时间用 s |
| --- | --- | --- | --- | --- |
| 0 | $c_t=c_0-kt$ | $c_0/(2k)$ | $c_t$ 对 $t$，斜率 $-k$ | $\mathrm{mol\,L^{-1}\,s^{-1}}$ |
| 1 | $\ln(c_t/c_0)=-kt$ | $\ln2/k$ | $\ln(c_t/c^\circ)$ 对 $t$，斜率 $-k$ | $\mathrm{s^{-1}}$ |
| 2 | $1/c_t=1/c_0+kt$ | $1/(kc_0)$ | $1/c_t$ 对 $t$，斜率 $+k$ | $\mathrm{L\,mol^{-1}\,s^{-1}}$ |

零级式用至反应物耗尽或模型失效为止。二级表格对应 $kc^2$，而 $k[A][B]$ 只有两者等浓度并等量消耗等适当条件才可直接化为该形式。若 $B$ 大量过量并近似恒定，$-d[A]/dt=k[B]_0[A]$ 可按拟一级处理，观测到的 $k_{\mathrm{obs}}=k[B]_0$。

**例题｜一级反应完成百分比。** 若 $t_{1/2}=12.0\,\mathrm{min}$，则 $k=0.0578\,\mathrm{min^{-1}}$。完成 $87.5\%$ 意味着剩余 $12.5\%=1/8=(1/2)^3$，故需三个半衰期，共 $36.0\,\mathrm{min}$。一般地，完成分数 $f$ 时 $t=-\ln(1-f)/k$。 [OpenStax 12.4 积分速率式与线性作图](https://openstax.org/books/chemistry-2e/pages/12-4-integrated-rate-laws)

### Arrhenius 方程、反应机理和催化

有效碰撞需要合适的取向和足够能量。反应坐标图上的峰对应过渡态，两个峰之间的局部最低点可对应中间体。对同一个能量剖面的单步反应，正逆势垒之差就是两端的能量差，在简单焓剖面上可用 $\Delta_{\mathrm r}H_m\approx E_{a,\mathrm f}-E_{a,\mathrm r}$。多步总反应的表观活化能需结合机理解释。机理各步相加后，中间体应抵消，得到总方程。慢步骤若含中间体，需结合快平衡等条件把速率式改写为可测物种浓度。

$$
k=Ae^{-E_a/(RT)},\qquad
\ln k=\ln A-\frac{E_a}{RT},\qquad
\ln\frac{k_2}{k_1}
=\frac{E_a}{R}\left(\frac1{T_1}-\frac1{T_2}\right).
$$

$A$ 为指前因子，单位与 $k$ 相同。双温式通过相减消去 $\ln A$，假设两温度间 $A,E_a$ 近似恒定。以同单位的 $k$ 数值作 $\ln k$ 对 $1/T$ 图，斜率为 $-E_a/R$。用 $\lg$ 时，右侧斜率需再除以 $\ln10\approx2.303$。

**例题｜两点求活化能。** 若 $300.0\,\mathrm K$ 到 $330.0\,\mathrm K$ 时 $k_2/k_1=3.00$，则 $E_a=8.314\ln3.00/(1/300.0-1/330.0)=30.1\,\mathrm{kJ\,mol^{-1}}$。先检查括号内为正，且 $\ln 3.00>0$，因此 $E_a>0$。 [OpenStax 12.5 碰撞理论与 Arrhenius 方程](https://openstax.org/books/chemistry-2e/pages/12-5-collision-theory)

催化剂提供另一条更容易通过的反应路径。它使体系更快达到平衡，同温同条件下的 $\Delta_{\mathrm r}G_m^\circ$、$K^\circ$ 和平衡组成由反应热力学决定。答题时分别描述**到达平衡的时间**与**最终平衡组成**。 [OpenStax 12.7 催化](https://openstax.org/books/chemistry-2e/pages/12-7-catalysis) · [OpenStax 第 13 章总结](https://openstax.org/books/chemistry-2e/pages/13-summary)

### 反应商、标准平衡常数与多重平衡

化学平衡是正逆反应速率相等的动态状态。反应商写为各组分无量纲活度的幂积。

$$
Q=\prod_i a_i^{\nu_i},\qquad K^\circ=Q_{\mathrm{eq}}.
$$

理想气体取 $a_i=p_i/p^\circ$，理想稀溶液取 $a_i\approx c_i/c^\circ$。纯固体、纯液体在通常课内近似下取活度 $1$，稀水溶液中的水也常取 $1$。例如 $\ce{CaCO3(s) <=> CaO(s) + CO2(g)}$，两固相都存在时 $Q=p_{\ce{CO2}}/p^\circ$，改变固体用量时还要确认相是否耗尽。

将化学方程倒写，$K^\circ$ 取倒数。方程乘 $\lambda$，常数取 $\lambda$ 次幂。多个方程相加，常数相乘。这些规则直接来自活度指数随计量数变化。相减可视为加逆反应，故常数相除。 [OpenStax 13.2 反应商与多重平衡](https://openstax.org/books/chemistry-2e/pages/13-2-equilibrium-constants)

由 $\mu_i=\mu_i^\circ+RT\ln a_i$ 对各物种乘以 $\nu_i$ 并求和，再用平衡条件 $\Delta_{\mathrm r}G_m=0$，得到

$$
\Delta_{\mathrm r}G_m=\Delta_{\mathrm r}G_m^\circ+RT\ln Q,\qquad
\Delta_{\mathrm r}G_m^\circ=-RT\ln K^\circ,\qquad
\Delta_{\mathrm r}G_m=RT\ln\frac{Q}{K^\circ}.
$$

$Q<K^\circ$ 正向，$Q>K^\circ$ 逆向，$Q=K^\circ$ 平衡。$K^\circ>1$ 说明 $\Delta_{\mathrm r}G_m^\circ<0$，实际给定混合物的方向仍取决于 $Q$。若反应式改变，$Q$、$K^\circ$ 和摩尔反应自由能要使用同一套化学计量数。 [OpenStax 16.4 自由能与平衡常数](https://openstax.org/books/chemistry-2e/pages/16-4-free-energy)

### 算平衡组成、转化率与扰动

**例题｜用反应进度解气体平衡。** 恒温恒容下，$\ce{N2O4(g) <=> 2NO2(g)}$ 的 $K^\circ=0.500$，起始仅含 $\ce{N2O4}$，压强 $100\,\mathrm{kPa}$。设其解离分数为 $\alpha$，则各分压为 $100(1-\alpha)$ 与 $200\alpha$，单位均为 $\mathrm{kPa}$。这里分压与各气体物质的量成正比。按标准压强归一化，

$$
0.500=\frac{(2\alpha)^2}{1-\alpha}
\quad\Longrightarrow\quad
8\alpha^2+\alpha-1=0
\quad\Longrightarrow\quad
\alpha=\frac{-1+\sqrt{33}}{16}=0.2965.
$$

舍去负根。故转化率约为 $29.7\%$，平衡分压约为 $70.3$ 和 $59.3\,\mathrm{kPa}$，总压约 $129.7\,\mathrm{kPa}$。若题目给的是**总压恒定**，应先由各物质的量算 $x_i$，再用 $p_i=x_ip_{\mathrm{tot}}$。

勒夏特列原理可以先用来定性判断。遇到压强、惰性气体或多条件同时变化，用扰动后、反应尚未调整的 $Q$ 与新条件下的 $K^\circ$ 比较。

- **改浓度**。加反应物通常使 $Q$ 变小，移去产物也使 $Q$ 变小。添加纯固相时，只要原固相仍存在，活度依旧近似为 $1$。
- **等温压缩**。理想气体各分压同乘 $\lambda=V_{\mathrm{old}}/V_{\mathrm{new}}>1$，因此 $Q_{\mathrm{new}}/Q_{\mathrm{old}}=\lambda^{\Delta\nu_g}$。$\Delta\nu_g<0$ 向产物侧移，$\Delta\nu_g>0$ 向反应物侧移，$\Delta\nu_g=0$ 时 $Q$ 保持原值。这里假设其余各相活度近似固定。
- **加惰性气体**。理想气体在恒温恒容时，各反应物种的 $p_i=n_iRT/V$ 保持原值。恒温恒总压时，容器膨胀、各反应物种分压降低，平衡向气体计量数较大的一侧移动，$\Delta\nu_g=0$ 时无此移动。
- **改温度**。由 van 't Hoff 方程 $d\ln K^\circ/dT=\Delta_{\mathrm r}H_m^\circ/(RT^2)$，若区间内焓变近似恒定，则 $\ln(K_2^\circ/K_1^\circ)=(\Delta_{\mathrm r}H_m^\circ/R)(1/T_1-1/T_2)$。升温使吸热反应的 $K^\circ$ 增大，使放热反应的 $K^\circ$ 减小。若升温同时改变分压，仍可重新计算 $Q$。

**综合例｜合成氨的三个按钮。** $\ce{N2 + 3H2 <=> 2NH3}$ 的正向反应放热，且 $\Delta\nu_g=-2$。等温压缩减小 $Q$，有利于产氨。降温增大 $K^\circ$，往往同时使反应变慢。催化剂缩短达到平衡所需时间。与 Arrhenius 双温式对照，判断**速率常数**看 $E_a$，判断**平衡常数**看 $\Delta_{\mathrm r}H_m^\circ$。 [OpenStax 13.3 平衡扰动](https://openstax.org/books/chemistry-2e/pages/13-3-shifting-equilibria-le-chateliers-principle)

## 第四章　酸碱解离与沉淀溶解平衡

### 酸碱理论、水的离子积和 pH

Brønsted–Lowry 酸给出质子，碱接受质子。一对共轭酸碱相差一个质子，例如 $\ce{NH4+ / NH3}$。水遇酸可接受质子生成 $\ce{H3O+}$，遇碱可给出质子生成 $\ce{OH-}$。Lewis 酸接受电子对，Lewis 碱给出电子对，例如 $\ce{BF3}$ 接受 $\ce{NH3}$ 的氮孤电子对。Lewis 定义也涵盖没有质子转移的反应。

$$
\ce{2H2O(l) <=> H3O+(aq) + OH-(aq)},\qquad
K_w^\circ=a_{\ce{H3O+}}a_{\ce{OH-}},\qquad
\mathrm{pH}=-\lg a_{\ce{H3O+}}.
$$

在稀溶液中用 $a_i\approx [i]/c^\circ$。本章方括号表示浓度，代入常数表达式时采用其以 $\mathrm{mol\,L^{-1}}$ 表示的数值，等效于除以 $c^\circ=1\,\mathrm{mol\,L^{-1}}$。由定义有 $\mathrm{pH}+\mathrm{pOH}=\mathrm pK_w$。在 $25\,^\circ\mathrm C$，$K_w^\circ\approx1.00\times10^{-14}$，中性 pH 约为 7。换温度后，中性条件仍是 $a_{\ce{H3O+}}=a_{\ce{OH-}}$，应取当时的 $\mathrm pK_w/2$。 [IUPAC Gold Book 的 pH 定义](https://goldbook.iupac.org/terms/view/P04524)

酸的解离式与其共轭碱的水解式相加得到水的自解离，故 $K_a^\circ K_b^\circ=K_w^\circ$，$\mathrm pK_a+\mathrm pK_b=\mathrm pK_w$。酸越强，对应共轭碱越弱。

### 强酸强碱与一元弱酸弱碱

强酸强碱混合，先用 $n=cV$ 比较可供中和的 $\ce{H+}$ 和 $\ce{OH-}$ 当量，再把剩余量除以混合总体积。可溶且完全解离的 $1\,\mathrm{mol}$ $\ce{Ba(OH)2}$ 给出 $2\,\mathrm{mol}$ $\ce{OH-}$。多元酸逐级解离，例如硫酸的第二步需要在条件允许时单独列平衡。

**极稀强酸的边界。** 若强一元酸浓度为 $C$ 且没有其他电解质，设 $h=[\ce{H3O+}]$，电荷守恒给出 $h=C+[\ce{OH-}]$。结合水的离子积，在本章的浓度数值约定下有

$$
h=\frac{C+\sqrt{C^2+4K_w^\circ}}{2}.
$$

$25\,^\circ\mathrm C$ 的 $10^{-8}\,\mathrm{mol\,L^{-1}}$ 强酸给出 $h\approx1.05\times10^{-7}\,\mathrm{mol\,L^{-1}}$，pH 约为 $6.98$。浓度接近中性水的氢离子浓度时，必须保留水的贡献。

一元弱酸 $\ce{HA + H2O <=> H3O+ + A-}$ 的分析浓度为 $C$。在无外加共轭碱、忽略水自解离且采用稀溶液近似时，初始与变化分别为 $(C,0,0)$ 与 $(-x,+x,+x)$，平衡时 $K_a^\circ=x^2/(C-x)$。

$$
x=\frac{\sqrt{(K_a^\circ)^2+4K_a^\circ C}-K_a^\circ}{2},
\qquad
x\approx\sqrt{K_a^\circ C}\quad (x\ll C).
$$

后一式来自用 $C$ 近似 $C-x$，因此 $\mathrm{pH}\approx(\mathrm pK_a-\lg C)/2$。弱碱用同样步骤求 $[\ce{OH-}]\approx\sqrt{K_b^\circ C}$，再用 $\mathrm{pH}=\mathrm pK_w-\mathrm{pOH}$。解离度 $\alpha=x/C$，Ostwald 稀释定律可写作 $K_a^\circ=C\alpha^2/(1-\alpha)$。在这个模型下，稀释时 $\alpha$ 增大，而 $x$ 变小。

::: tip 先估算，再决定解法
先算 $x_{\mathrm{est}}=\sqrt{K_a^\circ C}$。如果 $x_{\mathrm{est}}/C\le 5\%$，且 $x_{\mathrm{est}}\gg\sqrt{K_w^\circ}$，平方根式通常适合快速估算。否则用二次式，或在水也不可忽略时联立 $C=[\ce{HA}]+[\ce{A-}]$、$[\ce{H3O+}]=[\ce{A-}]+[\ce{OH-}]$ 与两个平衡式。若课程规定了误差阈值，以题给阈值为准。 [OpenStax 14.3 弱酸弱碱平衡](https://openstax.org/books/chemistry-2e/pages/14-3-relative-strengths-of-acids-and-bases)
:::

**例题｜检验平方根近似。** 弱酸的 $C=0.0100\,\mathrm{mol\,L^{-1}}$，$K_a^\circ=1.00\times10^{-3}$，估算 $x_{\mathrm{est}}=3.16\times10^{-3}$，占初始浓度约 $32\%$。改用二次式，$x=2.70\times10^{-3}\,\mathrm{mol\,L^{-1}}$，$\mathrm{pH}=2.57$。

### 多元酸、两性离子与盐的水解

二元酸 $\ce{H2A}$ 有两步解离。

$$
K_{a1}^\circ=\frac{h[\ce{HA-}]}{[\ce{H2A}]},
\qquad
K_{a2}^\circ=\frac{h[\ce{A^2-}]}{[\ce{HA-}]} .
$$

当第二步对 $h$ 的贡献很小，先用第一步算 pH，再回算 $\ce{A^2-}$。对纯 $\ce{H2A}$，第一步主导且忽略水解离时 $[\ce{HA-}]\approx h$，故 $[\ce{A^2-}]\approx K_{a2}^\circ$（浓度数值约定）。另外，任何给定 $h$ 下都有 $[\ce{HA-}]/[\ce{H2A}]=K_{a1}^\circ/h$ 和 $[\ce{A^2-}]/[\ce{HA-}]=K_{a2}^\circ/h$，可判断优势形态。若两步不能分开，联立总量 $C=[\ce{H2A}]+[\ce{HA-}]+[\ce{A^2-}]$ 和电荷守恒。 [OpenStax 14.5 多元酸](https://openstax.org/books/chemistry-2e/pages/14-5-polyprotic-acids)

| 盐或离子来源 | 主要平衡 | 答题起点 |
| --- | --- | --- |
| 强酸强碱盐，例如 $\ce{NaCl}$ | 通常视为无显著水解 | 稀溶液近中性 |
| 强碱弱酸盐，例如 $\ce{CH3COONa}$ | $\ce{A- + H2O <=> HA + OH-}$ | 用 $K_b^\circ=K_w^\circ/K_a^\circ$ 按弱碱求 pOH |
| 强酸弱碱盐，例如 $\ce{NH4Cl}$ | $\ce{BH+ + H2O <=> B + H3O+}$ | 用 $K_a^\circ=K_w^\circ/K_b^\circ$ 按弱酸求 pH |
| 弱酸弱碱盐，例如 $\ce{NH4CH3COO}$ | 阳离子供质子，阴离子受质子 | 简单 1∶1 盐可先比 $K_a^\circ(\ce{BH+})$ 和 $K_b^\circ(\ce{A-})$，较大者决定酸碱倾向 |
| 两性离子盐，例如 $\ce{NaHCO3}$ | 同一离子可受、可给质子 | 二元酸的 $\ce{HA-}$ 盐在浓度足够且水贡献小时，可用 $\mathrm{pH}\approx(\mathrm pK_{a1}+\mathrm pK_{a2})/2$ |

最后一式来自两性离子盐的守恒。忽略自由 $\ce{H3O+}$、$\ce{OH-}$ 对电荷平衡的贡献时，有 $[\ce{H2A}]\approx[\ce{A^2-}]$。两步解离式相乘给出 $h^2\approx K_{a1}^\circ K_{a2}^\circ$。另外，某些金属水合阳离子如 $\ce{[Al(H2O)6]^3+}$ 会使配位水释出质子，判断盐溶液酸碱性时也要识别这类阳离子。 [OpenStax 14.4 盐的水解](https://openstax.org/books/chemistry-atoms-first-2e/pages/14-4-hydrolysis-of-salts)

**例题｜乙酸钠的 pH。** $25\,^\circ\mathrm C$ 下 $0.100\,\mathrm{mol\,L^{-1}}$ 乙酸钠，题给 $K_a^\circ(\ce{CH3COOH})=1.80\times10^{-5}$。乙酸根的 $K_b^\circ=5.56\times10^{-10}$，估得 $[\ce{OH-}]=7.45\times10^{-6}\,\mathrm{mol\,L^{-1}}$，$\mathrm{pOH}=5.13$，$\mathrm{pH}=8.87$。回看 $x/C\approx7.45\times10^{-5}$，小变化近似合理。

### 同离子效应、盐效应与缓冲液

加乙酸钠会直接增加 $\ce{CH3COO-}$ 的浓度，使乙酸解离的 $Q$ 升高，解离平衡逆向移动。这是同离子效应。对难溶盐，加入提供共同离子的电解质，通常也使其在该溶液中的溶解度降低。加入无同离子且不发生副反应的电解质会改变离子强度 $I=\tfrac12\sum_i c_i z_i^2$（浓度制），从而改变活度系数。稀溶液中离子活度系数常随 $I$ 增大而下降。若 $K_{sp}^\circ$ 由活度乘积固定，就可能需要更高的离子浓度才能饱和。这是盐效应的一种表现，结果依赖离子强度和副反应条件。 [IUPAC Gold Book 的 Debye–Hückel 方程](https://goldbook.iupac.org/terms/view/D01534)

缓冲液需要同时有足量的弱酸 $\ce{HA}$ 和共轭碱 $\ce{A-}$。加少量强酸时 $\ce{A-}$ 接受质子，加少量强碱时 $\ce{HA}$ 提供质子。把 $K_a^\circ$ 表达式重排、取负对数，得到 Henderson–Hasselbalch 式。

$$
\mathrm{pH}=\mathrm pK_a+\lg\frac{a_{\ce{A-}}}{a_{\ce{HA}}}
\approx\mathrm pK_a+\lg\frac{[\ce{A-}]}{[\ce{HA}]} .
$$

同一溶液中浓度比等于物质的量比。做混合题时，先用毫摩尔算完强酸或强碱的中和，再用剩余的共轭对物质的量近似平衡物质的量。如果一方被耗尽，改用过量强酸碱或剩余盐的水解模型。弱碱缓冲对 $\ce{B/BH+}$ 也能用上式，分子填 $\ce B$，分母填 $\ce{BH+}$，$\mathrm pK_a$ 取 $\ce{BH+}$ 的。

配制目标 pH 时，取 $\mathrm pK_a$ 最接近的共轭对，由 $n_{\mathrm{base}}/n_{\mathrm{acid}}\approx10^{\mathrm{pH}-\mathrm pK_a}$ 反算比例。常用有效范围 $\mathrm pK_a\pm1$ 对应碱酸比约 $0.1$ 至 $10$。总浓度一定时，两者等量附近对酸和碱的缓冲能力均衡，且缓冲容量较高。适度稀释可保持比例，单位体积的缓冲容量会降低。

**例题｜加酸后 pH。** 溶液含 $12.0\,\mathrm{mmol}$ 乙酸和 $18.0\,\mathrm{mmol}$ 乙酸根，$\mathrm pK_a=4.76$。加入 $3.0\,\mathrm{mmol}$ 强酸，乙酸根减为 $15.0\,\mathrm{mmol}$，乙酸增为 $15.0\,\mathrm{mmol}$。初始 $\mathrm{pH}\approx4.76+\lg(18/12)=4.94$，加酸后约为 $4.76$。加酸后 pH 降低，与方向一致。 [OpenStax 14.6 缓冲液](https://openstax.org/books/chemistry-2e/pages/14-6-buffers)

### 溶度积、摩尔溶解度和混合后判沉淀

对 $\mathrm{M}_a\mathrm{X}_b(s)\rightleftharpoons a\mathrm{M}^{z+}+b\mathrm{X}^{y-}$，电荷满足 $az=by$。令 $a_i$ 表示物种 $i$ 的活度，则离子积为 $Q_{sp}=a_{\mathrm M}^a a_{\mathrm X}^b$。与纯固相共存的饱和溶液满足 $Q_{sp}=K_{sp}^\circ$。$Q_{sp}>K_{sp}^\circ$ 时热力学上有析出趋势，$Q_{sp}<K_{sp}^\circ$ 时体系未饱和，若有固体则可继续溶解，直到饱和或固体耗尽。

若在纯水中溶解的离子均为自由离子，且无显著水解、配位等副反应，摩尔溶解度 $s$ 给出 $[\mathrm M]=as$、$[\mathrm X]=bs$。代入得

$$
K_{sp}^\circ=a^a b^b(s/c^\circ)^{a+b},\qquad
s=c^\circ\left(\frac{K_{sp}^\circ}{a^a b^b}\right)^{1/(a+b)}.
$$

| 计量类型 | 溶度积与溶解度 |
| --- | --- |
| $\mathrm{MX}$ | $K_{sp}^\circ=(s/c^\circ)^2$ |
| $\mathrm{MX_2}$ 或 $\mathrm{M_2X}$ | $K_{sp}^\circ=4(s/c^\circ)^3$ |
| $\mathrm{MX_3}$ 或 $\mathrm{M_3X}$ | $K_{sp}^\circ=27(s/c^\circ)^4$ |

例如题给 $\ce{CaF2}$ 的 $K_{sp}^\circ=3.20\times10^{-11}$。忽略副反应时纯水中 $s=2.00\times10^{-4}\,\mathrm{mol\,L^{-1}}$。在初始含 $0.0100\,\mathrm{mol\,L^{-1}}$ $\ce{F-}$ 的溶液中，$K_{sp}^\circ=s(0.0100+2s)^2$，按浓度数值代入。若 $2s\ll0.0100$，得 $s\approx3.20\times10^{-7}\,\mathrm{mol\,L^{-1}}$，代回可确认共同离子占主导。比较不同计量类型的盐时，先各自求 $s$。

**例题｜混合后究竟沉不沉。** 等体积混合 $2.00\times10^{-5}\,\mathrm{mol\,L^{-1}}$ $\ce{AgNO3}$ 与同浓度 $\ce{NaCl}$。给定 $K_{sp}^\circ(\ce{AgCl})=1.80\times10^{-10}$。混合瞬间两离子各为 $1.00\times10^{-5}\,\mathrm{mol\,L^{-1}}$，故 $Q_{sp}=1.00\times10^{-10}<K_{sp}^\circ$，溶液未饱和。若在别的题里 $Q_{sp}>K_{sp}^\circ$，可设析出 $x\,\mathrm{mol\,L^{-1}}$，用 $([\ce{Ag+}]_0-x)([\ce{Cl-}]_0-x)=K_{sp}^\circ$ 解余量，并检验 $0\le x\le\min([\ce{Ag+}]_0,[\ce{Cl-}]_0)$。 [OpenStax 15.1 沉淀和溶解](https://openstax.org/books/chemistry-2e/pages/15-1-precipitation-and-dissolution)

### 分步沉淀、pH 控制、溶解与转化

逐步加入沉淀剂 $\mathrm X$ 时，某沉淀刚开始形成的自由沉淀剂活度为

$$
a_{\mathrm X,\mathrm{crit}}=
\left(\frac{K_{sp}^\circ}{a_{\mathrm M}^a}\right)^{1/b}.
$$

先算每个候选沉淀的临界值，最先跨过的先析出。再把**第二种刚开始沉淀**时的自由沉淀剂浓度代回第一种的溶度积，求第一种离子的残留。若题目用 $10^{-5}\,\mathrm{mol\,L^{-1}}$ 或某个去除百分比作“沉淀完全”的判据，就用它检查是否能在第二种析出前分离。

**例题｜氯离子与溴离子分离。** 混合溶液起初含各 $0.0100\,\mathrm{mol\,L^{-1}}$ 的 $\ce{Cl-}$ 和 $\ce{Br-}$，逐步加 $\ce{Ag+}$，忽略加液稀释和配位。题给 $\ce{AgCl}$ 与 $\ce{AgBr}$ 的 $K_{sp}^\circ$ 分别为 $1.80\times10^{-10}$ 和 $5.00\times10^{-13}$。刚析出所需 $[\ce{Ag+}]$ 分别为 $1.80\times10^{-8}$ 和 $5.00\times10^{-11}\,\mathrm{mol\,L^{-1}}$，所以 $\ce{AgBr}$ 先析出。等 $\ce{AgCl}$ 刚开始析出时，$[\ce{Br-}]=5.00\times10^{-13}/(1.80\times10^{-8})=2.78\times10^{-5}\,\mathrm{mol\,L^{-1}}$，约已去除 $99.72\%$。若判据是残留至多 $1.00\times10^{-5}\,\mathrm{mol\,L^{-1}}$，则达不到该标准。

金属氢氧化物同样用临界浓度。对 $\ce{M(OH)2(s) <=> M^2+ + 2OH-}$，在给定游离 $[\ce{M^2+}]$ 时，用 $[\ce{OH-}]_{\mathrm{crit}}=\sqrt{K_{sp}^\circ/[\ce{M^2+}]}$，再由 pOH 转 pH。假设题给 $[\ce{M^2+}]=0.0100\,\mathrm{mol\,L^{-1}}$、$K_{sp}^\circ=1.00\times10^{-16}$，则 $[\ce{OH-}]_{\mathrm{crit}}=10^{-7}\,\mathrm{mol\,L^{-1}}$，在 $25\,^\circ\mathrm C$ 刚开始沉淀的 pH 为 $7.00$。若目标改为 $[\ce{M^2+}]\le10^{-5}\,\mathrm{mol\,L^{-1}}$，需 $[\ce{OH-}]\ge3.16\times10^{-6}\,\mathrm{mol\,L^{-1}}$，即 pH 至少 $8.50$。若金属可水解或在过量碱中形成配合物，还要考虑自由离子与总溶解浓度的差别。

使某个自由离子活度下降，可令 $Q_{sp}$ 变小并推动固体溶解。

- **加酸**消耗碱性阴离子。例如 $\ce{CaCO3(s) + 2H+ -> Ca^2+ + H2O + CO2(g)}$。移走 $\ce{CO2}$ 也有利于净反应正向进行。
- **配位**降低游离金属离子。例如 $\ce{AgCl(s) + 2NH3 <=> [Ag(NH3)2]+ + Cl-}$，总平衡常数为 $K_{sp}^\circ\beta_2^\circ$，其中 $\beta_2^\circ$ 是二氨合银的总形成常数。
- **氧化还原**将某种离子转成另一形态。例如在相应氧化条件下可写 $\ce{3CuS(s) + 2NO3- + 8H+ -> 3Cu^2+ + 3S(s) + 2NO(g) + 4H2O}$。硫化物中的硫被氧化，硝酸根被还原。
- **沉淀转化**可用多重平衡。对 $\ce{AgCl(s) + Br- <=> AgBr(s) + Cl-}$，$K_{\mathrm{trans}}^\circ=K_{sp}^\circ(\ce{AgCl})/K_{sp}^\circ(\ce{AgBr})$。用上题数据得 $360$，表示两固相共存时的平衡比 $a_{\ce{Cl-}}/a_{\ce{Br-}}$。若要判断实际方向，仍需比较此刻的离子活度比。若要计算转化程度，还需核对加入的 $\ce{Br-}$ 量和剩余固相。

[OpenStax 15.3 耦合平衡](https://openstax.org/books/chemistry-2e/pages/15-3-coupled-equilibria)

## 闭卷自测

先写依据和适用条件，再展开核对。题目中的常数均为给定值。

### 题一　压强和摩尔质量

$27.0\,^\circ\mathrm C$ 时，干气体质量为 $0.880\,\mathrm g$，在 $100.0\,\mathrm{kPa}$ 下占 $0.500\,\mathrm L$。求摩尔质量。若改成排水集气且瓶内总压相同，仍把总压当作干气分压，算出的摩尔质量偏大还是偏小？

::: details 展开解析
$n=pV/(RT)=0.0200\,\mathrm{mol}$，$M=m/n=43.9\,\mathrm{g\,mol^{-1}}$。若把含水蒸气的总压误用为干气分压，会高估干气的物质的量，在干气质量相同的前提下低估摩尔质量。
:::

### 题二　把凝固点和渗透压串起来

同为 $0.100\,\mathrm{mol\,kg^{-1}}$ 的葡萄糖和 $\ce{CaCl2}$ 水溶液。假设盐完全解离、溶液均理想，求各自的凝固点下降值。若改成同一温度下物质的量浓度也相同，渗透压的比值是多少？

::: details 展开解析
$\Delta T_f=iK_f b$。葡萄糖取 $i=1$ 得 $0.186\,\mathrm K$，$\ce{CaCl2}$ 取 $i=3$ 得 $0.558\,\mathrm K$。同温同物质的量浓度时，$\Pi=i cRT$ 给出盐溶液与葡萄糖溶液的渗透压比 $3:1$。
:::

### 题三　生成焓与热效应

已知 $\Delta_{\mathrm f}H_m^\circ(\ce{CO2(g)})=-393.5\,\mathrm{kJ\,mol^{-1}}$，反应 $\ce{CO(g) + 1/2 O2(g) -> CO2(g)}$ 的标准反应焓为 $-283.0\,\mathrm{kJ\,mol^{-1}}$。求 $\ce{CO(g)}$ 的标准生成焓。若在 $298.15\,\mathrm K$ 下进行同一反应，求理想气体近似下的 $\Delta_{\mathrm r}U_m^\circ$。

::: details 展开解析
$-283.0=-393.5-\Delta_{\mathrm f}H_m^\circ(\ce{CO})$，所以生成焓为 $-110.5\,\mathrm{kJ\,mol^{-1}}$。$\Delta\nu_g=1-1.5=-0.5$，因此 $\Delta_{\mathrm r}U_m^\circ=\Delta_{\mathrm r}H_m^\circ-\Delta\nu_gRT\approx-281.8\,\mathrm{kJ\,mol^{-1}}$。
:::

### 题四　半衰期和反应级数

在其他条件一致时，把起始浓度从 $0.100$ 加倍至 $0.200\,\mathrm{mol\,L^{-1}}$，半衰期由 $40.0$ 缩短为 $20.0\,\mathrm s$。在表中的三个单物种模型里选择符合数据的模型，求 $k$。

::: details 展开解析
半衰期与 $c_0$ 成反比，符合 $-dc/dt=kc^2$。$k=1/(t_{1/2}c_0)=0.250\,\mathrm{L\,mol^{-1}\,s^{-1}}$。把第二组的数据代回得到相同结果。
:::

### 题五　标准方向与实际方向

$298.15\,\mathrm K$ 下某反应 $K^\circ=10.0$，现在测得 $Q=100$。求 $\Delta_{\mathrm r}G_m^\circ$ 和当前 $\Delta_{\mathrm r}G_m$，判断净反应方向。

::: details 展开解析
$\Delta_{\mathrm r}G_m^\circ=-RT\ln10.0=-5.71\,\mathrm{kJ\,mol^{-1}}$。当前 $\Delta_{\mathrm r}G_m=RT\ln(100/10.0)=+5.71\,\mathrm{kJ\,mol^{-1}}$，所以净反应向逆向进行。
:::

### 题六　用半中和配缓冲液

$40.0\,\mathrm{mL}$、$0.100\,\mathrm{mol\,L^{-1}}$ 的一元弱酸 $\ce{HA}$，$\mathrm pK_a=4.80$。加入多少 $0.200\,\mathrm{mol\,L^{-1}}$ 的 $\ce{NaOH}$ 可配出 pH 约为 $4.80$ 的缓冲液？

::: details 展开解析
初始有 $4.00\,\mathrm{mmol}$ 酸。pH 等于 $\mathrm pK_a$ 要求酸与共轭碱近似等量，用 $2.00\,\mathrm{mmol}$ 的 $\ce{OH-}$ 将半数酸转为 $\ce{A-}$，故需 $10.0\,\mathrm{mL}$ 碱。两者在同一最终体积里，浓度比可以用毫摩尔比计算。
:::

### 题七　是否沉淀与沉淀多少

等体积混合 $2.00\times10^{-3}\,\mathrm{mol\,L^{-1}}$ 的 $\ce{AgNO3}$ 和等浓度 $\ce{NaCl}$。给定 $K_{sp}^\circ(\ce{AgCl})=1.80\times10^{-10}$。求平衡时溶解态 $\ce{Ag+}$ 的浓度以及其析出百分比，忽略配位。

::: details 展开解析
混合后初始自由离子各为 $1.00\times10^{-3}\,\mathrm{mol\,L^{-1}}$，$Q_{sp}=10^{-6}>K_{sp}^\circ$。固相析出按 1∶1 消耗两离子，平衡时其浓度相等，各为 $c^\circ\sqrt{K_{sp}^\circ}=1.34\times10^{-5}\,\mathrm{mol\,L^{-1}}$。析出百分比是 $1-0.0134=98.66\%$，约 $98.7\%$。
:::

## 交卷前四个检查

1. 气体题写明绝对压强和温度单位。溶液题标出分母是溶液的体积，还是溶剂的质量。
2. 热化学题把物态、反应方程系数和热量基准写在一起。遇到 $T\Delta S$ 时先统一 J 与 kJ。
3. 平衡题先用当前组成写 $Q$，再和同温度、同一配平方程对应的 $K^\circ$ 比较。动力学题先写清楚使用哪个物种的速率。
4. 水溶液题把强酸碱中和与平衡分开。沉淀题用混合后的自由离子浓度，求得根后检查是否满足守恒及近似条件。

课程范围依据 NotebookLM 导出的《无机化学》期中备考手册。文中数值题为依据考点重新设计的练习，外部参考附在相应知识点后。
