import { client } from "./client";

client.exec(`
    CREATE TABLE IF NOT EXISTS tools (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        description TEXT NOT NULL,
        url TEXT NOT NULL,
        image TEXT NOT NULL,
        category TEXT NOT NULL,
        verified BOOLEAN NOT NULL,
        is_public BOOLEAN NOT NULL
    );

    CREATE TABLE IF NOT EXISTS analytics (
        id text PRIMARY KEY,
        tool_id INTEGER NOT NULL,
        visits INTEGER default 1,
        foreign key(tool_id) REFERENCES tools(id)
    )
`)