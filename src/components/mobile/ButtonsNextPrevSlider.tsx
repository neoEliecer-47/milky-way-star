import React from "react";
import styles from "./ButtonNextPrev.module.css";
import ArrowLeftIcon from "../icons/ArrowLeftIcon";
import ArrowRightIcon from "../icons/ArrowRightIcon";

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
        className={styles.buttons}
        onClick={() => buildSlidersPosition("prev")}
      >
        <ArrowLeftIcon />
      </button>
      <button
       className={styles.buttons}
        onClick={() => buildSlidersPosition("next")}
      >
        <ArrowRightIcon />
      </button>
    </div>
  );
};

export default ButtonsNextPrevSlider;
