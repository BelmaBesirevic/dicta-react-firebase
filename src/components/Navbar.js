import styles from './styles/Navbar.module.css'
import { Link } from 'react-router-dom'
import { useLogout } from '../hooks/useLogout'

export default function Navbar() {
  const { logout } = useLogout()
  return (
    <header className={styles.header}>
      <div>
        <Link to='/'>
          <h3 className={styles.logo}>Dicta</h3>
        </Link>
      </div>
      <div>
          <Link to='/' className={styles.alinks}>
            Home
          </Link>
          <Link to='/login' className={styles.alinks}>
            Login
          </Link>
          <Link to='/signup' className={styles.alinks}>
            Signup
          </Link>
        <span className={styles.alinks} onClick={logout}>Logout</span>
        </div>
    </header>
  )
}
