// main tools
import NextAuth from 'next-auth'

// utils
import { authOptions } from '.'

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }
