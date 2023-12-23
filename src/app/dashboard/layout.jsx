//import DashboardHeader from "./dashboardsidebar/dashboardheader";

;
import DashboardFooter from "./footer";
import DashboardHeader from "./dashboardheader";
import DashboardSideBar from "./dashboardsidebar";
export default  function DashboardLayout({ children, }) { 
  
  
  return (
    <section className="dashboard">
      <DashboardHeader/>
      <DashboardSideBar/>
      <main> {children}</main>
      <DashboardFooter />
    </section>   
  )
}