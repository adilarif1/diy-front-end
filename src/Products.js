
import React, {useState, useEffect} from 'react';


const Products = () => {
  const [recomended, setRecomended] = useState([]);

  useEffect(() => {
      const url = "http://localhost:8080/recommendeds";

      const fetchData = async () => {
          try {
              const response = await fetch(url);
              const json = await response.json();
              console.log(json);
              setRecomended(json);
          } catch (error) {
              console.log("error", error);
          }
      };

      fetchData();
  }, []);
  
  return (
    
    <>
    <h3>Our recomended buys</h3>
    {
      recomended.map(r => (

        <div id={r.id} class="card">
          <img src={r.images[0]} style={{width:'100%'}}/>
          <h3>{r.name}</h3>
          <p class="price">£${r.price}</p>
          <p><small>{r.description}</small></p>
          <p><button>Add to Cart</button></p>
        </div>
      ))} 

    </>
  );
};

export default Products;