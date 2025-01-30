import { useState } from "react";

export const useSelectImage = () => {
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileInputClick = () => {
    const fileInput = document.getElementById("file-input");
    if (fileInput) fileInput.click();
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setSelectedImage(file);
  };

  return {
    selectedImage,
    handleFileChange,
    handleFileInputClick,
  };
};
