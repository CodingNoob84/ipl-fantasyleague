import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const currentDate = new Date();
    const result = await prisma.matches.findFirst({
      where: {
        datetime: {
          gt: currentDate.toISOString(),
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
          },
        },
        awayteam: {
          select: {
            fullName: true,
            shortName: true,
            logo: true,
            teamid: true,
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
