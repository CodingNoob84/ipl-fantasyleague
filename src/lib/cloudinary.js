import cloudinary from "cloudinary";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUD_NAME,
  api_key: process.env.CLOUD_APIKEY,
  api_secret: process.env.CLOUD_SECRET,
});

export async function uploadImage(file) {
  const result = await cloudinary.v2.uploader.upload(file, {
    folder: "iplfantasyleague",
  });
  return result;
}

export default cloudinary;
