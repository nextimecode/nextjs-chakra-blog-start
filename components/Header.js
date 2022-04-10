import Link from 'next/link'
import styles from '../styles/Header.module.css'

export default function Header() {
  return (
    <header className={styles.header}>
      <Link href="/">
        <a className={styles.title}>Meu Blog</a>
      </Link>
      <div className={styles.menu}>
        <Link href="/archives"><a>Arquivos</a></Link>
      </div>
    </header>
  )
}
