import React from "react";

export const NestedTree = ({data, padding})=>{
   return(
<div>
    { 
    data.length && data.map(({institutionName, children})=>{
        const inc_padding = padding * 3;
        return <>
        <label key={institutionName} style={{paddingLeft:inc_padding}}>{institutionName}</label><br/>
        {children && <NestedTree padding ={inc_padding} key={`${institutionName}_children`} data ={children} /> }
        </>
    })
    }
</div>
    )
}
