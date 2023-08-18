import { ValueObject } from '../base/ValueObject'

interface IdProps {
  value: string
}

export class Id extends ValueObject<IdProps> {
  private constructor(id: string) {
    super({ value: id })
  }

  static create(id: string): Id {
    return new Id(id)
  }

  get value(): string {
    return this.props.value
  }
}
