
class Queue {
    constructor(){
        this.item =[];
    }
    enqueue = (item)=>{
        this.item.push(item);
    }
    dequeue = ()=> {
        return this.item.shift();
    }
    front = ()=>{
        const [firstItem,]= this.item;
        return firstItem;
    }
    isEmpty = ()=>{
        return !this.item.length;
    }
}

export default Queue;