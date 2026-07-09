import Link from "next/link";
import React from "react";

interface ButtonProps {
  href?: string;
  onClick?: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
  className?: string;
}

export default function Button({
  href,
  onClick,
  children,
  variant = "primary",
  size = "md",
  fullWidth = false,
  className = "",
}: ButtonProps) {
  const variants = {
    primary:
      "bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-lg hover:shadow-blue-500/30",
    secondary:
      "bg-gradient-to-r from-slate-700 to-slate-600 text-white hover:shadow-lg hover:shadow-slate-500/30",
    outline:
      "border-2 border-blue-600 text-blue-600 hover:bg-blue-50",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClass = `rounded-full font-semibold transition-all duration-300 inline-flex items-center justify-center ${
    fullWidth ? "w-full" : ""
  }`;

  const buttonClass = `${baseClass} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={buttonClass}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={buttonClass}>
      {children}
    </button>
  );
}
