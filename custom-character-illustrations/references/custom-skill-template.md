# 自定义角色 skill 文件模板

新 skill 建议采用以下结构，保持轻量并避免复制旧角色的专有内容：

```text
custom-<character>-illustrations/
├── SKILL.md
├── agents/
│   └── openai.yaml
├── assets/
│   └── <character>-reference.png
└── references/
    ├── character-dna.md
    ├── prompt-template.md
    └── qa-checklist.md
```

## SKILL.md 必须写清楚

- 何时触发：中文正文配图、文章插图、shot list、单张生成、改图
- 角色参考资产在哪里，以及如何使用
- 16:9、纯白、手绘、留白、短标注等通用视觉规则
- 角色必须承担核心动作
- 如何从正文提炼一个认知锚点并重新发明隐喻
- 生成后检查哪些角色漂移和构图问题
- 最终图片如何保存、如何避免覆盖已有资产

## 不要写入新 skill 的内容

- 不要把完整三视图复制到 README 或最终图片
- 不要继续引用小黑或小 gecko 的具体外形
- 不要复制其他项目的 demo 构图
- 不要为了显得完整而添加不需要的脚本、安装指南或 changelog

