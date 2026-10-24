import React from "react";

type Props = {
  title: string;
  price: string;
  features: string[];
  highlighted?: boolean;
  cta?: string;
};

/**
 * 定价卡片：落地页最常见的三栏定价之一，中间高亮。
 * 为原创实现，风格参考常见的开源 Tailwind 定价区块模式。
 */
export default function PricingCard({ title, price, features, highlighted = false, cta = "开始使用" }: Props) {
  return (
    <div
      className={[
        "rounded-3xl p-6 shadow-sm",
        highlighted
          ? "border-2 border-indigo-500 bg-indigo-50 shadow-lg"
          : "border border-slate-200 bg-white",
      ].join(" ")}
    >
      <h3 className="text-lg font-bold">{title}</h3>
      <p className="mt-3 text-3xl font-bold">{price}</p>
      <ul className="mt-4 space-y-2 text-sm text-slate-600">
        {features.map((f) => (
          <li key={f}>✓ {f}</li>
        ))}
      </ul>
      <button className="mt-6 w-full rounded-xl bg-slate-900 py-2.5 text-sm font-semibold text-white hover:bg-slate-700">
        {cta}
      </button>
    </div>
  );
}
