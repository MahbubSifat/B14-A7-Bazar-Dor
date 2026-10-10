import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

// MongoDB-r sathe connection
const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("bazardor");

export const auth = betterAuth({
  database: mongodbAdapter(db),

  // email + password login
  emailAndPassword: {
    enabled: true,
    // signup-er por auto login off, karon assignment-e signup-er por login page-e pathate hobe
    autoSignIn: false,
  },

  // Google ar GitHub login
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    github: {
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    },
  },
});