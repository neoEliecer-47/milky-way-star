import { useRef, useState } from "react";
import { readMoreProps } from "../../types";
import styles from "./ReadMore.module.css";

const ReadMore = ({ title, text, length }: readMoreProps) => {
  const [hiddenText, setHiddenText] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  function toggleReadMore() {
    setHiddenText(!hiddenText);
  }
  return (
    <section className={styles.readMoreContainer} onClick={toggleReadMore}>
      <h1 className={styles.title}>{title}</h1>

      <div
        ref={containerRef}
        className={styles.text}
        style={{
          height: hiddenText
            ? "15px"
            : `${containerRef.current?.scrollHeight}px`,
        }}
      >
        {hiddenText ? `${text.slice(0, length)}... read more` : text}
      </div>
      
    </section>
  );
};

export default ReadMore;
