---
title: 用强化学习建模 dopamine 与精神疾病：三篇 2025 年预印本速读
date: 2026-11-02 16:50:00
category: 科研
tags:
  - NeuroAI
  - Reinforcement Learning
  - Dopamine
  - Computational Psychiatry
description: 从 reward prediction error 出发，比较三篇 2025 年 arXiv 预印本如何用 RL 模型解释精神分裂症、抑郁与成瘾：分别“损伤”网络连接、dopamine 编码群体和 TD 误差本身。
aigcRate: 100
aigcModels: [claude]
---

## 问题与范围

经典理论认为，midbrain dopamine 神经元的 phasic 放电编码 reward prediction error（RPE），即 $\delta = r + \gamma V(s') - V(s)$。在这一对应关系的基础上，近期研究如何用 RL 模型解释精神疾病的症状？

本文读的是 arXiv q-bio.NC 上的三篇论文[1][2][3]。它们都是 2025 年 6–10 月的预印本，都没有经过同行评审。

## 在 TD 学习中“损伤”什么

三篇论文都从标准 TD 误差出发，但修改的位置不同：

- **网络连接**：Al-Hejji 等[1]削弱 DQN 中的兴奋性权重来模拟 E/I 失衡，再在输入上叠加高斯噪声。只有 E/I 失衡时，网络会提高神经元 bias 来补偿，行为几乎不变；E/I 失衡与噪声叠加后，才出现 anhedonia、回避、刻板动作和“幻觉”样的错误重建。
- **RPE 编码群体**：Botvinick 等[2]提出，抑郁中被沉默的是 distributional RL 里的高 expectile（“乐观”）dopamine 神经元。剩下的群体中 $\alpha^- > \alpha^+$，价值估计因此系统性偏低。
- **RPE 本身**：Palod 等[3]沿用生物层级 RL 模型，在药物相关的 TD 误差中加入偏置 $+D$，并为每一层设置调整后的折扣因子 $\zeta(n)=\gamma^{(1/\vartheta)^{L-1-n}}$，使自然奖励的价值在各层之间收敛。

## dopamine 信号的下游效果

- 在[1]中，失衡网络里每单位 RPE 引起的权重变化更小。作者据此认为，dopamine 系统失调是连接异常的结果，而不是病因。
- 在[2]中，乐观神经元被沉默后总 RPE 变小，可以解释抑郁患者纹状体奖励响应减弱、从损失中学得比从收益中快，以及风险厌恶。
- 在[3]中，药物偏置沿腹侧到背侧纹状体的 dopamine spiral 逐层累积，使低层（habit）高估药物价值。

> 我的理解：三篇论文都把“dopamine 异常”放在因果链的中间位置，而不是起点。上游分别是连接异常、应激导致的选择性沉默和药物的药理作用；下游是价值估计和行为。

## 时间折扣：原因还是结果？

[1]中所有智能体的折扣因子都设为 $\gamma = 0.9$，但从“精神分裂症”智能体行为推断出的折扣因子约为 0.75，也就是说，额外的折扣是从网络损伤中涌现出来的。[3]则直接调节 $\gamma \in \{1, 0.8, 0.6\}$，发现 $\gamma$ 越小，各层的觅药比例越高。

> 我的理解：一篇把折扣当作结果，一篇把折扣当作原因，两者可以互补；但在两篇论文中，折扣与症状的关系都还只停留在模拟层面。

## 方法对比

| 论文 | 模型 | 数据 | 指标 | 主要结果 |
|---|---|---|---|---|
| [1] | DQN（100–25–3），E/I 失衡 + 噪声 | 网格世界模拟 | 奖励数、推断的 $\gamma$、每单位 RPE 的权重变化 | 失衡单独无效；失衡加噪声产生多种类似症状 |
| [2] | distributional TD，去掉高 expectile 通道 | 文献综述 + bandit 模拟 | 状态价值、RPE、学习速度、风险选择 | 悲观价值、风险厌恶 |
| [3] | 3 层生物 HRL，药物偏置 $+D$ | 双选择 MDP 模拟 | 各层 Q 值、觅药百分比 | 折扣越强，觅药越多 |

## 开放问题

- 三篇都没有拟合患者数据，主要依靠表面效度（face validity）。这些模型能否定量拟合 bandit 任务或延迟折扣问卷的数据？
- [2]的核心预测（被沉默的是乐观 dopamine 神经元）能否在动物模型中检验？
- [1]中“噪声”对应什么生物学来源？作者自己也把这一点列为待解决的问题。

## 参考文献

1. Al-Hejji, X., Duarte, S., Castro, J. G. G., Contreras, E. B., & Chalmers, E. (2025). An in-silico integration of neurodevelopmental and dopaminergic views of schizophrenia. arXiv:2510.24741. https://doi.org/10.48550/arXiv.2510.24741
2. Botvinick, M., Kurth-Nelson, Z., Muller, T., & Dabney, W. (2025). Depression as a disorder of distributional coding. arXiv:2507.16598. https://doi.org/10.48550/arXiv.2507.16598
3. Palod, V., Mahajan, P., Baths, V., & Gutkin, B. S. (2025). Discounting and Drug Seeking in Biological Hierarchical Reinforcement Learning. arXiv:2506.04549. https://doi.org/10.48550/arXiv.2506.04549
