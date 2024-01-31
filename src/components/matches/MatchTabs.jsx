import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import ScorecardWrapper from "./ScorecardWrapper";

function MatchTabs({ hometeam, awayteam, matchid }) {
  return (
    <div>
      <Tabs defaultValue="home" className="">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="home">{hometeam.shortName}</TabsTrigger>
          <TabsTrigger value="away">{awayteam.shortName}</TabsTrigger>
        </TabsList>
        <TabsContent value="home">
          <ScorecardWrapper
            players={hometeam.players}
            teamid={hometeam.teamid}
            matchid={matchid}
          />
        </TabsContent>
        <TabsContent value="away">
          <ScorecardWrapper
            players={awayteam.players}
            teamid={awayteam.teamid}
            matchid={matchid}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default MatchTabs;
