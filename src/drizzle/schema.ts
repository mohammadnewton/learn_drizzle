// import { table } from 'console'
import {  } from 'drizzle-orm/mysql-core'
import { integer, pgEnum, pgTable, uuid, varchar, uniqueIndex } from 'drizzle-orm/pg-core'

export const UserRole = pgEnum("userRole", ["admin", "user"])

export const UserTable = pgTable("user", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: varchar("name", { length: 255 }).notNull(),
  age: integer("age").notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  role: UserRole("userRole").default("user").notNull()
}, table => {
  return {
    emailIndex: uniqueIndex("email").on(table.email),
    uniqueNameAndAge: uniqueIndex("uniqueNameAndAge").on(table.name, table.age),
  }
})

