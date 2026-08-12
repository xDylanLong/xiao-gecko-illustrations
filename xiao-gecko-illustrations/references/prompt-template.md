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

Narration mode:
{按完整口播句切分；一句只对应一个素材；连续一至两句同一认知动作可共用一张素材；总结白板按实际口播覆盖，不按固定秒数拆分}

Canvas:
4:3 horizontal, 1440x1080 pixels, 1080p. Do not use 16:9 unless the user explicitly overrides this default.

Narration unit and boundary:
{完整口播句子 / 连续两句；转折或过渡词：……；是否在完整句子边界换素材：是/否}

Structure type:
{Workflow / 系统局部 / 前后对比 / 角色状态 / 概念隐喻 / 方法分层 / 地图路线 / 小漫画分镜}

Core idea:
{这张图要表达的核心意思}

Composition:
{具体画面：每个角色在哪里、正在做什么、彼此如何互动、主要物件是什么、信息如何流动}

If this is a high-information multi-asset shot group:
Split only at complete spoken-sentence boundaries. One spoken sentence must never be split across multiple assets. A single asset may cover one complete sentence or two consecutive sentences that express the same cognitive action. State the actual display duration for editing, but do not use a fixed seconds-per-asset rule. Every narration sentence must map to one asset; no orphan narration and no unrelated asset.

If this is a summary whiteboard explanation shot:
黑板/白板 is the main visual and information carrier. 小 gecko faces the board, points to the writing, and actively explains it. The board must contain the actual summary content: overall judgment, process steps or input/output relation, the conclusion after the key transition, and the final takeaway or action. Prefer 6-12 readable short phrase blocks or 3-5 grouped sections, not only two or three keywords. Use grouped short phrases rather than a verbatim transcript or dense course slide. One summary asset may cover consecutive complete sentences; replace it only when the board content or cognitive action changes, never to satisfy a fixed duration.

Suggested elements:
{元素1} / {元素2} / {元素3} / {元素4}

Chinese handwritten labels:
{标注词1} / {标注词2} / {标注词3} / {标注词4} / {可选标注词5}

Color use:
Black or dark brown for line art and the supplied characters. Orange for the main flow/path/arrows. Red only for key warnings/problems/results. Blue only for secondary notes or system state.

Constraints:
One image explains only one core structure or one local point in a multi-asset group. Ordinary narration shots are bounded by complete spoken sentences, not fixed seconds; one sentence maps to one asset, and two consecutive same-action sentences may share one asset. Split at a complete-sentence boundary when a transition or conclusion word introduces a new judgment, step, or result. Every sentence must have exactly one asset mapping. Summary whiteboard explanation shots make the board the main subject and may contain substantially more structured text, but must remain scannable and not become a verbatim script or dense course slide. Keep the board visually dominant and the supplied character(s) clearly pointing to or acting on it. Use at most 5-8 short handwritten Chinese labels for ordinary shots; for a summary whiteboard shot, use 6-12 short phrase blocks or 3-5 grouped sections that show the actual conclusion, relation, transition result, and final takeaway. Do not write a title in the top-left corner. Do not write the structure type on the image. Do not make it a formal diagram, course slide, dense explainer, black mascot, generic lizard, frog, dinosaur, cat, dragon, or realistic reptile unless that exact character was supplied by the user as a runtime reference. Do not copy prior examples; invent a fresh visual metaphor for this specific article.
```
