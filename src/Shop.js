import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import './App.css';

function Shop() {

  useEffect(()=>{
      fetchItems();
  },[]);
  const [items,setItems]=useState([]);

  const fetchItems =  async () =>{
    const data = await fetch("https://jsonplaceholder.typicode.com/users");
    const items = await data.json();
    setItems(items);

  }
  return (
    <div className="App">
       <h1>Customer Info.</h1>
  {items.map(name => <h3 key={name.id}>{name.id}.Name : <Link to={`/shop/${name.id}`}>{name.name}</Link> , {name.email}</h3>)}
    </div>
  );
}

export default Shop;
