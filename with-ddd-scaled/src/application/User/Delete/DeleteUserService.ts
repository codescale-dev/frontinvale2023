import { UserRepository } from '../../../domain/repositories/UserRepository'
import { Id } from '../../../domain/valueObjects/Id'
import { DeleteUserDto } from './DeleteUserDto'

export class DeleteUserService {
  private userRepository: UserRepository

  constructor(userRepository: UserRepository) {
    this.userRepository = userRepository
  }

  async execute(deleteUserDto: DeleteUserDto): Promise<void> {
    const { id } = deleteUserDto
    const userId = Id.create(id)

    await this.userRepository.delete(userId)
  }
}
