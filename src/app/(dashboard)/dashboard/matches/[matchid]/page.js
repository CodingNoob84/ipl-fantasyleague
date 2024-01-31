import MatchDetailsClient from "@/components/matches/MatchDetailsClient";
import MatchTabs from "@/components/matches/MatchTabs";
import { Button } from "@/components/ui/button";
import VersusCard from "@/components/web/VersusCard";
import { getMatchbyId, getScorecardByMatchId } from "@/lib/dbservices";
import { QueryClient } from "@tanstack/react-query";
import Link from "next/link";
import React from "react";

async function MatchPage({ params }) {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["matchdetails", params.matchid],
    queryFn: () => getMatchbyId({ matchid: params.matchid }),
  });
  await queryClient.prefetchQuery({
    queryKey: ["matchscorecarddetails", params.matchid],
    queryFn: () => getScorecardByMatchId({ matchid: params.matchid }),
  });
  //const { data } = await getMatchbyId({ matchid: params.matchid });
  return (
    <div className="flex flex-col">
      <div className="flex my-2 mx-2">
        <Button asChild>
          <Link href={`/dashboard/matches`}>All Matches</Link>
        </Button>
      </div>
      <MatchDetailsClient matchid={params.matchid} />
    </div>
  );
}

export default MatchPage;
