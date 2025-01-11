import { useRef, useState } from "react";
import { dataAstrosProps } from "../types";
import styles from "./CoverflowSlider.module.css";
import CustomButton from "./CustomButton";
import MoonSlider from "./MoonSlider";
import ModalAstroDetails from "./ModalAstroDetails";

const AstroDetails = ({
  dataAstros,
  currentIndex,
  handleCLick,
}: dataAstrosProps) => {
  
  const [isOpen, setIsOpen] = useState<boolean>(false)

  function toggleModal(){
    setIsOpen(!isOpen)
  }
  
  function buildScale(offset: number) {
    if (offset === -2 || offset === 2) {
      return 0.6;
    }
    return offset === 0 ? 1.2 : 0.8;
  }

  return (
    <>
      {dataAstros.map(
        ({ imgSrc, id, moons, moonsAnimationDuration, astroData }, index) => {
          //calculate slide position based on index
          const offset = index - currentIndex;
          const scale = buildScale(offset); //larger scale for the active slide
          const zIndex = offset === 0 ? 10 : 5; //higher z-index for the active slide
          function buildSize(property: string) {
            const condition = astroData[0].name === "sun";

            if (condition && property === "img") return "33rem";
            else if (property === "img") return "20rem";

            if (condition && property === "width") return "430px";
            else "350px";
          }

          return (
            <>
              <div
                key={id}
                className={`${styles.slide} ${offset === 0 ? "active" : ""}`}
                style={{
                  transform: `translateX(${offset * 75}%) rotateY(${
                    offset * -5
                  }deg) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: offset < -2 || offset > 2 ? 0 : 1,

                  width: buildSize("width"),
                }} //hide distant elements
                onClick={() => handleCLick(index)}
              >
                {moons && moonsAnimationDuration && (
                  <MoonSlider
                    moons={moons}
                    animationDuration={moonsAnimationDuration}
                  />
                )}

                <img
                  src={imgSrc}
                  alt={astroData[id]?.name}
                  style={{
                    height: buildSize("img"),
                    width: buildSize("img"),
                    position: "relative",
                    zIndex: "-2",
                    marginTop: !moons ? '5rem' : ''
                  }}
                />
                <div
                  style={{
                    margin: "0px",
                    padding: "0px",
                    position: "absolute",
                    bottom: moons ? 55 : 135,
                  }}
                >
                  <section className={styles.containerCustomButton} onClick={toggleModal}>
                    <CustomButton text={astroData[0].name} />
                  </section>
                </div>
                
              </div>
              {isOpen && (
                <ModalAstroDetails isOpen={isOpen} astroData={astroData} id={id} toggleModal={setIsOpen}/>
              )}
            </>
          );
        }
      )}
    </>
  );
};

export default AstroDetails;
