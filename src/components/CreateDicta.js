import { useState } from 'react'
import { db } from '../config/firebase.config'
import { useAuthContext } from '../hooks/useAuthContext'

// styles
import styles from './styles/CreateDicta.module.css'

import {
  addDoc,
  collection,
} from 'firebase/firestore'

export default function CreateDicta() {
  const [title, setTitle] = useState('')
  const [definition, setDefinition] = useState('')
  const [reference, setReference] = useState('')
  const {user } = useAuthContext()

  const handleAdd = async (e) => {
    e.preventDefault()
    const res = await addDoc(collection(db, 'terms'), {
      title: title,
      definition: definition,
      reference: reference,
      uid: user.uid
    })
      .then(() => {
        // Reset states
        setTitle('')
        setDefinition('')
        setReference('')
      })
      .catch((err) => {
        alert(err.message)
      })
  }
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Enter your term</h1>
      <form className={styles.form} onSubmit={handleAdd}>
        <input
          type='text'
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder='Enter the Title'
        />
        <br />
        <textarea
          className={styles.textarea}
          value={definition}
          cols='30'
          rows='10'
          placeholder='Enter the Definition'
          onChange={(e) => setDefinition(e.target.value)}
        />
        <br />
        <input
          type='text'
          value={reference}
          onChange={(e) => setReference(e.target.value)}
          placeholder='Enter the Reference'
        />
        <br />
        <button className={styles.button} type='submit'>Add</button>
      </form>
    </div>
  )
}
