import DashboardHeader from "./DashboardHeader";
import DashboardFooter from "./dashboardfooter";

export default function DashboardLayout({
  children, // will be a page or nested layout
}) {
    return (
        
            <section>
                <DashboardHeader />
                {children}
                
                <DashboardFooter />
            </section>
      
  )
}