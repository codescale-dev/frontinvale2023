import React from 'react'
import {
  CreateUserService
} from './application/User/Create/CreateUserService'
import {
  AxiosUserRepository
} from './infrastructure/AxiosUserRepository'
import {
  UpdateUserService
} from './application/User/Update/UpdateUserService'
import {
  DeleteUserService
} from './application/User/Delete/DeleteUserService'
import {
  LoginUserService
} from './application/User/Login/LoginUserService'
import {
  LogoutUserService
} from './application/User/Logout/LogoutUserService'
import {
  UserForgotPasswordService
} from './application/User/ForgotPassword/UserForgotPasswordService'
import {
  UserRecoverPasswordService
} from './application/User/RecoverPassword/UserRecoverPasswordService'

export interface ServicesContext {
  createUserService: CreateUserService
  updateUserService: UpdateUserService
  deleteUserService: DeleteUserService
  loginUserService: LoginUserService
  logoutUserService: LogoutUserService
  userForgotPasswordService: UserForgotPasswordService
  userRecoverPasswordService: UserRecoverPasswordService
}

// repositories
const axiosUserRepository = new AxiosUserRepository()

// services
const createUserService = new CreateUserService(axiosUserRepository)
const updateUserService = new UpdateUserService(axiosUserRepository)
const deleteUserService = new DeleteUserService(axiosUserRepository)
const loginUserService = new LoginUserService(axiosUserRepository)
const logoutUserService = new LogoutUserService(axiosUserRepository)
const userForgotPasswordService = new UserForgotPasswordService(axiosUserRepository)
const userRecoverPasswordService = new UserRecoverPasswordService(axiosUserRepository)

export const defaultValue: ServicesContext = {
  createUserService,
  updateUserService,
  deleteUserService,
  loginUserService,
  logoutUserService,
  userForgotPasswordService,
  userRecoverPasswordService
}

export const servicesContext = React.createContext<ServicesContext>(defaultValue)
