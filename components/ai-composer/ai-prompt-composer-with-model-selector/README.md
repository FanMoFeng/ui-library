# AI Prompt Composer with Model Selector

- 分类：ai-composer
- 框架：React + TypeScript + Tailwind CSS，shadcn 项目结构，`'use client'`
- 来源：用户 2026-10-24 发来的收藏 ui1.txt，代码原样入库，见 `component.tsx`；原始提示词见 `prompt.md`，原文备份见 `source.txt`
- 依赖：仅 React，无额外 npm 包（样式用 Tailwind 类 + 组件内自定义 CSS 变量）

## 能干什么

一个 AI 对话输入框 + 模型选择器，带：

- Plan / Ask / Build 三种模式切换，当前模式固定在菜单底部带对勾
- 模型选择：Kimi K3、GPT-5.6 Terra / Sol、Sonnet 5、Opus 4.8、Fable 5，可收藏、搜索、按 fav / all 过滤
- Effort：Low / Medium / High / Max，悬停模型行时弹出子菜单改
- Auto 路由开关，打开后自动收起菜单
- 输入 `@` 弹出上下文：`@codebase`、`@docs`、`@terminal`
- + Add files（多文件上传，显示文件名 chip）、录音按钮（演示占位）
- 深色 / 浅色主题，主题和收藏用 localStorage 保存
- 升级横幅、提交后 Toast、一段自动演示导览（walkthrough）

## Props

```tsx
type AIComposerProps = {
  initialTheme?: 'dark' | 'light';
  showUpgradeBanner?: boolean;      // 默认 true
  showWalkthroughControl?: boolean; // 默认 true
  onSubmit?: (submission: AIComposerSubmission) => void;
};

type AIComposerSubmission = {
  prompt: string;
  mode: 'Plan' | 'Ask' | 'Build';
  modelId: string;
  modelName: string;
  effort: 'Low' | 'Medium' | 'High' | 'Max';
  autoMode: boolean;
  attachedFiles: string[];
  files: File[];
};
```

## 用法

按原始提示词，放进 shadcn 项目的 `components/ui/`：

```tsx
import AIComposer from "@/components/ui/ai-prompt-composer-with-model-selector";

<AIComposer
  initialTheme="dark"
  onSubmit={(s) => {
    // 接自己的 AI 后端，s 里有 prompt、mode、modelId、effort、files
    console.log(s);
  }}
/>
```

不传 `onSubmit` 时只是 UI 演示，提交后会弹 Toast 说明未接后端。

## 换项目时要改的

- `INITIAL_MODELS`：把示例模型名换成自己真实可用的模型
- 录音：目前停止录音且输入为空时会填一句演示文本，正式用要接真实语音转文字
- 模型 Effort 默认值、收藏初始值都在 `INITIAL_MODELS` 里
