const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "jj1289wW",
    host: "localhost",
    port: 5432,
    database: "DB_P_React"
});

module.exports = pool;
