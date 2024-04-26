import React, { useState } from "react";

export default function useMagnifier(imageRef) {
  const [isMagnifying, setIsMagnifying] = useState(false);
  const [magnifierX, setMagnifierX] = useState(0);
  const [magnifierY, setMagnifierY] = useState(0);

  const handleMouseMove = (event) => {
    const { offsetX, offsetY } = event.nativeEvent;
    const imageRect = imageRef.current.getBoundingClientRect();
    const imageWidth = imageRect.width;
    const imageHeight = imageRect.height;

    const magnifierX = Math.max(0, Math.min(offsetX, imageWidth));
    const magnifierY = Math.max(0, Math.min(offsetY, imageHeight));

    setMagnifierX(magnifierX);
    setMagnifierY(magnifierY);
  };

  const handleMouseEnter = () => {
    setIsMagnifying(true);
  };

  const handleMouseLeave = () => {
    setIsMagnifying(false);
  };

  return {
    isMagnifying,
    magnifierX,
    magnifierY,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  };
}
