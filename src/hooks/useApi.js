import {useEffect, useState} from 'react'
import { useAsync } from "react-async-hook";
import axios from "axios";

// const useApi = (url)=>{
//     const [data, setData] = useState(null)
    
//     const fetchData = async ()=>{
//          let data = await axios.get("https://www.breakingbadapi.com/api/quote/random").json();
//          return data;
//     }

//     useEffect(()=>{
//          setData(useAsync(fetchData, [])); 
//         console.log(data.result);
//     }, [url]);

//     return data;
// }