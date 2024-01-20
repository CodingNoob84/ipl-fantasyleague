import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const allteams = await prisma.IPLTeams.findMany({});

    return NextResponse.json({ success: true, data: allteams });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }
}
