import React from "react";

const COLORS = [
  "bg-violet-600",
  "bg-blue-600",
  "bg-emerald-600",
  "bg-amber-500",
  "bg-rose-600",
  "bg-cyan-600",
];

export default function Avatar({ name }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase();

  const color =
    COLORS[
      name.split("").reduce((a, c) => a + c.charCodeAt(0), 0) % COLORS.length
    ];

  return (
    <div
      className={`
        w-10 h-10
        rounded-xl
        ${color}
        flex items-center justify-center
        text-[var(--sidebar-text)]
        text-xs
        font-bold
        shadow-lg
        transition-transform
        duration-300
        group-hover:scale-110
      `}
    >
      {initials}
    </div>
  );
}
