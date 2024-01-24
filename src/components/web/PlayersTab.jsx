"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn, getInitials } from "@/lib/utils";
import { toast } from "sonner";
import { useSession } from "next-auth/react";
import { FaChessKing } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "../ui/hover-card";
import { insertUpdatePredictions } from "@/lib/dbservices";
import { useQueryClient } from "@tanstack/react-query";
import { IoReload } from "react-icons/io5";

function PlayersTab({
  hometeam,
  awayteam,
  matchid,
  teamid,
  players,
  setShowPredictions,
}) {
  const queryClient = useQueryClient();
  const [updateLoading, setUpdateLoading] = useState(false);
  const { data: session, status } = useSession();
  const [selectedTeam, setSelectedTeam] = useState(teamid);
  // const [selectPredictions, setSelectPredictions] = useState(predictions);
  //console.log("predictions", selectPredictions);
  const [selectedPlayers, setSelectedPlayers] = useState(players);
  //console.log(selectedPlayers);

  const handleSelectPlayers = (player) => {
    const isAlreadySelected = selectedPlayers.some(
      (selectedPlayer) => selectedPlayer.playerid === player.id
    );
    console.log(isAlreadySelected);
    if (isAlreadySelected) {
      // Remove the player ID from selectedPlayers
      const updatedSelectedPlayers = selectedPlayers.map((selectedPlayer) =>
        selectedPlayer.playerid === player.id
          ? { ...selectedPlayer, playerid: "", name: "", isCaptain: false }
          : selectedPlayer
      );
      setSelectedPlayers(updatedSelectedPlayers);
    } else {
      // Check if there are fewer than 4 selected players
      const numSelectedPlayers = selectedPlayers.filter(
        (selectedPlayer) => selectedPlayer.playerid
      ).length;

      if (numSelectedPlayers < 4) {
        // Add the player ID to the first empty playerid found
        const emptyPlayer = selectedPlayers.find(
          (selectedPlayer) => !selectedPlayer.playerid
        );

        if (emptyPlayer) {
          const updatedSelectedPlayers = selectedPlayers.map((selectedPlayer) =>
            selectedPlayer.id === emptyPlayer.id
              ? {
                  ...selectedPlayer,
                  playerid: player.id,
                  name: player.fullname,
                }
              : selectedPlayer
          );
          setSelectedPlayers(updatedSelectedPlayers);
        }
      } else {
        toast.warning("Maximum four players are allowed.");
      }
    }
  };

  const handleRemove = (playerid) => {
    const updatedSelectedPlayers = selectedPlayers.map((selectedPlayer) =>
      selectedPlayer.playerid === playerid
        ? { ...selectedPlayer, playerid: "", name: "", isCaptain: false }
        : selectedPlayer
    );
    setSelectedPlayers(updatedSelectedPlayers);
  };

  const handleCaptain = (id) => {
    const updatedCaptain = selectedPlayers.map((selectedPlayer) =>
      selectedPlayer.id === id
        ? {
            ...selectedPlayer,
            isCaptain: true,
          }
        : {
            ...selectedPlayer,
            isCaptain: false,
          }
    );
    setSelectedPlayers(updatedCaptain);
  };

  const handleSubmit = async () => {
    setUpdateLoading(true);
    const playerIdsObject = selectedPlayers.reduce((acc, player) => {
      acc[player.id] = player.playerid;
      return acc;
    }, {});
    const captainObject = selectedPlayers.find(
      (player) => player.isCaptain === true
    );
    const captainid = captainObject ? captainObject.playerid : null;
    const prediction = {
      userid: session.user.id,
      matchid: matchid,
      teamid: selectedTeam,
      ...playerIdsObject,
      captainid: captainid,
    };
    console.log(prediction);
    const result = await insertUpdatePredictions(prediction);
    console.log(result);
    if (result.success) {
      queryClient.invalidateQueries({
        queryKey: ["allpredictions", session.user.id, matchid],
      });
      setShowPredictions(true);
    }
    setUpdateLoading(false);
  };

  return (
    <>
      <div className="w-[400px] flex flex-col gap-4 my-2">
        <div
          onClick={handleSubmit}
          className="border bg-violet-400 p-4 text-center text-xl rounded-lg shadow-lg cursor-pointer"
        >
          {updateLoading ? (
            <div className="flex justify-center items-center text-center">
              <IoReload className="mr-2 h-4 w-4 animate-spin" />
              Please wait
            </div>
          ) : (
            "Update"
          )}
        </div>
        <div className="flex flex-col gap-4 border rounded-md shadow-lg p-2">
          <div className="grid grid-cols-2 gap-2">
            <div
              onClick={() => setSelectedTeam(hometeam.teamid)}
              className={cn(
                "text-center font-bold  border p-2 cursor-pointer rounded-lg shadow-md",
                selectedTeam === hometeam.teamid && "bg-orange-300"
              )}
            >
              {hometeam.shortName}
            </div>
            <div
              onClick={() => setSelectedTeam(awayteam.teamid)}
              className={cn(
                "text-center font-bold  border p-2 cursor-pointer rounded-lg shadow-md",
                selectedTeam === awayteam.teamid && "bg-orange-300"
              )}
            >
              {awayteam.shortName}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            {selectedPlayers.map((player) => (
              <div
                key={player.id}
                className="w-full h-[30px] flex gap-4 items-center"
              >
                <div
                  onClick={() => handleCaptain(player.id)}
                  className="w-1/4 h-full border p-2 cursor-pointer rounded-lg shadow-md flex justify-center text-center"
                >
                  {player.isCaptain && (
                    <HoverCard>
                      <HoverCardTrigger>
                        <FaChessKing />
                      </HoverCardTrigger>
                      <HoverCardContent>
                        if you make any player as Captain, then respective
                        player points will be multiply by 2
                      </HoverCardContent>
                    </HoverCard>
                  )}
                </div>

                <div
                  onClick={() => handleRemove(player.playerid)}
                  className="w-3/4 h-full text-sm flex justify-between font-bold border p-2 cursor-pointer rounded-lg shadow-md"
                >
                  {player.name && (
                    <>
                      {player.name} <MdDelete />
                    </>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 border rounded-md shadow-lg p-2">
          <div className="flex flex-col gap-4">
            {hometeam.players.map((player) => (
              <div
                key={player.id}
                onClick={() => handleSelectPlayers(player)}
                className={cn(
                  " border rounded-lg shadow-sm cursor-pointer flex flex-row gap-4 justify-start items-center",
                  selectedPlayers.some(
                    (selectedPlayer) => selectedPlayer.playerid === player.id
                  ) && "bg-green-300"
                )}
              >
                <Avatar>
                  <AvatarImage
                    src={player.profileimage}
                    alt={player.fullname}
                  />
                  <AvatarFallback>
                    {getInitials(player.fullname)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm">{player.fullname}</div>
              </div>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {awayteam.players.map((player) => (
              <div
                key={player.id}
                onClick={() => handleSelectPlayers(player)}
                className={cn(
                  " border rounded-lg shadow-sm cursor-pointer  flex flex-row gap-4 justify-start items-center",
                  selectedPlayers.some(
                    (selectedPlayer) => selectedPlayer.playerid === player.id
                  ) && "bg-green-300"
                )}
              >
                <Avatar>
                  <AvatarImage
                    src={player.profileimage}
                    alt={player.fullname}
                  />
                  <AvatarFallback>
                    {getInitials(player.fullname)}
                  </AvatarFallback>
                </Avatar>
                <div className="text-sm">{player.fullname}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default PlayersTab;
