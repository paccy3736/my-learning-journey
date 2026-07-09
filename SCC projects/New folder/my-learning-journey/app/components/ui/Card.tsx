import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: "default" | "primary" | "secondary" | "dark";
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  variant = "default",
  hover = false,
}: CardProps) {
  const variants = {
    default:
      "rounded-xl border border-slate-200 bg-white shadow-sm",
    primary:
      "rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-100",
    secondary:
      "rounded-xl bg-gradient-to-br from-slate-900 to-slate-800 text-white border border-slate-700",
    dark: "rounded-xl bg-slate-900 text-white border border-slate-700",
  };

  const hoverClass = hover
    ? "transition-all duration-300 hover:shadow-lg hover:scale-105"
    : "";

  return (
    <div className={`${variants[variant]} p-6 sm:p-8 ${hoverClass} ${className}`}>
      {children}
    </div>
  );
}
