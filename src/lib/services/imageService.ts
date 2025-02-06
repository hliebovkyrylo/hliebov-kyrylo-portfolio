import cloudinary from "cloudinary";

export class ImageService {
  constructor() {
    cloudinary.v2.config({
      cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
      api_key: process.env.CLOUDINARY_API_KEY,
      api_secret: process.env.CLOUDINARY_API_SECRET,
    });
  }

  async uploadImage(image: string) {
    return cloudinary.v2.uploader.upload(image);
  }

  async deleteImage(publicId: string) {
    return cloudinary.v2.uploader.destroy(publicId);
  }
}
