"use client";
import { getMatchbyId, getScorecardByMatchId } from "@/lib/dbservices";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import VersusCard from "../web/VersusCard";
import MatchTabs from "./MatchTabs";

function MatchDetailsClient({ matchid }) {
  const { data: matchData, isLoading: matchLoading } = useQuery({
    queryKey: ["matchdetails", matchid],
    queryFn: () => getMatchbyId({ matchid: matchid }),
  });

  if (matchLoading) {
    return <div className="flex justify-center items-center">Loading...</div>;
  }

  const verusdata = {
    datetime: matchData?.data?.datetime,
    timezone: matchData?.data?.timezone,
    hometeam: matchData?.data?.hometeam?.shortName,
    hometeamlogo: matchData?.data?.hometeam?.logo,
    awayteam: matchData?.data?.awayteam?.shortName,
    awayteamlogo: matchData?.data?.awayteam?.logo,
  };

  return (
    <div>
      <VersusCard verusdata={verusdata} />
      <MatchTabs
        hometeam={matchData?.data?.hometeam}
        awayteam={matchData?.data?.awayteam}
        matchid={matchid}
      />
    </div>
  );
}

export default MatchDetailsClient;
