
import { useEffect, useRef } from 'react';
import { modalAstroDetailsProps } from '../types'
import styles from './ModalAstroDetails.module.css'

const ModalAstroDetails = ({ astroData, isOpen, toggleModal }: modalAstroDetailsProps) => {
const modalRef = useRef<HTMLElement | null>(null)
  
  function handleClickOutside(e: MouseEvent) {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
     toggleModal(false)
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
    
  return (
    <>
      <article ref={modalRef} className={styles.modalContainer}>
        <h1 style={{ color: 'black' }}>{astroData[0].name}</h1>
           
    </article>
        <div className={styles.bgBlur}/>
    </>
  )
}

export default ModalAstroDetails