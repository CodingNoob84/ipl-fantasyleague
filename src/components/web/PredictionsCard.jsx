"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { getInitials } from "@/lib/utils";
import PlayersTab from "./PlayersTab";
import { useQuery } from "@tanstack/react-query";
import { getAllPredictions, getMatchbyId } from "@/lib/dbservices";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { FaChessKing } from "react-icons/fa";

function PredictionsCard({ userid, matchid }) {
  const { data: predictionsdata, isLoading } = useQuery({
    queryKey: ["allpredictions", userid, matchid],
    queryFn: () => getAllPredictions({ matchid, userid }),
  });
  console.log(predictionsdata);
  // const { data: matchdetailsdata } = useQuery({
  //   queryKey: ["matchdetails", matchid],
  //   queryFn: () => getMatchbyId({ matchid }),
  // });
  //console.log(matchdetailsdata);
  const [showPredictions, setShowPredictions] = useState(true);
  let players;
  if (predictionsdata.data) {
    players = ["playerone", "playertwo", "playerthree", "playerfour"].map(
      (playerKey) => ({
        id: `${playerKey}id`,
        playerid: predictionsdata.data[playerKey].id,
        name: predictionsdata.data[playerKey].fullname,
        profileimage: predictionsdata.data[playerKey].profileimage,
        isCaptain:
          predictionsdata.data[playerKey].id === predictionsdata.data.captainid,
      })
    );
    //console.log(players);
  } else {
    players = ["playerone", "playertwo", "playerthree", "playerfour"].map(
      (playerKey) => ({
        id: `${playerKey}id`,
        playerid: "",
        name: "",
        profileimage: "",
        isCaptain: false,
      })
    );
  }

  return (
    <>
      {predictionsdata.data ? (
        showPredictions ? (
          <div className="border w-[400px] rounded-md shadow-lg p-2 my-4">
            <div className="flex flex-col gap-4">
              <div className="text-center font-bold">Predictions</div>
              <div className="flex flex-col">
                <div className="border rounded-md bg-orange-300 p-2">
                  Winning Team: {predictionsdata.data.team.shortName}
                </div>
              </div>
              <div className="flex flex-col gap-4">
                {players.map((player) => (
                  <div
                    key={player.id}
                    className="border rounded-md shadow-md flex flex-row gap-4 pr-10 justify-between items-center p-2"
                  >
                    <div className="flex flex-row justify-start items-center gap-4">
                      <Avatar>
                        <AvatarImage
                          src={player.profileimage}
                          alt={player.name}
                        />
                        <AvatarFallback>
                          {getInitials(player.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div>{player.name}</div>
                    </div>
                    {player.isCaptain && (
                      <HoverCard>
                        <HoverCardTrigger>
                          <FaChessKing />
                        </HoverCardTrigger>
                        <HoverCardContent>
                          If you make any player as Captain, then the respective
                          player points will be multiplied by 2.
                        </HoverCardContent>
                      </HoverCard>
                    )}
                  </div>
                ))}
              </div>
              <div
                onClick={() => setShowPredictions(false)}
                className="mt-4 border rounded-md text-center p-4 bg-violet-300 cursor-pointer hover:bg-violet-400"
              >
                Change
              </div>
            </div>
          </div>
        ) : (
          <PlayersTab
            matchid={matchid}
            teamid={predictionsdata.data.teamid}
            players={players}
            setShowPredictions={setShowPredictions}
          />
        )
      ) : (
        <PlayersTab
          matchid={matchid}
          teamid={null}
          players={players}
          setShowPredictions={setShowPredictions}
        />
      )}
    </>
  );
}

export default PredictionsCard;
