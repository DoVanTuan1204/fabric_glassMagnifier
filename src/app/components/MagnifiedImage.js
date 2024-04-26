import React from "react";
import { Image } from "next/image";
import useMagnifier from "../useMagnifier";
import "./MagnifiedImage.module.css";

export default function MagnifiedImage() {
  const imageRef = React.useRef(null);
  const {
    isMagnifying,
    magnifierX,
    magnifierY,
    handleMouseMove,
    handleMouseEnter,
    handleMouseLeave,
  } = useMagnifier(imageRef);

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Image
        ref={imageRef}
        src="/anh2.png"
        alt="Ảnh được phóng đại"
        width={500}
        height={300}
      />

      {isMagnifying && (
        <div
          className="magnifier"
          style={{
            left: magnifierX,
            top: magnifierY,
            transform: `translate(-50%, -50%)`,
          }}
        >
          <Image
            src="/anh2.png"
            alt="Ảnh được phóng đại"
            width={300}
            height={200}
            style={{
              objectFit: "cover",
              transform: `scale(${isMagnifying ? 2 : 1})`,
            }}
          />
        </div>
      )}
    </div>
  );
}
