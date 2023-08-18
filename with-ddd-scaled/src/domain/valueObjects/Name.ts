import { ValueObject } from '../base/ValueObject'
import { InvalidNameError } from '../errors/InvalidNameError'
import { NameLengthError } from '../errors/NameLengthError'

interface NameProps {
  value: string
}

export class Name extends ValueObject<NameProps> {
  private constructor(name: string) {
    super({ value: name })
  }

  static create(name: string) {
    if (typeof name !== 'string') {
      throw new InvalidNameError()
    }

    if (name.length < 3 ||
        name.length > 20) {
      throw new NameLengthError()
    }

    return new Name(name)
  }

  get value() {
    return this.props.value
  }
}
