import React from "react";

type Props = {
  children: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "ghost";
};

/** 玻璃拟态主按钮：深色背景上效果最好，hover 有轻微上浮和光泽。 */
export default function GlassButton({ children, onClick, variant = "primary" }: Props) {
  return (
    <button
      onClick={onClick}
      className={[
        "rounded-2xl px-6 py-3 text-sm font-semibold transition-all duration-200",
        "backdrop-blur-md border border-white/30 shadow-lg shadow-black/20",
        "hover:-translate-y-0.5 hover:shadow-xl active:translate-y-0",
        variant === "primary"
          ? "bg-gradient-to-r from-indigo-500/80 to-purple-500/80 text-white"
          : "bg-white/10 text-white hover:bg-white/20",
      ].join(" ")}
    >
      {children}
    </button>
  );
}
