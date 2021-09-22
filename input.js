let connection;

const setupInput = function (conn) {

  connection = conn;

  const setupInput = (conn) => {
    connection = conn;
  };

  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });

  stdin.on("data", (key) => {
    if (key === 'w') {
      connection.write("Move: up");
    }
  });

  stdin.on("data", (key) => {
    if (key === 'a') {
      connection.write("Move: left");
    }
  });

  stdin.on("data", (key) => {
    if (key === 's') {
      connection.write("Move: down");
    }
  });

  stdin.on("data", (key) => {
    if (key === 'd') {
      connection.write("Move: right");
    }
  });

  return stdin;
};




module.exports = { setupInput };