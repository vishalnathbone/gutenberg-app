import React,{useState, useEffect} from 'react'
import './Search.scss';
const Search=(props)=>{
    const [querystring,setQuery] = useState("");
    useEffect(()=>{
        // console.log(querystring)
        props.filterMethod(querystring)
    },[querystring])
        return(
        <div className="search-container">
            <div className="input-group"> 
                <div className="input-group-prepend">
                    <span className="input-group-text">
                        <img src="/assets/images/Search.svg" alt="" />
                    </span>
                </div>
                <input type="text" placeholder="Search"  name="query" value={querystring} onChange={(e)=>{setQuery(e.target.value);}} className="form-control" aria-label="Amount (to the nearest dollar)" />
                <div className="input-group-append">
                  {querystring.length>0 && <span className="input-group-text clear-text" onClick={()=>{setQuery('');}}>
                    <img src="/assets/images/Cancel.svg" alt="" />
                    </span> }  
                </div>
            </div>
        </div>
    )

}

export default Search;