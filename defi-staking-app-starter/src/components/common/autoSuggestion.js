import React, {useState, useEffect} from "react";
import CountriesList from "../countries.json";
import { debounce } from "../utils";

const AutoSuggestList = React.memo(({searchKey})=> {
    if(!searchKey){
        return null;
    }
    const [data, setData] = useState([]);
    useEffect(()=>{
        const searchRegx = new RegExp(searchKey);
        const countries = CountriesList.data.filter((x) => x.name.match(searchRegx));
        setData(countries);
    },[searchKey]);

    return(
        <ul>
            {
                data.map((countries)=>{
                   return <li>{countries.name}</li>
                })
            }
        </ul>
    )
});

const AutoSuggestion = React.memo(()=> {
const [search, setSearch] = useState(null);

const onChangeHandle = (event) => {
    const value = event.target.value;
    debounce(() => setSearch(value))();
}

return(
    <div style={{margin:'20px'}}>
    <input name="search" onChange ={onChangeHandle} type="search"/>
    <AutoSuggestList searchKey={search} />
    </div>
)
})

export default AutoSuggestion;