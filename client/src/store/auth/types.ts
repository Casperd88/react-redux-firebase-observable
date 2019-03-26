export type AuthToken = string | null;

export interface AuthState {
  initialized: boolean;
  loading: boolean;
  token: AuthToken;
}

export interface Credentials {
  email: string;
  password: string;
}
