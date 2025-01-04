import { moonsProps } from "../types"
import styles from './MoonSlider.module.css'


const MoonSlider = ({ moons }: moonsProps) => {
    
  return (
    <div className={styles.sliderContainer}>
        <div className={styles.sliderCircle}>
            {moons.map((moon) => (
                <div key={moon.id} className={styles.sliderImage}>
                    <img
                        
                        src={moon.imgSrc}
                        alt="moon"
                        style={{ height: "2.5rem", width: "2.5rem" }}
                    />
                    
                </div>
            ))}
        </div>
    </div>
  )
}

export default MoonSlider