export class NameLengthError extends Error {
  constructor() {
    super('Nome deve ter entre 3 e 20 caracteres!')
  }
}
