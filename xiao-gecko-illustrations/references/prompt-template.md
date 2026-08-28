# 单张生图提示词模板

```text
Generate one standalone 4:3 horizontal Chinese article illustration at 1080p, 1440x1080 pixels.

Visual DNA:
Pure white background. Minimalist black or dark-brown hand-drawn line art. Slightly wobbly pen lines. Lots of empty white space. Sparse red/orange/blue handwritten Chinese annotations. Clean absurd product-sketch feeling. No gradients, no shadows, no paper texture, no complex background, no commercial vector style, no PPT infographic look, no cute mascot poster, no children's illustration, no realistic UI.

Character inputs (runtime, supplied by the user; never hard-code new characters into the skill):
{characters: one or more user-provided reference images, each with name, role, visual anchors, and action_or_relation. If the confirmed asset needs a character, this field is required; if it is omitted, stop before image generation and request the missing reference. If the confirmed plan says “形象：无需形象”, use no character and do not ask for one. Use only the supplied characters unless the user explicitly includes a named reference; never substitute a default gecko or invent a missing character. Preserve each character's identity separately; do not merge or duplicate them.}

Character action rule:
{Each supplied character must have a distinct action, gaze, position, or response that contributes to the core idea. For dialogue, stage the characters in a readable relationship such as facing each other, passing an object, jointly operating one device, or one responding to the other; do not arrange them as a reference-sheet lineup.}

Theme:
{正文配图主题}

Asset mode:
{Hook / 情绪铺垫 / 问题冲突 / 概念定义 / 机制解释 / 转折阻断 / 高潮结果 / 普通过渡 / 总结白板；必须与确认方案中的“素材类型”完全一致}

Asset ID and filename:
{连续的 1-based 两位数素材编号，例如 01、02、03；本张最终交付文件名必须是 `{asset_id}-{中文主题}.png`。禁止使用 00、跳号、重复编号或 `exec-UUID.png` 作为交付名。}

Narration mode:
{按语义句子单元和信息密度规划，不机械按用户标点切分；凡不是总结/规划/流程/高密度转折的素材，或被标为低密度，默认 1 句、最多 2 句；覆盖 3 句以上或 20-30 秒口播是静态画面风险，必须拆分；只有高密度总结/规划/流程/转折素材可覆盖连续 3-6 句或更多同一语义单元，且画面要呈现句群关系；一句只对应一个素材；总结白板按实际口播覆盖，不按固定秒数拆分}

Canvas:
4:3 horizontal, 1440x1080 pixels, 1080p. Do not use 16:9 unless the user explicitly overrides this default.

Narration unit and boundary:
{语义句子单元、信息密度（低/中/高）、句子数量、预计口播秒数、静态画面风险（低/中/高）；原文转折/过渡词只是候选信号；是否因新的判断/对象/动作/结果而换素材：是/否}

Narration information and transition:
{口播需要补足的信息；图片需要承载的信息；情绪功能；上一张到本张的逻辑；本张到下一张的逻辑；适配口播句；确认方案中的形象字段}

Hook gate:
{是否为 Hook：是/否；Hook 句子编号；默认每句独立素材，只有用户明确要求单张且句子共同构成紧凑开场时才合并；本张 Hook 与正文分离；Hook 的张力来源：未解决问题 / 落差 / 阻力 / 临界状态 / 结果承诺；若开场包含“承诺/主题→功能输入输出→结果落差”，本张属于哪一段；与第一张正文素材的差异}

If this is a transition page / topic-definition page:
{仅在口播进入新的概念、模型、公式、例子、论证或说明模块时使用；普通“但是 / 所以 / 接下来”、停顿或转场提示本身不触发。把模块入口的完整语义句绑定到本页，后面的定义、公式解释、例子或论证句绑定下一张正文素材，同一句不得重复归属。}
{素材需要角色时只出现一个已确认的用户角色；素材无需形象时不出现角色且不询问用户。角色（如有）主动指向、托住、拉开、揭示或回应标题。标题必须居中并作为视觉中心，直接取模块入口口播要呈现的问题或模块内容，保留原话，不凭空增加结论。}
{标题示例：福格模型是什么？；如果下一句立即给出公式定义，可用第二行“公式定义：B=MAP”。不要在过渡页提前解释公式，不使用左上角类型标题、总结白板、正式流程图或复杂隐喻。}

If this is a concept-definition asset:
{居中大标题为“X 是什么？”或“X 模型是什么？”。下方承载 2-4 组短句，解释定义、组成、彼此关系或熟悉落点；如果有多个用户角色，让每个角色共同参与定义关系；如果确认方案写“无需形象”，不要额外加入角色。}

Structure type:
{Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 问题树 / 因果链 / 决策树 / 2×2 矩阵 / 思维框架 / 系统关系图 / 地图路线 / 时间线 / 小漫画分镜 / 示意图表 / 过渡页}

If this is a schematic chart / data-relation asset:
Chart intent: {趋势 / 对比 / 排名 / 比例 / 分布 / 流向；只选一个}
Accuracy mode: 示意关系，不要求精确数值；保留口播支持的方向、排序和大致差距；没有来源的数字不写成可核对的精确值。
Chart reading path: {观众第一眼应该看懂的唯一关系}
Labels: {最多 3-5 个短标签；必要时使用“少 / 多 / 上升 / 下滑 / 示意关系”}
Visual treatment: {手绘曲线 / 对比柱 / 比例块 / 排名台阶 / 稀疏点群 / 漏斗 / 管道；只选一种}
Character action: {小睫毛如何拉动、称量、搬运、指向、拨开或阻挡这组关系}
Avoid: dense axes, gridlines, detached legends, dashboard panels, fake precision, formal PPT chart, or a chart that becomes background decoration.

如果用户点名图表类型，或要求更多数据，改用“示意数据图表”字段：

```text
素材类型：示意数据图表
Chart type：饼图 / 环形图 / 折线图 / 柱状图 / 堆叠柱 / 分组柱 / 散点图 / 漏斗图
Data structure：类别、时间点或阶段，以及一组内部一致的示意数据
Data fidelity：示意数据，不代表真实统计；保留口播需要的方向、排序和主要差距
Visual grammar：坐标轴、刻度、图例、数据标签、扇区比例、点线连接或堆叠层级
Chart reading path：观众先看哪里，再比较什么，最后得到什么结论
Labels：标题、类别、数值、单位、图例和“示意数据”标识
Type label：顶部居中或白板标题区明确写出“饼图｜示意数据 / 折线图｜示意数据 / 柱状图｜示意数据”等标准图表名称；不放左上角，不替代主题标题
Character action：小睫毛指向、测量、圈出或解释关键数据，不遮挡图表主体
Avoid：抽象色块、缺少图表骨架、精确统计口吻、密集仪表盘、PPT模板
```

如果这是思维模型、问题拆解或框架解释素材，读取 `references/model-library.md`，并补充：

```text
素材类型：思维模型 / 问题拆解 / 决策框架 / 因果解释 / 方法框架
Model：模型名称；若用户未指定，写选用的模型和选择理由
Model fidelity：标准结构 / 内容适配结构 / 示意框架
Core task：拆问题 / 找根因 / 解释因果 / 做选择 / 排优先级 / 解释组成 / 说明循环 / 复盘改进
Nodes and relations：节点、分支、层级、方向、轴或循环关系；默认 3-6 个核心节点
Reading path：观众先看什么，再沿什么关系读到什么结论
Visual grammar：问题树 / 岔路门 / 因果链 / 回路 / 2×2 象限 / 阶梯 / 抽屉 / 系统连线 / 时间线
Character action：小睫毛如何挖、连、开、搬、搭、修或指向结构
Labels：模型名、节点短句、关键结论；不要把逐字稿缩进框里
Type label：顶部居中或白板标题区明确写出“问题树｜示意框架 / PDCA｜示意框架 / 2×2 矩阵｜示意框架”等标准模型名称；模型名称与主题标题分开，不放左上角
Avoid：装饰性思维导图、节点过多、未经支持的结论、标准PPT、复杂架构图
```

Core idea:
{这张图要表达的核心意思}

Storyboard uniqueness gate:
Unique storyboard role: {例如：现象/数据落差、动机/真实场景、能力/门槛阻力、提示/动作与时机、总结/对应动作；每张素材只能选一个}
Unique cognitive task: {读者看完这张图新增理解什么}
Neighbor contrast: {与前后素材相比，改变了什么认知任务、主要物件、角色核心动作和空间关系}
Do not repeat: {本张禁止复用的主要物件、输入—输出关系、失败状态、解决动作或构图}

Composition:
{具体画面：每个角色在哪里、正在做什么、彼此如何互动、主要物件是什么、信息如何流动}

If this is a high-information multi-asset shot group:
Plan by semantic sentence units, not by the user's punctuation. One spoken sentence must never be split across multiple assets. Any shot that is not a summary, planning, process, or high-density transition shot, or that is labeled low-density, defaults to one sentence and may cover at most two short consecutive sentences with the same cognitive action; if a proposed grouping exceeds two sentences or spans 20-30 seconds, treat it as a static-frame risk and split it. Only a high-density summary, planning, process, or transition asset may cover a longer contiguous group, typically 3-6 sentences or more when the visual actually shows their shared relation. Every narration sentence must map to exactly one asset; record the information density, sentence count, estimated narration duration, static-frame risk, and grouping reason in the coverage table. State the actual display duration for editing, but do not use a fixed seconds-per-asset rule.
For a transition page, record the module-entry sentence and its exact centered title, then assign the following explanation sentence(s) to the body asset instead of duplicating the entry sentence.

If this is a summary whiteboard explanation shot:
黑板/白板 is the main visual and information carrier. When the confirmed asset needs a character, the supplied user character faces the board, points to the writing, and actively explains it; when the asset says “形象：无需形象”, use no character. The board must contain the actual summary content: overall judgment, process steps or input/output relation, the conclusion after the key transition, and the final takeaway or action. Prefer 6-12 readable short phrase blocks or 3-5 grouped sections, not only two or three keywords. Use grouped short phrases rather than a verbatim transcript or dense course slide. One summary asset may cover a longer contiguous semantic group of complete sentences, especially when the narration is summarizing, planning, sequencing, or turning from one condition to another. Replace it only when the board content, core relation, or cognitive action changes, never to satisfy a fixed duration or a punctuation mark.

If this is a transition page / topic-definition page:
Use one supplied character only when the confirmed asset needs a character; if the required runtime character is missing, stop and request it. If the confirmed plan says “形象：无需形象”, use no character and do not ask for one. Make the supplied character, when present, actively point to, hold, pull open, reveal, or respond to one large centered Chinese title. The title is the exact module-entry question or topic from the narration, such as “福格模型是什么？”. If the next sentence immediately states the formula, an optional second centered line may say “公式定义：B=MAP”. Keep the page sparse and white with one or two simple supporting marks at most; do not turn it into a Hook, summary whiteboard, formal title card, PPT slide, or complex metaphor. The transition page covers only the module-entry sentence; the following body asset covers the detailed explanation, example, or argument.

Suggested elements:
{元素1} / {元素2} / {元素3} / {元素4}

Chinese handwritten labels:
{标注词1} / {标注词2} / {标注词3} / {标注词4} / {可选标注词5}

Color use:
Black or dark brown for line art and the supplied characters. Orange for the main flow/path/arrows. Red only for key warnings/problems/results. Blue only for secondary notes or system state.

Constraints:
One image explains only one core structure or one local point in a multi-asset group. Plan by semantic sentence units and information density, not by punctuation. Any shot that is not a summary, planning, process, or high-density transition shot, or that is labeled low-density, defaults to one sentence and may cover at most two short sentences with the same cognitive action; never let one low-information image cover three or more sentences or 20-30 seconds of narration. High-density summary, planning, process, or transition shots may cover 3-6 sentences or more only when the visual shows the shared relation. One sentence maps to exactly one asset, and no sentence may be split across assets. Hook assets are always separate from body assets; each Hook sentence gets its own Hook asset, and a Hook must create visible tension through an unresolved question, contrast, obstacle, threshold, or clear promise. Do not merge Hook narration with body narration or use a calm topic card as the Hook. Split only when a new judgment, object, action, result, or visual answer begins; do not split merely because a comma, colon, semicolon, or transition word appears. Summary whiteboard explanation shots make the board the main subject and may contain substantially more structured text, but must remain scannable and not become a verbatim script or dense course slide. Keep the board visually dominant and the supplied character(s) clearly pointing to or acting on it. Use at most 5-8 short handwritten Chinese labels for ordinary shots; for a summary whiteboard shot, use 6-12 short phrase blocks or 3-5 grouped sections that show the actual conclusion, relation, transition result, and final takeaway. Do not write a title in the top-left corner. Do not write the structure type on the image. Do not make it a formal diagram, course slide, dense explainer, black mascot, generic lizard, frog, dinosaur, cat, dragon, or realistic reptile unless that exact character was supplied by the user as a runtime reference. Do not copy prior examples; invent a fresh visual metaphor for this specific article.
For a schematic chart asset, make the relationship readable before any label is read. Approximate visual scale is allowed, but the direction, ordering, and major contrast must agree with the narration. Omit exact values when they are not needed; never invent precise numbers, ticks, units, or a statistical-looking legend merely to make the image look complete. Keep the chart inside the hand-drawn scene and make the supplied character act on the relationship.
A transition page is a standalone module-entry asset, not a Hook: use it only when a new topic, definition, example, argument, or explanation begins; ordinary transition words alone do not create one. Its single character must interact with one large centered title taken from the entry narration, while the next body asset carries the detailed content.
For a multi-asset group, the storyboard role and cognitive task of every asset must be unique. Compare neighboring assets before generation and again after generation. Two assets are duplicates if they express the same conclusion, the same input-output relationship, the same failure state, or the same solution action, even when colors, labels, or surface objects differ. A visual reskin is not a new storyboard. If any duplicate remains, merge or regenerate before delivery.
```
