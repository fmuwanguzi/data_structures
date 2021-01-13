//reversing a linked list

const reverseList = function(head){
    let prev = null;
    let curr = head; //current
    let next = null;

    while(curr){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev;
};

const nodeThree = {
    next: null,
    value: 3
}
const nodeTwo = {
    next: nodeThree,
    value: 2
}
const nodeOne = {
    next: nodeTwo,
    value: 1
}

const result = reverseList(nodeOne)
console.log(result)