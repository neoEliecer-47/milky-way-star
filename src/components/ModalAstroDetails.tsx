import { useEffect, useRef, useState } from "react";
import { modalAstroDetailsProps } from "../types";
import styles from "./ModalAstroDetails.module.css";
import AstroSurfaceImage from "./AstroSurfaceImage";
import StaticData from "./StaticData";
import Accordion from "./interface/Accordion";
import ReadMore from "./interface/ReadMore";
import NavbarModal from "./interface/NavbarModal";

const ModalAstroDetails = ({
  astroData,
  isOpen,
  toggleModal,
}: modalAstroDetailsProps) => {
  const modalRef = useRef<HTMLElement | null>(null);
  const [navActive, setNavActive] = useState(false)
 

  function handleClickOutside(e: MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      toggleModal(false);
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const titles = ['title1', 'title2', 'title3']

  return (
    <>
      <article ref={modalRef} className={styles.modalContainer}>
        <NavbarModal titles={titles}/>
        {astroData.map((data) => (
          <>
            <div className={styles.headerModalContainer}>
              <AstroSurfaceImage images={data.images} />
              <h1 className={styles.name}>{data.name}</h1>
            </div>
            <StaticData title="type" text={data.type} />
            {data.position && (
              <StaticData
                title="position"
                textBefore="It is the"
                value={data.position}
                textAfterwards="from the Sun"
              />
            )}
            
            
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
            <StaticData
              title="temperature"
              value={data.temperature}
              textBefore="around"
              textAfterwards={data.name === "sun" ? " million °C" : "°C"}
            />
            {data.orbitalPeriod && (
              <StaticData
                title="orbital period"
                textBefore={data.name === "earth" ? "it takes " : "about "}
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
            <StaticData
              title="age"
              textBefore="around "
              value={data.age}
              textAfterwards=" billion years"
            />
            <StaticData title="mass" text={data.mass} />
            <ReadMore title="diameter" text={data.size} length={20}/>
          </>
        ))}
      </article>
      <div className={styles.bgBlur} />
    </>
  );
};

export default ModalAstroDetails;
