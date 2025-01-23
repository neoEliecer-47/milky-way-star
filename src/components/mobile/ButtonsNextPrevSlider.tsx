import React from "react";
import styles from "./ButtonNextPrev.module.css";

type ButtonsNextPrevSliderProps = {
  currentIndex: number;
  setCurrentIndex: React.Dispatch<React.SetStateAction<number>>;
};

const ButtonsNextPrevSlider = ({
  currentIndex,
  setCurrentIndex,
}: ButtonsNextPrevSliderProps) => {
  
  
    function buildSlidersPosition(NextOrPrev: string) {
    if (NextOrPrev === "next") {
      if (currentIndex === 8) {
        setCurrentIndex(0);
      } else {
        setCurrentIndex(currentIndex + 1);
      }
    }

    if (NextOrPrev === "prev") {
      if (currentIndex === 0) {
        setCurrentIndex(8);
      } else {
        setCurrentIndex(currentIndex - 1);
      }
    }
  }
  return (
    <div className={styles.containerButtons}>
      <button
        style={{ padding: "0.5rem" }}
        onClick={() => buildSlidersPosition("prev")}
      >
        prev
      </button>
      <button
        style={{ padding: "0.5rem" }}
        onClick={() => buildSlidersPosition("next")}
      >
        next
      </button>
    </div>
  );
};

export default ButtonsNextPrevSlider;
