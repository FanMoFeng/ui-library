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

## shadcn 用法（改造后）

这个仓现在也是一个 shadcn GitHub Registry：根目录有 `registry.json`，`components/ui/` 是 shadcn 默认的组件安装目录，`lib/utils.ts` 是标准的 `cn()` 工具。

在已经用 `shadcn init` 初始化过的项目里（React + Tailwind，别名 `components` → `@/components`、`utils` → `@/lib/utils`、`ui` → `@/components/ui`），按下面这样装，代码会直接落到你项目里、归你所有，不是 npm 依赖：

```bash
# 装一个，例如玻璃按钮
pnpm dlx shadcn@latest add FanMoFeng/ui-library/glass-button

# 看这个仓里都有什么
pnpm dlx shadcn@latest list FanMoFeng/ui-library

# 校验 registry（推上去之后跑）
pnpm dlx shadcn@latest registry validate FanMoFeng/ui-library
```

`registry.json` 里目前有 7 项：上面 6 个 UI 组件 + `utils`（cn 工具）。
Claude Model Selector 虽然是 Web Component，但它的 React 封装也是 `.tsx`，所以同样走 `registry:ui` 安装，安装后按它 README 里的用法用即可。

注意：`components/<分类>/<名称>/` 仍是收藏的源头（代码 + 提示词 + 展示说明都在那），`components/ui/` 是给 shadcn 安装用的同名副本，两边内容必须保持一致，不要只改一边。

## 怎么加一条

1. 在 `components/<分类>/<名称>/` 按上面结构放齐文件
2. 把 `component.tsx` 以不重名的文件名复制到 `components/ui/`（例如 `glass-button.tsx`，不要都叫 `component.tsx`，否则安装时会撞名）
3. 在根目录 `registry.json` 里加一项，`files[].path` 指向 `components/ui/` 里那个文件
4. 在 `catalog.json` 里加一条，写清分类、标签、框架

## 目录

见 `catalog.json`。
