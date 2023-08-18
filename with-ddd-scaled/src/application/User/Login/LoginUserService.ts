import { User } from '../../../domain/entities/User'
import { UserRepository } from '../../../domain/repositories/UserRepository'
import { Email } from '../../../domain/valueObjects/Email'
import { Password } from '../../../domain/valueObjects/Password'
import { LoginUserRequestDto, LoginUserResponseDto } from './LoginUserDto'

export class LoginUserService {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(loginUserDto: LoginUserRequestDto): Promise<LoginUserResponseDto> {
    const { email, password } = loginUserDto
    
    const user = User.create({
      email: Email.create(email),
      password: Password.create(password)
    })

    const token = await this.userRepository.login(user)

    return { token }
  }
}
