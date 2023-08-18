import { ValueObject } from '../base/ValueObject'
import { InvalidPasswordError } from '../errors/InvalidPasswordError'
import { NotStrongPasswordError } from '../errors/NotStrongPasswordError'

interface PasswordProps {
  value: string
}

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).{8,}$/g

export class Password extends ValueObject<PasswordProps> {
  private constructor(password: string) {
    super({ value: password })
  }

  static create(password: string) {
    if (typeof password !== 'string') {
      throw new InvalidPasswordError()
    }

    if (!passwordRegex.test(password)) {
      throw new NotStrongPasswordError()
    }

    return new Password(password)
  }

  get value() {
    return this.props.value
  }
}
