"use client"
import React from 'react';
 

const Item = ({ name, quantity, category,onSelect  }) => {

  const handleClick = () => {

    onSelect({ name, quantity, category });
  };


  return (
     
    <div  className="shadow-xl p-1 mb-2 bg-blue-500 hover:bg-blue-400 rounded-md text-white"
          onClick={handleClick}
          style={{ cursor: 'pointer' }}>

    <li>
      {name},
    </li>
    <li> buy {quantity}, in {category}</li>
    
    </div>
  );
};

 





















export default Item;
