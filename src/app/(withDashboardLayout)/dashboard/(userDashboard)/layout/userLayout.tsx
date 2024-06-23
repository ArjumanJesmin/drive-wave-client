import { NavbarWrapper } from "@/app/(withDashboardLayout)/components/dashboardNavbar/dashboardNavbar";
import { UserSidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/UserSidebar";

interface Props {
  children: React.ReactNode;
}
export const UserLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <UserSidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};
