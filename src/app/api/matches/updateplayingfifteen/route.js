import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const data = await request.json();
  try {
    // Check if records already exist for the given matchid and teamid
    const existingScorecards = await prisma.PlayerScorecard.findMany({
      where: {
        matchid: data.matchid,
        teamid: data.teamid,
      },
    });

    // If records exist, delete them
    if (existingScorecards.length > 0) {
      await prisma.PlayerScorecard.deleteMany({
        where: {
          matchid: data.matchid,
          teamid: data.teamid,
        },
      });
    }

    // Create new player scorecards
    const playerScorecards = await Promise.all(
      data.players.map(async (playerid, index) => {
        const result = await prisma.PlayerScorecard.create({
          data: {
            playerid,
            matchid: data.matchid,
            teamid: data.teamid,
            order: index + 1, // Set order based on index (1-indexed)
            runs: 0,
            batting: 0,
            wickets: 0,
            bowling: 0,
            catches: 0,
            runouts: 0,
            fielding: 0,
            motm: false,
            total: 0,
          },
        });
        return result;
      })
    );

    return NextResponse.json({ success: true, data: playerScorecards });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }
}
