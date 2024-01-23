import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";
export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const result = await prisma.matches.findMany({});
    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }
}
