import React, { useState,useEffect } from 'react'
import axios from 'axios'
function Singers() {


    //test
    // // 列表
    // const [data,setData] = useState({hits:[]})
    // // 初始化字符串
    // const [query,setQuery] = useState('react')

    // useEffect(()=>{
    //     let ignore = false;
    //     async function fetchData(){
    //         const result = await axios('https://hn.algolia.com/api/v1/search?query=' + query)
    //         if(!ignore){
    //             // 赋值
    //             setData(result.data)
    //         }
    //     }
    //     fetchData()
    //     return()=>{
    //         ignore = true
    //     }
    // },[query])

    // return(
    //     <div>
    //         <input value = {query} onChange = {e=>setQuery(e.target.value)}/>
    //         <ul>
    //             {
    //                 data.hits.map(item=>(
    //                     <li key={item.objectID}>
    //                         {item.title}
    //                     </li>
    //                 ))
    //             }
                
    //         </ul>
    //     </div>
    // )
}

export default React.memo(Singers)