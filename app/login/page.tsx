import { useState } from 'react'
import { useRouter } from 'next/router'
import styles from './login.module.css'

const LoginPage = () => {
  const router = useRouter()
  const [username, setUsername] = useState('')
  const [rememberMe, setRememberMe] = useState(false)

  const handleLogin = (e) => {
    e.preventDefault()

    if (rememberMe) {
      document.cookie = username=\
    } else {
      localStorage.setItem('username', username)
    }

    router.push('/')
  }

  return (
    <div className={styles.container}>
      <form className={styles.loginForm} onSubmit={handleLogin}>
        <h1>Login</h1>
        <input 
          type="text" 
          placeholder="Digite seu nome de usuário"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <div>
          <label>
            <input 
              type="checkbox" 
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            /> Manter conectado
          </label>
        </div>
        <button type="submit">Entrar</button>
      </form>
    </div>
  )
}

export default LoginPage
