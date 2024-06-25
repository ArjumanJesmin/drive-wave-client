"use client";

import React, { useState } from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  NavbarMenuItem,
} from "@nextui-org/react";
import { Flower } from "lucide-react";
import { ThemeSwitcher } from "@/app/components/ThemeSwitcher";
import MenuComponent from "./DropdownMenuComponent";

const NavBar: React.FC = ({ user }: any) => {
  console.log(user);

  const routeMap: Record<string, string> = {
    user: "/dashboard",
    admin: "/dashboard/admin",
    driver: "/dashboard/driver",
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Flower />
          <p className="font-bold text-xl text-lime-500">DriveWave</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Flower />
          <p className="font-bold text-xl text-lime-500">DriveWave</p>
        </NavbarBrand>
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
          {user && (
            <Link
              className="w-full"
              color="foreground"
              href={routeMap[user?.role]}
            >
              Dashboard
            </Link>
          )}
        </NavbarMenuItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <ThemeSwitcher />
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
          <Link href="login">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="warning" href="#" variant="flat">
            Logout
          </Button>
        </NavbarItem>
      </NavbarContent>

      {/* Render the MenuComponent here if the menu is open */}
      {isMenuOpen && (
        <div className="sm:hidden">
          <MenuComponent />
        </div>
      )}
    </Navbar>
  );
};

export default NavBar;
