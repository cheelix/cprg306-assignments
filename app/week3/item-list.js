import React from 'react';
import Item from './item'; 
import './dist/output.css';

const item1 = {
  name: "milk, 4 L 🥛",
  quantity: 1,
  category: "dairy",
};

const item2 = {
  name: "bread 🍞",
  quantity: 2,
  category: "bakery",
};

const item3 = {
  name: "eggs, dozen 🥚",
  quantity: 2,
  category: "dairy",
};

const item4 = {
  name: "bananas 🍌",
  quantity: 6,
  category: "produce",
};

const item5 = {
  name: "broccoli 🥦",
  quantity: 3,
  category: "produce",
};

const item6 = {
  name: "chicken breasts, 1 kg 🍗",
  quantity: 1,
  category: "meat",
};

const item7 = {
  name: "pasta sauce 🍝",
  quantity: 3,
  category: "canned goods",
};

const item8 = {
  name: "spaghetti, 454 g 🍝",
  quantity: 2,
  category: "dry goods",
};

const item9 = {
  name: "toilet paper, 12 pack 🧻",
  quantity: 1,
  category: "household",
};

const item10 = {
  name: "paper towels, 6 pack",
  quantity: 1,
  category: "household",
};

const item11 = {
  name: "dish soap 🍽️",
  quantity: 1,
  category: "household",
};

const item12 = {
  name: "hand soap 🧼",
  quantity: 4,
  category: "household",
};

const ItemList = () => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
      <li className="shadow-xl p-6 mb-6 bg-blue-500 rounded-md ">
        <Item {...item1} />
      </li>
      <li className="shadow-xl p-6 mb-6 bg-blue-500 rounded-md ">
        <Item {...item2} />
      </li>
      <li className="shadow-xl p-6 mb-6 bg-blue-500 rounded-md ">
        <Item {...item3} />
      </li>
      <li className="shadow-xl p-6 mb-6 bg-blue-500 rounded-md ">
        <Item {...item4} />
      </li>
      <li className="shadow-xl p-6 mb-6 bg-blue-500 rounded-md ">
        <Item {...item5} />
      </li>
      <li className="shadow-xl p-6 mb-6 bg-blue-500 rounded-md ">
        <Item {...item6} />
      </li>
      <li className="shadow-xl p-6 mb-6 bg-blue-500 rounded-md ">
        <Item {...item7} />
      </li>
      <li className="shadow-xl p-6 mb-6 bg-blue-500 rounded-md ">
        <Item {...item8} />
      </li>
      <li className="p-4 bg-blue-500   rounded shadow-md">
        <Item {...item9} />
      </li>
      <li className="p-4 bg-blue-500   rounded shadow-md">
        <Item {...item10} />
      </li>
      <li className="p-4 bg-blue-500   rounded shadow-md">
        <Item {...item11} />
      </li>
      <li className="p-4 bg-blue-500   rounded shadow-md">
        <Item {...item12} />
      </li>
    </ul>
  );
};

export default ItemList;
