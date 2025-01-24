import { useState } from "react";
import { modalImagesProps } from "../types";
import styles from "./AstroSurfaceImage.module.css";
import CloseIcon from "./icons/CloseIcon";
import AstroSurfaceImageSke from "./skeletons/AstroSurfaceImageSke";

const AstroSurfaceImage = ({ images, onCloseModal }: modalImagesProps) => {
  const [isSurfaceImageLoaded, setIsSurfaceImageLoaded] =
    useState<boolean>(false);
  return (
    <section style={{ width: "100%" }}>
      <div className={styles.buttonContainer}>
        <button className={styles.buttonStyles} onClick={onCloseModal}>
          <CloseIcon />
        </button>
      </div>
      <div className={styles.container}>
        {images.map(({ imgSrc }, index) => (
          <figure className={styles.containerImage}>
            {!isSurfaceImageLoaded && <AstroSurfaceImageSke />}
            <img
              src={imgSrc}
              key={index}
              alt="astro-surface"
              className={styles.image}
              onLoad={() => setIsSurfaceImageLoaded(true)}
            />
          </figure>
        ))}
      </div>
    </section>
  );
};

export default AstroSurfaceImage;
