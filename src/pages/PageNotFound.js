import styles from '../styles/PageNotFound.module.css'

export default function PageNotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>404</h1>
      <h2 className={styles.heading}>Sorry, Page is not Found</h2>
    </div>
  )
}
