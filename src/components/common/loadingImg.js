import { useState } from "react";
import "../../assets/style/common/loadingImg.scss";

// Hand src straight to <img> so the browser can defer off-screen images
// (loading="lazy"); the blur class is dropped once this src has loaded.
const LoadingImg = ({ src, alt = "", ...props }) => {
  const [loadedSrc, setLoadedSrc] = useState(null);
  const customClass = loadedSrc === src ? "loaded" : "loading";

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      decoding="async"
      {...props}
      onLoad={() => setLoadedSrc(src)}
      // a failed load must not stay blurred forever
      onError={() => setLoadedSrc(src)}
      className={`image ${customClass}`}
    />
  );
};
export default LoadingImg;
