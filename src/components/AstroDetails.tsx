import { useState } from "react";
import { astroData, dataAstrosProps } from "../types";
import styles from "./CoverflowSlider.module.css";
import CustomButton from "./CustomButton";
import MoonSlider from "./MoonSlider";
import ModalAstroDetails from "./ModalAstroDetails";
import useIsMobileScreenDetector from "../hooks/useScreenDetector";
import AstroImageSkeleton from "./skeletons/AstroImageSkeleton";

const AstroDetails = ({
  dataAstros,
  currentIndex,
  handleCLick,
}: dataAstrosProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  const [data, setData] = useState<astroData[]>([]);
  const { isMobile } = useIsMobileScreenDetector();

  function toggleModal(idAstro: number) {
    const planetsData = dataAstros.filter(({ id }) => id === idAstro);
    setData(planetsData[0].astroData);
    setIsOpen(!isOpen);
  }

  function buildScale(offset: number) {
    //position of the slide (astros which are closer or farther from the center)
    if (offset === -2 || offset === 2) {
      return 0.6;
    }
    return offset === 0 ? 1.2 : 0.8;
  }
  //230px mobile width
  //"430px" : "320px"; //slider width in desktop
  return (
    <>
      {isOpen && <ModalAstroDetails astroData={data} toggleModal={setIsOpen} />}

      {dataAstros.map(
        ({ imgSrc, id, moons, moonsAnimationDuration, astroData }, index) => {
          //calculate slide position based on index
          const offset = index - currentIndex;
          const scale = buildScale(offset); //larger scale for the active slide
          const zIndex = offset === 0 ? 10 : 5; //higher z-index for the active slide
          const sun = astroData[0].name === "sun";

          return (
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                key={id}
                className={`${styles.slide} ${offset === 0 ? "active" : ""}`}
                style={{
                  transform: `translateX(${offset * 75}%) rotateY(${
                    offset * -5
                  }deg) scale(${scale})`,
                  zIndex: zIndex,
                  opacity: offset < -2 || offset > 2 ? 0 : 1,
                }} //hide distant elements
                onClick={() => handleCLick(index)}
              >
                {moons && moonsAnimationDuration && (
                  <MoonSlider
                    moons={moons}
                    animationDuration={moonsAnimationDuration}
                  />
                )}

                {!isImageLoaded && (
                  <div style={{ zIndex: "-2", marginTop: "10rem" }}>
                    <AstroImageSkeleton />
                  </div>
                )}

                <img
                  src={imgSrc}
                  alt={astroData[id]?.name}
                  style={{
                    width: isMobile && sun ? "280px" : sun ? "400px" : "",
                    height: isMobile && sun ? "280px" : sun ? "400px" : "",
                    position: "relative",
                    zIndex: "-2",
                    marginTop: !moons ? "5rem" : "",
                    opacity: !isImageLoaded ? "0" : "1",
                  }}
                  className={styles.astroImg}
                  onLoad={() => setIsImageLoaded(true)}
                />

                <div
                  style={{
                    margin: "0px",
                    padding: "0px",
                    position: "absolute",
                    bottom: moons ? 55 : 135,
                  }}
                >
                  <section
                    className={styles.containerCustomButton}
                    onClick={() => toggleModal(id)}
                  >
                    <CustomButton text={astroData[0].name} />
                  </section>
                </div>
              </div>
            </div>
          );
        }
      )}
    </>
  );
};

export default AstroDetails;
