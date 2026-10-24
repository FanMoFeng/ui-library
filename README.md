# UI Library — 我的 UI 收藏库

以后在任何项目里想找 UI，先来这里搜，不用再翻聊天记录和收藏夹。

## 怎么找

- 看 `catalog.json`：全部条目的总目录，按分类、标签、框架检索
- 每个条目一个文件夹，结构固定不变

## 每个条目的固定结构

```
components/<分类>/<名称>/
  component.tsx   # 可直接复用的代码
  prompt.md       # 当初生成 / 改写它的提示词，换项目时照着改
  preview.html    # 独立可打开的展示页，截图从这里出
  preview.png     # 展示图
  README.md       # 用途、Props、依赖、注意事项
```

## 分类（先定这些，以后可加）

- buttons 按钮
- cards 卡片
- nav 导航
- forms 表单
- charts 图表 / 可视化
- layout 布局
- feedback 反馈（弹窗、Toast、空状态等）
- landing 落地页区块
- ai-composer AI 输入框 / 模型选择
- selectors 选择器 / 滑杆

## 技术栈

技术栈都收，不限一种。默认 / 最常用是 React + TypeScript + Tailwind CSS，和 InterBranch 同栈，复制过去改动最小。
其他栈（纯 HTML/CSS、Vue、Web Component 等）会在该条目的 README 里单独标注，`catalog.json` 里也有 framework 字段。

公开仓库：https://github.com/FanMoFeng/ui-library

## 怎么加一条

1. 在 `components/<分类>/<名称>/` 按上面结构放齐 5 个文件
2. 在 `catalog.json` 里加一条，写清分类、标签、框架
3. 在下面这个表里加一行

## 目录

见 `catalog.json`。
