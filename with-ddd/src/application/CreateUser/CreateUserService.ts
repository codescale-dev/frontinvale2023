import { User } from '../../domain/entities/User'
import { UserRepository } from '../../domain/repositories/UserRepository'
import { Email } from '../../domain/valueObjects/Email'
import { Name } from '../../domain/valueObjects/Name'
import { Password } from '../../domain/valueObjects/Password'
import { CreateUserRequestDto, CreateUserResponseDto } from './CreateUserDto'

export class CreateUserService {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(createUserDto: CreateUserRequestDto): Promise<CreateUserResponseDto> {
    const { name, email, password } = createUserDto
    
    const user = User.create({
      name: Name.create(name),
      email: Email.create(email),
      password: Password.create(password)
    })

    const createdUser = await this.userRepository.create(user)

    return {
      id: createdUser.id.value,
      name, 
      email
    }
  }
}
