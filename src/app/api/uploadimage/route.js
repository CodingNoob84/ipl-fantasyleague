import cloudinary from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.CLOUD_APIKEY,
  api_secret: process.env.CLOUD_SECRET,
});

export async function POST(request) {
  const data = await request.formData();

  const imageDataUrl = data.get("dataUrl");
  try {
    const result = await cloudinary.v2.uploader.upload(imageDataUrl, {
      folder: "iplfantasyleague",
      format: "webp",
    });
    console.log(result);
    return NextResponse.json({ success: true, url: result.secure_url });
  } catch (error) {
    return NextResponse.json({
      success: false,
      message: "error",
      error: error,
    });
  }

  return NextResponse.json({
    success: true,
    url: data.get("dataUrl"),
  });
}
