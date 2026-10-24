# 顶部导航 + 搜索

- 分类：nav
- 框架：React + TypeScript + Tailwind CSS
- 依赖：无额外依赖
- 参考来源：shadcn/ui、Flowbite 等开源导航模式（均为 MIT 协议），本条为原创重写
- 适用：仪表盘、文档站、学习平台

## 用法

```tsx
import TopNavSearch from "./component";

<TopNavSearch brand="UI Library" onSearch={(q) => console.log(q)} />
```
