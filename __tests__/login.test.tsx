import { render, screen, fireEvent } from '@testing-library/react'
import LoginPage from '../app/login/page'
import '@testing-library/jest-dom/extend-expect'

describe('LoginPage', () => {
  it('renders correctly and handles login', () => {
    render(<LoginPage />)
    expect(screen.getByText('Login')).toBeInTheDocument()
    
    fireEvent.change(screen.getByPlaceholderText('Digite seu nome de usuário'), { target: { value: 'user123' } })
    fireEvent.click(screen.getByText('Entrar'))
    expect(window.localStorage.getItem('username')).toEqual('user123')
  })
})
