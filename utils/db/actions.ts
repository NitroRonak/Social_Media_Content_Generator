import { db } from "./dbConfig";
import { eq, sql, desc } from "drizzle-orm";
import { Users, Subscriptions, GeneratedContent } from "./schema";
export async function createOrUpdateUser(
  clerkUserId: string,
  email: string,
  name: string
) {
  try {
    const existingUser = await db
      .select()
      .from(Users)
      .where(eq(Users.stripeCustomerId, clerkUserId))
      .limit(1)
      .execute();

    if (existingUser) {
      const [updatedUser] = await db
        .update(Users)
        .set({
          name: name,
          email:email
        })
        .where(eq(Users.stripeCustomerId, clerkUserId))
        .returning()
        .execute();
      return updatedUser;
    }

    const [newUser] = await db
      .insert(Users)
      .values({
        stripeCustomerId: clerkUserId,
        email: email,
        name: name,
        points: 50,
      }).returning()
      .execute();
    console.log("new user created", newUser);

    //send welcome email to new user
  } catch (error) {
    console.error("Error creating or updating user:", error);
    return null;
  }
}
