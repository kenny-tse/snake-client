const net = require("net");
const readline = require(`readline`);
const { IP, PORT, INITIALS } = require("./constants");



const rl = readline.createInterface({
  input: process.stdin
});

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  // interpret incoming data as text
  conn.setEncoding("utf8");

  //logs whatever the server sends to you
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  //write to server your initials
  conn.on('connect', () => {
    conn.write(`Name: ${INITIALS}`);
  });

  // conn.on('data', (data) => {
  //   conn.write('Move: up');
  // });

  rl.on('line', (input) => {
    conn.write(input);
  })

  // let time = 1000;
  // for (let i = 0; i < 50; i++) {
  //   setInterval(() => {
  //     conn.write("Move: up");
  //     time += 1000;
  //   }, time);
  // }

  return conn;
};


module.exports = { connect };