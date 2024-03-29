import React from "react";
import VersusCard from "./VersusCard";
import PlayersTab from "./PlayersTab";
import PredictionsCard from "./PredictionsCard";
import { getAllPredictions, getNextMatch } from "@/lib/dbservices";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import PredictionsServer from "./PredictionsServer";
import GameRules from "./GameRules";

async function NextMatch() {
  const { data: nextmatch } = await getNextMatch();
  //console.log(nextmatch);
  const session = await getServerSession(authOptions);
  //const { data: predictions } = await getAllPredictions();
  const verusdata = {
    datetime: nextmatch?.datetime,
    timezone: nextmatch?.timezone,
    hometeam: nextmatch?.hometeam.shortName,
    hometeamlogo: nextmatch?.hometeam.logo,
    awayteam: nextmatch?.awayteam.shortName,
    awayteamlogo: nextmatch?.awayteam.logo,
  };
  return (
    <div className="flex flex-col">
      <VersusCard verusdata={verusdata} />
      <GameRules />
      {nextmatch ? (
        <PredictionsServer
          matchid={nextmatch.id}
          userid={session.user.id}
          datetime={verusdata}
        />
      ) : (
        <div className="flex justify-center items-center border shadow-md rounded-md">
          No Matches Available
        </div>
      )}
    </div>
  );
}

export default NextMatch;
