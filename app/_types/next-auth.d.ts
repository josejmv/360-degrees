// types
import type { UserDataType } from '@/_types/models/user'

declare module 'next-auth' {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: UserDataType
  }

  type User = UserDataType
}

declare module 'next-auth/jwt' {
  interface JWT {
    user: UserDataType
  }
}
