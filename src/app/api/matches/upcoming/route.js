import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";
import { parseISO } from "date-fns";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const currentDate = new Date();
    const result = await prisma.matches.findMany({
      where: {
        datetime: {
          gt: parseISO(currentDate.toISOString()),
        },
      },
      include: {
        hometeam: {
          select: {
            fullName: true,
            shortName: true,
            logo: true,
          },
        },
        awayteam: {
          select: {
            fullName: true,
            shortName: true,
            logo: true,
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
