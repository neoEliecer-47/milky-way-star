import { useEffect, useRef, useState } from "react";
import { modalAstroDetailsProps } from "../types";
import styles from "./ModalAstroDetails.module.css";
import AstroSurfaceImage from "./AstroSurfaceImage";
import StaticData from "./StaticData";
import Accordion from "./interface/Accordion";
import ReadMore from "./interface/ReadMore";
import NavbarModal from "./interface/NavbarModal";
import { planetColors } from "../constants";

const ModalAstroDetails = ({
  astroData,
  isOpen,
  toggleModal,
}: modalAstroDetailsProps) => {
  const modalRef = useRef<HTMLElement | null>(null);
  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(-1);

  function handleClickOutside(e: MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      toggleModal(false);
    }
  }

  function buildBackgroundGradientForEachAstro(index: number){
    return planetColors[index]
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const titles = ["title1", "title2", "title3"];

  return (
    <>
      <article ref={modalRef} className={styles.modalContainer}>
        {astroData.map((data) => (
          <>
            <div className={styles.headerModalContainer}>
              <AstroSurfaceImage images={data.images} />
              
              <h1
                className={styles.name}
                style={{
                  background:
                    `linear-gradient(to left, ${buildBackgroundGradientForEachAstro(data.id)}`,
                }}
              >
                {data.name}
              </h1>
              <NavbarModal
                titles={titles}
                activeOptionIndex={activeOptionIndex}
                updateOptionIndex={setActiveOptionIndex}
              />
            </div>
            <div className={styles.wrapperStaticData}>
              {activeOptionIndex === 0 && (
                <>
                  <StaticData title="type" text={data.type} />
                  {data.position && (
                    <StaticData
                      title="position"
                      textBefore="It is the"
                      value={data.position}
                      textAfterwards="from the Sun"
                    />
                  )}
                  <StaticData
                    title="age"
                    textBefore="around "
                    value={data.age}
                    textAfterwards=" billion years"
                  />
                  <StaticData
                    title="temperature"
                    value={data.temperature}
                    textBefore="around"
                    textAfterwards={data.name === "sun" ? " million °C" : "°C"}
                  />
                  <StaticData title="mass" text={data.mass} />
                </>
              )}

              {activeOptionIndex === -1 && (
                <>
                  <Accordion
                    title={data.facts ? "facts" : "lifespan"}
                    text={data.facts ? data.facts : data.lifespan}
                    color="purple"
                  />
                  <Accordion title="surface" text={data.surface} />
                  <Accordion
                    title={data.Atmosphere ? "atmosphere" : "composition"}
                    text={data.Atmosphere ? data.Atmosphere : data.composition}
                    color="green"
                  />
                </>
              )}

              {activeOptionIndex === 1 && (
                <>
                  {data.orbitalPeriod && (
                    <StaticData
                      title="orbital period"
                      textBefore={
                        data.name === "earth" ? "it takes " : "about "
                      }
                      value={data.orbitalPeriod}
                      textAfterwards={
                        data?.position && data.position >= 5
                          ? " Earth years"
                          : " earth days"
                      }
                    />
                  )}
                  {data?.rotation && (
                    <StaticData
                      title="rotation"
                      textBefore="one rotation takes "
                      value={data.rotation}
                      textAfterwards={
                        (data?.position &&
                          data.position >= 3 &&
                          data.position <= 4) ||
                        (data.position && data?.position >= 6)
                          ? " earth hours"
                          : " earth days"
                      }
                    />
                  )}

                  <ReadMore
                    title="diameter"
                    text={data.size ? data.size : "unknown"}
                   
                  />
                </>
              )}
            </div>
          </>
        ))}
      </article>
      <div className={styles.bgBlur} />
    </>
  );
};

export default ModalAstroDetails;
