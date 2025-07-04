import Agent from "@/components/Agent";
import React from "react";
// import { getCurrentUser } from "@/lib/actions/auth.action";

const Page = () => {
//   const user = await getCurrentUser();

  return (
    <>
      <h3>Interview generation</h3>

      {/* <Agent
        userName={user?.name || ""}
        userId={user?.id || ""}
        type="generate"
      /> */}
        <Agent
            userName="John Doe"
            userId="12345"
            type="generate"
          />
    </>
  );
};

export default Page;