import React from 'react';
import SearchCSS from './Search.module.css';

export default function Search() {
  return (
    <div className={SearchCSS.searchContainer}>
        <input type="text"/>
        <button>Search</button>
    </div>
  )
}
