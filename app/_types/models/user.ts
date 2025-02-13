export type UserDataType = {
  _id: string
  name: string
  email: string
  picture: string
  username: string
  password: string
  role: 'admin' | 'manager' | 'employee'
  status: 'active' | 'inactive' | 'pending' | 'deleted'
}
