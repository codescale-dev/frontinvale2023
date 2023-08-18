import { useState } from 'react'
import { useValidate } from '../hooks/useValidate'
import Icon from '../shared/Icon'
import * as api from '../services/api'
import './Signup.css'

function Signup() {
  const { validate } = useValidate()
  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target

    setUser((prevProps) => ({
      ...prevProps,
      [name]: value
    }))
  }

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const result = validate(user)

    if (!result.success) {
      alert(result.error.issues[0].message)
      return
    }

    try {
      await api.post('/user', user)

      alert('Usuário Cadastrado com Sucesso!')
    }
    catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Icon />

      <h1>Front in Vale 2023</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Nome" />

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email" />

        <input
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
          placeholder="Senha" />

        <input
          type="password"
          name="confirmPassword"
          value={user.confirmPassword}
          onChange={handleChange}
          placeholder="Confirmar Senha" />

        <button type="submit">Cadastrar</button>

      </form>
    </>
  )
}

export default Signup
