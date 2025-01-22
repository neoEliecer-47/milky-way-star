import { useEffect, useRef, useState } from "react";
import { modalAstroDetailsProps } from "../types";
import styles from "./ModalAstroDetails.module.css";
import AstroSurfaceImage from "./AstroSurfaceImage";
import StaticData from "./StaticData";
import Accordion from "./interface/Accordion";
import ReadMore from "./interface/ReadMore";
import NavbarModal from "./interface/NavbarModal";
import { astrosShadowColorsModal, astrosTitleColors } from "../constants";
import classNames from "classnames";

const ModalAstroDetails = ({
  astroData,
  toggleModal,
}: modalAstroDetailsProps) => {
  const [isClosing, setIsClosing] = useState<boolean>(false);
  const [activeOptionIndex, setActiveOptionIndex] = useState<number>(-1);
  const modalRef = useRef<HTMLElement | null>(null);

  function handleClickOutside(e: MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      handleCloseModal();
    }
  }

  function handleCloseModal() {
    setIsClosing(true); //trigger the closing animation

    //wait for the animation to complete
    setTimeout(() => {
      setIsClosing(false);
      toggleModal(false);
    }, 450);
  }

  function buildBoxShadowForEachAstro(index: number) {
    return astrosShadowColorsModal[index];
  }

  function buildBackgroundGradientForEachAstro(index: number) {
    return astrosTitleColors[index];
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const titles = ["features", "atribbutes", "aspects"];

  return (
    <>
      <article
        ref={modalRef}
        className={classNames(
          styles.modalContainer,
          isClosing && styles.modalClosingAnimation
        )}
        style={{
          boxShadow: `0px 2px 13px 3px ${buildBoxShadowForEachAstro(
            astroData[0].id
          )}`,
        }}
      >
        {astroData.map((data) => (
          <>
            <div className={styles.headerModalContainer}>
              <AstroSurfaceImage images={data.images} onCloseModal={handleCloseModal}/>

              <h1
                className={styles.name}
                style={{
                  background: `linear-gradient(to left, ${buildBackgroundGradientForEachAstro(
                    data.id
                  )}`,
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
                <div className={styles.wrapperEachData}>
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
                </div>
              )}

              {activeOptionIndex === -1 && (
                <div className={styles.wrapperEachData}>
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
                </div>
              )}

              {activeOptionIndex === 1 && (
                <div className={styles.wrapperEachData}>
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
                  <ReadMore title="gravity" text={data.gravity} />
                </div>
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
