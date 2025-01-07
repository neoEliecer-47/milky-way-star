import { dataAstrosProps } from "../types";
import styles from "./CoverflowSlider.module.css";
import MoonSlider from "./MoonSlider";

const AstroDetails = ({
  dataAstros,
  currentIndex,
  handleCLick,
}: dataAstrosProps) => {
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
            if (astroData[0].name === "sun" && property === "img")
              return "33rem";
            else if (property === "img") return "20rem";

           

            if (astroData[0].name === "sun" && property === "width")
              return "430px";
            else if (property === "width") "350px";
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
                  alt="planet"
                  style={{ height: buildSize("img"), width: buildSize("img") }}
                />
              </div>
            </>
          );
        }
      )}
    </>
  );
};

export default AstroDetails;
