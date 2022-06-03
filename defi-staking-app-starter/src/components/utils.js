import data from "./data.json";
function OrderByArray(values, orderKey) {
    return values.sort((a, b) => {
        if (a[orderKey] < b[orderKey]) {
            return -1;
        }

        if (a[orderKey] > b[orderKey]) {
            return 1;
        }

        return 0
    });
}

const createTree = (obj, parents) =>{ 
    for(let i=0; i<parents.length; i++){
        if(obj[parents[i].instituteId]){
            parents[i].children = obj[parents[i].instituteId]
        }
        if(parents[i].children){
            createTree(obj, parents[i].children);
        }
    }
}

export const createATreeData = () =>{

const rawData = data.data;
OrderByArray(rawData, "parentId");
let obj = {};
const parentLevelData = [];
for(let i=0; i<rawData.length; i++){
    if(!rawData[i].parentId){
        parentLevelData.push(rawData[i])
    }
    if(!obj[rawData[i].parentId]){
        obj[rawData[i].parentId] = [rawData[i]];
    }else{
        obj[rawData[i].parentId].push(rawData[i]);
    }
}
if(parentLevelData.length === rawData.length){
    return parentLevelData;
}
createTree(obj,parentLevelData);
return parentLevelData; 
}

export function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            func.apply(this, args);
        }, timeout);
    }
}