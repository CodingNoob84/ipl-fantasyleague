"use client";
import React, { useState } from "react";
import PlayingFifteen from "./PlayingFifteen";
import Scorecard from "./Scorecard";
import { getTeamScorecardById } from "@/lib/dbservices";
import { useQuery } from "@tanstack/react-query";

function ScorecardWrapper({ players, teamid, matchid }) {
  const {
    data: scorecardData,
    isLoading: scorecardLoading,
    refetch,
  } = useQuery({
    queryKey: ["teamscorecard", matchid, teamid],
    queryFn: () => getTeamScorecardById({ matchid: matchid, teamid: teamid }),
    staleTime: 0,
  });

  console.log(scorecardData?.data.length);

  const [show, setShow] = useState(scorecardData?.data.length === 0 || true);
  console.log("show", show);

  if (scorecardLoading) {
    return <div>Loading scorecard data...</div>;
  }

  return (
    <>
      {show ? (
        <div className="flex flex-col gap-4">
          <div
            className="cursor-pointer border bg-gray-300 py-4 flex justify-center items-center text-center"
            onClick={() => setShow(false)}
          >
            Cancel
          </div>
          <PlayingFifteen
            players={players}
            teamid={teamid}
            matchid={matchid}
            setShow={setShow}
            refetch={refetch}
          />
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <div
            className="cursor-pointer border bg-violet-300 py-4 flex justify-center items-center text-center"
            onClick={() => setShow(true)}
          >
            Update Playing Fifteen
          </div>
          <Scorecard scorecard={scorecardData.data} />
        </div>
      )}
    </>
  );
}

export default ScorecardWrapper;
