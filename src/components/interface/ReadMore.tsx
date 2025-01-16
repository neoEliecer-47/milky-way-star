import { useRef, useState } from "react";
import { readMoreProps } from "../../types";
import styles from "./ReadMore.module.css";

const ReadMore = ({ title, text }: readMoreProps) => {
  const [hiddenText, setHiddenText] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  function toggleReadMore() {
    setHiddenText(!hiddenText);
  }
  return (
    <section className={styles.readMoreContainer} onClick={toggleReadMore} style={{animation: !hiddenText ? 'none' : ''}}>
      <h1 className={styles.title}>{title}</h1>

      <div
        ref={containerRef}
        className={styles.text}
        style={{
          height: hiddenText
            ? "0px"
            : `${containerRef.current?.scrollHeight}px`,
        }}
      >
        {text}
      </div>
      
    </section>
  );
};

export default ReadMore;
