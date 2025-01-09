import CoverflowSlider from "./components/CoverflowSlider";
import styles from "./App.module.css";
import "./starsApp.css";
import { generateSpaceLayer } from "./utils";
import { useEffect, useRef } from "react";
import CustomButton from "./components/CustomButton";

const App = () => {
  const divRef = useRef<HTMLDivElement>(null);
  const divRef2 = useRef<HTMLDivElement>(null);
  const divRef3 = useRef<HTMLDivElement>(null);
  useEffect(() => {
    generateSpaceLayer({
      size: "1px",
      starsLength: 600,
      duration: "12s",
      divRef: divRef,
    });

    generateSpaceLayer({
      size: "2px",
      starsLength: 300,
      duration: "9s",
      divRef: divRef2,
    });
    generateSpaceLayer({
      size: "5px",
      starsLength: 60,
      duration: "15s",
      divRef: divRef3,
    });
  }, []);
  return (
    <div className={styles.Container}>
      <div ref={divRef} className="space-1" />
      <div ref={divRef2} className="space-1" />
      <div ref={divRef3} className="space-1" />
      <CoverflowSlider />
    </div>
  );
};

export default App;
