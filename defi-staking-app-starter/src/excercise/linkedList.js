
// User defined class node
class Node {
    constructor(element){
        this.element = element;
        this.next = null;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }
    add = (element)=>{
        // creates a new node
        const node = new Node(element);
        
    // if list is Empty then add the element and make it head.
        if(!this.head){
            this.head = node;
        }else {
            // to store current node
           let current = this.head;
           // iterate to the end of the list.
            while(current.next){
                current = current.next;
            }
            // add node.
            current.next = node;
        }
        this.size ++;
    }

    insertAt = (element, atIndex)=> {
        if(atIndex < 0 || atIndex > this.size){
            return "Error";
        }
        const node = new Node(element);
        let current, prev, currentIndex;
        
        // add the element to the first index.
        if(atIndex === 0){
            node.next = this.head;
            this.head = node;
        } else {
            current = this.head;
            currentIndex = 0;
            // iterate over the list to find the position to insert.
            while(currentIndex < atIndex){
                prev = current;
                current = current.next;
                currentIndex++;
            }
            // adding an element
            node.next = current;
            prev.next = node;
        }
        this.size++;
    }
    removeFrom = (atIndex)=>{
        if(atIndex < 0 || atIndex > this.size){
            return "Error";
        }
        let current, prev, currentIndex;
        current = this.head;
        // deleting first element
        if(atIndex === 0){
            this.head = current.next;
        } else {
            currentIndex = 0;
            // iterate over the list to the position to removce an element
            while(currentIndex < atIndex){
                prev = current;
                current = current.next;
                currentIndex++;
            }
            // remove the element
            prev.next = current.next;
        }
        this.size++;
        // return the remove element
        return curr.element;
    }
    removeElement = (element)=>{

    }
     // functions to be implemented
    // removeElement(element)
 
    // Helper Methods
    // isEmpty
    // size_Of_List
    // PrintList
}

export default LinkedList;