import React from 'react'
import { CreateUserService } from './application/CreateUser/CreateUserService'
import { AxiosUserRepository } from './infrastructure/AxiosUserRepository'

export interface ServicesContext {
  createUserService: CreateUserService
}

const axiosUserRepository = new AxiosUserRepository()
const createUserService = new CreateUserService(axiosUserRepository)

export const defaultValue: ServicesContext = { createUserService }

export const servicesContext = React.createContext<ServicesContext>(defaultValue)
