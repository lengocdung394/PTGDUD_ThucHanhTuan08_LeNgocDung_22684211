import React from 'react';
import RecipeCardGrid from './RecipeCardGrid';

const HomePage = () => {
  const summerRecipes = [
    { title: 'Italian-style watermelon', image: '../image/1.png' },
    { title: 'Spaghetti with tomatoes', image: '../image/2.png' },
    { title: 'Lettuce delight', image: '../image/3.png' },
    { title: 'French onion', image: '../image/4.png' },
  ];

  const videoRecipes = [
    { title: 'Salad with cabbage and shrimp', image: '../image/5.png' },
    { title: 'Spiced rice w/ prawn', image: '../image/4.png' },
    { title: 'Sunny-side-up fried rice', image: '../image/3.png' },
    { title: 'Lettuce delight revisited', image: '../image/2.png' },
  ];

  const editorsPick = [
    { title: 'Stuffed sticky rice ball', image: '/../image/1.png', chef: 'Jennifer King' },
    { title: 'Strawberry smoothie', image: '../image/2.png', chef: 'Matthew Lin' },
    { title: 'Latte Art', image: '../image/3.png', chef: 'Lana Dali' },
    { title: 'Butter fried noodles', image: '../image/2.png', chef: 'Paulo Lopez' },
  ];

  return (
    <div className="bg-gray-50">
      <RecipeCardGrid className= "content-center"
        sectionTitle="This Summer Recipes"
        sectionSubtitle="We have all your Independence Day sweets covered."
        recipes={summerRecipes}
      />
      <RecipeCardGrid
        sectionTitle="Recipes With Videos"
        sectionSubtitle="Cooking up Culinary Creations with Step-by-Step Videos"
        recipes={videoRecipes}
      />
      <RecipeCardGrid
        sectionTitle="Editor's pick"
        sectionSubtitle="Curated Culinary Delights Handpicked by Our Expert Editors!"
        recipes={editorsPick}
      />
    </div>
  );
};

export default HomePage;