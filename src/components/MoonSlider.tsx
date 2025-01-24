import { useState } from "react";
import { moonsProps } from "../types";
import styles from "./MoonSlider.module.css";
import MoonImageSke from "./skeletons/MoonImageSke";

const MoonSlider = ({ moons, animationDuration }: moonsProps) => {
  const totalMoons = moons.length;
  const radius = 50;
  const [isMoonImageLoaded, setIsMoonImageLoaded] = useState<boolean>(false);
  return (
    <div className={styles.sliderContainer}>
      <div
        className={styles.sliderCircle}
        style={{ animationDuration: `${animationDuration}s` }}
      >
        {moons.map((moon) => {
          const angle = (360 / totalMoons) * moon.id;
          const x = radius * Math.sin((angle * Math.PI) / 180);
          const y = radius * Math.cos((angle * Math.PI) / 180);

          return (
            <div
              className={styles.sliderImage}
              style={{ transform: `translate(${x}px, ${y}px)` }}
            >
              <section className={styles.tooltipContainer}>{moon.alt}</section>
              {!isMoonImageLoaded && <MoonImageSke />}
              <img
                key={moon.id}
                src={moon.imgSrc}
                alt={moon.alt}
                className={styles.moonImage}
                style={{ opacity: isMoonImageLoaded ? 1 : 0 }}
                onLoad={() => setIsMoonImageLoaded(true)}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoonSlider;
