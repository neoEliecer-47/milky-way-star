import { dataAstrosProps } from '../types';
import styles from './CoverflowSlider.module.css'

const AstroDetails = ({ dataAstros, currentIndex, handleCLick }: dataAstrosProps) => {
  return (
    <>
        {dataAstros.map(({ imgSrc, id }, index) => {
          //calculate slide position based on index
          const offset = index - currentIndex;
          const scale = offset === 0 ? 1 : 0.8; //larger scale for the active slide
          const zIndex = offset === 0 ? 10 : 5; //higher z-index for the active slide

          return (
            <div
              key={id}
              className={`${styles.slide} ${offset === 0 ? "active" : ""}`}
              style={{
                transform: `translateX(${offset * 100}%) rotateY(${
                  offset * -15
                }deg) scale(${scale})`,
                zIndex: zIndex,
                opacity: offset < -2 || offset > 2 ? 0 : 1,
              }} //hide distant elements
              onClick={() => handleCLick(index)}
            >
              <img
                src={imgSrc}
                alt="planet"
                style={{ height: "20rem", width: "20rem" }}
              />
            </div>
          );
        })}
    </>
  )
}

export default AstroDetails