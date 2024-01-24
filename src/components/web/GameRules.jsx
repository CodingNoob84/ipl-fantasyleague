"use client";
import React, { useState } from "react";

function GameRules() {
  const [show, setShow] = useState(false);
  return (
    <div className="w-[400px] flex flex-col border p-2 rounded-md shadow-md">
      <div
        onClick={() => setShow(!show)}
        className="flex justify-center text-center cursor-pointer"
      >
        GameRules
      </div>
      {show && (
        <div className="flex flex-col gap-4 px-4">
          <ul>
            <li>Correctly predicting the winning team: X points</li>
            <li>Selecting a player from the winning team: Y points</li>
            <li>Selecting a player as a captain: Z points (double points)</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default GameRules;
