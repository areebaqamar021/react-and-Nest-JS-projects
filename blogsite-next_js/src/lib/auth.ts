import { IUser, loginApi } from "@src/apis";
import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { JWT } from "next-auth/jwt"
declare module "next-auth" {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  interface User extends IUser { }

  interface Session {
    user: IUser;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: IUser;
  }
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        username: { label: "Username" },
        password: { label: "Password", type: "password" },
      },
      async authorize(props) {
        try {
          if (!props.password && !props.username) return null
          const user = await loginApi({ username: props.username as string, password: props.password as string })
          return { ...user, id: user.id.toString() }
        } catch (error) {
          console.log("🚀 ~ authorize ~ error:", error)
          return null
        }
      },
    }),
  ],
  callbacks: {
    jwt: ({ token, user, account }) => {
      if (account?.provider && account.provider === "credentials" && user) {
        token.user = {
          ...user,
          id: Number(user.id)
        } as IUser
      }
      return token
    },
    session: ({ session, token }) => {
      return { ...session, user: { ...session.user, ...token.user } }
    }
  },
  session: {
    strategy: "jwt"
  }
})