import { UserRepository } from '../../../domain/repositories/UserRepository'
import { Id } from '../../../domain/valueObjects/Id'
import { LogoutUserDto } from './LogoutUserDto'

export class LogoutUserService {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(logoutUserDto: LogoutUserDto): Promise<void> {
    const { id } = logoutUserDto
    const userId = Id.create(id)

    await this.userRepository.logout(userId)
  }
}
