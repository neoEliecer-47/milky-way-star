import styles from './CustomButton.module.css'

const CustomButton = ({ text }: {text: string}) => {
  return (
    <button className={styles.buttonContainer}>
        <span>{text}</span>
    </button>
  )
}

export default CustomButton