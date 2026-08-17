import "dotenv/config";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";
import { PrismaClient } from "../../generated/prisma/client";
import { parseDatabaseUrl } from "./database-url";

const databaseUrl = process.env.DATABASE_URL;
if (!databaseUrl) {
    throw new Error("DATABASE_URL no está configurada");
}

const adapter = new PrismaMariaDb({
    ...parseDatabaseUrl(databaseUrl),
    connectionLimit: 5,
});
const prisma = new PrismaClient({ adapter });

export { prisma };
