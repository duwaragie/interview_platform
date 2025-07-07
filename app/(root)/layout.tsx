import Link from "next/link";
import Image from "next/image";
import { ReactNode } from "react";
import { redirect } from "next/navigation";

import { isAuthenticated } from "@/lib/actions/auth.action";
import LogoutButton from "@/components/LogoutButton";

const RootLayout = async ({ children }: { children: ReactNode }) => {
  const isUserAuthenticated = await isAuthenticated();
  if (!isUserAuthenticated) redirect("/sign-in");

  return (
    <div className="root-layout">
      <nav className="flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo1.png" alt="AcePilot Logo" width={38} height={32} style={{ width: "auto", height: "auto" }} />
          <h2 className="text-primary-100">AcePilot</h2>
        </Link>
        
        <LogoutButton />
      </nav>

      {children}
    </div>
  );
};

export default RootLayout;