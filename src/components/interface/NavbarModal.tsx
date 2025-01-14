import { useState } from "react";
import styles from "./NavbarModal.module.css";
import classNames from "classnames";

const NavbarModal = ({ titles }: { titles?: string[] }) => {
  
    const [activeIndex, setActiveIndex] = useState<number>(0);

  function handleActiveStack(index: number){
    setActiveIndex(index)
  }
  return (
    <nav className={styles.navContainer}>
      <div className={styles.stack} style={{ transform: `translateX(${activeIndex * 100}%)`, width: `calc(70% / ${titles?.length})` }} />
      {titles?.map((title, index) => (
        <div
          key={index}
          onClick={()=> handleActiveStack(index-1)}
          className={classNames(styles.navOption, index === activeIndex ? styles.active : '')}
        >
          {title}
        </div>
      ))}
    </nav>
  );
};

export default NavbarModal;
