import CoverflowSlider from "./components/CoverflowSlider";
import styles from "./App.module.css";

type spaceLayer = {
  size: string;
  selector: string;
  starsLength: number;
  duration: string;
};

function generateSpaceLayer(options: spaceLayer) {
  const { size, selector, starsLength, duration } = options;
  const layer = [];

  for (let i = 0; i < starsLength; i++) {
    const x = Math.floor(Math.random() * 100);
    const y = Math.floor(Math.random() * 100);
    layer.push(`${x}vw ${y}vh 0 white, ${x}vw ${y + 100}vh 0 white`);
  }

  const container = document.querySelector(selector);
  container?.style.setProperty("--space-layer", layer.join(","));
  container?.style.setProperty("--size", size);
}

generateSpaceLayer({
  size: "2px",
  selector: ".space-1",
  starsLength: 400,
  duration: "5s",
});

const App = () => {
  return (
    <div className={styles.Container}>
      <div className="space-1"></div>
      <CoverflowSlider />
    </div>
  );
};

export default App;
