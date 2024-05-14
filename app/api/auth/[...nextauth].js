import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { connectToDatabase } from "../../../util/mongodb";

export default NextAuth({
  providers: [
    Providers.Credentials({
      async authorize(credentials) {
        const { db } = await connectToDatabase();
        const { email, password } = credentials;
        const user = await db.collection("users").findOne({ email });

        if (!user || !(await bcrypt.compare(password, user.password))) {
          throw new Error("Email or password is incorrect");
        }

        return { email: user.email };
      },
    }),
  ],
  database: process.env.MONGODB_URI,
});
