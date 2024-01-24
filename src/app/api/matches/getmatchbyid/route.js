import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const data = await request.json();
  try {
    const result = await prisma.matches.findFirst({
      where: {
        id: data.matchid,
      },
      include: {
        hometeam: {
          select: {
            fullName: true,
            shortName: true,
            logo: true,
            teamid: true,
            players: {
              select: {
                id: true,
                country: true,
                fullname: true,
                profileimage: true,
                role: true,
              },
            },
          },
        },
        awayteam: {
          select: {
            fullName: true,
            shortName: true,
            logo: true,
            teamid: true,
            players: {
              select: {
                id: true,
                country: true,
                fullname: true,
                profileimage: true,
                role: true,
              },
            },
          },
        },
      },
    });

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }
}
