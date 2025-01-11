import { modalAstroDetailsProps } from '../types'
import styles from './ModalAstroDetails.module.css'

const ModalAstroDetails = ({ astroData, isOpen, toggleModal, id }: modalAstroDetailsProps) => {

    //const name = astroData[id]?.name
    console.log(astroData)
  return (
    <article className={styles.modalContainer}>
        
            <div>asdasdas</div>
        
    </article>
  )
}

export default ModalAstroDetails