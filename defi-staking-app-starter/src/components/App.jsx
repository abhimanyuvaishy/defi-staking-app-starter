import React from "react";
import {createATreeData} from "./utils";
import {NestedTree} from "./NetstedTree";
import {stringCompression} from "../excercise/chapter_one/stringPermutation";
import AutoSuggestion from "./common/autoSuggestion";

const App = ()=>{
    console.log("--stringCompression", stringCompression('abcccccaaa'))
    const data = createATreeData();
    return<> 
    <div>Hello India</div>
    <AutoSuggestion/>
        <NestedTree padding={2} data={data} />
     </>
}

export default App;