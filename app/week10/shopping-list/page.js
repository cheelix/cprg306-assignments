"use client"
import React, { useState, useEffect } from 'react';

import ItemList from './item-list';
import NewItem from "./new-item";

import MealIdeas from "./meal-ideas";

import { getItems, addItem } from '../_services/shopping-list-service';
import { useUserAuth } from "../_utils/auth-context";
 

const Page = () => {
 
    const { user,gitHubSignIn, firebaseSignOut} = useUserAuth();
    const [selectedItemName, setSelectedItemName] = useState('');
    const [itemData, setItemData] = useState([]);

    const handleItemSelect = (itemName) => {
        setSelectedItemName(itemName);
    };

 

    const handleAddItem = async (newItem) => {
        const itemToAdd = {
            ...newItem,
            
          };
      
          const addedItem = await addItem(user.uid, itemToAdd);
          setItemData(prevItems => [...prevItems, addedItem]);
      };

   




      useEffect(() => {
        if (!user) {
          
        } else {
          loadItems();
           
        }
      } );
    

    async function loadItems() {
        try {
          const itemsList = await getItems(user.uid);
          setItemData(itemsList);
 
        } catch (error) {
          console.error('There was an error retrieving the shopping list:', error);
        }
      }




    return (
        <main className="bg-[#bacee2] w-full p-8 flex">
            <div className="  pr-4  ">
                <h1 className="text-2xl font-bold mb-4">Shopping List</h1>
                <NewItem onAddItem={handleAddItem} />
                <ItemList items={itemData} onItemSelect={handleItemSelect} />
            </div>
            <div className="   ">
                <h1 className="text-2xl font-bold mb-4">Meal Ideas</h1>
                <MealIdeas ingredient={selectedItemName} />
            </div>
        </main>












    );
};

export default Page;






