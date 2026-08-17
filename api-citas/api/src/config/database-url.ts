export function parseDatabaseUrl(databaseUrl: string) {
    const url = new URL(databaseUrl);

    if (url.protocol !== "mysql:") {
        throw new Error("DATABASE_URL debe usar el protocolo mysql://");
    }

    const database = decodeURIComponent(url.pathname.replace(/^\//, ""));
    if (!database) {
        throw new Error("DATABASE_URL debe indicar el nombre de la base de datos");
    }

    return {
        host: url.hostname,
        port: Number(url.port || 3306),
        user: decodeURIComponent(url.username),
        password: decodeURIComponent(url.password),
        database,
    };
}
