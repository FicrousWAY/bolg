---
title: Research OS：用两个可互换的 AI 执行者搭一套科研与课程学习工作流
date: 2026-11-02 23:55:00
category: 杂项
tags:
  - 科研工作流
  - 课程学习
  - AI Agent
  - Zotero
  - Obsidian
  - MCP
description: 一套由 Codex 与 Claude Code 轮流执行、由我审批的科研与课程工作流：能做什么、怎么用、怎么搭，以及第一次完整搭建时踩过的坑。适用于任意研究方向，可照着复现。
aigcRate: 20
aigcModels: [claude]
---

这篇文章记录我给自己搭的一套科研与课程学习工作流，我叫它 **Research OS**。它最早是为 NeuroAI 设计的，现在已经扩展成不绑定任何研究方向的通用流程：换一份“研究范围”文件和一棵 Zotero 分类树，就能用在机器学习、计算机视觉或别的领域。

文章先讲它能做什么、日常怎么用，再讲整体怎么构建、怎么从零搭起来，最后是第一次完整搭建时踩过的坑和一份复现清单。

::: tip 一句话概括
我负责**投喂资料和审批**；Codex 或 Claude Code（任选一个）负责**检索、归档、写笔记和发布**。所有交接都落在文件里，所以两个执行者可以随时互换。
:::

## 一、它能帮我做什么

一句自然语言指令，就能触发一条或几条串起来的 skill。下面是日常最常用的几类操作：

| 我说的话（示例） | 执行者实际做的事 | 在哪里停下等我 |
|---|---|---|
| “找 3 篇最近关于某主题的论文，总结并写一篇短综述，以草稿发到博客” | 检索 → 逐篇总结 → 综述 → 生成博客文章并构建 | C1（加入 Zotero 前）、C3（提交前） |
| “找 10 篇和 @某引用键 相似的论文，归入正确的 Zotero 分类” | 相似论文推荐 → 去重 → 按分类映射提出归档方案 | C1 |
| “对 ICLR 2026 做一次关于某主题的 venue-scan” | 查询已接收论文并核实接收状态 → 主题分类 + 会议分类 | C1 |
| “把 NotebookLM 里某门课的输出整理进笔记库” | 从 Google Drive 拉取导出 → 拆成大纲、知识点、卡片、测验 | 完成后汇报 |
| “把我核实过的课程笔记送回 NotebookLM” | 生成或更新 Drive 中的“活文档” | 完成后汇报 |
| “考我某门课第 1–5 讲” | 闭卷测验、评分、记录错题 | 交互进行 |
| “为某篇有公开代码的论文做一个 T4 上的复现计划” | 写复现计划和 `RUN.md`，搭好仓库骨架 | 等我自己去跑 |
| “把我的复现结果写成笔记” | 对比论文数值与我的结果，写运行笔记 | 完成后汇报 |
| “问问 Gemini 这段讲解有没有过度简化” | 写请求文件、调用 Gemini、保存回答 | 完成后汇报 |
| “resume” | 读运行日志最后 20 行，从中断处继续 | 视情况 |

一共 13 个 skill，覆盖两个闭环：

| Skill | 作用 |
|---|---|
| `paper-search` | 按主题检索 arXiv、OpenReview、OpenAlex（含期刊），评分排序；`venue-scan` 模式专门扫没有 RSS 的会议；`cited-by` 模式每月查谁引用了我 |
| `paper-similar` | 以一篇论文或整个分类为种子，用 Semantic Scholar 推荐相似论文并提出归档方案 |
| `paper-summary` | 读 Zotero 里的 PDF 和我的高亮，写结构化文献笔记，并生成问答卡片 |
| `lit-review` | 把几篇文献笔记综合成一篇带引用的综述 |
| `paper-review` | 以审稿人视角评审我自己的稿件 |
| `repro-plan` / `repro-report` | 复现计划与复现报告 |
| `course-ingest` | 把 NotebookLM 导出归档成课程笔记 |
| `notebook-pack` | 把已核实笔记和文章网址送回 NotebookLM |
| `course-quiz` | 基于课程笔记出题、评分、记错题 |
| `blog-publish` | 把笔记写成博客文章、构建、在我批准后提交 |
| `ask-gemini` | 通过命令行向 Gemini 要第二意见 |
| `weekly-review` | 汇总一周两个闭环的进展并排下周计划 |

## 二、整体架构

![Research OS 架构：哪些由我手动操作，哪些自动进行](/images/research-os-workflow/architecture.svg "架构：橙色是我亲自操作的工具，蓝色是中枢；虚线是我手动完成的步骤")

橙色框是我亲手操作的工具：用 Zotero 保存论文，用 NotebookLM 上传课程资料并提问，用 Antigravity 在 Colab GPU 上跑实验。实线全部自动进行，由执行者、Antigravity 里的智能体或 Google Drive 同步完成。

整套系统只遵守四条设计原则：

1. **两个事实来源。** 论文只放 Zotero；我知道的一切放 Obsidian 笔记库。课程资料只放 NotebookLM 和笔记库，从不进 Zotero。
2. **一次一个执行者，哪个都行。** Codex 和 Claude Code 读同一套规则、同一套 skill、同样的 MCP 服务器和状态文件，中途可以换人。
3. **由指令驱动，设检查点。** 没有任何定时任务。凡是公开的、难以撤销的操作，执行者都先停下来等我说“yes”。
4. **文件就是通信通道。** 执行者之间、执行者和 Gemini 之间的每次交接，都是一个名字和头部格式固定的文件，而不是聊天记忆。

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

两个执行者之所以能互换，是因为它们共享五样东西：

- **同一套规则**：Codex 读 `AGENTS.md`，Claude Code 读 `CLAUDE.md`，后者只有一行 `@AGENTS.md`。
- **同一套 skill**：`.agents/skills/` 是真身，`.claude/skills` 是指向它的符号链接。
- **同一套工具**：两边注册同样的 5 个 MCP 服务器，共享 `tools/` 里的脚本。
- **同样的权限**：只能写工作区和博客仓库。
- **同一份状态**：每次运行都往 `ops/log.md` 追加一行，换执行者时说一句 “resume” 即可。

重要的结果，我会让这次没用的那个执行者来检查：两个不同厂商的模型交叉检查，比一个模型自查能发现更多问题。

## 三、两个闭环

![两个闭环在笔记库与博客交汇](/images/research-os-workflow/two-loops.svg "科研闭环（蓝）与课程闭环（绿）：在笔记库和博客交汇")

### 科研闭环

1. **发现。** `paper-search` 检索 arXiv、OpenReview 和 OpenAlex，跳过 Zotero 里已有的论文，写出排序清单。`paper-similar` 从我信任的种子论文出发扩展一个主题。我自己也会浏览 Zotero 的订阅源。
2. **收集并归类（C1）。** 我删减清单、核对每篇的建议分类，执行者再用 Zotero 本地 API 把论文直接加进对应分类，并附上开放获取的 PDF。已有的论文不会重复，只会补上缺失的分类。
3. **阅读与总结。** 我在 Zotero 里读和高亮，`paper-summary` 生成文献笔记；重要论文让另一个执行者对照 PDF 核查。
4. **综合。** `lit-review` 把几篇笔记综合成一篇综述，明确区分“论文说了什么”和“我的理解”。
5. **发布（C3）。** `blog-publish` 写成博客文章并构建，我看过预览才提交和推送。
6. **闭环。** 文章网址写回笔记；文章获得 DOI 后加入 Zotero，每月查一次施引论文，新论文再回到第 1 步。

复现是科研闭环的一个分支：`repro-plan` 为一篇有公开代码的论文写计划和 `RUN.md`，我在 Antigravity 里让它的智能体按 `RUN.md` 在 Colab 上跑（最后一步永远是 `colab stop`），`repro-report` 再把结果和论文对比写成笔记。执行者自己从不启动 GPU。

### 课程闭环

1. **投喂。** 每门课一个 NotebookLM 笔记本，我上传课件、录音、电子书和链接。
2. **提问。** 用固定的提示单让 NotebookLM 生成大纲、知识点表、问答和易混概念，每条回答开头都带一个“桥头部”（课程、讲次、类型）。
3. **导出。** 在 NotebookLM 里点 Export to Docs，回答就落进 Google Drive。
4. **归档。** `course-ingest` 用 `gws` 从 Drive 拉取，按类型拆进 `10-Courses/<课程>/` 的大纲、知识点、卡片、测验文件夹。
5. **复习。** `course-quiz` 出闭卷题、评分、记错题本。
6. **回流。** `notebook-pack` 把我核实过的笔记和已发布文章的网址写成 Drive 里的“活文档”。NotebookLM 只会对原生 Google 文档重新同步，所以送回去的必须是活文档，而不是 PDF。

NotebookLM 没有面向个人账户的公开 API，所以上传、提问、导出这几下点击由我完成；Drive 之后的一切自动进行。

两个闭环会互相促进：课程里核实过的概念会成为 `30-Concepts/` 中的一条笔记，论文笔记链接到它；某篇论文把课程主题讲得更清楚时，我把它加进课程笔记本。

## 四、日常怎么用

### 检查点

| 检查点 | 执行者何时停下 | 我要做什么 |
|---|---|---|
| C1 | 把论文加入 Zotero 之前 | 批准或删减清单，核对建议分类 |
| C2 | 从不自己把笔记标为 `verified: true` | 由我标记，或在 C3 时一并批准 |
| C3 | 博客构建通过后、`git commit` 与 `git push` 之前 | 看预览和差异，然后说 yes |
| C4 | 删除、覆盖、移动或重命名文件之前 | 批准；默认改为移到 `bridge/archive/` |

写指令时说清楚范围（主题、时间窗口、论文数量）、课程和讲次，就能减少来回确认。

### 仍然由我亲手做的事

- 保存我自己发现的论文（浏览器里的 Zotero Connector 或 Zotero 订阅源）。
- 向 NotebookLM 投喂资料、运行提示单、导出到 Docs。
- 在 Antigravity 里跑实验。
- 所有审批：C1、C3、C4，以及把笔记标为已核实。

### 一周的节奏

| 时间 | 科研 | 课程 | 用时 |
|---|---|---|---|
| 每天 | 把链接和想法丢进 `00-Inbox/` | 复习到期的卡片 | 15 分钟 |
| 周一 | `paper-search`，批准 Zotero 清单 | — | 30 分钟 |
| 周二至周四 | 读 2–3 篇，`paper-summary`，交叉检查一篇 | 每节课后上传、提问、导出、`course-ingest` | 2 小时 |
| 周五 | 复现一个小结果 | — | 1–2 小时 |
| 周日 | `weekly-review` | `course-quiz` 综合测验 | 1 小时 |
| 每两周 | 发一篇科研文章 | 发一篇课程文章 | 1 小时 |

## 五、它是怎么构建的

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

其中“每次运行追加一行日志”和“resume 读日志”这两条，是两个执行者能接力的关键：Codex 额度用完时，我在 Claude Code 里说一句 resume，它从日志里就知道做到了哪一步、哪些已经批准过。

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

把判断交给“书面映射”而不是模型的临场猜测，是我觉得最有用的一个设计：`ops/collections.md` 每行写一个分类、收什么论文、一两篇种子论文，两个执行者归档前都读它。

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

Zotero 10 的本地 API 支持写入（条目、分类），第一次写入时 Zotero 会弹窗，选 Always Allow 即可，不需要 Web API 密钥。Better BibTeX 的 JSON-RPC 接口则负责把引用键变成参考文献列表，博客文章的“参考文献”一节就是这样生成的，而不是靠模型回忆。

### 笔记的头部属性

执行者写的每条笔记都带同一组头部属性，这是笔记库能被 Dataview 查询、也能被另一个执行者接手的基础：

```yaml
---
type: paper | review | concept | lecture | quiz
citekey: wei2021Finetuned     # 仅科研笔记
course: TEST101               # 仅课程笔记
source: codex | claude-code | notebooklm | gemini
verified: false               # 只能由我改为 true
publish: false
published_url:                # blog-publish 回写
---
```

## 六、从零搭起来的流水线

![搭建流水线 A 到 I](/images/research-os-workflow/build-pipeline.svg "搭建流水线：一份 Markdown 执行清单，交给 Codex 逐节执行")

整个搭建过程我没有手动敲命令，而是写了一份 Markdown 执行清单交给 Codex：

```text
Read ~/NeuroAI-Workflow-Guide/CODEX-SETUP-TASKS.md and execute it section by section.
Before each section, tell me what you will change. Stop at every step marked (YOU)
and wait for me. Never push to the blog repo during setup. After each section,
run its checks and report pass or fail.
```

清单分 A 到 I 九节，每节都有一组**检查**，执行者必须逐项报告 PASS/FAIL 才能进下一节；标“（你）”的步骤需要我在图形界面里点，执行者会停下来等我说 done。

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

我的第一次验收就是一次真实的可互换性测试：Codex 在等我批准 C1 时额度耗尽，我在 Claude Code 里贴上它的进度，它读完日志后直接从 C1 继续，把剩下的总结、综述和博客草稿做完。

## 七、扩展到任意研究方向

最初的分类树只有 `20 NeuroAI`。扩展到通用机器学习时，我只做了四件事，换成其他方向也是同样的步骤：

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

**3. 订阅源。** arXiv 每个分类都有 RSS（`https://rss.arxiv.org/rss/<分类>`），JMLR 有 `https://jmlr.org/jmlr.xml`。但 NeurIPS、ICML、ICLR、CVPR 都**没有逐篇论文的 RSS**（ICML 所在的 PMLR 只有按卷的订阅源）。我的替代办法是 arXiv API 检索本身返回 Atom，可以直接当订阅源用：匹配作者备注里写了 “accepted” 且提到该会议的论文。

```text
https://export.arxiv.org/api/query?search_query=co:NeurIPS+AND+co:accepted&sortBy=submittedDate&sortOrder=descending&max_results=50
```

把 `NeurIPS` 换成 `ICML`、`ICLR`、`CVPR` 即可。这类订阅源里大约一半是 workshop 论文；不想要的话在查询后加 `+ANDNOT+co:workshop`。

::: warning 订阅源里的“已接收”只是作者的说法
这些订阅源匹配的是作者在 arXiv 备注里写的文字，不是官方录用名单。论文要放进会议分类之前，执行者仍需通过 OpenReview 的决定或正式出版记录核实。
:::

**4. 给检索加一个会议扫描模式。** 对没有 RSS 的会议，`paper-search` 的 `venue-scan` 模式在会议结束后按主题查询已接收论文（OpenReview 的决定、OpenAlex 与 Semantic Scholar 的出版记录），同样停在 C1。

另外，`paper-summary` 加了一条：机器学习论文按机器学习的动机、数据集和指标来写，不硬扯神经科学联系。

## 八、第一次搭建踩过的坑

这些都是第一次完整运行时真实遇到的，现在已经写进执行清单的附录里：

- **草稿永远不会上线。** 博客的 `posts/draft/` 能构建通过，但不生成页面，所以即使提交并推送了草稿，网站上也看不到。要发布，得把文件移到正式目录。
- **没有 lockfile 时 `npm ci` 会直接拒绝运行**，要用 `npm install`。而 npm 处理可选依赖的 bug 会漏装 Apple Silicon 的原生包（rolldown 的 binding、sharp 的 libvips），按报错点名的包一次性补装即可，不必删掉 `node_modules`。
- **一篇坏文章拖垮整个构建。** TiO₂ 会检查 `posts/` 下每个文件，包括没提交的；一个不在六大板块里的分类就会让整站构建失败。
- **读 Zotero 数据库要读副本。** Zotero 运行时会锁住 `zotero.sqlite`，最近的改动还在 `zotero.sqlite-wal` 里；用 `immutable` 只读模式会漏掉刚加的订阅源。我第一次检查时就因此误报“CVPR 订阅源不见了”。正确做法是把两个文件复制出来读副本，绝不写入 Zotero 数据目录。
- **arXiv API 会限流。** 连续查询要间隔几秒，超时后多等一会再重试。
- **文件名里不能有斜杠。** “E/I balance” 这样的概念名不能直接当笔记文件名，要写成全称再用别名链接。
- **执行者额度会用完。** 这恰好证明了“状态全在文件里”的价值：换一个执行者说 resume 就能接着做。

## 九、成本与局限

按我的订阅，整套系统每月大约 60 美元：ChatGPT Plus（Codex）、Claude Pro（Claude Code）和 Google AI Pro（NotebookLM、Gemini、Antigravity、Colab）。Zotero、Obsidian、MCP 服务器和博客都是免费的。

局限也很明确：

- **AI 写的文字仍然要人看。** 最大的风险是把流畅但没人核对过的文字发出去，C3 就是为此设的；每篇文章都用 `aigcRate` 如实声明 AI 参与比例。
- **NotebookLM 没有 API。** 课程闭环里上传、提问、导出这几步只能手动。
- **工具变化很快。** 文中好几个工具在 2026 年都改过名字或接口，出问题先查它们自己的文档。
- **学术诚信。** AI 用来检索、学习、批评和写代码；想法、判断和最终文字由我负责。

## 十、复现清单

如果想照着搭一套，按这个顺序就行：

1. 确定研究范围：写下要覆盖的会议、期刊和 arXiv 分类，以及“主题 × 会议”的分类树。
2. 装好 Zotero 10 + Better BibTeX，开本地 API，设好引用键规则和自动导出，建分类、加订阅源。
3. 建工作区文件夹，写 `AGENTS.md`（检查点、日志格式、证据规则），让 `CLAUDE.md` 导入它，把 skills 目录做成符号链接。
4. 在两个执行者里注册同样的 5 个 MCP 服务器，每个跑一次冒烟查询。
5. 写 skill：先写 `paper-search`、`paper-summary`、`blog-publish` 三个就能跑通科研闭环，其余按需添加。
6. 有课程需求的话，再接 NotebookLM → Google Drive → `gws` 这条线。
7. 把以上步骤写成一份带检查项的执行清单交给执行者，自己只做图形界面里的操作和审批。
8. 用一个窄主题、3 篇论文跑一遍完整闭环，在 C1 和 C3 各停一次，确认两个执行者能用 resume 接力。

我最大的体会是：**把流程设计成“文件 + 检查点”，比挑哪个模型更重要。** 模型会换、额度会用完，但只要每一步都落在文件里、每个不可逆操作前都有一个人点头，整个系统就能稳定地转下去。
