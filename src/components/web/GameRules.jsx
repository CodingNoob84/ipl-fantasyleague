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
        <div className="flex flex-col gap-2 px-4 text-sm font-bold">
          <div className="flex flex-row gap-2">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div>Correctly predicting the winning team: X points</div>
          </div>
          <div className="flex flex-row gap-2">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div>Selecting a player from the winning team: Y points</div>
          </div>
          <div className="flex flex-row gap-2">
            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
            <div>Selecting a player as a captain: Z points (double points)</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default GameRules;
