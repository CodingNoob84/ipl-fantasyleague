import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export async function POST(request) {
  const data = await request.json();
  console.log(data);
  try {
    const result = await prisma.matches.create({
      data: {
        datetime: new Date(data.datetime),
        timezone: data.timezone,
        hometeamid: data.hometeamid,
        awayteamid: data.awayteamid,
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
