import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import AppleProvider from "next-auth/providers/apple";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "Enter Email",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const res = await fetch(process.env.BASE_URL + "/login", {
          method: "POST",
          body: JSON.stringify({
            email: credentials.email,
            password: credentials.password,
          }),
          headers: { "Content-Type": "application/json" },
        });

       
        if (!res.ok) {
          const errorData = await res.json();
        const errorMessage = errorData.message; // Assuming your backend returns error messages under the 'message' property
         throw new Error(errorMessage); 
        }
        const user = await res.json();
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),
    AppleProvider({
      clientId: process.env.APPLE_ID,
      clientSecret: process.env.APPLE_SECRET,
    }),
  ],

  pages: {
    signIn: "/auth/signin",
    newUser: "/auth/newuser",
  },

  secret: process.env.NEXTAUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  callbacks: {
    jwt: async ({ token, user }) => {
      if (user) {
        token.accessToken = user.token;
        token.avatar = user.avatar;
        token.username = user.username;
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
  
    session: ({ session, token }) => {
      session.accessToken = token.accessToken;
      session.avatar = token.avatar;
      session.username = token.username;
      session.role = token.role;
      session.id = token.id;
      return session;
    },
  },
  
};

export default NextAuth(authOptions);
