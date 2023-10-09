import React from 'react';
 

const Item = ({ name, quantity, category }) => {
  return (
    <div className="bg-blue-500 text-white"> 
    <li>
      {name},
    </li>
    <li> buy {quantity}, in {category}</li>
    </div>
  );
};

export default Item;
