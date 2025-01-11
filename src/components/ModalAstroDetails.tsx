import { useRef } from 'react'
import { modalAstroDetailsProps } from '../types'
import styles from './ModalAstroDetails.module.css'

const ModalAstroDetails = ({ astroData, isOpen, toggleModal }: modalAstroDetailsProps) => {

    //const name = astroData[id]?.name
  const initialData = useRef(astroData)
  console.log(initialData.current)
    
  return (
    <article className={styles.modalContainer}>
        <h1 style={{ color: 'black' }}>ggggg</h1>
            {initialData.current.name}
        
    </article>
  )
}

export default ModalAstroDetails