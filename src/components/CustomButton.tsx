import styles from './CustomButton.module.css'

const CustomButton = ({ text }: {text: string}) => {
  return (
    <button className={styles.buttonContainer}>
        {text}
    </button>
  )
}

export default CustomButton