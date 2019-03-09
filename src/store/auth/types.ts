import { User } from '../user/types'

export interface AuthState {
  isInitialized: boolean
  isAuthenticating: boolean
  isAuthenticated: boolean
  user: User | null
}

export interface Credentials {
  email: string
  password: string
}
