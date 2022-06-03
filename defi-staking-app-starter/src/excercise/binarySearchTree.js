class Node{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}


class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    #insertNode =(node, newNode)=>{
        if(node.data > newNode.data){
            if(!node.left){
                node.data.left = newNode;
            } else {
                this.#insertNode(node.left, newNode);
            }
        } else {
            if(!node.right){
                node.data.right= newNode;
            } else {
                this.#insertNode(node.right, newNode);
            }
        }
    }

    insert = (data) =>{
        const node = new Node(data);
        if(!this.root){
            this.root = node;
        } else {
            this.#insertNode(this.root, node);
        }
    }
    // function to be implemented
    // remove(data)
                 
 
    // Helper function
    // findMinNode()
    // getRootNode()
    // inorder(node)
    // preorder(node)              
    // postorder(node)
    // search(node, data)
}