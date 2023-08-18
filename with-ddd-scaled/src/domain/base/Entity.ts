import { Id } from '../valueObjects/Id'
import { ValueObject } from './ValueObject'

export class Entity<T> extends ValueObject<T> {
  id: Id

  protected constructor(props: T, id?: Id) {
    super(props)
    this.id = id || Id.create()
  }
}
