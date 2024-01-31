import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await prisma.matches.findMany({
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
      orderBy: {
        datetime: "asc", // or 'desc' for descending order
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
