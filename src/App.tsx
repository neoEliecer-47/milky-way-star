import CoverflowSlider from "./components/CoverflowSlider";
import styles from "./App.module.css";
import "./starsApp.css";
import { generateSpaceLayer } from "./utils";
import { useEffect, useRef } from "react";

const App = () => {
  const divRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    generateSpaceLayer({
      size: "2px",
      selector: ".space-1",
      starsLength: 400,
      duration: "5s",
      divRef: divRef,
    });
  }, []);
  return (
    <div className={styles.Container}>
      <div ref={divRef} className="space-1" />
      <CoverflowSlider />
    </div>
  );
};

export default App;
