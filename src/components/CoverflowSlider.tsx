import { useState } from "react";
import { planets } from "../constants";
import styles from "./CoverflowSlider.module.css";
import AstroDetails from "./AstroDetails";

const CoverflowSlider = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(3);

  function handleCLick(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div
      className={styles.CoverflowSlider}
      style={{ padding: "6rem", marginRight: "22rem" }}
    >
      <div className={styles.slides} style={{ flexDirection: "column" }}>
        <AstroDetails
          dataAstros={planets}
          currentIndex={currentIndex}
          handleCLick={handleCLick}
        />
      </div>
    </div>
  );
};

export default CoverflowSlider;
