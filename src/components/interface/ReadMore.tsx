import { useState } from "react"
import { readMoreProps } from "../../types"
import styles from './ReadMore.module.css'


const ReadMore = ({ title, text, length }: readMoreProps) => {
    const [isExpanded, setIsExpanded] = useState<boolean>(false)

    function toggleReadMore(){
        setIsExpanded(!isExpanded)
    }
  return (
    <section className={styles.readMoreContainer}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.text}>
            {isExpanded ? text : `${text.slice(0, length)}...`}
        </p>
        {text.length > length && (
          <button className={styles.buttonReadMore} onClick={toggleReadMore}>
            {isExpanded ? 'read less' : 'read more'}
          </button>
        )}
    </section>
  )
}

export default ReadMore