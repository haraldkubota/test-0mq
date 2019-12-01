// Subscribe to "cats" and "dogs" using v6 syntax

const zmq = require("zeromq");

async function runCats() {
    const subCats = new zmq.Subscriber();
    subCats.connect("tcp://127.0.0.1:3000");
    subCats.subscribe("cats");
    console.log("Subscribing to cats connected to port 3000");

    for await (const [topic, msg] of subCats) {
        console.log(
            "received a message related to:",
            topic.toString('UTF8'),
            "containing message:",
            msg.toString('UTF8')
        );
    }
}
async function runDogs() {
    const subDogs = new zmq.Subscriber();
    subDogs.connect("tcp://127.0.0.1:3000");
    subDogs.subscribe("dogs");
    console.log("Subscribing to dogs connected to port 3000");

    for await (const [topic, msg] of subDogs) {
        console.log(
            "received a message related to:",
            topic.toString('UTF8'),
            "containing message:",
            msg.toString('UTF8')
        );
    }
}

runCats();
runDogs();
