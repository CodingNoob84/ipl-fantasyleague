//"use client";
import AddPlayer from "@/components/player/AddPlayer";
import AllPlayerTable from "@/components/player/AllPlayerTable";
import { Button } from "@/components/ui/button";
import { getAllPlayers } from "@/lib/dbservices";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";
import React from "react";

async function PlayersPage() {
  //const data = await getAllPlayers();
  //console.log(data);
  const queryClient = new QueryClient();
  // await queryClient.prefetchQuery({
  //   queryKey: ["allplayers"],
  //   queryFn: () => getAllPlayers(),
  // });

  return (
    <div className="w-full max-w-5xl mx-auto flex flex-col">
      <div className="flex flex-row justify-between my-4">
        <div className="text-4xl font-bold">All Players</div>
        <AddPlayer />
      </div>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <AllPlayerTable />
      </HydrationBoundary>
    </div>
  );
}

export default PlayersPage;
