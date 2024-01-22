import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen">
      <div className="flex justify-center items-center my-4">
        <Button asChild>
          <Link href="/dashboard/players">Add Players</Link>
        </Button>
      </div>
    </div>
  );
}
