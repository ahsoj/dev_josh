"use client";
import twmesh from "@/utils/twmesh";
import React, { useState } from "react";

interface HamburgerProps extends React.HTMLAttributes<HTMLDivElement> {
  togglehandler: () => void;
  activate: boolean;
}

const HamburgerMenu: React.FC<HamburgerProps> = ({
  togglehandler,
  activate,
}) => {
  return (
    <div>
      <button onMouseDown={togglehandler} className="space-y-2">
        <div
          className={twmesh(
            "transition-base h-0.5 w-8 rounded-lg bg-white",
            activate && "translate-y-1.5 rotate-45",
          )}
        />
        <div
          className={twmesh(
            "transition-base h-0.5 w-8 rounded-lg bg-white",
            activate && " -translate-y-1 -rotate-45",
          )}
        />
      </button>
    </div>
  );
};

export default HamburgerMenu;
