import axios from 'axios'
import { User } from '../domain/entities/User'
import { UserRepository } from '../domain/repositories/UserRepository'
import { Name } from '../domain/valueObjects/Name'
import { Email } from '../domain/valueObjects/Email'
import { Id } from '../domain/valueObjects/Id'


export class AxiosUserRepository implements UserRepository {
  private axios = axios.create({
    baseURL: 'http://localhost:3000'
  })

  async create(user: User): Promise<User> {
    const response = await this.axios.post('/user', {
      name: user.name,
      email: user.email,
      password: user.password
    })

    const { id, name, email } = response.data

    const createdUser = User.create({
      name: Name.create(name),
      email: Email.create(email)
    }, Id.create(id))

    return createdUser
  }
}
