import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    // [cite: 2026-01-05] Requirement: Optional (Highly Recommended) Use NextAuth.js for social login
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    
    // [cite: 2026-01-05] Requirement: Implement mock login using hardcoded email & password
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials.email === "admin@gadget.com" && credentials.password === "123456") {
          return { id: "1", name: "System Admin", email: "admin@gadget.com" };
        }
        return null;
      }
    }),
  ],
  // [cite: 2026-01-05] Requirement: Store credentials in cookies
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async redirect({ url, baseUrl }) {
      // [cite: 2026-01-05] Requirement: On successful login, redirect to items page
      return baseUrl + "/items";
    },
  },
  pages: {
    signIn: "/login",
  },
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };