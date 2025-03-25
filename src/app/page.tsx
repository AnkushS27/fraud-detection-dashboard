import { Button } from "@/components/ui/button";
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen p-8 pb-20 sm:p-20">
      <Button variant={"default"}>
        <Link href="/dashboard">Go to Dashboard</Link>
      </Button>
    </div>
  );
}
