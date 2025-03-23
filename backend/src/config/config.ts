import * as dotenv from "dotenv";

// Load environment variables
dotenv.config();

export const config = {
  port: process.env.PORT || 4000,
  env: process.env.NODE_ENV || "development",
  database: {
    url: process.env.DATABASE_URL,
  },
};
