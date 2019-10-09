const Node = require('./node');

class LinkedList {
    constructor() {
        this.length = 0;
        this._head = new Node();
        this._tail = this._head;
    }

    append(data) {
        if (this.length == 0) {
            this._head.data = data;
            this.length++;
        }
        else if (this.length == 1) {
            this._head.next = new Node(data, this._head);
            this._tail = this._head.next;
            this.length++;
        }
        else {
            this._tail.next = new Node(data, this._tail);
            this._tail = this._tail.next;
            this.length++;
        }
        return this;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        let buf = this._head;
        for (let i = 0; i < index; i++) {
            buf = buf.next;    
        }
        return buf.data;
    }

    insertAt(index, data) {
        let buf = this._head;
        for (let i = 0; i < index; i++) {
            buf = buf.next;    
        }
        if (this.length == 0 && index == 0) {
            this.append(data);
        }
        else if (buf != this._head) {
            buf.prev.next = new Node(data, buf.prev, buf);
            buf.prev = buf.prev.next;
        }
        else {
            buf.prev = new Node(data, null, buf);
            this._head = buf.prev;
        }
        this.length++;
        return this;
    }

    isEmpty() {
        if (this.length == 0) return true;
        else return false;
    }

    clear() {
        this.length = 0;
        this._head = new Node();
        this._tail = this._head;
        return this;
    }

    deleteAt(index) {
        let buf = this._head;
        for (let i = 0; i < index; i++) {
            buf = buf.next;    
        }
        if (buf == this._head) {
            this._head = this._head.next;
            if (this.length != 1) {
                this._head.prev = null;
            }
        }
        else if (buf == this._tail) {
            this._tail = this._tail.prev;
            this._tail.next = null;
        }
        else{
            buf.next.prev = buf.prev;
            buf.prev.next = buf.next;
        }
        this.length--;
        return this;
    }

    reverse() {
        let buf = this._head;
        let swap_value;
        while (buf != null){
            swap_value = buf.prev;
            buf.prev = buf.next;
            buf.next = swap_value;
            buf = buf.prev;
        }
        swap_value = this._head;
        this._head = this._tail;
        this._tail = swap_value;
        return this;
    }

    indexOf(data) {
        let buf = this._head;
        let result = -1;
        for (let i = 0; i < this.length; i++) {
            if (buf.data == data) {
                result = i;
            }
            buf = buf.next;    
        }
        return result;
    }
}

module.exports = LinkedList;
