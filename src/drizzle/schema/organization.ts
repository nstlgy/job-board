import { pgTable, varchar } from "drizzle-orm/pg-core";
import { createdAt, updatedAt } from "../schemaHelpers";

export const organizationTable = pgTable("organizations", {
  id: varchar().primaryKey(),
  name: varchar().notNull(),
  imageUrl: varchar(),
  createdAt,
  updatedAt,
});
