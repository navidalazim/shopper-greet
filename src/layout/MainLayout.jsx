import React from "react";
import Drawer from "../components/Drawer";
import Navbar from "../components/Navbar";

export default function MainLayout({ children, quantity }) {
  return (
    <>
      <Navbar quantity={quantity} />
      <Drawer />
      <div className="main">{children}</div>
    </>
  );
}
