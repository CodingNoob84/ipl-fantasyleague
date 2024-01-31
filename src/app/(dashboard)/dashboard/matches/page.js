import AddMatch from "@/components/matches/AddMatch";
import AllMatches from "@/components/matches/AllMatches";
import { getAllMatches } from "@/lib/dbservices";
import React from "react";

async function MatchesPage() {
  //const { data } = await getAllMatches();
  //console.log(data);
  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col p-4">
      <div className="flex flex-row justify-between my-4">
        <div className="text-4xl font-bold">All Matches</div>
        <AddMatch />
      </div>
      <AllMatches />
      {/* <HydrationBoundary state={dehydrate(queryClient)}>
    <AllPlayerTable />
  </HydrationBoundary> */}
    </div>
  );
}

export default MatchesPage;
