const net = require("net");
const readline = require(`readline`);

const rl = readline.createInterface({
  input: process.stdin
});

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.223.133",
    port: 50542
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    conn.write('Name: KT');
  });

  return conn;
};

console.log("Connecting ...");
connect();

module.exports = { connect };
