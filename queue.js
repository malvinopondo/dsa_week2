class Queue {
    constructor() {
        this.items = [];
    }
    // Add an element to the back of the queue
    enqueue(element) {
        this.items.push(element);
    }
    // Remove an element from the front of the queue
    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items.shift();
    }

    // Check if the queue is empty
    isEmpty() {
        return this.items.length === 0;
    }

    // Get the front element of the queue
    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0];
    }

    // Get the size of the queue
    size() {
        return this.items.length;
    }
}


let orderQueue = new Queue();
orderQueue.enqueue("Order 1");
orderQueue.enqueue("Order 2");
orderQueue.enqueue("Order 3");

console.log("Processing orders:");
while (!orderQueue.isEmpty()) {
    console.log(orderQueue.dequeue());
}
