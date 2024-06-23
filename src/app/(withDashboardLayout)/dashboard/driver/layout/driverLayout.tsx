import { NavbarWrapper } from "@/app/(withDashboardLayout)/components/dashboardNavbar/dashboardNavbar";
import { DriverSidebarWrapper } from "@/app/(withDashboardLayout)/components/sidebar/DriverSidebar";

interface Props {
  children: React.ReactNode;
}
export const DriverLayout = ({ children }: Props) => {
  return (
    <section className="flex">
      <DriverSidebarWrapper />
      <NavbarWrapper>{children}</NavbarWrapper>
    </section>
  );
};
