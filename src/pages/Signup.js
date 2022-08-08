import { useState } from 'react'
import { useSignup } from '../hooks/useSignup'
import { Link } from 'react-router-dom'
import styles from '../styles/Form.module.css'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, signup } = useSignup()

  const handleSubmit = (e) => {
    e.preventDefault()
    signup(email, password)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Signup</h2>
      <form onSubmit={handleSubmit}>
        <label>
          <span>email:</span>
          <input
            required
            type='email'
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='Email'
          />
        </label>
        <label>
          <span>password:</span>
          <input
            required
            type='password'
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='Password'
          />
        </label>
        <button className={styles.button}>sign up</button>
        {error && <p>{error}</p>}
        <Link to='/login'>
          <p>Already have an account?</p>
        </Link>
      </form>
    </div>
  )
}
