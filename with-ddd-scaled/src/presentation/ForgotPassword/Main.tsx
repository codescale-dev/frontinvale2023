import { useContext, useState } from 'react'
import Icon from '../shared/Icon'
import './Main.css'
import { servicesContext } from '../../context'

function Main() {
  const { userForgotPasswordService } = useContext(servicesContext)
  const [user, setUser] = useState({
    email: ''
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
      await userForgotPasswordService.execute(user)

      alert('Um link de recuperação de senha foi encaminhado para seu email!')
    }
    catch (error) {
      alert(error)
    }
  }

  return (
    <>
      <Icon />

      <h1>Esqueci minha senha</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email" />

        <button type="submit">Recuperar Senha</button>

      </form>
    </>
  )
}

export default Main
