import { useState, useEffect } from "react";
import "../../assets/style/common/loadingImg.scss";

const LoadingImg = ({ src, ...props }) => {
  const [imgSrc, setImgSrc] = useState("");
  const customClass = imgSrc !== src ? "loading" : "loaded";

  useEffect(() => {
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setImgSrc(src);
    };
  }, [src]);

  return (
    <img
      {...{ src: imgSrc, ...props }}
      alt={props.alt || ""}
      className={`image ${customClass}`}
    />
  );
};
export default LoadingImg;
