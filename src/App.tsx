import CoverflowSlider from "./components/CoverflowSlider"
import styles from './App.module.css'

function generateSpaceLayer(){
  const layer = []
  const starsLength = 200;

  for(let i = 0; i < starsLength; i++){
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 white`)
  }

  const container = document.querySelector(".space-1")
  container?.style?.setProperty("--space-layer", layer.join(","))
}

generateSpaceLayer()


const App = () => {
  return (
   <div className={styles.Container}>
     <div className='space-1'></div>
     <CoverflowSlider />
   </div>
  )
}

export default App