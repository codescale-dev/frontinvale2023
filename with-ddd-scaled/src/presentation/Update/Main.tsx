import { useContext, useState } from 'react'
import Icon from '../shared/Icon'
import './Main.css'
import { servicesContext } from '../../context'
import { useParams } from 'react-router-dom'

function Main() {
  const { id } = useParams()
  const { updateUserService } = useContext(servicesContext)
  const [user, setUser] = useState({
    id: id || '',
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
      await updateUserService.execute(user)

      alert('Usuário Atualizado com Sucesso!')
    }
    catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Icon />

      <h1>Atualizar Usuário</h1>

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

        <button type="submit">Atualizar</button>

      </form>
    </>
  )
}

export default Main
