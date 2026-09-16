const EventEmitter = require("events");

const emitter = new EventEmitter();

// greet event
emitter.on("greet", () => {
    console.log("Hello! Welcome to Node.js");
});

// exit event
emitter.on("exit", () => {
    console.log("Program is exiting...");
});

// Trigger events
emitter.emit("greet");
emitter.emit("exit");
