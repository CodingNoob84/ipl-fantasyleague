import PlayingFifteen from "@/components/matches/PlayingFifteen";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { getTeamDetails } from "@/lib/dbservices";
import { getInitials } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { PiAirplaneTiltFill } from "react-icons/pi";

async function TeamDetailsPage({ params }) {
  //console.log(params.teamname);
  const { data } = await getTeamDetails(params.teamname);
  console.log(data);
  return (
    <div className="w-full max-w-6xl mx-auto">
      <div className="flex flex-col px-4">
        <div className="flex flex-row justify-center items-center">
          <Image
            src={data.logo}
            alt={data.shortName}
            width={100}
            height={100}
          />
          <div className="flex flex-col">
            <div className="flex flex-row">Name: {data.fullName}</div>
            <div>Team Count:{data.players.length}</div>
          </div>
        </div>
        <PlayingFifteen players={data.players} teamname={data.shortName} />
        {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {data.players.map((player) => (
            <div key={player.id} className="flex flex-row gap-4 border p-2">
              <Avatar>
                <AvatarImage src={player.profileimage} alt={player.fullname} />
                <AvatarFallback>{getInitials(player.fullname)}</AvatarFallback>
              </Avatar>
              <div className="flex flex-col">
                <div className="w-full flex flex-row gap-5 justify-between">
                  <div className="font-bold">{player.fullname}</div>
                  <div>
                    {player.country === "foreigner" && <PiAirplaneTiltFill />}
                  </div>
                </div>
                <div className="text-sm">{player.role}</div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default TeamDetailsPage;
