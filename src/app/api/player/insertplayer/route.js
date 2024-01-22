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
  const data = await request.json();
  try {
    if (isImageDataUrl(data.profileimage)) {
      const result = await cloudinary.v2.uploader.upload(data.profileimage, {
        folder: "iplfantasyleague",
        format: "webp",
      });
      data.profileimage = result.secure_url;
    }
    console.log("entered");
    console.log(data);
    if (data.id) {
      console.log("update", data.id);
      // ID is provided, update the existing record
      const updatedPlayer = await prisma.player.update({
        where: { id: data.id },
        data: {
          fullname: data.fullname,
          profileimage: data.profileimage,
          role: data.role,
          teamid: data.teamid,
          country: data.country,
          //updatedAt: new Date(),
        },
      });
      console.log(updatedPlayer);
      //return updatedPlayer;
      return NextResponse.json({ success: true, data: updatedPlayer });
    } else {
      const newPlayer = await prisma.player.create({
        data: {
          fullname: data.fullname,
          profileimage: data.profileimage, // Ensure the correct field name (profileimage) and correct case
          role: data.role,
          teamid: data.teamid,
          country: data.country,
        },
      });
      return NextResponse.json({ success: true, data: newPlayer });
    }
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }
}
