import NextMatch from "@/components/web/NextMatch";
import React from "react";

export default async function Home() {
  //const { data } = await getUpcomingMatches();
  return (
    <div className="w-screen">
      <div className="flex justify-center items-center my-4">
        {/* <Button asChild>
          <Link href="/dashboard/players">Add Players</Link>
        </Button> */}
        <NextMatch />
        <div className="flex flex-col"></div>
      </div>
    </div>
  );
}
