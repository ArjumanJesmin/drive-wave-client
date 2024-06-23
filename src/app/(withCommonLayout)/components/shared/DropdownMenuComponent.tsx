import React from "react";
import { NavbarMenu, NavbarMenuItem, Link } from "@nextui-org/react";

const DropdownMenuComponent: React.FC = () => {
  return (
    <NavbarMenu>
      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="/features">
          Features
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="#">
          Customers
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className="w-full" color="foreground" href="/dashboard">
          Dashboard
        </Link>
      </NavbarMenuItem>
      <NavbarMenuItem>
        <Link className="w-full" color="warning" href="/login">
          Login
        </Link>
      </NavbarMenuItem>
    </NavbarMenu>
  );
};

export default DropdownMenuComponent;
