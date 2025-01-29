import { ImageService } from "@/lib/services/imageService";
import { errorResponse, successResponse } from "@/lib/utils/apiResponse";
import { NextApiRequest, NextApiResponse } from "next/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const imageService = new ImageService();

  if (req.method === "POST") {
    try {
      const uploadResult = await imageService.uploadImage(req.body.image);

      res.status(200).json(successResponse(uploadResult.url));
    } catch (error) {
      console.log(error);
      res.status(500).json(errorResponse("Internal Server Error", 500));
    }
  } else {
    res.status(405).json(errorResponse("Method not allowed", 405));
  }
}
