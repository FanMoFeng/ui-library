import React, { useState } from "react";

type Props = {
  brand: string;
  links?: string[];
  onSearch?: (query: string) => void;
};

/**
 * 顶部导航 + 搜索：灵感来源为 shadcn/ui、Flowbite 等开源导航模式（MIT），
 * 本文件为原创重写，非原库代码复制。适合仪表盘、文档站、学习平台首屏。
 */
export default function TopNavSearch({ brand, links = ["首页", "组件", "文档"], onSearch }: Props) {
  const [query, setQuery] = useState("");
  return (
    <header className="flex items-center justify-between gap-4 rounded-2xl border border-slate-200 bg-white px-5 py-3 shadow-sm">
      <span className="text-base font-bold tracking-tight">{brand}</span>
      <nav className="hidden gap-5 text-sm text-slate-600 md:flex">
        {links.map((link) => (
          <a key={link} href="#" className="hover:text-slate-900">
            {link}
          </a>
        ))}
      </nav>
      <input
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          onSearch?.(e.target.value);
        }}
        placeholder="搜索组件…"
        className="w-44 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2 text-sm outline-none focus:border-indigo-400 focus:bg-white md:w-64"
      />
    </header>
  );
}
