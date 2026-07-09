interface BadgeProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary" | "success" | "warning";
  className?: string;
}

export default function Badge({
  children,
  variant = "primary",
  className = "",
}: BadgeProps) {
  const variants = {
    primary:
      "bg-blue-100 text-blue-700 border border-blue-200",
    secondary:
      "bg-slate-100 text-slate-700 border border-slate-200",
    success:
      "bg-emerald-100 text-emerald-700 border border-emerald-200",
    warning:
      "bg-amber-100 text-amber-700 border border-amber-200",
  };

  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wider ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
