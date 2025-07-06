"use client";

import { Button } from "@/components/ui/button";
import { signOut as serverSignOut } from "@/lib/actions/auth.action";
import { signOut as clientSignOut } from "firebase/auth";
import { auth } from "@/firebase/client";
import { useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { LogOut } from "lucide-react";

const LogoutButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  // Don't show logout button on interview pages
  const shouldHideLogout = pathname.includes('/interview');

  const handleLogout = async () => {
    try {
      setIsLoading(true);
      
      // Sign out from Firebase client
      await clientSignOut(auth);
      
      // Clear server session
      await serverSignOut();
      
      // Redirect to sign-in page
      router.push("/sign-in");
    } catch (error) {
      console.error("Error during logout:", error);
    } finally {
      setIsLoading(false);
    }
  };

  // Don't render the button if we're on an interview page
  if (shouldHideLogout) {
    return null;
  }

  return (
    <Button
      onClick={handleLogout}
      disabled={isLoading}
      variant="outline"
      size="sm"
      className="flex items-center gap-2 text-white-600 hover:text-destructive-100 hover:border-destructive-100 transition-colors"
    >
      <LogOut className="w-4 h-4" />
      {isLoading ? "Signing out..." : "Logout"}
    </Button>
  );
};

export default LogoutButton;
