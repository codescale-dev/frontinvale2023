export class NotStrongPasswordError extends Error {
  constructor() {
    super('A senha deve ser forte!')
  }
}
