import { getAllTeams } from "@/lib/dbservices";
import React from "react";

async function TeamsPage() {
  const { data } = await getAllTeams();
  console.log(data);
  return (
    <div className="w-full max-w-5xl mx-auto">
      <div className="flex flex-col">
        <div className="text-3xl font-bold flex justify-center items-center">
          All Teams
        </div>
        <div className="flex flex-row justify-evenly flex-wrap m-auto gap-5">
          {data.map((team) => (
            <div
              key={team.id}
              className="w-[200px] h-[200px] rounded-md shadow-lg border flex flex-col justify-center items-center"
            >
              <div className="w-[150px] h-[150px]">
                <img src={team.logo} alt={team.shortName} />
              </div>
              <div className="text-center">{team.fullName}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default TeamsPage;
