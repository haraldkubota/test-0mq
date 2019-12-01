// Subscribe to "cats" and "dogs"

const zmq = require("zeromq/v5-compat");

const subCats = zmq.socket("sub");
subCats.connect("tcp://127.0.0.1:3000");
subCats.subscribe("cats");
console.log("Subscriber connected to port 3000");

subCats.on("message", function(topic, message) {
    console.log(
        "received a message related to:",
        topic.toString('UTF8'),
        "containing message:",
        message.toString('UTF8')
    );
});

const subDogs = zmq.socket("sub");
subDogs.connect("tcp://127.0.0.1:3000");
subDogs.subscribe("dogs");
console.log("Subscriber connected to port 3000");

subDogs.on("message", function(topic, message) {
    console.log(
        "messsage from ",
        topic.toString('UTF8'),
        "saying ",
        message.toString('UTF8')
    );
});