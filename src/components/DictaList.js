import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../config/firebase.config'
import styles from './styles/DictaList.module.css'


export default function DictaList({ terms }) {
  const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, 'terms', id))
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className='right'>
      {terms.map((term, id) => {
        return (
          <div className={styles.container} key={id} id={id}>
            <h1 className={styles.title}>{term.title}</h1>
            <h3>Definition</h3>
            <p className={styles.definition}>{term.definition}</p>
            <p className={styles.reference}>
              <a href={term.reference} rel='noreferrer' target='_blank'>
                Reference
              </a>
            </p>
            <button className={styles.button} onClick={() => handleDelete(term.id)}>Delete</button>
          </div>
        )
      })}
    </div>
  )
}
