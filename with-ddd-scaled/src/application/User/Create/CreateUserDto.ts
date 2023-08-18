export interface CreateUserRequestDto {
  name: string
  email: string
  password: string
}

export interface CreateUserResponseDto {
  id: string
  name: string
  email: string
}
