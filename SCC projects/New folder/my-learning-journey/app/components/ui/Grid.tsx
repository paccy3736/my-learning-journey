import React from "react";

interface GridProps {
  children: React.ReactNode;
  cols?: number;
  className?: string;
}

export default function Grid({ children, cols = 3, className = "" }: GridProps) {
  const colsClass = {
    1: "grid-cols-1",
    2: "md:grid-cols-2",
    3: "md:grid-cols-2 lg:grid-cols-3",
    4: "md:grid-cols-2 lg:grid-cols-4",
  }[cols];

  return (
    <div className={`grid gap-6 ${colsClass} ${className}`}>
      {children}
    </div>
  );
}
