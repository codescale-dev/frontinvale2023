import { ValueObject } from '../base/ValueObject'
import { InvalidEmailError } from '../errors/InvalidEmailError'

interface EmailProps {
  value: string
}

const emailRegex = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/

export class Email extends ValueObject<EmailProps> {
  private constructor(email: string) {
    super({ value: email })
  }

  static create(email: string) {
    if (typeof email !== 'string' ||
        !emailRegex.test(email)) {
      throw new InvalidEmailError()
    }

    return new Email(email)
  }

  get value() {
    return this.props.value
  }
}
