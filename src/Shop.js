import React,{useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './App.css';

function Shop() {

  useEffect(()=>{
    fetchItems();
  },[]);  

  const [items, setItems] = useState([]);

  const fetchItems = async() =>{
      const data = await fetch('https://yts.lt/api/v2/list_movies.json');
      const items = await data.json();

      console.log(items);
      
      setItems(items.data.movies);

  }

  return (
    <div>
        {items.map((item,index) =>(
           
                <h1 key={index}>
                 <Link to={`/shop/${item.id}`}>{item.title}</Link>
                </h1>
        
        ))}
    </div>
  );
}

export default Shop;
