import CoverflowSlider from "./components/CoverflowSlider";
import styles from "./App.module.css";
import { generateSpaceLayer } from "./utils";

generateSpaceLayer({
  size: "2px",
  selector: ".space-1",
  starsLength: 400,
  duration: "5s",
});

const App = () => {
  return (
    <div className={styles.Container}>
      <div className="space-1" />
      <CoverflowSlider />
    </div>
  );
};

export default App;
