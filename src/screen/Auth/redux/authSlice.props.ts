export interface UserObject {
  email: string;
  password: string;
}

export interface UserState {
  loading: boolean;
  email: string | null;
  user: UserObject | any;
  error: string | null;
}
