// pubber.js

const zmq = require("zeromq/v5-compat");
const pub = zmq.socket("pub");

pub.bind("tcp://127.0.0.1:3000");
console.log("Publisher bound to port 3000");

setInterval(() => {
    console.log("sending a multipart message envelope");
    pub.send(["cats", "meow!"]);
    pub.send(["dogs", "woof woof!"]);
    pub.send(["birds", "tweet tweet!"])
}, 500);