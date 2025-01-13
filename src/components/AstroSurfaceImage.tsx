import { modalImagesProps } from "../types";
import styles from "./AstroSurfaceImage.module.css";

const AstroSurfaceImage = ({ images }: modalImagesProps) => {
  console.log(images);
  return (
    <div className={styles.container}>
      {images.map(({ imgSrc }, index) => (
        <figure className={styles.containerImage}>
          <img src={imgSrc} key={index} alt="astro-surface" className={styles.image} />
        </figure>
      ))}
    </div>
  );
};

export default AstroSurfaceImage;
