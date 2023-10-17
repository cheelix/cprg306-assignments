import React from 'react';
import ItemList from './item-list';  
 

const Page = () => {
  return (
    <main className="bg-[#bacee2] h-screen bg-gray w-full  justify-center  p-8 " >
      <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
      <ItemList />
    </main>
  );
};

export default Page;
