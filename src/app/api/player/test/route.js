import cloudinary from "@/lib/cloudinary";
import prisma from "@/lib/prismaclient";
import { NextResponse } from "next/server";

function isImageDataUrl(str) {
  // Regular expression for a data URL with image MIME type
  const imageDataUrlRegex =
    /^data:image\/(png|jpeg|jpg|gif|bmp);base64,([a-zA-Z0-9+/]+={0,2})$/;

  return imageDataUrlRegex.test(str);
}

export async function POST(request) {
  const result = await request.json();
  try {
    const newPlayer = await prisma.player.create({
      data: {
        fullname: "V",
        profileimage: "1234", // Ensure the correct field name (profileimage) and correct case
        role: "Batsman",
        team: "9",
        country: "Indian",
      },
    });

    console.log(newPlayer);

    return NextResponse.json({ success: true, data: newPlayer });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }
}
