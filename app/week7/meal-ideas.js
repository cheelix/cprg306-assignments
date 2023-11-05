import React, { useState, useEffect } from 'react';

const fetchMealIdeas = async (ingredient) => {
    const result = ingredient.replace(/,.*$|([\u2700-\u27BF]|[\u2E80-\u2FA1]|\uD83E[\uDD10-\uDDFF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|[\u2694-\u2697]|\uD83E[\uDD10-\uDDFF]|\uD83D[\uDE03-\uDE0A]|\uD83C[\uDF00-\uDFFF]|\uD83E[\uDD5B\uDD5D\uDD60-\uDD67])/g, '');
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${result}`);
    const data = await response.json();
    return data.meals || [];
};

const fetchMealDetails = async (mealId) => {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`);
    const data = await response.json();
    return data.meals && data.meals[0];
};

const MealIdeas = ({ ingredient }) => {
    const [meals, setMeals] = useState([]);
    const [isDefault, setDefault] = useState(true);
    const [activeItem, setActiveItem] = useState(null);
    const [mealDetails, setMealDetails] = useState(null);

    const toggleMenu = (index, mealId) => {
        setActiveItem(index === activeItem ? null : index);

        if (index !== activeItem) {
            // Fetch meal details when expanding
            fetchMealDetails(mealId).then((details) => setMealDetails(details));
        }
    };

    const loadMealIdeas = async () => {
        setDefault(true);
        const data = await fetchMealIdeas(ingredient);
        setMeals(data);
        setMealDetails(null); // Reset meal details
        setActiveItem(null);
        setDefault(false);
    };

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        } else {
            setMeals([]);
            setMealDetails(null);
        }
    }, [ingredient]);

    if (isDefault) {
        return <p>Select an item to see meal ideas</p>;
    }

    if (!meals.length) {
        return <p>No meal ideas found for {ingredient}</p>;
    }

    return (
        <div>
            <h2>Meal Ideas with {ingredient}</h2>
            <ul>
                {meals.map((meal, index) => (
                    <li key={meal.idMeal}>
                        <button
                            onClick={() => toggleMenu(index, meal.idMeal)}
                            className={`w-96 mb-2 p-1 text-white vp-2 w-full text-left rounded-md
                        ${activeItem === index ? 'bg-blue-500 hover:bg-blue-400' : 'bg-blue-500 hover:bg-blue-400'}
                        ${activeItem === index ? 'rounded-t-md' : 'rounded-md'} 
                        
                        `}
                        >
                            {meal.strMeal}
                            {activeItem === index && mealDetails && (



                                <ul className="pl-4 text-sm font-normal text-xs text-blue-200">
                                    <li>Ingredients needed:</li>
                                    {Object.keys(mealDetails).map((key) => {
                                        if (key.startsWith('strIngredient') && mealDetails[key]) {
                                            const measureKey = `strMeasure${key.slice(13)}`;
                                            return (
                                                <li className="pl-4 " key={key}>
                                                    {mealDetails[key] && mealDetails[measureKey] && (
                                                        <span>
                                                    {mealDetails[key]} ({mealDetails[measureKey]})
                                                </span>
                                                    )}
                                                </li>
                                            );
                                        }
                                        return null;
                                    })}
                                </ul>
                            )}
                        </button>
                    </li>
                ))}
            </ul>

        </div>

    );
};

export default MealIdeas;
