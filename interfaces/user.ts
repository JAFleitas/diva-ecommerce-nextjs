export interface IUser {
  _id: string;
  name: string;
  email: string;
  password?: string;
  role: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface IDataResponseUser {
  token: string;
  user: { email: string; role: string; name: string };
}
