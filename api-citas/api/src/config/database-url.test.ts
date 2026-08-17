import assert from "node:assert/strict";
import test from "node:test";

import { parseDatabaseUrl } from "./database-url";

test("convierte DATABASE_URL en la configuración del adaptador", () => {
    assert.deepEqual(
        parseDatabaseUrl("mysql://root:p%40ss@localhost:3307/ClarityCall"),
        {
            host: "localhost",
            port: 3307,
            user: "root",
            password: "p@ss",
            database: "ClarityCall",
        }
    );
});

test("usa el puerto de MySQL cuando la URL no lo especifica", () => {
    assert.equal(parseDatabaseUrl("mysql://root:@localhost/ClarityCall").port, 3306);
});

test("rechaza URLs que no sean de MySQL o no indiquen la base", () => {
    assert.throws(() => parseDatabaseUrl("postgresql://root@localhost/ClarityCall"));
    assert.throws(() => parseDatabaseUrl("mysql://root@localhost"));
});
