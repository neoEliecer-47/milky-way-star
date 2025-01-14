import { staticDataProps } from "../types";
import styles from "./StaticData.module.css";

const StaticData = ({
  title,
  text,
  textBefore,
  textAfterwards,
  value,
}: staticDataProps) => {
  function buildDynamicData() {
    if (text) return text;
    let positionNumber = "";
    if (title === "position") {
      positionNumber =
        value === 2
          ? " 2nd "
          : value === 3
          ? " 3rd "
          : value === 1
          ? " 1st "
          : ` ${value}th `;
      return textBefore + positionNumber + textAfterwards;
    }
    if(textBefore && title === 'temperature') return textBefore + ` ${value}` + textAfterwards
    if(textBefore) return textBefore + value + textAfterwards
  }
  return (
    <div className={styles.containerData}>
      <h2 className={styles.title}>{title}: </h2>
      <h4 className={styles.text}>{buildDynamicData()}</h4>
    </div>
  );
};

export default StaticData;
