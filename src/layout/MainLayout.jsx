import Navbar from "@/components/common/Navbar";
import React from "react";
import { Outlet } from "react-router-dom";
export const MainLayout = () => {
  return (
    <div className="relative h-full ">
      <Navbar />
      <div className="h-[calc(100vh-100px)]">
        <Outlet />
      </div>
    </div>
  );
};
