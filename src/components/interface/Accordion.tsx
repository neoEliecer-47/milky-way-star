import classNames from "classnames";
import { useRef, useState } from "react";
import styles from "./Accordion.module.css";
import AccordionArrow from "./AccordionArrow";

const Accordion = ({
  title,
  text,
}: {
  title: string;
  text: string | undefined;
}) => {
  const [hiddenContent, setHiddenContent] = useState(true);
  const accordionRef = useRef<HTMLDivElement>(null);

  function handleAccordion() {
    return setHiddenContent(!hiddenContent);
  }
  return (
    <section
      className={classNames(styles.container, "lg:w-[25rem] gap-3 m-auto")}
      onClick={handleAccordion}
    >
      <div className={styles.containerTitle}>
        <summary
          className={classNames(styles.summary, "bg-blue-100 dark:bg-gray-200")}
        >
          {title}
        </summary>
        <AccordionArrow stroke={5} className={classNames(styles.arrow,  !hiddenContent && styles.arrwAnimation)}/>
      </div>
      <div
        ref={accordionRef}
        className={classNames(
          styles.content,
          !hiddenContent && styles.contentActive,
          "bg-white dark:bg-black/20 dark:text-white"
        )}
        onClick={!hiddenContent ? handleAccordion : undefined}
        style={{
          height: hiddenContent
            ? "0px"
            : `${accordionRef.current?.scrollHeight}px`,
        }}
      >
        <p
          style={{
            padding: "0.5rem",
            margin: "0",
          }}
          className={styles.parrafo}
        >
          {text}
        </p>
      </div>
    </section>
  );
};

export default Accordion;
