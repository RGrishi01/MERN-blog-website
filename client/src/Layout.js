import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div>
      <Header />
      {
        <Outlet /> /*It serves as a placeholder for the content of child routes within a parent route. */
      }
    </div>
  );
}

export default Layout;
