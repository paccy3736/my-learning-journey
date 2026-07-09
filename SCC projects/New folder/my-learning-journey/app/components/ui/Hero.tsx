import React from "react";
import Badge from "./Badge";

interface HeroProps {
  badge?: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
}

export default function Hero({ badge, title, subtitle, children }: HeroProps) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-50 to-blue-50 p-8 shadow-sm sm:p-12 lg:p-16">
      {/* Decorative background elements */}
      <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-blue-400 opacity-10 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-cyan-400 opacity-10 blur-3xl" />

      <div className="relative z-10">
        {badge && <Badge variant="primary">{badge}</Badge>}
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
          {subtitle}
        </p>
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  );
}
