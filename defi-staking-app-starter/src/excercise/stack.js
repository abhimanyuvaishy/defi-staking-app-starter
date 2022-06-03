class Stack {
    constructor(){
        this.item =[];
    }
    push =(item)=>{
        this.item.push(item);
    }
    pop =(item)=>{
        this.item.pop();
    }
    peek = ()=>{
        return this.item.length ? this.item[this.item.length - 1] : [];
    }
    isEmpty = ()=>{
        return !this.item.length;
    }
}

export default Stack;