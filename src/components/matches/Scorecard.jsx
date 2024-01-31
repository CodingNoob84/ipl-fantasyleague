import React from "react";
import { Button } from "../ui/button";
import AddScore from "./AddScore";

function Scorecard({ scorecard }) {
  return (
    <div className="w-full">
      <table className="w-full p-1 border rounded-md shadow-md">
        <thead>
          <tr>
            <th>Player</th>
            <th>Batting</th>
            <th>Blowing</th>
            <th>Fielding</th>
            <th>ManOfTheMatch</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {scorecard.map((player) => (
            <tr key={player.playerid}>
              <td className="text-center border">{player.player.fullname}</td>
              <td className="text-center border">
                {player.runs}/{player.batting}
              </td>
              <td className="text-center border">
                {player.wickets}/{player.bowling}
              </td>
              <td className="text-center border">
                {player.catches},{player.runouts}/{player.fielding}
              </td>
              <td className="text-center border">
                {player.motm === true ? "Yes" : "No"}
              </td>
              <td className="text-center border">
                <AddScore defaultvalues={player} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Scorecard;
