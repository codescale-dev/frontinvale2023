import { User } from '../entities/User'
import { Email } from '../valueObjects/Email'
import { Id } from '../valueObjects/Id'

export interface UserRepository {
  create(user: User): Promise<User>
  login(user: User): Promise<string>
  logout(userId: Id): Promise<void>
  forgotPassword(userEmail: Email): Promise<void>
  recoverPassword(userEmail: Email): Promise<void>
  update(user: User): Promise<void>
  delete(userId: Id): Promise<void>
}
