import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allPlayersWithTeamShortNames = await prisma.player.findMany({
      select: {
        id: true,
        country: true,
        fullname: true,
        profileimage: true,
        role: true,
        teamid: true,
        team: {
          select: {
            shortName: true,
          },
        },
      },
    });
    const formattedPlayers = allPlayersWithTeamShortNames.map((player) => {
      return {
        ...player,
        teamname: player.teamid ? player.team.shortName : "",
      };
    });

    //console.log(formattedPlayers);

    return NextResponse.json({ success: true, data: formattedPlayers });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }
}
