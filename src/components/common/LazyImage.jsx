import { useState } from "react";
import PropTypes from 'prop-types';

const LazyImage = ({ src, alt }) => {
  const [imageSrc, setImageSrc] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const handleImageLoad = () => {
    setIsLoading(false);
  };

  return (
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      {isLoading && (
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            background: `url(${src}) center/cover no-repeat`,
            filter: "blur(10px)",
            transition: "filter 0.3s ease-in-out",
          }}
        ></div>
      )}
      <img
        src={src}
        alt={alt}
        onLoad={handleImageLoad}
        style={{ display: isLoading ? "none" : "block", width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default LazyImage;

LazyImage.propTypes = {
    src: PropTypes.any,
    alt: PropTypes.any
}