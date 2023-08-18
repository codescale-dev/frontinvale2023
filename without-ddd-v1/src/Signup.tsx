import { useState } from 'react'
import Icon from './Icon'
import './Signup.css'

function Signup() {
  const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/g
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).{8,}$/g

  const [state, setState] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const validateName = (name: string) => {
    return name.length >= 3 && name.length <= 20
  }

  const validateEmail = (email: string) => {
    return emailRegex.test(email)
  }

  const validatePassword = (password: string) => {
    return passwordRegex.test(password)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    setState((prevProps) => ({
      ...prevProps,
      [name]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const { name, email, password, confirmPassword } = state

    if (password !== confirmPassword) {
      alert('As senhas devem ser iguais!')
      return
    }

    if (!validateName(name) ||
        !validateEmail(email) ||
        !validatePassword(password)) {
      alert('Erro ao cadastrar usuário!')
      return
    }

    try {
      await fetch('http://localhost:3000/user', {
        method: 'POST',
        body: JSON.stringify({ name, email, password })
      })

      alert('Usuário Cadastrado com Sucesso!')
    }
    catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Icon />

      <h1>Cadastrar Usuário</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="name"
          value={state.name}
          onChange={handleChange}
          placeholder="Nome" />

        <input
          type="email"
          name="email"
          value={state.email}
          onChange={handleChange}
          placeholder="Email" />

        <input
          type="password"
          name="password"
          value={state.password}
          onChange={handleChange}
          placeholder="Senha" />

        <input
          type="password"
          name="confirmPassword"
          value={state.confirmPassword}
          onChange={handleChange}
          placeholder="Confirmar Senha" />

        <button type="submit">Cadastrar</button>
        
      </form>
    </>
  )
}

export default Signup
