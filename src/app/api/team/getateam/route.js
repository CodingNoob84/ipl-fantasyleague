import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const teamname = searchParams.get("teamname");
  console.log(teamname);
  try {
    const team = await prisma.IPLTeams.findUnique({
      where: {
        shortName: teamname.toUpperCase(),
      },
      include: {
        players: true,
      },
    });

    return NextResponse.json({ success: true, data: team });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }
}
