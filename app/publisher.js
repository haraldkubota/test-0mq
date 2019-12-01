// pubber.js

const zmq = require("zeromq");

async function run() {
    const sock = new zmq.Publisher();

    await sock.bind("tcp://127.0.0.1:3000");
    console.log("Publisher bound to port 3000");

    // Stop after 1 minute
    for (let i=0; i<120; ++i) {
        console.log("sending a multipart message envelope");
        await sock.send(["cats", "meow!"]);
        await sock.send(["dogs", "woof woof!"]);
        await sock.send(["birds", "tweet tweet!"]);
        await new Promise(resolve => setTimeout(resolve, 500));
    }
}

run();
