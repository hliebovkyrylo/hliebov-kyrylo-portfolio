import { ImageService } from "@/lib/services/imageService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const imageService = new ImageService();

  if (req.method === "DELETE") {
    try {
      const { publicId } = req.body;

      await imageService.deleteImage(publicId as string);

      res.status(200).json(successResponse("Image deleted successfully"));
    } catch (error) {
      res.status(500).json(errorResponse("Internal Server Error", 500));
    }
  } else {
    res.status(405).json(errorResponse("Method not allowed", 405));
  }
}
