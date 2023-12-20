
import React from "react";
import { useRouter } from "next/router";

import { useAuth } from "../context/AuthProvider";
import DashboardLayout from "../dashboard/layout";


const ProtectedRoute = ({ children }) => {
  const { user } = useAuth()
  const router = useRouter();

   if (!user) {
    router.push("/login");
    return null;
  }

  return (
    <>
      {user ? <DashboardLayout>{children}</DashboardLayout> : <RootLayout>{children}</RootLayout>}
    </>
  );
};




export default ProtectedRoute;
