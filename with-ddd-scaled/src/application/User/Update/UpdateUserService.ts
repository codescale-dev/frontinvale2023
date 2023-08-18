import { User } from '../../../domain/entities/User'
import { UserRepository } from '../../../domain/repositories/UserRepository'
import { Email } from '../../../domain/valueObjects/Email'
import { Id } from '../../../domain/valueObjects/Id'
import { Name } from '../../../domain/valueObjects/Name'
import { Password } from '../../../domain/valueObjects/Password'
import { UpdateUserDto } from './UpdateUserDto'

export class UpdateUserService {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(updateUserDto: UpdateUserDto): Promise<void> {
    const { id, name, email, password } = updateUserDto
    
    const user = User.create({
      name: Name.create(name),
      email: Email.create(email),
      password: Password.create(password)
    }, Id.create(id))

    await this.userRepository.update(user)
  }
}
