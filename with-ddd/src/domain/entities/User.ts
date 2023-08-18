import { Entity } from '../base/Entity'
import { Email } from '../valueObjects/Email'
import { Id } from '../valueObjects/Id'
import { Name } from '../valueObjects/Name'
import { Password } from '../valueObjects/Password'

interface UserProps {
  name: Name
  email: Email
  password?: Password
}

export class User extends Entity<UserProps> {
  private constructor(props: UserProps, id: Id) {
    super(props, id)
  }
  
  static create(props: UserProps, id?: Id): User {
    const userId = id ?? Id.create('')

    return new User(props, userId)
  }

  get name(): string {
    return this.props.name.value
  }

  get email(): string {
    return this.props.email.value
  }

  get password(): string | undefined {
    return this.props.password?.value
  }
}
