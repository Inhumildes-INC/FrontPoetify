import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"
import GitHubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import db from '@/db'


const handler = NextAuth({
  providers: [
    CredentialsProvider({

      
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email@algo.com" },
        password: { label: "password", type: "password", placeholder: "*******" }
      },
      async authorize(credentials, req) {
        console.log(credentials)

        const userFound = await db.usuario.findUnique({
          where: {
            email: credentials.email
          }
        })
        if(!userFound) return null
        console.log(userFound)
        const matchPassword = await (credentials.password, userFound.password)
        if(!matchPassword) return null 

        return {
          id: userFound.id,
          nombre: userFound.nombre,
          email: userFound.email,
        }
      },

    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      
    }),
  ],
  
});

export { handler as GET, handler as POST };