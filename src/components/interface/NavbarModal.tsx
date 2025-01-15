import styles from "./NavbarModal.module.css";
import classNames from "classnames";
import { navbarModalProps } from "../../types";

const NavbarModal = ({
  titles,
  activeOptionIndex,
  updateOptionIndex,
}: navbarModalProps) => {
  function handleActiveStack(index: number) {
   
    updateOptionIndex(index);
  }

  
  return (
    <nav className={styles.navContainer}>
      <div
        className={styles.stack}
        style={{
          transform: `translateX(${activeOptionIndex * 100}%)`,
          width: `calc(90% / ${titles?.length})`,
        }}
      />
      {titles?.map((title, index) => (
        <div
          key={index}
          onClick={() => handleActiveStack(index - 1)}
          className={classNames(
            styles.navOption,
            index === activeOptionIndex ? styles.active : ""
          )}
        >
          {title}
        </div>
      ))}
    </nav>
  );
};

export default NavbarModal;
