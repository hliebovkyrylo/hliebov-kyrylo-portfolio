export const getPhotoPublicId = (imageUrl: string) => {
  const url = new URL(imageUrl);
  const pathParts = url.pathname.split("/");

  const uploadIndex = pathParts.findIndex((part) => part === "upload");

  const publicIdWithExt = pathParts.slice(uploadIndex + 2).join("/");
  const publicId = publicIdWithExt.replace(/\.[^/.]+$/, "");

  return publicId;
};
