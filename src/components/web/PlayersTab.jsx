"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { cn, getInitials } from "@/lib/utils";
import { toast } from "sonner";

function PlayersTab({ hometeam, awayteam }) {
  const [selectedTeam, setSelectedTeam] = useState(null);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleSelectPlayers = (player) => {
    // Check if the player is already selected
    const isSelected = selectedPlayers.some(
      (selectedPlayer) => selectedPlayer.id === player.id
    );

    if (isSelected) {
      // If selected, remove from the array
      setSelectedPlayers((prevSelectedPlayers) =>
        prevSelectedPlayers.filter(
          (selectedPlayer) => selectedPlayer.id !== player.id
        )
      );
    } else {
      if (selectedPlayers.length < 4) {
        // If not selected and within the limit, add to the array
        setSelectedPlayers((prevSelectedPlayers) => [
          ...prevSelectedPlayers,
          player,
        ]);
      } else {
        toast.warning("Maximum four players are only allowed.");
      }
    }
  };

  return (
    <>
      <div className="w-[400px] flex flex-col gap-4 my-2">
        <div className="border bg-violet-400 p-4 text-center text-xl rounded-lg shadow-lg">
          Update
        </div>
        <div className="grid grid-cols-2 gap-2 border rounded-md shadow-lg p-2">
          <div className="flex flex-col gap-4">
            <div
              onClick={() => setSelectedTeam(hometeam.teamid)}
              className={cn(
                "text-center font-bold  border p-2 cursor-pointer rounded-lg shadow-md",
                selectedTeam === hometeam.teamid && "bg-orange-300"
              )}
            >
              {hometeam.shortName}
            </div>
            <div className="flex flex-col gap-4">
              {hometeam.players.map((player) => (
                <div
                  onClick={() => handleSelectPlayers(player)}
                  className={cn(
                    " border rounded-lg shadow-sm cursor-pointer flex flex-row gap-4 justify-start items-center",
                    selectedPlayers.some(
                      (selectedPlayer) => selectedPlayer.id === player.id
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
          <div className="flex flex-col gap-4">
            <div
              onClick={() => setSelectedTeam(awayteam.teamid)}
              className={cn(
                "text-center font-bold  border p-2 cursor-pointer rounded-lg shadow-md",
                selectedTeam === awayteam.teamid && "bg-orange-300"
              )}
            >
              {awayteam.shortName}
            </div>
            <div className="flex flex-col gap-4">
              {awayteam.players.map((player) => (
                <div
                  onClick={() => handleSelectPlayers(player)}
                  className={cn(
                    " border rounded-lg shadow-sm cursor-pointer  flex flex-row gap-4 justify-start items-center",
                    selectedPlayers.some(
                      (selectedPlayer) => selectedPlayer.id === player.id
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
      </div>
    </>
  );
}

export default PlayersTab;
