//import DashboardHeader from "./dashboardsidebar/dashboardheader";

import DashboardPageHeader from "./dashboardsidebar/dashboardpage";
import DashboardFooter from "./footer";
//import DashboardFooter from "./dashboardfooter";
//import { AuthProvider } from "../context/UserAuth";
export default function DashboardLayout({children,}) { 
  return (
    <section className="dashboard">

      <DashboardPageHeader />
      <main> {children}</main>
      <DashboardFooter />
    </section>   
  )
}