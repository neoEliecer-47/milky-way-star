import { useState } from "react";
import { planets } from "../constants";
import styles from "./CoverflowSlider.module.css";
import AstroDetails from "./AstroDetails";
import useIsMobileScreenDetector from "../hooks/useScreenDetector";
import ButtonsNextPrevSlider from "./mobile/ButtonsNextPrevSlider";

const CoverflowSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(3);
  const { isMobile } = useIsMobileScreenDetector();

  function handleCLick(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div
      className={styles.CoverflowSlider}
      style={{ padding: "6rem", marginRight: "22rem" }}
    >
      <div className={styles.slides}>
        <AstroDetails
          dataAstros={planets}
          currentIndex={currentIndex}
          handleCLick={handleCLick}
        />
        {isMobile && (
          <ButtonsNextPrevSlider
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
      </div>
    </div>
  );
};

export default CoverflowSlider;
