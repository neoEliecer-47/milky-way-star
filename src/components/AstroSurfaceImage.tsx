import { modalImagesProps } from "../types";
import styles from "./AstroSurfaceImage.module.css";
import CloseIcon from "./icons/CloseIcon";

const AstroSurfaceImage = ({ images, onCloseModal }: modalImagesProps) => {
  console.log(images);
  return (
    <section style={{ width: '100%' }}>
    <div className={styles.buttonContainer}>
    <button className={styles.buttonStyles} onClick={onCloseModal}>
      <CloseIcon />
    </button>
    </div>
    <div className={styles.container}>
 
      {images.map(({ imgSrc }, index) => (
        <figure className={styles.containerImage}>
          <img src={imgSrc} key={index} alt="astro-surface" className={styles.image} />
        </figure>
      ))}
    </div>
    </section>
  );
};

export default AstroSurfaceImage;
