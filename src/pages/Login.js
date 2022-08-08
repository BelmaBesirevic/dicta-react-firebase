import { useState } from 'react'
import { useLogin } from '../hooks/useLogin'
import { Link } from 'react-router-dom'
import styles from '../styles/Form.module.css'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { error, login } = useLogin()

  const handleSubmit = (e) => {
    e.preventDefault()
    login(email, password)
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Login</h2>
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
        <button className={styles.button}>log in</button>
        <Link to='/signup'>
          <p>No account yet?</p>
        </Link>
        {error && <p>{error}</p>}
      </form>
    </div>
  )
}
