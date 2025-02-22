const dotenv = require('dotenv');
const env = dotenv.config().parsed;

const { Pool } = require("pg");
// const userQueries = require("./userQueries");

console.log(env.PG_URI);
const PG_URI = env.PG_URI;

const pool = new Pool({
  connectionString: PG_URI,
});

// pool.on("connect", (client) => {
//   console.log("Connected to Pool", client);
// });

pool.connect(function (err) {
  if (err) throw err;
  console.log("Connected to PostgresDB");
});

module.exports = {
  query: (text, params, callback) => {
    console.log("executed query", text);
    return pool.query(text, params, callback);
  },
};
