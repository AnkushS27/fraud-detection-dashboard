"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export default function Header() {
  const router = useRouter();

  const handleLogout = async () => {
    await fetch("/api/auth/logout", { method: "POST" });
    router.push("/login");
  };

  return (
    <header className="flex justify-between items-center bg-blue-500 p-4 text-white">
      <div className="text-xl font-bold">Fraud Detection Dashboard</div>
      <div>
        <Button className="cursor-pointer" onClick={handleLogout} variant={"destructive"}>
          Logout
        </Button>
      </div>
    </header>
  );
}
