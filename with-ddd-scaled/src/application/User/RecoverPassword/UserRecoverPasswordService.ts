import { UserRepository } from '../../../domain/repositories/UserRepository'
import { Email } from '../../../domain/valueObjects/Email'
import { UserRecoverPasswordDto } from './UserRecoverPasswordDto'

export class UserRecoverPasswordService {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(userRecoverPasswordDto: UserRecoverPasswordDto): Promise<void> {
    const { email } = userRecoverPasswordDto
    const userEmail = Email.create(email)

    await this.userRepository.recoverPassword(userEmail)
  }
}
