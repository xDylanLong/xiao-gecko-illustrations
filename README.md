# 小gecko 配图

> 把中文文章里的判断、流程、状态和隐喻，变成一张张白底、手绘、怪诞但清爽的正文配图。
>
> 16:9 横版 | 小 gecko IP | 纯白手绘 | 少量红橙蓝中文批注 | Codex Skill

---

## 这个仓库是什么

小gecko 配图是一个 Codex Skill，用来指导 AI Agent 为中文文章、帖子、博客、Notion 文档、产品分析、方法论和内容复盘生成正文配图。

它不是通用插画 prompt，也不是 PPT 信息图模板。它的核心目标是：先理解内容里的认知锚点，再把其中一个判断、流程、结构、状态或隐喻，变成一张有记忆点的 16:9 手绘解释图。

默认视觉 IP 是“小 gecko”：奶油白身体、浅棕斑纹、深色大圆眼、头部尖轮廓、短小四肢和长尾巴。小 gecko 不是吉祥物贴纸，而是正在认真参与系统运转的角色。

一句话：**让 AI 不只是“配一张图”，而是把文章里的一个关键认知动作画出来。**

## 适合谁用

特别适合：

- 写中文文章，需要正文配图和文章插图的人
- 做知识型内容、产品分析、AI 工作流和方法论内容的人
- 想把抽象判断画成具体隐喻的人
- 想用一种比 PPT 信息图更轻、更怪、更有个人识别度的风格做内容的人
- 用 Codex 做内容生产，希望稳定复用一套视觉语言的人

不适合：

- 想要商业插画、品牌 KV 或精致扁平插画的人
- 想要传统 PPT 信息图、复杂架构图或正式流程图的人
- 想要儿童卡通、表情包或高密度文字海报的人
- 需要严格可编辑矢量源文件的人

## 它会产出什么

默认输出：

- 16:9 横版正文配图
- 一篇文章的 4-8 张 shot list
- 每张图的主题、核心意思、结构类型、小 gecko 动作和中文标注建议
- 最终 PNG 图片，保存到 workspace 的 `assets/<article-slug>-illustrations/`

默认不输出：

- PPTX / PDF / Keynote
- SVG / HTML / Canvas 可编辑图
- 商业海报或品牌封面 KV
- 把整篇文章塞进一张图的大段文字信息图

## 视觉风格

- 纯白背景，不要纸纹、米色、阴影、渐变或噪点
- 黑色/深棕色手绘线稿，细线，轻微抖动
- 大量留白，主体约占画面 40%-60%
- 少量红色、橙色、蓝色中文手写批注
- 一张图只表达一个核心动作、结构、状态或隐喻
- 小 gecko 必须参与核心动作，不能只是站在角落里
- 怪诞、有创意、清爽，但不幼稚、不做成普通动物插画

## 示例效果

### 内容入口实验

把封面点击率、前 2 秒留存、可复制结构和制作时间画成同一个“内容入口”的四个短标记。

![内容入口实验](examples/images/01-content-entrance-experiment.png)

### 从功能堆到用户结果

小 gecko 用锯子削掉多余功能，再把一条清晰的用户路径搭出来。

![从功能堆到用户结果](examples/images/02-product-feature-pile.png)

### 发布到反馈回流

小 gecko 摇动反馈井，让发布后的反馈回到下一条内容里。

![发布到反馈回流](examples/images/03-content-feedback-loop.png)

这些图片是 demo 和风格校准样例，不是构图模板。使用时应该从当前内容重新发明隐喻，不要照抄示例中的物件和布局。

## 安装

克隆仓库：

```bash
git clone https://github.com/xDylanLong/xiao-gecko-illustrations.git
cd xiao-gecko-illustrations
```

复制 skill 到 Codex skills 目录：

```bash
mkdir -p "${CODEX_HOME:-$HOME/.codex}/skills"
cp -R ./xiao-gecko-illustrations "${CODEX_HOME:-$HOME/.codex}/skills/"
```

Windows PowerShell：

```powershell
$skillRoot = if ($env:CODEX_HOME) { Join-Path $env:CODEX_HOME "skills" } else { Join-Path $HOME ".codex/skills" }
New-Item -ItemType Directory -Force -Path $skillRoot | Out-Null
Copy-Item -Recurse -Force .\xiao-gecko-illustrations (Join-Path $skillRoot "xiao-gecko-illustrations")
```

安装后，在 Codex 里使用：

```text
Use $xiao-gecko-illustrations 为这篇中文文章设计并生成 5 张小 gecko 正文配图。
```

## 怎么用

### 只做配图规划

```text
Use $xiao-gecko-illustrations 先不要生图。
请分析下面这篇文章哪里值得配图，输出 5 张左右的 shot list。
每张图写清楚：放在哪段后、主题、核心意思、结构类型、小 gecko 在做什么、建议中文标注词。

<粘贴文章>
```

### 直接生成正文配图

```text
Use $xiao-gecko-illustrations 把下面这篇文章生成 4 张小 gecko 正文配图。
要求：16:9 横版、纯白背景、黑色手绘线稿、少量红橙蓝中文手写批注。

<粘贴文章>
```

### 为单个概念生成一张图

```text
Use $xiao-gecko-illustrations 为“产品不是功能堆，而是让用户更快到达一个结果”生成一张正文配图。
画面要怪诞但清爽，小 gecko 必须承担核心动作。
```

### 编辑已有图片

```text
Use $xiao-gecko-illustrations 帮我编辑这张图，去掉左上角的标题，保留小 gecko、构图和其他文字不变。
```

更多可复用 prompts 见 [examples/prompts.md](examples/prompts.md)。

## 工作流程

这个 skill 的流程是：

1. 读取文章、Markdown、Notion 内容、截图或用户给的主题
2. 提炼核心观点、认知转折、流程结构和适合视觉化的段落
3. 先输出 shot list：每张图只选一个认知锚点
4. 为每张图选择一种结构：Workflow、系统局部、前后对比、角色状态、概念隐喻、方法分层、地图路线或小漫画分镜
5. 重新发明一个低科技、怪诞但成立的物理隐喻
6. 让小 gecko 承担核心动作，并参考仓库内的三视图角色资产
7. 每张图单独调用图像模型生成
8. 按 QA checklist 检查：白底、留白、角色动作、中文标注、非 PPT 感、非旧案例复刻
9. 保存最终 PNG，并报告用途和路径

## 目录结构

```text
.
├── README.md
├── LICENSE
├── NOTICE.md
├── examples/
│   ├── images/
│   │   ├── 01-content-entrance-experiment.png
│   │   ├── 02-product-feature-pile.png
│   │   └── 03-content-feedback-loop.png
│   └── prompts.md
└── xiao-gecko-illustrations/
    ├── SKILL.md
    ├── agents/
    │   └── openai.yaml
    ├── assets/
    │   └── gecko-reference.png
    └── references/
        ├── composition-patterns.md
        ├── gecko-ip.md
        ├── prompt-template.md
        ├── qa-checklist.md
        └── style-dna.md
```

真正需要安装到 Codex 的是子目录：

```text
xiao-gecko-illustrations/
```

根目录的 README、License、Notice 和 examples 是 GitHub 分享文档。

## 注意事项

- 图片里的中文文字越短越稳定。
- 每张图只讲一个核心结构，不要把文章做成说明书。
- 小 gecko 必须承担核心动作；如果去掉它画面仍然完全成立，说明角色太装饰了。
- 示例图只用于校准线条密度、留白、颜色克制和角色参与方式，不要复刻构图。
- AI 图像模型可能出现错字、幻觉标签、风格漂移或多余标题，生成后需要检查。
- 如果中文错字严重，优先减少标注词并重生成。
- 每张图的实际图像生成额度取决于所使用的 Codex / 图像模型环境；本 skill 不承诺固定点数或金额。

## License

本项目采用 [MIT License](LICENSE)。

角色参考图和 demo 素材的来源、致谢与再分发说明见 [NOTICE.md](NOTICE.md)。

