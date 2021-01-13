class Node {
                //player_id , score = null, s
    constructor (data, next = null, prev = null) {
        this.data = data
        this.next = next
        this.prev = prev
    }
}


class Queue {
    constructor() {
        this.head = null
        this.tail = null
    }
    //add
    enqueue(data) {
        let newNode = new Node (data, null, this.head)

        if (!this.head) {
            this.head = newNode
        } else {
            this.tail.next = newNode
            newNode.prev = this.tail
        }

        this.tail = newNode
    }
    //subtract
    dequeue() {
        let data = this.head.data
        this.head = this.head.next
        return data
    }

    peek() {
        return isEmpty() ? 'empty list!' : this.head.data
    }

    isEmpty() {
        return this.head == null
    }
}
