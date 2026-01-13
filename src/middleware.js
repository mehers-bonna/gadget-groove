import { withAuth } from "next-auth/middleware";

export default withAuth({
  pages: {
    signIn: "/login", // User logged in na thakle ekhane pathiye dibe
  },
});

export const config = { 
  // Ei path-gulo login chada access kora jabe na
  matcher: ["/dashboard/:path*"] 
};