import { useContext, useState } from 'react'
import Icon from '../shared/Icon'
import './Main.css'
import { servicesContext } from '../../context'

function Main() {
  const { createUserService } = useContext(servicesContext)
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

    try {
      await createUserService.execute(user)

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

export default Main
