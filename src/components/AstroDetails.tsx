import { dataAstrosProps } from '../types';
import styles from './CoverflowSlider.module.css'

const AstroDetails = ({ dataAstros, currentIndex, handleCLick }: dataAstrosProps) => {

function buildScale(offset: number) {
    if (offset === -2 || offset === 2) {
        return 0.6;
    }
    return offset === 0 ? 1 : 0.8;
  }



  return (
    <>
        {dataAstros.map(({ imgSrc, id, moons }, index) => {
          //calculate slide position based on index
          const offset = index - currentIndex;
          const scale =  buildScale(offset)//larger scale for the active slide
          const zIndex = offset === 0 ? 10 : 5; //higher z-index for the active slide

          return (
            <>
         
            <div
              key={id}
              className={`${styles.slide} ${offset === 0 ? "active" : ""}`}
              style={{
                transform: `translateX(${offset * 100}%) rotateY(${
                  offset * -5
                }deg) scale(${scale})`,
                zIndex: zIndex,
                opacity: offset < -2 || offset > 2 ? 0 : 1,
              }} //hide distant elements
              onClick={() => handleCLick(index)}
            >
                 {moons && (
                <div style={{ position: "absolute", top: "50%", left: "50%" }}>
                    {moons.map((moon) => (
                    <img
                        key={moon.id}
                        src={moon.imgSrc}
                        alt="moon"
                        style={{ height: "5rem", width: "5rem" }}
                    />
                    ))}
                </div>
            )}
              
              <img
                src={imgSrc}
                alt="planet"
                style={{ height: "20rem", width: "20rem" }}
              />
            </div>
            </>
          );
        })}
    </>
  )
}

export default AstroDetails