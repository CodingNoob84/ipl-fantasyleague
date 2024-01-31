import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(request) {
  const data = await request.json();
  //console.log(data);
  try {
    const result = await prisma.PlayerScorecard.findMany({
      where: {
        matchid: data.matchid,
      },
      include: {
        player: true, // Include the related player information
      },
      orderBy: {
        order: "asc", // Order by the 'order' field in ascending order
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
