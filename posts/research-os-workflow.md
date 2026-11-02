---
title: Research OS：用两个可互换的 AI 执行者搭一套科研与课程学习工作流
date: 2026-11-02 23:55:00
lastUpdated: 2026-11-03 00:54:00
category: 杂项
tags:
  - 科研工作流
  - 课程学习
  - AI Agent
  - Zotero
  - Obsidian
  - MCP
description: 把读论文、上课、写博客串成两个会自己转起来的闭环：AI 执行者负责检索、归档、写笔记和发布，人只负责投喂和点头。讲清楚它能做什么、怎么用、怎么搭，以及第一次搭建时踩过的坑；不限研究方向，可以照着复现。
cover:
  src: /covers/research-os-workflow.svg
  alt: 蓝色的科研闭环与绿色的课程闭环交汇在一本笔记本上，上方是轮流值班的两个 AI 执行者，下方是博客页面
  fit: cover
  position: center
aigcRate: 20
aigcModels: [claude]
---

## 写在前面：一个人的科研，为什么总是乱的

周一早上打开 arXiv，相关方向又多了几十篇新论文；浏览器开着十几个标签页，Zotero 里一半条目还没归类。周三的课还没复习，课件在网盘里，录音在手机里，自己的笔记散在三个软件里。上个月明明读过一篇很合适的论文，现在想引用，却怎么也找不到当时写的那几行笔记。

AI 工具并不缺。可每次打开一个新对话，都要从头交代背景；聊出来的结论留在对话框里，过一周就沉底了。换一个模型，一切又要重来一遍。

问题其实不在“缺一个更聪明的 AI”，而在于**没有一套能留下痕迹、能接力、能回头检查的流程**。Research OS 就是为这个问题设计的。它最早只服务于 NeuroAI 方向，现在已经扩展成不绑定任何研究领域的通用流程：换一份“研究范围”文件和一棵 Zotero 分类树，就能用在机器学习、计算机视觉或别的学科上。

::: tip 一句话概括
人负责**投喂资料和点头**；Codex 或 Claude Code[^agent]（哪个有空用哪个）负责**检索、归档、写笔记和发布**。所有交接都落在文件里，所以两个 AI 可以像值班一样随时换人。
:::

整套设计背后只有三个朴素的想法，都来自日常生活：

- **像整理房间一样设“固定位置”。** 论文只放一个地方，笔记只放一个地方，课程资料只放一个地方。东西有固定位置，才不会在找的时候慌。
- **像医院交班一样靠“交班本”，不靠记忆。** 护士换班时靠的是交班记录，而不是“我记得 3 床好像说过……”。这里的两个 AI 每干完一件事就往日志里写一行[^log]，换人时说一句 “resume”，新来的就知道做到哪了。
- **像转账前的“确认”按钮一样设检查点。** 加论文进文献库、往博客推送文章、删除文件，这些做了就不好撤销的事，AI 一律先停下来，等人看一眼再说 yes。

接下来先讲它能做什么、日常怎么用；再讲东西怎么在各个端之间交接，以及整套系统靠哪几条原则协作；然后是怎么构建、怎么从零搭起来；最后是第一次搭建时踩过的坑和一份复现清单。只想照着搭的读者，可以直接跳到 [[#七、它是怎么构建的]]。

## 一、它能帮你做什么

可以把它想成一个随叫随到、记性很好的科研助理。交代任务不需要写程序，用一句自然语言就行；助理会自己挑合适的“操作说明书”（skill[^skill]），把几步串起来，到了需要拍板的地方就停下来问。

| 你说的话（示例） | 助理实际做的事 | 在哪里停下等你 |
|---|---|---|
| “找 3 篇最近关于某主题的论文，总结并写一篇短综述，以草稿发到博客” | 检索 → 逐篇总结 → 综述 → 生成博客文章并构建 | C1（加入 Zotero 前）、C3（提交前） |
| “找 10 篇和 @某引用键 相似的论文，归入正确的 Zotero 分类” | 相似论文推荐 → 去重 → 按分类映射提出归档方案 | C1 |
| “对 ICLR 2026 做一次关于某主题的 venue-scan” | 查询已接收论文并核实接收状态 → 主题分类 + 会议分类 | C1 |
| “把 NotebookLM 里某门课的输出整理进笔记库” | 从 Google Drive 拉取导出 → 拆成大纲、知识点、卡片、测验 | 完成后汇报 |
| “把核实过的课程笔记送回 NotebookLM” | 生成或更新 Drive 中的“活文档” | 完成后汇报 |
| “考考我某门课第 1–5 讲” | 闭卷测验、评分、记录错题 | 交互进行 |
| “为某篇有公开代码的论文做一个 T4 上的复现计划” | 写复现计划和 `RUN.md`，搭好仓库骨架 | 等你自己去跑 |
| “把复现结果写成笔记” | 对比论文数值与实际结果，写运行笔记 | 完成后汇报 |
| “问问 Gemini 这段讲解有没有过度简化” | 写请求文件、调用 Gemini、保存回答 | 完成后汇报 |
| “resume” | 读运行日志最后 20 行，从中断处继续 | 视情况 |

第一行那条指令真实跑出来的结果，就是这篇关于 dopamine 强化学习模型的综述：从检索、Zotero 归档、逐篇总结到成文，全程只在 C1 和 C3 停了两次。

![[用强化学习建模 dopamine 与精神疾病：三篇 2025 年预印本速读]]

一共 13 个 skill，分属两个闭环：

| Skill | 作用 |
|---|---|
| `paper-search` | 按主题检索 arXiv、OpenReview、OpenAlex（含期刊），评分排序；`venue-scan` 模式专门扫没有 RSS 的会议；`cited-by` 模式每月查谁引用了你的文章 |
| `paper-similar` | 以一篇论文或整个分类为种子，用 Semantic Scholar 推荐相似论文并提出归档方案 |
| `paper-summary` | 读 Zotero 里的 PDF 和你的高亮，写结构化文献笔记，并生成问答卡片 |
| `lit-review` | 把几篇文献笔记综合成一篇带引用的综述 |
| `paper-review` | 以审稿人视角评审你自己的稿件 |
| `repro-plan` / `repro-report` | 复现计划与复现报告 |
| `course-ingest` | 把 NotebookLM 导出归档成课程笔记 |
| `notebook-pack` | 把核实过的笔记和文章网址送回 NotebookLM |
| `course-quiz` | 基于课程笔记出题、评分、记错题 |
| `blog-publish` | 把笔记写成博客文章、构建、获得批准后提交 |
| `ask-gemini` | 通过命令行向 Gemini 要第二意见 |
| `weekly-review` | 汇总一周两个闭环的进展并排下周计划 |

## 二、整体架构

![Research OS 架构：哪些手动操作，哪些自动进行](/images/research-os-workflow/architecture.svg "架构：橙色是人亲自操作的工具，蓝色是中枢；虚线是手动完成的步骤")

这张图可以从左往右读：最左边是“原材料”（论文、算力、课程资料），中间偏左的橙色框是人亲手操作的三个工具，中间是两个 AI 执行者，最右边是所有东西最终汇聚的笔记库和对外发布的博客。

橙色框之所以要亲手操作，是因为它们恰好是最需要人判断、或者根本没有接口的地方：在 Zotero 里决定哪篇论文值得留，在 NotebookLM[^nblm] 里上传课件并提问，在 Antigravity[^ag] 里盯着实验在 Colab GPU 上跑。其余的实线全部自动进行。

把上面三个生活化的想法落成规则，就是四条设计原则（它们背后更完整的协作原则，见 [[#六、协作原则：为什么这套系统能稳定地转]]）：

1. **两个事实来源。** 论文只放 Zotero；“你知道的一切”只放 Obsidian 笔记库。课程资料只进 NotebookLM 和笔记库，从不进 Zotero。就像家里的证件永远放同一个抽屉。
2. **一次一个执行者，哪个都行。** Codex 和 Claude Code 读同一套规则、同一套 skill、同样的 MCP 服务器[^mcp]和状态文件，中途可以换人。一个额度用完了，另一个接着干。
3. **由指令驱动，设检查点。** 没有任何定时任务在后台偷偷运行。凡是公开的、难以撤销的操作，执行者都先停下来等你说 yes。
4. **文件就是通信通道。** 执行者之间、执行者和 Gemini 之间的每次交接，都是一个名字和格式固定的文件，而不是某段聊天记录。

### 各个工具的分工

| 工具 | 角色 | 用来做 | 不用来做 |
|---|---|---|---|
| Codex / Claude Code | 执行者 A / B | 任一闭环中的任何 skill；互相检查 | 把状态留在聊天里 |
| NotebookLM | 课程资料引擎 | 基于课程资料生成有出处的大纲、知识点、问答 | 文献检索 |
| Gemini（命令行 `agy`） | 第三个模型家族 | 第二意见、长上下文阅读 | 访问笔记本 |
| Antigravity + Colab | 实验工作台与 GPU | 按 `RUN.md` 跑复现和小实验 | 归档笔记或发布 |
| Google Drive | 中转站 | 收 NotebookLM 导出、送回活文档 | 存放笔记库 |
| Zotero 10 + Better BibTeX | 科研资料库 | PDF、引用键、高亮、参考文献、订阅源 | 课程资料 |
| Obsidian | 中枢 | 文献笔记、课程笔记、概念、综述 | 存放 PDF |
| 博客仓库 | 对外输出 | 文章与图片，推送即部署 | — |

两个执行者之所以能像同事一样交接，是因为它们共享五样东西：

- **同一套规则**：Codex 读 `AGENTS.md`，Claude Code 读 `CLAUDE.md`，后者只有一行 `@AGENTS.md`，等于“请看同一份规章”。
- **同一套 skill**：`.agents/skills/` 是真身，`.claude/skills` 是指向它的符号链接。
- **同一套工具**：两边注册同样的 5 个 MCP 服务器，共享 `tools/` 里的脚本。
- **同样的权限**：只能写工作区和博客仓库，碰不到电脑上的其他东西。
- **同一份状态**：每次运行都往 `ops/log.md` 追加一行。

重要的结果，交给这次“没上班”的那个执行者复查。这和论文要找外审而不是作者自查是一个道理：来自不同厂商的两个模型，盲点不一样，互相检查能发现更多问题。

## 三、两个闭环

![两个闭环在笔记库与博客交汇](/images/research-os-workflow/two-loops.svg "科研闭环（蓝）与课程闭环（绿）：在笔记库和博客交汇")

“闭环”的意思是：资料进来，被整理成笔记，笔记变成文章，文章又回到下一轮的起点。就像做菜剩下的食材记进购物清单，下次买菜就不会漏。

### 科研闭环

1. **发现。** `paper-search` 检索 arXiv、OpenReview 和 OpenAlex，跳过 Zotero 里已有的论文，写出一份排了序的清单。想从几篇信得过的论文出发扩展一个主题，就用 `paper-similar`。Zotero 的订阅源也值得每天扫一眼，像翻报纸的标题。
2. **收集并归类（C1）。** 你删掉不想要的、核对每篇的建议分类，执行者再通过 Zotero 本地 API 把论文直接加进对应分类，顺手附上开放获取的 PDF。已有的论文不会重复，只会补上缺失的分类。
3. **阅读与总结。** 在 Zotero 里读、画高亮，`paper-summary` 把 PDF 和高亮一起变成一篇结构化的文献笔记。重要的论文，让另一个执行者对照 PDF 再核查一遍。
4. **综合。** `lit-review` 把几篇笔记综合成一篇综述，明确区分“论文说了什么”和“这是作者的理解”。
5. **发布（C3）。** `blog-publish` 写成博客文章并构建，看过预览、点了头才提交和推送。
6. **闭环。** 文章网址写回笔记；文章获得 DOI[^doi] 后加入 Zotero，每月查一次谁引用了它，新出现的论文再回到第 1 步。

复现是科研闭环的一个分支：`repro-plan` 为一篇有公开代码的论文写好计划和 `RUN.md`，你在 Antigravity 里让它的智能体照着 `RUN.md` 在 Colab 上跑（最后一步永远是 `colab stop`，免得 GPU 一直计费），`repro-report` 再把结果和论文对比写成笔记。执行者自己从不启动 GPU。

### 课程闭环

1. **投喂。** 每门课一个 NotebookLM 笔记本，上传课件、录音、电子书和相关链接。
2. **提问。** 用一份固定的提示单，让 NotebookLM 生成大纲、知识点表、问答和易混概念。每条回答开头都带一个“桥头部”（课程、讲次、类型），像快递单一样告诉下游这份东西该放哪。
3. **导出。** 在 NotebookLM 里点 Export to Docs，回答就落进 Google Drive。
4. **归档。** `course-ingest` 用 `gws` 从 Drive 取件，按类型拆进 `10-Courses/<课程>/` 的大纲、知识点、卡片、测验文件夹。
5. **复习。** `course-quiz` 出闭卷题、评分、把错题记进错题本。
6. **回流。** `notebook-pack` 把核实过的笔记和已发布文章的网址写成 Drive 里的“活文档”[^living]，NotebookLM 下次回答时就能用上你自己的理解。

NotebookLM 没有面向个人账户的公开 API，所以上传、提问、导出这几下点击只能手动完成；Drive 之后的一切自动进行。

两个闭环还会互相喂养：课上核实过的概念会成为 `30-Concepts/` 里的一条笔记，论文笔记直接链接过去；反过来，某篇论文把课上的主题讲得更清楚时，就把它加进那门课的笔记本。

## 四、日常怎么用

### 检查点

检查点就是那几个“确认”按钮。它们的存在不是为了拖慢速度，而是为了让人可以放心地把其余部分交出去。

| 检查点 | 执行者何时停下 | 你要做什么 |
|---|---|---|
| C1 | 把论文加入 Zotero 之前 | 批准或删减清单，核对建议分类 |
| C2 | 从不自己把笔记标为 `verified: true` | 由你标记，或在 C3 时一并批准 |
| C3 | 博客构建通过后、`git commit` 与 `git push` 之前 | 看预览和差异，然后说 yes |
| C4 | 删除、覆盖、移动或重命名文件之前 | 批准；默认改为移到 `bridge/archive/` |

写指令时说清楚范围（主题、时间窗口、论文数量）、课程和讲次，就能少很多来回确认。

### 仍然要亲手做的事

- 保存自己发现的论文：浏览器里的 Zotero Connector，或者 Zotero 订阅源。
- 向 NotebookLM 投喂资料、运行提示单、导出到 Docs。
- 在 Antigravity 里跑实验。
- 所有审批：C1、C3、C4，以及把笔记标为已核实。

换句话说，**“看什么、信什么、发什么”永远是人的决定**，机械的搬运和整理才交给 AI。

### 一周的节奏

| 时间 | 科研 | 课程 | 用时 |
|---|---|---|---|
| 每天 | 把链接和想法丢进 `00-Inbox/` | 复习到期的卡片 | 15 分钟 |
| 周一 | `paper-search`，批准 Zotero 清单 | — | 30 分钟 |
| 周二至周四 | 读 2–3 篇，`paper-summary`，交叉检查一篇 | 每节课后上传、提问、导出、`course-ingest` | 2 小时 |
| 周五 | 复现一个小结果 | — | 1–2 小时 |
| 周日 | `weekly-review` | `course-quiz` 综合测验 | 1 小时 |
| 每两周 | 发一篇科研文章 | 发一篇课程文章 | 1 小时 |

一周大约五个小时，其中大部分是阅读和自测，真正花在“指挥 AI”上的时间很少。

## 五、交接：东西怎么在各端之间流动

前面几节说了“谁做什么”，这一节说“东西怎么递过去”。整套系统一共有七个端：两个执行者、Zotero、NotebookLM（经 Google Drive）、Gemini、Antigravity 与 Colab、博客。它们之间从不直接“对话”，而是靠**约定好格式的文件**交接，就像几个部门之间靠表单和快递单办事，而不是靠打电话。

![各端之间的交接](/images/research-os-workflow/handoffs.svg "每一条线都是一个约定好格式的文件：谁写、写成什么样、谁来读，事先都说好了")

每一条交接都要回答四个问题：谁写、写成什么格式、谁来读、出错或重复了怎么办。

| 交接 | 方向 | 交接物 | 防重复 | 出错时的退路 |
|---|---|---|---|---|
| 论文入库 | 执行者 → Zotero | DOI 或 arXiv 链接 + 目标分类 | 已有条目只补分类，不新建 | 打印标识符，人用 Zotero 的“按标识符添加” |
| 论文出库 | Zotero → 执行者 | 元数据、全文、高亮；`library.bib` 里的引用键 | 引用只认 Zotero 里的条目 | 工具失败就明说，不凭记忆补 |
| 课程进来 | NotebookLM → Drive → 工作区 | 带桥头部的 Google 文档 → Markdown | 记录“文件 ID@修改时间”，拉过的不再拉 | 把回答手动粘贴进 `bridge/from-notebook/` |
| 课程回流 | 工作区 → Drive → NotebookLM | 每门课两份活文档 | 记住文档 ID，永远原地改写同一份 | 手动上传 `bridge/to-notebook/` 里的文件 |
| 第二意见 | 执行者 ⇄ Gemini | `<id>-request.md` / `<id>-answer.md` | 每个请求一个 ID | 把请求文件交给人，粘贴进 Gemini 应用 |
| 实验 | 执行者 → Antigravity → Colab → 执行者 | `RUN.md` → `runs/<日期>/`、`results.md` | 每个复现一个 git 仓库 | 无论成败最后都 `colab stop` |
| 发布 | 执行者 → 博客 → 网站 | `posts/*.md` 与图片 | 只暂存自己创建的文件 | 构建失败就不提交 |
| 换班 | 执行者 → 执行者 | `ops/log.md` 的一行，以及它点名的文件 | 只追加，不改写 | 说 “resume”，从最后 20 行接着做 |

下面挑几条最有讲究的展开说。

### 课程资料的“快递单”：桥头部

NotebookLM 的回答要变成笔记库里的笔记，最大的难题是“这份东西属于哪门课、哪一讲、是什么类型”。办法是让 NotebookLM **自己在回答开头写一张快递单**：每张提示单的最后一句都是“回答以这个头部块开头”。

```yaml
---
bridge: from-notebook
course: TEST101
unit: L03
kind: outline   # outline | knowledge | qa | confusions | check | quiz | notes
notebook: TEST101 Computational Neuroscience
date: 2026-10-29
---
```

有了这张单子，`course-ingest` 不用猜就知道该放哪：

| kind | 去向 |
|---|---|
| `outline` | `10-Courses/<课程>/Outlines/<讲次>.md`，并链接概念笔记 |
| `knowledge` | `Knowledge/<讲次>.md`，同时往 `30-Concepts/` 追加内容（只追加，不覆盖人写的部分） |
| `qa` | `Cards/<讲次>.md`，写成 `Question::Answer` 卡片 |
| `quiz` | `Quizzes/<讲次>.md`，答案折叠起来 |
| `check` | 把修正应用到对应笔记，记进错题本；如果那条笔记已经发布成文章，提醒需要重新发布 |
| `notes` / `confusions` | `<讲次>-notes.md` |

两个细节让它更结实：Google 文档导出时可能把 `---` 变成分隔线，所以解析时只认 `key: value` 这样的行；万一没有头部，就按 `<课程>_<讲次>_<类型>.md` 的文件名去猜，并先问人确认。

`check` 这一类是课程闭环里最有意思的一环：每周把自己发布的讲解作为来源加进笔记本，让 NotebookLM 拿它和课件、教材逐句对比，列出错误、过度简化和漏掉的条件。回答同样带着桥头部回来，变成修正和错题。等于请了一位只看课本的助教，每周批改一次自己的讲义。

### Google Drive 的两个方向

Drive 是 NotebookLM 和工作区之间唯一的通道[^gws]。两个方向的做法刚好相反：

- **拉进来（`drive_pull.sh`）：只拿新的。** 在 Drive 里搜索正文含 `from-notebook` 的 Google 文档，导出成 Markdown 放进 `bridge/from-notebook/`。每拉一份，就往 `ops/drive-pulled.txt` 记一行“文件 ID@修改时间”，下次跳过；导出后前 20 行里找不到桥头部的，挪到 `archive/not-bridge/`，不混进课程笔记。
- **推出去（`drive_push.sh`）：永远改同一份。** 每门课在 Drive 的 `ResearchOS/<课程>/` 下只有两份文档：“我的已核实笔记”和“我的文章”。第一次创建时把文档 ID 记进 `ops/drive-docs.json`，之后每次都原地改写同一份。

为什么回流一定要用“活文档”？因为 NotebookLM 对上传的 PDF 只存一份快照，永远不会更新；只有原生 Google 文档会定期从 Drive 重新同步。只要文档 ID 不变，NotebookLM 里那个来源就会自己跟着更新，不必每周重新上传。

还有一条红线：脚本只碰 NotebookLM 的导出和自己创建的这两份文档，**绝不删除 Drive 里的任何东西**。也不要图省事去用第三方的 NotebookLM MCP 服务器：它们靠浏览器 cookie 驱动已登录的账号，风险落在整个 Google 账号上。

### Gemini：文字进，文字出

第三个模型家族的作用是“换一双眼睛”。交接方式非常朴素：执行者在 `bridge/gemini/` 写一份请求文件，写清问题、需要的原文摘录和想要的回答格式；`ask_gemini.sh` 用命令行 `agy -p` 把它发给 Gemini，回答落成同名的 `-answer.md`。

命令行工具偶尔会返回空输出，甚至出错了还报告成功，所以 skill 从不只看退出码，而是去读回答里的状态字段；空回答就在伪终端里重试一次，还不行就老实说“这次没拿到”，把请求文件交给人，粘贴进 Gemini 应用。**宁可交出一个失败，也不编一个回答。**

### 实验：计划和执行分开

复现是唯一会花钱的环节，所以拆成三段，各由最合适的一方负责：

1. **计划（执行者）。** `repro-plan` 写清要复现哪一张图或表、数据和许可、原文超参数、算力估计、预期数值与容差、三个可能出差别的地方，并搭好仓库和 `RUN.md`。
2. **执行（人 + Antigravity）。** 人在 Antigravity 里打开仓库，让它的智能体照着 `RUN.md` 一步步做：先在本地 CPU 上用极小配置冒烟，再申请 GPU、上传代码、运行、下载结果、导出可重放的 notebook，最后一步无论成败都是 `colab stop`。人在旁边看着，随时可以叫停。
3. **报告（执行者）。** `repro-report` 读 `results.md` 和运行日志，逐项对比论文数值；在相信任何一个数字之前，再让另一个执行者审一遍代码。

执行者自己从不启动 GPU。计划写在文件里、结果也写回文件里，所以即使中途换人、换机器，下一个人照样知道做到了哪。

### 发布：构建就是质检员

`blog-publish` 把笔记变成文章时做三件转换：`[@citekey]` 变成编号引用，并用 Better BibTeX 从 Zotero 生成参考文献（带 DOI 链接）；笔记里的 `[[链接]]`，指向已发布文章的保留，其余变成纯文字；图片复制到文章自己的图片目录。

然后跑一遍站点构建。构建就是质检员：图片路径写错、站内链接失效、分类写错，都会直接失败。构建通过后才到 C3，人看过预览和差异才提交。文章上线后，网址写回笔记的 `published_url`；人在 C3 说的那句 yes，也同时算作对这条笔记的核实。

### 换班：交班本

每个 skill 跑完都往 `ops/log.md` 追加一行，格式固定：

```text
时间 | 执行者 | skill | 动了哪些文件 | 状态与下一步
2026-11-02 16:25 | claude-code | paper-similar | seed brown2020Language | PAUSED at C1: 3 candidates, none in Zotero; next: user yes -> add to Zotero
```

“下一步”这一栏是交班本的灵魂：它让接班的执行者不必重新问“做到哪了、哪些已经批准过”。第一次验收时就真实发生过一次额度耗尽、中途换人，过程见 [[#验收测试]]。

## 六、协作原则：为什么这套系统能稳定地转

把上面这些交接方式抽象一下，背后是几条反复出现的原则。它们和具体用哪个模型、哪个软件无关，换一套工具也同样适用。

**1. 一样东西只有一个家。** 论文的家是 Zotero，知识的家是笔记库，课程资料的家是 NotebookLM，公开文字的家是博客仓库。任何东西都不在两处各存一份可修改的副本；需要“另一处也能看到”时，用链接、导出或同步，而不是复制粘贴。就像家里的钥匙只挂在门口那一个钩子上。

**2. 交接靠文件，不靠记忆。** 聊天记录是一次性的，文件才是长期的。执行者之间靠日志，NotebookLM 与执行者之间靠桥头部，执行者与 Gemini 之间靠请求和回答文件，执行者与实验之间靠 `RUN.md` 和 `results.md`。任何一个端被换掉，只要它读写同样的文件，系统照常运转。

**3. 每份文件都有“身份证”。** 笔记的头部属性写明 `source`（谁写的）、`verified`（人核实过没有）、`created`，科研笔记还有 `citekey`。随便翻开一条笔记，都能立刻知道它从哪来、能不能信。

**4. 每一步都可以放心重做。** 论文入库用“已存在就只补分类”，Drive 拉取记着“拉过哪个版本”，回流永远改写同一份文档，该删的东西挪进 `archive/` 而不是真删。所以网络断了、额度用完了、跑到一半出错了，重来一遍不会产生重复，也不会丢东西。就像连按两次电梯按钮，也只会来一部电梯[^idem]。

**5. 人只在不可逆的地方把关。** 注意力是最贵的资源，不能每一步都让人确认。所以检查点只设在四处：东西进文献库、东西公开发布、东西被删除或覆盖，以及“这条笔记可信”的标记。其余可以随时撤回的事，放手让执行者去做。

**6. 权限给到刚好够用。** 执行者只能写工作区和博客仓库；在 Drive 里只碰导出文档和自己建的文档；不新建 Zotero 分类、不启动 GPU、不删除文件，这些都要先问人。笔记库还交给 Obsidian 的 Git 插件每 30 分钟自动提交一次，任何误改都能一键回滚。

**7. 分工看“谁擅长”和“有没有接口”。** 需要判断的事（这篇论文值不值得读、这段讲解对不对、要不要发出去）留给人；没有接口的事（往 NotebookLM 上传、在 GPU 上盯实验）也留给人；剩下机械的检索、搬运、整理、排版交给执行者。

**8. 让不同的“眼睛”互相检查。** 重要结果交给另一家厂商的模型复查，Gemini 作为第三个模型家族提供第二意见；评审自己的稿件时两个执行者都跑一遍，先处理两边都提到的问题。

**9. 失败要说出来，并留一条手动的退路。** 规则里写得很直白：工具失败就说失败，绝不凭记忆补空。每条交接也都留了手动方案：Zotero 写不进去就打印标识符，Drive 不通就手动粘贴，Gemini 没回应就换成网页版。就像大楼停电时，总有一扇能手动打开的门。

**10. 证据可以追溯。** 引用只能来自工具返回的、带 DOI 或 arXiv ID 的结果，并且必须已经在 Zotero 里；“论文说了什么”和“对它的解读”分开写，后者标上 Interpretation。读者顺着任何一句话，都能找回它的出处。

## 七、它是怎么构建的

### 工作区结构

整个系统是一个普通文件夹，用 git 管理：

```text
~/ResearchOS/
├── AGENTS.md              # 共享规则与路径（Codex 读取）
├── CLAUDE.md              # 一行：@AGENTS.md（Claude Code 读取）
├── README.md              # 文件夹说明
├── PROJECTS.md            # 在研问题，每行一个，用于论文排序
├── library.bib            # Better BibTeX 自动导出
├── .agents/skills/        # 13 个 skill
├── .claude/skills -> ../.agents/skills
├── ops/
│   ├── log.md             # 运行日志：执行者之间的交接
│   ├── collections.md     # Zotero 分类映射
│   └── research-scope.md  # 研究范围：会议、期刊、arXiv 分类、订阅源
├── tools/                 # ask_gemini.sh · cite.sh · drive_pull.sh · drive_push.sh
├── bridge/                # from-notebook/ · to-notebook/ · gemini/ · prompts/ · archive/
├── vault/                 # Obsidian 笔记库
│   ├── 00-Inbox/  10-Courses/  20-Papers/  25-Reviews/
│   ├── 30-Concepts/  40-Projects/  80-Weekly/  90-Templates/
├── repro/                 # 每个复现一个子仓库，在 Antigravity 中打开
└── papers-cache/          # arXiv MCP 下载的 PDF（不进 git）
```

博客仓库就是发布目录，笔记库里不再需要“待发布”文件夹。

### 共享规则：AGENTS.md

规则文件很短，但它决定了整个系统的行为边界。核心是这几条：

::: details 展开 AGENTS.md 的核心内容
```markdown
## How we work
- Run only what I ask. Chain skills when my prompt needs it. No background work.
- Stop and wait for my "yes" at checkpoints:
  C1 before adding items to Zotero; C3 before git commit/push in BLOG_REPO;
  C4 before deleting, overwriting, moving or renaming a file (prefer moving it to
  BRIDGE/archive/).
- Never set verified: true yourself. My "yes" at C3 counts as review of that note.
- After every skill run, append one line to LOG:
  YYYY-MM-DD HH:MM | codex|claude-code | <skill> | <files> | <status / next step>
- On "resume", read the last 20 lines of LOG and the files they name, then continue.

## Two loops
- Papers live in Zotero. Never put course materials in Zotero.
- If Zotero is closed or a Zotero write fails, say so and print the DOIs or arXiv IDs
  one per line for Zotero's Add Item by Identifier; wait for my "done".
- File each paper by ops/collections.md. If none fits, use 00 Inbox and tell me.
  Never create a collection without asking.
- Course content enters the vault only through BRIDGE/from-notebook/, with a bridge header.
- In Google Drive, touch only NotebookLM exports and the living Docs you created.
  Never delete anything in Drive.

## Reproduction
- I run experiments myself in Antigravity on Colab. You plan (repro-plan) and report
  (repro-report). Never start a Colab runtime or spend compute units.

## Evidence
- Never invent a citation. Every paper comes from a tool result (zotero, arxiv,
  openreview, openalex, semanticscholar) with a DOI or arXiv ID.
- Separate what a source says from your own reading; label the latter "Interpretation:".
- If a tool fails, say so. Never fill gaps from memory.

## Research scope
- Cover general machine learning as well as NeuroAI; do not force neuroscience
  relevance on ML-only requests.
- Read ops/research-scope.md for venue coverage and ops/collections.md for collections.
```
:::

其中“每次运行追加一行日志”和“resume 读日志”这两条，是两个执行者能接力的关键：Codex 额度用完时，在 Claude Code 里说一句 resume，它从日志里就知道做到了哪一步、哪些已经批准过。

### 接入第二个执行者，并给够权限

让 Claude Code 和 Codex 读同一份规则、同一套 skill，只需要三行：

```bash
cd ~/ResearchOS
printf '@AGENTS.md\n' > CLAUDE.md                 # Claude Code 的导入语法：读 AGENTS.md
mkdir -p .claude && ln -s ../.agents/skills .claude/skills
```

博客仓库在工作区之外，所以两个执行者都要单独获准写入它，除此之外哪儿也不能写：

```toml
# ~/ResearchOS/.codex/config.toml（Codex 只有在你信任这个项目后才会加载它）
sandbox_mode = "workspace-write"
[sandbox_workspace_write]
writable_roots = ["/Users/<you>/GitHub/<blog>"]
network_access = true          # 让 git push 能联网
```

Claude Code 的对应设置写在 `~/ResearchOS/.claude/settings.json`：

```json
{ "permissions": { "additionalDirectories": ["/Users/<you>/GitHub/<blog>"] } }
```

权限的边界就是协作原则里的“给到刚好够用”：执行者能在工作区和博客里干活，但碰不到电脑上的其他东西。

### Skill 的写法

每个 skill 就是一个文件夹里的 `SKILL.md`：一段描述（决定什么时候触发）加一份编号步骤。下面是 `paper-similar` 的主体：

::: details 展开 paper-similar 的 SKILL.md
```markdown
1. Resolve the seed: @citekey, DOI or arXiv ID = one paper; a collection = its items
   as positives; "not like @x" = negatives.
2. Recommend with semanticscholar (one seed: single-paper recommendations; several:
   multi-paper with positives and negatives), plus the seed's references and citing
   papers. Add OpenAlex related works for Nature-family coverage.
3. Drop papers already in Zotero (search by DOI, arXiv ID or title).
4. Rank by relevance to the seed and to PROJECTS.md; keep the number I asked for.
5. Read ops/collections.md. Propose one or more collections per paper with a
   one-line reason; no match = 00 Inbox, flagged.
6. C1: show a table of title, year, venue, DOI or arXiv ID, proposed collections and
   reason. Wait.
7. On "yes": zotero_add_item with the DOI or arXiv link, collections=[...],
   if_exists='file', attach_mode='auto'. Never create a collection without asking.
8. Write the list with the new citekeys to 00-Inbox/similar-<seed>-<date>.md.
```
:::

把判断交给“书面映射”而不是模型的临场猜测，是整套设计里最有用的一条：`ops/collections.md` 每行写一个分类、收什么论文、一两篇种子论文，两个执行者归档前都读它。

### 五个 MCP 服务器

科研闭环靠 5 个 MCP 服务器接入外部数据；课程闭环一个都不需要。

| 服务器 | 提供什么 |
|---|---|
| zotero-mcp | 搜索文献库、读全文与批注、按 DOI/arXiv 添加论文并归入分类 |
| arxiv-mcp-server | 按分类和日期检索 arXiv，下载并阅读论文 |
| openreview-mcp | NeurIPS、ICLR 等会议的投稿、审稿意见与录用决定 |
| openalex-research-mcp | 2.4 亿+ 文献，按期刊筛选，施引查询 |
| semantic-scholar-fastmcp | 基于种子论文（或正例、反例）推荐相似论文 |

两个执行者用同样的方式注册：

```bash
# Codex
codex mcp add zotero --env ZOTERO_LOCAL=true -- zotero-mcp
codex mcp add arxiv -- arxiv-mcp-server --storage-path ~/ResearchOS/papers-cache
codex mcp add openreview -- openreview-mcp
codex mcp add openalex -- npx -y openalex-research-mcp
codex mcp add semanticscholar -- uvx semantic-scholar-fastmcp
# Claude Code（-s user：所有文件夹可用）
claude mcp add zotero -s user -e ZOTERO_LOCAL=true -- zotero-mcp
claude mcp add arxiv -s user -- arxiv-mcp-server --storage-path ~/ResearchOS/papers-cache
claude mcp add openreview -s user -- openreview-mcp
claude mcp add openalex -s user -- npx -y openalex-research-mcp
claude mcp add semanticscholar -s user -- uvx semantic-scholar-fastmcp
```

Zotero 10 的本地 API 支持写入（条目、分类），第一次写入时 Zotero 会弹窗，选 Always Allow 即可，不需要 Web API 密钥。Better BibTeX 的 JSON-RPC 接口则负责把引用键变成参考文献列表，博客文章的“参考文献”一节就是这样生成的，而不是靠模型回忆[^bbt]。

### Zotero：从“能用”到“能被 AI 写入”

Zotero 是科研闭环里唯一放论文的地方，也是唯一需要授权 AI 写入的外部软件。下面七步按顺序做，每一步都有一个能自己验证的检查。

| 步骤 | 在哪里设置 | 设成什么 | 怎么确认 |
|---|---|---|---|
| 1. 开本地 API | 设置 → 高级 | 勾选 “Allow other applications on this computer to communicate with Zotero” | 下面的 `curl` 返回 JSON |
| 2. 引用键规则 | 设置 → Better BibTeX → Citation keys | `auth.lower + year + shorttitle(1,1)`，例如 `wei2021Finetuned`；已有条目全选 → 右键 → Better BibTeX → Refresh BibTeX key | 新条目的引用键符合格式 |
| 3. 自动导出 | 右键“我的文库” → 导出文库 | 格式 Better BibTeX，勾选 **Keep updated**，保存为 `~/ResearchOS/library.bib` | 加入一篇论文后，`.bib` 在约 10 秒内多出一条 |
| 4. 分类 | 左栏新建分类 | `00 Inbox`、`20 <你的方向>`、`25 Machine Learning/…`、`30 Projects`、`90 Read`、`95 My outputs` | 每个分类都写进 `ops/collections.md` |
| 5. 订阅源 | 文件 → 新建订阅 → 从 URL | 期刊、arXiv 分类和会议检索订阅（清单见 [[#九、扩展到任意研究方向]]） | 订阅面板里出现条目 |
| 6. 写入授权 | 对执行者说 “Using zotero, check write capabilities and request local write access” | Zotero 弹窗里选 **Always Allow** | 再查一次，报告文库可写；不要建测试条目 |
| 7. 浏览器插件（可选） | 安装 Zotero Connector | — | 在论文页面能一键保存 |

```bash
# 1. 本地 API 是否开着（Zotero 必须处于打开状态）
curl -s 'http://localhost:23119/api/users/0/items?limit=1' | head -c 300; echo
# 3. Better BibTeX 是否就绪：返回 Zotero 与 Better BibTeX 的版本号
curl -s http://localhost:23119/better-bibtex/json-rpc -X POST \
  -H 'Content-Type: application/json' -H 'Accept: application/json' \
  --data-binary '{"jsonrpc":"2.0","id":1,"method":"api.ready","params":[]}'; echo
```

Zotero 10 的本地 API 除了读，还支持写入条目和分类；执行者通过 zotero-mcp 的授权工具拿到一把可重复使用的钥匙，所以不需要 Web API 密钥，论文也不经过任何云端中转[^zlocal]。分类、订阅源这些“结构性”的东西由人建，执行者只往已有分类里放论文。

### Google 一侧：一个账号，四个入口

Drive、Colab、Antigravity 和 Gemini 都用同一个持有 Google AI Pro 的账号。它们各自的登录方式不一样，这里是最容易卡住的地方。

**Google Drive（`gws`）。** 用 `npm install -g @googleworkspace/cli` 安装，再运行 `gws auth setup --login` 跟着向导走。向导需要一个 Google Cloud 项目和其中的“桌面应用” OAuth 客户端：没有的话先在 Cloud 控制台随便建一个项目，**启用 Google Drive API**（第一次搭建就因为没启用而报“API disabled”），再让向导创建客户端，授权时只选 Drive 权限。

```bash
gws auth setup --login                          # 第一次登录
gws auth login -s drive                         # 令牌缺少 Drive 权限时补一次
gws drive files list --params '{"pageSize": 3}' # 检查：列出最多 3 个文件
```

然后在 My Drive 里建一个 `ResearchOS` 文件夹，把它的 ID 记进 `ops/drive-docs.json`，每门课的活文档都放在它下面。如果 Codex 在沙箱里调用 `gws` 时报只读错误，说明 `gws` 存放令牌的目录在工作区外，需要把它也加进 `writable_roots`。

**Colab（Colab CLI）。** 用 `uv tool install google-colab-cli` 安装。登录用的是 Google Cloud 的应用默认凭据：

```bash
gcloud auth application-default login   # 用 AI Pro 账号登录一次
colab --auth adc usage                  # 检查：显示计算单元余额与用量
colab --auth adc sessions               # 检查：此时应为空
```

装好的版本默认走另一种登录方式（oauth2），和文档写的不一样，所以每条命令都显式写上 `--auth adc`。搭建阶段只查余额，绝不启动运行时。

**Antigravity。** 把 Colab CLI 自带的 `colab-operator` skill 复制到 `~/ResearchOS/repro/.agents/skills/`，再在 Antigravity 里把 `~/ResearchOS/repro` 打开为工作区一次，确认它的智能体看得到这个 skill。这个工作区有自己的一份规则：

::: details 展开 repro/AGENTS.md（Antigravity 读取）
```markdown
# Reproduction workspace (Antigravity)

I drive you here. Each folder in this workspace is one reproduction, with a RUN.md
written by Codex or Claude Code.

- Follow RUN.md step by step, and tell me before each Colab step.
- Use the colab-operator skill for every remote run. Start the smallest GPU that
  RUN.md allows; ask me before anything larger than a T4, or a run you expect to
  take more than an hour.
- Run `colab usage` before and after. Always end with `colab stop`, also after an error.
- Save outputs under runs/<YYYY-MM-DD>/ and fill results.md. Commit with git.
- Do not touch ~/ResearchOS/vault, ~/ResearchOS/bridge or ~/GitHub/<blog>.
```
:::

**Gemini（`agy`）。** Antigravity 的命令行 `agy` 装在 `~/.local/bin`。先交互式运行一次 `agy` 登录，无界面模式才有凭据可用：

```bash
agy -p "Reply with the single word OK" --output-format json < /dev/null   # 检查：JSON 里含 OK
```

**NotebookLM。** 每门课一个笔记本，名字和笔记库里的课程文件夹一致。等 `notebook-pack` 第一次在 Drive 里建好那两份活文档后，在笔记本里“添加来源 → Google Drive”把它们加进去，只需一次。

### Obsidian：五个插件和它们的设置

在 Obsidian 里把 `~/ResearchOS/vault` 打开为笔记库，打开社区插件开关。五个插件可以在应用里装，也可以在 Obsidian **关闭**时从各自的 GitHub Release 下载 `main.js`、`manifest.json`、`styles.css` 放进 `.obsidian/plugins/<插件 id>/`，再把 id 写进 `community-plugins.json`。

| 插件 | 作用 | 关键设置 |
|---|---|---|
| Zotero Integration | 从 Zotero 导入带高亮的文献笔记（依赖 Better BibTeX） | 新建导入格式 `paper`：输出到 `20-Papers/@{{citekey}}.md`，模板 `90-Templates/paper.md`，图片放 `{{citekey}}/` |
| Templater | 统一笔记模板 | 模板文件夹设为 `90-Templates` |
| Dataview | 课程、项目索引页的自动目录 | 默认设置 |
| Spaced Repetition | 复习问答卡片 | 卡片标签 `#flashcards`（课程卡片用 `#flashcards/<课程>`）；单行卡片分隔符 `::`，反向卡片 `:::` |
| Git | 给笔记库兜底 | 每 30 分钟自动提交一次；自动推送关闭 |

`90-Templates/` 里放四个模板，对应四类笔记，执行者写笔记时照着它们的结构填：

| 模板 | 小节 |
|---|---|
| `paper.md` | 一句话结论 / 问题与动机 / 方法 / 关键结果 / 局限 / 我的高亮 / 相关概念与论文 / 可复现性 / 卡片 |
| `review.md` | 问题与范围 / 主题 1–5 / 共识与分歧 / 方法对比表 / 开放问题 / 下一步阅读 |
| `concept.md` | 定义 / 直觉 / 公式 / 出现在哪些课程与论文 / 常见混淆 |
| `lecture.md` | 大纲 / 知识点 / 我的理解 / 疑问 / 卡片 |

每门课、每个项目第一次用到时，执行者会建一个同名文件夹和一篇索引笔记，里面只有一段 Dataview 查询，之后新增的笔记会自动出现在目录里：

````markdown
```dataview
TABLE unit, type, verified
FROM "10-Courses/TEST101"
WHERE file.name != this.file.name
SORT unit ASC
```
````

`verified` 这一列很有用：一眼就能看出哪些笔记还没被人核实过。

### 笔记的头部属性

执行者写的每条笔记都带同一组头部属性，这是笔记库能被 Dataview 查询、也能被另一个执行者接手的基础：

```yaml
---
type: paper | review | concept | lecture | quiz
citekey: wei2021Finetuned     # 仅科研笔记
course: TEST101               # 仅课程笔记
source: codex | claude-code | notebooklm | gemini
verified: false               # 只能由人改为 true
publish: false
published_url:                # blog-publish 回写
---
```

## 八、从零搭起来的流水线

![搭建流水线 A 到 I](/images/research-os-workflow/build-pipeline.svg "搭建流水线：一份 Markdown 执行清单，交给 Codex 逐节执行")

整个搭建过程不需要手动敲命令：把步骤写成一份 Markdown 执行清单，交给 Codex 去做：

```text
Read ~/NeuroAI-Workflow-Guide/CODEX-SETUP-TASKS.md and execute it section by section.
Before each section, tell me what you will change. Stop at every step marked (YOU)
and wait for me. Never push to the blog repo during setup. After each section,
run its checks and report pass or fail.
```

清单分 A 到 I 九节，每节都有一组**检查**，执行者必须逐项报告 PASS/FAIL 才能进下一节；标“（你）”的步骤需要人在图形界面里点，执行者会停下来等你说 done。

| 节 | 内容 | 检查 |
|---|---|---|
| A 前置条件 | git、Node 22、uv、gh、`gws`、Colab CLI、gcloud；登录 `agy` | 版本号 |
| B Zotero | 开本地 API；引用键规则 `auth.lower + year + shorttitle(1,1)`；自动导出 `library.bib`；建分类、加订阅源；申请写入权限 | `api.ready` 返回版本；加入论文后 `.bib` 增长 |
| C 工作区 | 文件夹骨架、规则文件、符号链接、两个执行者的可写目录、`git init` | 提交成功，用户确认信任工作区 |
| D MCP 与 Google | 5 个服务器在两边注册；`gws` 登录并开 Drive 权限；Colab 认证；在 `repro/` 里装 Colab 的 skill | `mcp list` 全部连接；每个服务器跑一次冒烟查询 |
| E Skills | 13 个 skill、4 个脚本、2 份 NotebookLM 提示单、4 个笔记模板 | 两个客户端都能列出全部 skill |
| F Obsidian | Zotero Integration、Templater、Dataview、Spaced Repetition、Git 五个插件 | 插件加载，模板路径生效 |
| G 博客 | 读写作规范；安装依赖并构建；只读检查 GitHub 凭据 | 构建退出码 0，没有推送 |
| H 验收测试 | 9 项端到端测试（见下） | 每项都在预期的检查点停下 |
| I 研究范围扩展 | 新分类树、验证订阅源、`venue-scan` 模式 | 只读读取 Zotero 订阅表 |

### 验收测试

| 测试 | 内容 | 结果 |
|---|---|---|
| 科研闭环 | 检索 3 篇论文 → 总结 → 综述 → 博客草稿 | 停在 C1 和 C3；构建通过 |
| 课程闭环 | 放一份样例 NotebookLM 输出 → 归档 → 博客草稿 | 笔记进 `10-Courses/`，收件箱文件移到 `archive/` |
| Gemini 通道 | 一句话问题 | 回答文件出现在 `bridge/gemini/` |
| 相似论文 | 以一篇论文为种子找 3 篇并归类 | 每篇进了建议分类，没有重复条目 |
| 笔记库文件夹 | 新建项目文件夹 | 带 Dataview 索引笔记 |
| 可互换性 | Codex 做到 C1 后额度用完，Claude Code 说 resume 接着做完 | 没有重复询问已决定的事 |

第一次验收本身就成了一次真实的可互换性测试：Codex 在等待 C1 批准时额度耗尽，把它的进度贴给 Claude Code，后者读完日志直接从 C1 继续，把剩下的总结、综述和博客草稿做完[^pitfalls]。

## 九、扩展到任意研究方向

最初的分类树只有 `20 NeuroAI`。扩展到通用机器学习时，只需要做四件事，换成其他方向也是同样的步骤：

**1. 写一份研究范围文件。** `ops/research-scope.md` 列出要覆盖的会议和期刊、对应的 arXiv 分类，以及一条硬规则：OpenReview 上的投稿记录不等于接收，归入“会议”分类前必须核实。

**2. 建一棵“主题 × 会议”的分类树。** 同一篇论文放进一个主题分类和一个会议分类，两处是同一个 Zotero 条目，不会重复：

```text
25 Machine Learning/
├── Topics/
│   ├── Foundations
│   ├── Deep Learning
│   ├── Reinforcement Learning
│   ├── Generative Models and LLMs
│   └── Computer Vision
└── Venues/
    ├── NeurIPS
    ├── ICML
    ├── ICLR
    ├── CVPR
    ├── JMLR
    └── TMLR
```

**3. 订阅源。** arXiv 每个分类都有 RSS（`https://rss.arxiv.org/rss/<分类>`），JMLR 有 `https://jmlr.org/jmlr.xml`。但 NeurIPS、ICML、ICLR、CVPR 都**没有逐篇论文的 RSS**（ICML 所在的 PMLR 只有按卷的订阅源）。替代办法是：arXiv API 的检索结果本身就是 Atom 格式，可以直接当订阅源用：匹配作者备注里写了 “accepted” 且提到该会议的论文。

```text
https://export.arxiv.org/api/query?search_query=co:NeurIPS+AND+co:accepted&sortBy=submittedDate&sortOrder=descending&max_results=50
```

把 `NeurIPS` 换成 `ICML`、`ICLR`、`CVPR` 即可。这类订阅源里大约一半是 workshop 论文；不想要的话在查询后加 `+ANDNOT+co:workshop`。

::: warning 订阅源里的“已接收”只是作者的说法
这些订阅源匹配的是作者在 arXiv 备注里写的文字，不是官方录用名单。论文要放进会议分类之前，执行者仍需通过 OpenReview 的决定或正式出版记录核实。
:::

**4. 给检索加一个会议扫描模式。** 对没有 RSS 的会议，`paper-search` 的 `venue-scan` 模式在会议结束后按主题查询已接收论文（OpenReview 的决定、OpenAlex 与 Semantic Scholar 的出版记录），同样停在 C1。

另外，`paper-summary` 加了一条：机器学习论文按机器学习的动机、数据集和指标来写，不硬扯神经科学联系。

## 十、第一次搭建踩过的坑

这些都是第一次完整运行时真实遇到的，现在已经写进执行清单的附录里：

- **草稿永远不会上线。** 博客的 `posts/draft/` 能构建通过，但不生成页面，所以即使提交并推送了草稿，网站上也看不到。开头那篇 [[用强化学习建模 dopamine 与精神疾病：三篇 2025 年预印本速读|dopamine 综述]]最初就在草稿目录里“推送了却找不到”，挪到正式目录后才上线。
- **没有 lockfile 时 `npm ci` 会直接拒绝运行**，要用 `npm install`。而 npm 处理可选依赖的 bug 会漏装 Apple Silicon 的原生包（rolldown 的 binding、sharp 的 libvips），按报错点名的包一次性补装即可，不必删掉 `node_modules`。
- **一篇坏文章拖垮整个构建。** TiO₂ 会检查 `posts/` 下每个文件，包括没提交的；一个不在六大板块里的分类就会让整站构建失败。
- **读 Zotero 数据库要读副本。** Zotero 运行时会锁住 `zotero.sqlite`，最近的改动还在 `zotero.sqlite-wal` 里；用 `immutable` 只读模式会漏掉刚加的订阅源。第一次检查时就因此误报“CVPR 订阅源不见了”。正确做法是把两个文件复制出来读副本，绝不写入 Zotero 数据目录。
- **arXiv API 会限流。** 连续查询要间隔几秒，超时后多等一会再重试。
- **文件名里不能有斜杠。** “E/I balance” 这样的概念名不能直接当笔记文件名，要写成全称再用别名链接。
- **执行者额度会用完。** 这恰好证明了“状态全在文件里”的价值：换一个执行者说 resume 就能接着做。

## 十一、成本与局限

按这套系统用到的订阅，每月大约 60 美元：ChatGPT Plus（Codex）、Claude Pro（Claude Code）和 Google AI Pro（NotebookLM、Gemini、Antigravity、Colab）。Zotero、Obsidian、MCP 服务器和博客都是免费的。

局限也很明确：

- **AI 写的文字仍然要人看。** 最大的风险是把流畅但没人核对过的文字发出去，C3 就是为此设的；每篇文章都用 `aigcRate` 如实声明 AI 参与比例。
- **NotebookLM 没有 API。** 课程闭环里上传、提问、导出这几步只能手动。
- **工具变化很快。** 文中好几个工具在 2026 年都改过名字或接口，出问题先查它们自己的文档。
- **学术诚信。** AI 用来检索、学习、批评和写代码；想法、判断和最终文字由人负责。

## 十二、复现清单

如果想照着搭一套，按这个顺序就行：

1. 确定研究范围：写下要覆盖的会议、期刊和 arXiv 分类，以及“主题 × 会议”的分类树。
2. 装好 Zotero 10 + Better BibTeX，开本地 API，设好引用键规则和自动导出，建分类、加订阅源。
3. 建工作区文件夹，写 `AGENTS.md`（检查点、日志格式、证据规则），让 `CLAUDE.md` 导入它，把 skills 目录做成符号链接。
4. 在两个执行者里注册同样的 5 个 MCP 服务器，每个跑一次冒烟查询。
5. 写 skill：先写 `paper-search`、`paper-summary`、`blog-publish` 三个就能跑通科研闭环，其余按需添加。
6. 有课程需求的话，再接 NotebookLM → Google Drive → `gws` 这条线。
7. 把以上步骤写成一份带检查项的执行清单交给执行者，自己只做图形界面里的操作和审批。
8. 用一个窄主题、3 篇论文跑一遍完整闭环，在 C1 和 C3 各停一次，确认两个执行者能用 resume 接力。

搭完之后最大的体会是：**把流程设计成“文件 + 检查点”，比挑哪个模型更重要。** 模型会换、额度会用完，但只要每一步都落在文件里、每个不可逆操作前都有一个人点头，整个系统就能稳定地转下去。

## 参考资料

以下资料来自这套工作流的配套搭建指南（2026 年 10 月 29 日第 2 版，11 月 2 日第 3 版），按主题整理，链接于 2026 年 11 月 3 日逐个检查过。标 † 的网站拒绝了自动访问，没能自动确认，请以浏览器实际打开为准。

**NotebookLM 与 Gemini**

- [Google Workspace Updates：NotebookLM 更名为 Gemini Notebook](https://workspaceupdates.googleblog.com/2026/07/notebooklm-now-gemini-notebook.html)
- [Google Workspace Updates：NotebookLM 抽认卡与测验（2026 年 3 月）](https://workspaceupdates.googleblog.com/2026/03/new-ways-to-customize-and-interact-with-your-content-in-NotebookLM.html)
- [Google 博客：NotebookLM 支持音频和 YouTube 来源](https://blog.google/innovation-and-ai/products/notebooklm-audio-video-sources/)
- [NotebookLM 帮助：创建笔记并导出到 Docs](https://support.google.com/notebooklm/answer/16262519?hl=en)
- [Fast.io：NotebookLM 支持的文件类型](https://fast.io/resources/notebooklm-supported-file-types/)
- [Fast.io：NotebookLM 与 Google Drive 同步](https://fast.io/resources/notebooklm-google-drive-sync/)
- [Android Authority：Gemini Notebook 与 Gemini 应用同步笔记本](https://www.androidauthority.com/gemini-notebook-3688235/)
- [App State：NotebookLM 来源与手动重新同步](https://confluence.appstate.edu/x/xoBGG)
- [MakeUseOf（经 hlrnet 转载）：NotebookLM 导出变通方法](https://hlrnet.com/sites/ai/?p=16442) †
- [Chrome 应用商店：NotebookLM Exporter](https://chromewebstore.google.com/detail/gejoojiehhghphimkfaccjmnmadahblc)
- [PyPI：notebooklm-mcp-lisa（非官方，靠浏览器会话驱动，不建议使用）](https://pypi.org/project/notebooklm-mcp-lisa/)

**Antigravity、Colab 与 Google Workspace CLI**

- [Antigravity 文档：无界面模式（`agy -p`）](https://antigravity.google/docs/cli/headless)
- [GitHub：Antigravity CLI issue #76，打印模式输出问题](https://github.com/google-antigravity/antigravity-cli/issues/76)
- [Google Developers Blog：Google Colab CLI 发布](https://developers.googleblog.com/introducing-the-google-colab-cli/)
- [GitHub：googlecolab/google-colab-cli](https://github.com/googlecolab/google-colab-cli)
- [Google Developers Blog：Colab 纳入 Google AI 套餐](https://developers.googleblog.com/colab-is-now-part-of-your-google-ai-plan/)
- [heise：Google 发布 Workspace CLI](https://heise.de/-11204302)
- [DataCamp：Google Workspace CLI 教程](https://datacamp.com/tutorial/google-workspace-cli) †

**Codex 与 Claude Code**

- [ChatGPT Learn：Codex 的 AGENTS.md、skills 与 MCP](https://learn.chatgpt.com/docs/customization/overview)
- [ChatGPT Learn：Codex 配置参考](https://learn.chatgpt.com/docs/config-file/config-reference.md)
- [Reflex 文档：与 Claude Code 共享 AGENTS.md](https://reflex.dev/docs/ai/integrations/agents-md.md)
- [Adobe AI repo harness 指南：.claude/skills 符号链接](https://opensource.adobe.com/ai-repo-harness-guide/skills/harness-setup/references/inventory/)
- [Vincent Qiao：Claude Code settings.json 权限](https://blog.vincentqiao.com/en/posts/claude-code-settings-permissions/)
- [Claude 帮助中心：在 Pro 计划中使用 Claude Code](https://support.claude.com/en/articles/11145838)

**Zotero、Better BibTeX 与 MCP 服务器**

- [Zotero 文档：本地 API，含写入请求（Zotero 10+）](https://www.zotero.org/support/dev/web_api/v3/local_api)
- [Zotero 论坛：Zotero 10 发布公告](https://forums.zotero.org/discussion/133256/announcing-zotero-10)
- [Zotero 论坛：本地 API 的写入支持](https://forums.zotero.org/discussion/132977/)
- [Better BibTeX 文档：JSON-RPC](https://retorque.re/zotero-better-bibtex/exporting/json-rpc/)
- [Zotero MCP Lite：开启本地 API](https://pypi.org/project/zotero-mcp-lite/)
- [Obsidian 论坛：Zotero 引用键](https://forum.obsidian.md/t/zotero-plugin/111390/3)
- [54yyyu/zotero-mcp](https://github.com/54yyyu/zotero-mcp)
- [zotero-mcp：zotero_add_item 工具说明](https://glama.ai/mcp/servers/54yyyu/zotero-mcp/tools/zotero_add_item)
- [arxiv-mcp-server](https://glama.ai/mcp/servers/blazickjp/arxiv-mcp-server)
- [openreview-mcp](https://glama.ai/mcp/servers/OpenCodice-Research/openreview-mcp)
- [openalex-research-mcp](https://github.com/oksure/openalex-research-mcp)
- [Semantic Scholar FastMCP：推荐工具与速率限制](https://glama.ai/mcp/servers/@YUZongmin/semantic-scholar-fastmcp-mcp-server)

**发布与 DOI**

- [Rogue Scholar 文档](https://docs.rogue-scholar.org/)（指南原先引用的 DOI 注册页面已移走）

**价格与额度**

- [Zotero 存储价格](https://www.zotero.org/storage)
- [Claude Market：Claude Pro 价格](https://claudemarket.ai/blog/claude-pro)
- [Morph：ChatGPT 与 Claude 定价对比（2026）](https://www.morphllm.com/chatgpt-vs-claude) †
- [Websnp：Google AI Pro 价格](https://www.websnp.com/google-ai-pro/price-nepal)
- [GlobalGPT：新加坡 ChatGPT Plus 价格与消费税](https://www.glbgpt.com/hub/chatgpt-plus-subscription-price-in-singapore-2026-guide/)
- [Pasquale Pillitteri：Plus 的 Codex 5 小时限额](https://pasqualepillitteri.it/en/news/12697/openai-5-hour-codex-chatgpt-work-limit-plus) †

[^agent]: Codex（OpenAI）和 Claude Code（Anthropic）都是能在电脑上读写文件、运行命令的 AI 编程助手。这里把它们当作按规章干活的“执行者”，而不是聊天对象。
[^log]: 日志就是 `ops/log.md`，每行一条：时间、哪个执行者、哪个 skill、动了哪些文件、下一步做什么。规则见 [[#共享规则：AGENTS.md]]。
[^skill]: skill 是一份写给 AI 的 Markdown 操作说明书：一段描述决定什么时候用它，一串编号步骤规定怎么做。写法见 [[#Skill 的写法]]。
[^nblm]: NotebookLM 已于 2026 年 7 月更名为 Gemini Notebook，这里沿用旧名。它只根据你上传的资料回答，并标出处，适合当课程资料的“答疑老师”。
[^ag]: Antigravity 是 Google 的智能体开发环境，可以通过 Colab 命令行把代码送到 Colab 的 GPU 上运行。
[^mcp]: MCP（Model Context Protocol）是让 AI 调用外部工具和数据源的统一接口。这里用了 5 个，清单见 [[#五个 MCP 服务器]]。
[^doi]: 可选步骤：Rogue Scholar 会读取博客的 RSS，为科研文章注册 Crossref DOI，文章本身就能被引用和追踪。
[^living]: NotebookLM 对上传的 PDF 只保存一份快照，只有原生 Google 文档会随 Drive 更新重新同步，所以送回去的必须是 Google 文档，而不是文件。
[^bbt]: 开头嵌入的那篇 dopamine 综述，末尾的“参考文献”就是这样从 Zotero 生成的，每条都带 DOI 链接。
[^pitfalls]: 这次运行中遇到的其他问题，集中整理在 [[#十、第一次搭建踩过的坑]]。
[^gws]: 执行者通过 Google 的 Workspace 命令行工具 `gws` 访问 Drive。它用你自己 Google Cloud 项目里的 OAuth 客户端登录，只申请 Drive 权限；Google 标注它为 “not officially supported”。
[^idem]: 这种“做一次和做多次结果一样”的性质，工程上叫幂等（idempotent）。它是让自动化流程可以放心重试的前提。
[^zlocal]: Zotero 10 起，本地 API 支持对条目、分类和保存的搜索做 POST、PUT、PATCH、DELETE。每个应用第一次写入都要用户在弹窗里同意，选 Always Allow 后得到可重复使用的密钥。
