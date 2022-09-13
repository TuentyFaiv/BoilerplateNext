import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { createHttpSSR } from "@services";

import type { NextAuthOptions } from "next-auth";
// import type { BodySignin, ReturnSignin } from "@typing/services";

export const authOptions: NextAuthOptions = {
  debug: true,
  session: {
    strategy: "jwt",
    maxAge: 24 * 60 * 60
  },
  providers: [
    Credentials({
      name: "Dashboard",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const api = createHttpSSR();

        try {
          // const { payload } = await api.post<BodySignin, ReturnSignin>({
          //   endpoint: "",
          //   secure: false,
          //   body: {
          //     email: credentials?.email ?? "",
          //     password: credentials?.password ?? ""
          //   }
          // });
          const payload = {
            token: "this is a token"
          };

          return {
            name: payload.token
          };
        } catch (error) {
          return null;
        }
      }
    })
  ],
  pages: {
    signIn: "/auth/signin"
  }
};

export default NextAuth(authOptions);
