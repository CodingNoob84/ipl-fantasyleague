import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  try {
    //console.log(data);
    if (data.id) {
      //console.log("update", data.id);
      // ID is provided, update the existing record
      const updatedPlayer = await prisma.matches.update({
        where: { id: data.id },
        data: {
          datetime: data.datetime,
          timezone: data.timezone,
          hometeamid: data.hometeamid,
          awayteamid: data.awayteamid,
        },
      });
      //console.log(updatedPlayer);
      //return updatedPlayer;
      return NextResponse.json({ success: true, data: updatedPlayer });
    } else {
      const newMatch = await prisma.matches.create({
        data: {
          datetime: data.datetime,
          timezone: data.timezone,
          hometeamid: data.hometeamid,
          awayteamid: data.awayteamid,
        },
      });
      return NextResponse.json({ success: true, data: newMatch });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }
}
