export default {
    dialect: "postgresql",
    schema: "./utils/db/schema.ts",
    out: "./drizzle",
  
    dbCredentials: {
      url: "postgresql://neondb_owner:Qo3APYjbKsm7@ep-rough-paper-a5h91q04.us-east-2.aws.neon.tech/content_generator?sslmode=require",
      connectionString:
        "postgresql://neondb_owner:Qo3APYjbKsm7@ep-rough-paper-a5h91q04.us-east-2.aws.neon.tech/content_generator?sslmode=require",
    },
  };