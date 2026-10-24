# Claude Model Selector / Effort Slider

- 分类：selectors
- 技术栈：Web Component（Custom Element + Shadow DOM）+ React 封装，<b>不依赖 Tailwind</b>
- 来源：用户 2026-10-24 发来的收藏 ui2.txt，代码原样入库，见 `component.tsx` 和 `demo.tsx`；原始提示词见 `prompt.md`，原文备份见 `source.txt`
- 依赖：无额外 npm 包

## 能干什么

一个“思考强度 / Effort”滑杆选择器，点触发按钮弹出面板：

- 六档：Low / Medium / High / Extra / Max / Ultracode
- 拖动有磁吸到最近档位、松手弹簧回弹
- 滑到 Ultracode 时轨道变成紫色像素流光动画，标签变紫
- Faster → Smarter 两端标注，`?` 帮助气泡说明高强度更耗时
- 键盘：方向键 / PageUp / PageDown / Home / End 调档
- 支持 `prefers-reduced-motion`，动效会降级

## 接口

Web Component 属性：`value`（0–5 的连续值）、`open`、`disabled`

事件：`input`、`change`，`detail` 为 `{ index, level, value }`

React 封装 Props：`value?: number`、`open?: boolean`、`disabled?: boolean`、`className?: string`

## 用法

```tsx
// React，见 demo.tsx
import ClaudeModelSelector from "@/components/ui/claude-model-selector";

<ClaudeModelSelector value={0} open />
```

```html
<!-- 纯 HTML / 任意框架，不用 React 也能用 -->
<claude-model-selector value="0" open></claude-model-selector>
<script type="module">
  import "./claude-model-selector.js"; // 把 component.tsx 里 Web Component 部分抽出即可
</script>
```

## 换项目时要改的

- 档位名在文件顶部的 `LEVELS` 数组里
- 颜色在 Shadow DOM 的 CSS 变量 `--effort-accent` 等处
- 原始 demo 里引用路径是 `@/components/ui/claude-model-selector`，按自己项目路径改
