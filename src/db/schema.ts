import { sql } from "drizzle-orm"
import {
	sqliteTable,
	text,
	integer,
	sqliteTableCreator,
} from "drizzle-orm/sqlite-core"

export const mysqlTable = sqliteTableCreator((name) => `four-mutations_${name}`)

export const shortUrls = sqliteTable("short_urls", {
	id: text("id").primaryKey(),
	originUrl: text("origin_url").notNull(),
	clicks: integer("clicks", { mode: "number" }).default(0),
	userId: text("user_id").notNull(),
	createdAt: text("date").default(sql`CURRENT_TIME`),
})

export type UrlType = typeof shortUrls.$inferSelect
export type InsertUrlType = typeof shortUrls.$inferInsert
