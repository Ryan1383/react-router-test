import React,{useState, useEffect} from 'react';
import './App.css';

//{match}는 shop에서 Link를 통한 클릭 시 해당 param과 함께 넘어오는것
function ItemDetail({match}) {

  useEffect(()=>{
    fetchItem();
  console.log(match);

  },[]);  

  const [item, setItem] = useState({});

  const fetchItem = async() =>{
     const fetchItem = await fetch(`https://yts.lt/api/v2/movie_details.json?movie_id=${match.params.id}`);
     const item = await fetchItem.json();
     console.log(item);
     setItem(item.data.movie);

  }

  return (
    <div>
        <img 
            src ={item.background_image_original}
            alt ={"image"}
        />
    </div>
  );
}

export default ItemDetail;
