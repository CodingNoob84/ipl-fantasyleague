import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";
import { parseISO } from "date-fns";

export async function GET() {
  try {
    const currentDate = new Date();
    const result = await prisma.matches.findFirst({
      where: {
        datetime: {
          gt: parseISO(currentDate.toISOString()),
        },
      },
      orderBy: {
        datetime: "asc",
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
