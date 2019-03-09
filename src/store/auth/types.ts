import { User } from '../user/types'

export interface AuthState {
  isInitialized: boolean
  isAuthenticating: boolean
  isAuthenticated: boolean
  user?: User
}

export interface Credentials {
  email: string
  password: string
}
