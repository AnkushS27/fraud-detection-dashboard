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
    <header className="sticky flex justify-between items-center border-b-2 border-gray-400 p-4">
      <div className="text-xl font-bold">Fraud Detection Dashboard</div>
      <div>
        <Button className="cursor-pointer" onClick={handleLogout} variant={"destructive"}>
          Logout
        </Button>
      </div>
    </header>
  );
}
