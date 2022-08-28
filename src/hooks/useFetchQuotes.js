import {useRef, useCallback, useState} from 'react'
import axios from "axios";

export const useFetchQuotes = (_ =>{
    const quoteResponse = useRef(new Set()); //to make quotes unique

    const fetcher = useCallback(async (numberOfQuotes, url)=> {
        //fetches until getting 6 unique quotes
        while(quoteResponse.current.size < numberOfQuotes){
            quoteResponse.current.add(await axios.get(url))
        }
        return quoteResponse.current;
    }, []);

    return [quoteResponse.current, fetcher];
});