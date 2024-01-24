import { getAllPredictions, getMatchbyId } from "@/lib/dbservices";
import React from "react";
import PredictionsCard from "./PredictionsCard";
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from "@tanstack/react-query";

async function PredictionsServer({ matchid, userid }) {
  const { data: predictions } = await getAllPredictions({ matchid, userid });
  //console.log(predictions);
  const { data: matchdetails } = await getMatchbyId({ matchid });
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery({
    queryKey: ["allpredictions", userid, matchid],
    queryFn: () => getAllPredictions({ matchid, userid }),
  });
  await queryClient.prefetchQuery({
    queryKey: ["matchdetails", matchid],
    queryFn: () => getMatchbyId({ matchid }),
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <PredictionsCard
        predictions={predictions}
        matchdetails={matchdetails}
        userid={userid}
        matchid={matchid}
      />
    </HydrationBoundary>
  );
}

export default PredictionsServer;
