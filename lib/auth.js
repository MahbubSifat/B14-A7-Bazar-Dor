import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI);
const db = client.db("bazardor");

export const auth = betterAuth({
  database: mongodbAdapter(db),

   trustedOrigins: [
    "http://localhost:3000",
    "https://b14-a7-bazar-dor-wemq.vercel.app",
  ],
  
  emailAndPassword: {
    enabled: true,

    autoSignIn: false,
  },
  
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