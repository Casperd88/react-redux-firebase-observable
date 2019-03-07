import { User } from '../user/types'

export interface AuthState {
  isAuthenticating: boolean
  isAuthenticated: boolean
  user?: User
}

export interface Credentials {
  email: string
  password: string
}
