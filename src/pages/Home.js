import { useCollections } from '../hooks/useCollections'
import { useAuthContext } from '../hooks/useAuthContext'
import CreateDicta from '../components/CreateDicta'
import DictaList from '../components/DictaList'
import styles from "../styles/Home.module.css"

export default function DictaPage() {
  const {user} = useAuthContext()
  const { documents: terms } = useCollections('terms', ['uid', '==', user.uid])
  return (
    <div className={styles.grid}>
      <CreateDicta />
      {terms && <DictaList terms={terms} />}
    </div>
  )
}
