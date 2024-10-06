import React from "react";
import { Button } from "../ui/button";
import { cn } from "@/lib/utils";

const PrimaryButtons = ({ children, className, ...props }) => {
  return (
    <Button
      {...props}
      className={cn(
        "mt-4 cursor-pointer text-xl shadow-[0px_5px_0px_0px_rgba(0,0,0,0.2)] hover:bg-white transition-[shadow] duration-700 bg-white text-[#2782FF] rounded-xl select-none",
        className
      )}
    >
      {children}
    </Button>
  );
};

export default PrimaryButtons;
