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
      include: {
        team: true,
        playerone: true,
        playertwo: true,
        playerthree: true,
        playerfour: true,
      },
    });

    return NextResponse.json({ success: true, data: existingPrediction });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }
}
