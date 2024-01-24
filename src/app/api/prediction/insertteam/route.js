import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  try {
    const existingPrediction = await prisma.TeamPrediction.findUnique({
      where: {
        userid_matchid: {
          userid: data.userid,
          matchid: data.matchid,
        },
      },
    });
    if (existingPrediction) {
      const updatedPrediction = await prisma.TeamPrediction.update({
        where: {
          id: existingPrediction.id,
        },
        data: {
          teamid: data.teamid,
        },
      });
      //console.log("updated");
      return NextResponse.json({ success: true, data: updatedPrediction });
    } else {
      const newPrediction = await prisma.TeamPrediction.create({
        data: {
          userid: data.userid,
          matchid: data.matchid,
          teamid: data.teamid,
        },
      });
      //console.log("created");
      return NextResponse.json({ success: true, data: newPrediction });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }
}
