import { UserRepository } from '../../../domain/repositories/UserRepository'
import { Email } from '../../../domain/valueObjects/Email'
import { UserForgotPasswordDto } from './UserForgotPasswordDto'

export class UserForgotPasswordService {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(userForgotPasswordDto: UserForgotPasswordDto): Promise<void> {
    const { email } = userForgotPasswordDto
    const userEmail = Email.create(email)

    await this.userRepository.forgotPassword(userEmail)
  }
}
