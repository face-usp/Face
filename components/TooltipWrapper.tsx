"use client";

import React, { ReactNode } from "react";
import clsx from "clsx";// Optional if you use clsx or className utils

type TooltipWrapperProps = {
  message: string;
  position?: "top" | "bottom" | "left" | "right";
  children: ReactNode;
};

export default function TooltipWrapper({
  message,
  position = "bottom",
  children,
}: TooltipWrapperProps) {
  return (
    <div className="relative group inline-block">
      {children}
      <span
        className={clsx(
          "absolute z-50 opacity-0 group-hover:opacity-100 transition-opacity bg-black text-white text-xs rounded py-1 px-2 pointer-events-none whitespace-nowrap",
          position === "top" && "bottom-full left-1/2 -translate-x-1/2 mb-2",
          position === "bottom" && "top-full left-1/2 -translate-x-1/2 mt-2",
          position === "left" && "right-full top-1/2 -translate-y-1/2 mr-2",
          position === "right" && "left-full top-1/2 -translate-y-1/2 ml-2"
        )}
      >
        {message}
      </span>
    </div>
  );
}
