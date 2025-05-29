import React from "react";

interface IconProps {
  src: string;
  alt?: string;
  size?: number;
}

function Icon({ src, alt = "Icon", size = 100 }: IconProps) {
  return (
    <div
      style={{ width: `${size}px`, height: `${size}px`, overflow: "hidden" }}
    >
      <img
        src={src}
        alt={alt}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </div>
  );
}

export default Icon;
