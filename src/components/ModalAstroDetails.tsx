
import { useEffect, useRef } from 'react';
import { modalAstroDetailsProps } from '../types'
import styles from './ModalAstroDetails.module.css'
import AstroSurfaceImage from './AstroSurfaceImage';

const ModalAstroDetails = ({ astroData, isOpen, toggleModal }: modalAstroDetailsProps) => {
const modalRef = useRef<HTMLElement | null>(null)
 console.log(astroData)
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
        {astroData.map(({ name, images })=> (
          <>
            <div>{name}</div>
            <section>
              {images?.map(({ imgSrc })=>(
               <AstroSurfaceImage imgSrc={imgSrc} />
              ))}
            </section>
          </>
          
        ))}
           
    </article>
        <div className={styles.bgBlur}/>
    </>
  )
}

export default ModalAstroDetails