import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { formatDateTime, getFormattedDatetime } from "@/lib/utils";

function VersusCard({ verusdata }) {
  //console.log(verusdata);
  return (
    <div className=" flex flex-col border p-2 rounded-md shadow-md">
      <div className="flex flex-row justify-center items-center gap-4">
        <div className="flex flex-row justify-center items-center">
          <Avatar>
            <AvatarImage
              src={verusdata.hometeamlogo}
              alt={verusdata.hometeam}
            />
            <AvatarFallback>{verusdata.hometeam}</AvatarFallback>
          </Avatar>
          <div>{verusdata.hometeam}</div>
        </div>
        <div>Vs</div>
        <div className="flex flex-row justify-center items-center">
          <div>{verusdata.awayteam}</div>
          <Avatar>
            <AvatarImage
              src={verusdata.awayteamlogo}
              alt={verusdata.awayteam}
            />
            <AvatarFallback>{verusdata.awayteam}</AvatarFallback>
          </Avatar>
        </div>
      </div>
      <div className="text-sm text-center">
        {/* {getFormattedDatetime(verusdata.datetime)} */}
        {formatDateTime(verusdata.datetime)}
      </div>
    </div>
  );
}

export default VersusCard;
