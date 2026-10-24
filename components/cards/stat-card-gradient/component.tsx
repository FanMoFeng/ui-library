import React from "react";

type Props = {
  label: string;
  value: string;
  delta: string;
  deltaUp?: boolean;
};

/** 渐变数据卡片：仪表盘 / 学习数据概览用，数字要大、趋势要一眼看清。 */
export default function StatCardGradient({ label, value, delta, deltaUp = true }: Props) {
  return (
    <div className="rounded-3xl bg-gradient-to-br from-slate-900 to-slate-800 p-5 text-white shadow-xl">
      <p className="text-sm text-white/60">{label}</p>
      <p className="mt-2 text-3xl font-bold tracking-tight">{value}</p>
      <p className={`mt-3 text-sm font-medium ${deltaUp ? "text-emerald-400" : "text-rose-400"}`}>
        {deltaUp ? "▲" : "▼"} {delta}
      </p>
    </div>
  );
}
