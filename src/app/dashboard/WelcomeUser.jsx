import React, { useContext } from "react";
import { useAuth } from "../context/UserAuth";
const Greeting = () => {
  const { user } = useAuth();
  // console.log(user);

  return (
    <h1 className="font-extrabold md:text-3xl text-xl text-black pt-32 lg:pt-0">
       Welcome back, {user.displayName}
    </h1>
  );
};

export default Greeting;