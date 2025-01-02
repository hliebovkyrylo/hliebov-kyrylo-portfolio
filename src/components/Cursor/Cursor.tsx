// components/Cursor.js
import { useEffect, useState } from "react";

export const Cursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.pageX, y: e.pageY });
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      className="absolute w-14 h-14 bg-white rounded-full blur-3xl pointer-events-none"
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
};
