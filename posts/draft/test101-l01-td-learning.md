---
title: TEST101 L01：Temporal-difference learning 与 dopamine（测试）
date: 2026-11-02 17:00:00
category: 课程
tags:
  - TEST101
  - Reinforcement Learning
description: 验收测试用的课程大纲：强化学习基本要素、TD 误差与更新规则，以及 reward prediction error 与 dopamine 的对应关系。
aigcRate: 100
aigcModels: [claude]
---

> 本文是 ResearchOS 课程流程的验收测试样例，内容为示意大纲。

## 1. 强化学习的基本要素

- state、action、reward 与 policy
- value function $V(s)$ 与折扣因子 $\gamma$

## 2. Temporal-difference learning

- TD 误差：$\delta = r + \gamma V(s') - V(s)$
- 更新规则：$V(s) \leftarrow V(s) + \alpha\delta$

## 3. Reward prediction error 与 dopamine

- 意外奖励引起 phasic 放电增加
- 预期奖励缺失引起放电低于基线
