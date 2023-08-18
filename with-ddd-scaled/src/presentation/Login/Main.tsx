import { useContext, useState } from 'react'
import Icon from '../shared/Icon'
import './Main.css'
import { servicesContext } from '../../context'

function Main() {
  const { loginUserService } = useContext(servicesContext)
  const [user, setUser] = useState({
    email: '',
    password: ''
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
      await loginUserService.execute(user)

      alert('Usuário Logado com Sucesso!')
    }
    catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Icon />

      <h1>Login</h1>

      <form onSubmit={handleSubmit}>

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

        <button type="submit">Login</button>

      </form>
    </>
  )
}

export default Main
