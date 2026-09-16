const EventEmitter = require("events");

const button = new EventEmitter();

// Click event
button.on("click", () => {
    console.log("Button was clicked!");
});

// Mouseover event
button.on("mouseover", () => {
    console.log("Mouse is over the button!");
});

// Simulate events
button.emit("click");
button.emit("mouseover");
