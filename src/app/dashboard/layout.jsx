//import DashboardHeader from "./dashboardsidebar/dashboardheader";

import DashboardPage from "./dashboardsidebar/dashboardpage";
import DashboardFooter from "./footer";
//import DashboardFooter from "./dashboardfooter";
//import { AuthProvider } from "../context/UserAuth";

export default function DashboardLayout({children,}) {
  
  return (
     
      
        <section className="dashboard">
          <DashboardPage/>
        <main> {children}</main>
        <DashboardFooter/>
          
        </section>
     
           
      
  )
}