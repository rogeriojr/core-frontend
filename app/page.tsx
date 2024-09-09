import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from './page.module.css'

const HomePage = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')

  useEffect(() => {
    const storedUsername = localStorage.getItem('username') || ''
    setUsername(storedUsername)
  }, [])

  const handleLogout = () => {
    localStorage.removeItem('username')
    document.cookie = 'username=; Max-Age=-99999999;' // Remove cookie
    router.push('/login')
  }

  return (
    <div className={styles.container}>
      <h1>Bem-vindo, {username || 'Visitante'}</h1>
      <nav className={styles.menu}>
        <Link href="/partners">Parceiros</Link>
        <Link href="/companies">Empresas Externas</Link>
        <Link href="/about">Sobre o Projeto</Link>
        <button onClick={handleLogout}>Sair</button>
      </nav>
    </div>
  )
}

export default HomePage
