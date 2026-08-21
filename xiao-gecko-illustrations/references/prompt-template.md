# 单张生图提示词模板

```text
Generate one standalone 4:3 horizontal Chinese article illustration at 1080p, 1440x1080 pixels.

Visual DNA:
Pure white background. Minimalist black or dark-brown hand-drawn line art. Slightly wobbly pen lines. Lots of empty white space. Sparse red/orange/blue handwritten Chinese annotations. Clean absurd product-sketch feeling. No gradients, no shadows, no paper texture, no complex background, no commercial vector style, no PPT infographic look, no cute mascot poster, no children's illustration, no realistic UI.

Character inputs (runtime, supplied by the user; never hard-code new characters into the skill):
{characters: one or more user-provided reference images, each with name, role, visual anchors, and action_or_relation. If omitted, use the default attached gecko reference and its existing character DNA. If present, use only the supplied characters unless the user explicitly includes the default gecko. Preserve each character's identity separately; do not merge, duplicate, substitute, or invent a missing character.}

Character action rule:
{Each supplied character must have a distinct action, gaze, position, or response that contributes to the core idea. For dialogue, stage the characters in a readable relationship such as facing each other, passing an object, jointly operating one device, or one responding to the other; do not arrange them as a reference-sheet lineup.}

Theme:
{正文配图主题}

Asset mode:
{普通正文 / Hook / 过渡页·话题定义页 / 总结白板；如果是过渡页，必须绑定一个新的模块入口语义句}

Narration mode:
{按语义句子单元和信息密度规划，不机械按用户标点切分；凡不是总结/规划/流程/高密度转折的素材，或被标为低密度，默认 1 句、最多 2 句；覆盖 3 句以上或 20-30 秒口播是静态画面风险，必须拆分；只有高密度总结/规划/流程/转折素材可覆盖连续 3-6 句或更多同一语义单元，且画面要呈现句群关系；一句只对应一个素材；总结白板按实际口播覆盖，不按固定秒数拆分}

Canvas:
4:3 horizontal, 1440x1080 pixels, 1080p. Do not use 16:9 unless the user explicitly overrides this default.

Narration unit and boundary:
{语义句子单元、信息密度（低/中/高）、句子数量、预计口播秒数、静态画面风险（低/中/高）；原文转折/过渡词只是候选信号；是否因新的判断/对象/动作/结果而换素材：是/否}

Hook gate:
{是否为 Hook：是/否；Hook 句子编号；默认每句独立素材，只有用户明确要求单张且句子共同构成紧凑开场时才合并；本张 Hook 与正文分离；Hook 的张力来源：未解决问题 / 落差 / 阻力 / 临界状态 / 结果承诺；若开场包含“承诺/主题→功能输入输出→结果落差”，本张属于哪一段；与第一张正文素材的差异}

If this is a transition page / topic-definition page:
{仅在口播进入新的概念、模型、公式、例子、论证或说明模块时使用；普通“但是 / 所以 / 接下来”、停顿或转场提示本身不触发。把模块入口的完整语义句绑定到本页，后面的定义、公式解释、例子或论证句绑定下一张正文素材，同一句不得重复归属。}
{只出现一个默认小 gecko 或一个用户指定角色；角色主动指向、托住、拉开、揭示或回应标题。标题必须居中并作为视觉中心，直接取模块入口口播要呈现的问题或模块内容，保留原话，不凭空增加结论。}
{标题示例：福格模型是什么？；如果下一句立即给出公式定义，可用第二行“公式定义：B=MAP”。不要在过渡页提前解释公式，不使用左上角类型标题、总结白板、正式流程图或复杂隐喻。}

Structure type:
{Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 地图路线 / 小漫画分镜 / 过渡页}

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
黑板/白板 is the main visual and information carrier. 小 gecko faces the board, points to the writing, and actively explains it. The board must contain the actual summary content: overall judgment, process steps or input/output relation, the conclusion after the key transition, and the final takeaway or action. Prefer 6-12 readable short phrase blocks or 3-5 grouped sections, not only two or three keywords. Use grouped short phrases rather than a verbatim transcript or dense course slide. One summary asset may cover a longer contiguous semantic group of complete sentences, especially when the narration is summarizing, planning, sequencing, or turning from one condition to another. Replace it only when the board content, core relation, or cognitive action changes, never to satisfy a fixed duration or a punctuation mark.

If this is a transition page / topic-definition page:
Use one supplied character only: the default small gecko when no runtime character is supplied, otherwise the single specified character. Make the character actively point to, hold, pull open, reveal, or respond to one large centered Chinese title. The title is the exact module-entry question or topic from the narration, such as “福格模型是什么？”. If the next sentence immediately states the formula, an optional second centered line may say “公式定义：B=MAP”. Keep the page sparse and white with one or two simple supporting marks at most; do not turn it into a Hook, summary whiteboard, formal title card, PPT slide, or complex metaphor. The transition page covers only the module-entry sentence; the following body asset covers the detailed explanation, example, or argument.

Suggested elements:
{元素1} / {元素2} / {元素3} / {元素4}

Chinese handwritten labels:
{标注词1} / {标注词2} / {标注词3} / {标注词4} / {可选标注词5}

Color use:
Black or dark brown for line art and the supplied characters. Orange for the main flow/path/arrows. Red only for key warnings/problems/results. Blue only for secondary notes or system state.

Constraints:
One image explains only one core structure or one local point in a multi-asset group. Plan by semantic sentence units and information density, not by punctuation. Any shot that is not a summary, planning, process, or high-density transition shot, or that is labeled low-density, defaults to one sentence and may cover at most two short sentences with the same cognitive action; never let one low-information image cover three or more sentences or 20-30 seconds of narration. High-density summary, planning, process, or transition shots may cover 3-6 sentences or more only when the visual shows the shared relation. One sentence maps to exactly one asset, and no sentence may be split across assets. Hook assets are always separate from body assets; each Hook sentence gets its own Hook asset, and a Hook must create visible tension through an unresolved question, contrast, obstacle, threshold, or clear promise. Do not merge Hook narration with body narration or use a calm topic card as the Hook. Split only when a new judgment, object, action, result, or visual answer begins; do not split merely because a comma, colon, semicolon, or transition word appears. Summary whiteboard explanation shots make the board the main subject and may contain substantially more structured text, but must remain scannable and not become a verbatim script or dense course slide. Keep the board visually dominant and the supplied character(s) clearly pointing to or acting on it. Use at most 5-8 short handwritten Chinese labels for ordinary shots; for a summary whiteboard shot, use 6-12 short phrase blocks or 3-5 grouped sections that show the actual conclusion, relation, transition result, and final takeaway. Do not write a title in the top-left corner. Do not write the structure type on the image. Do not make it a formal diagram, course slide, dense explainer, black mascot, generic lizard, frog, dinosaur, cat, dragon, or realistic reptile unless that exact character was supplied by the user as a runtime reference. Do not copy prior examples; invent a fresh visual metaphor for this specific article.
A transition page is a standalone module-entry asset, not a Hook: use it only when a new topic, definition, example, argument, or explanation begins; ordinary transition words alone do not create one. Its single character must interact with one large centered title taken from the entry narration, while the next body asset carries the detailed content.
For a multi-asset group, the storyboard role and cognitive task of every asset must be unique. Compare neighboring assets before generation and again after generation. Two assets are duplicates if they express the same conclusion, the same input-output relationship, the same failure state, or the same solution action, even when colors, labels, or surface objects differ. A visual reskin is not a new storyboard. If any duplicate remains, merge or regenerate before delivery.
```
