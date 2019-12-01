// Subscribe to "bidrs"

const zmq = require("zeromq/v5-compat");

const subCats = zmq.socket("sub");
subCats.connect("tcp://127.0.0.1:3000");
subCats.subscribe("birds");
console.log("Subscriber connected to port 3000");

subCats.on("message", function(topic, message) {
    console.log(
        "From ",
        topic.toString('UTF8'),
        "saying ",
        message.toString('UTF8')
    );
});
