import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  try {
    const existingPrediction = await prisma.Prediction.findUnique({
      where: {
        userid_matchid: {
          userid: data.userid,
          matchid: data.matchid,
        },
      },
    });
    if (existingPrediction) {
      const updatedPrediction = await prisma.Prediction.update({
        where: {
          id: existingPrediction.id,
        },
        data: {
          teamid: data.teamid,
          playeroneid: data.playeroneid,
          playertwoid: data.playertwoid,
          playerthreeid: data.playerthreeid,
          playerfourid: data.playerfourid,
          captainid: data.captainid,
        },
      });
      console.log("updated");
      return NextResponse.json({ success: true, data: updatedPrediction });
    } else {
      const newPrediction = await prisma.Prediction.create({
        data: {
          userid: data.userid,
          matchid: data.matchid,
          teamid: data.teamid,
          playeroneid: data.playeroneid,
          playertwoid: data.playertwoid,
          playerthreeid: data.playerthreeid,
          playerfourid: data.playerfourid,
          captainid: data.captainid,
        },
      });
      console.log("created");
      return NextResponse.json({ success: true, data: newPrediction });
    }

    // console.log("created");
    // return NextResponse.json({ success: true, data: newPrediction });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }
}
