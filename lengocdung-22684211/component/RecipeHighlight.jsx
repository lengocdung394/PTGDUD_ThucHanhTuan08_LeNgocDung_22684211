import React from "react";

function RecipeHighlight() {
  return (
    <>
      <section
        className="relative w-full h-screen bg-cover bg-center"
        style={{ backgroundImage: "url('https://www.shutterstock.com/image-photo/cooking-class-chef-kitchen-ingredient-600nw-2534009407.jpg')" }}
      >
        {/* Overlay card */}
        <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-sm rounded-2xl p-6 max-w-md shadow-xl">
          <div className="mb-2">
            <span className="bg-yellow-400 text-gray-800 px-3 py-1 rounded-full text-xs font-semibold">
              Recipe of the day
            </span>
          </div>
          <h2 className="text-pink-600 text-2xl font-bold mb-2">
            Salad Caprese
          </h2>
          <p className="text-gray-700 text-sm mb-4">
            Classic Italian Salad Caprese: ripe tomatoes, fresh mozzarella,
            herbs, olive oil, and balsamic vinegar create a refreshing dish for
            lunch or appetizer.
          </p>
          <div className="flex items-center space-x-3 mb-4">
            <img
              src="/chef-avatar.png"
              alt="Chef"
              className="h-8 w-8 rounded-full"
            />
            <span className="text-sm text-gray-800 font-medium">
              Salad Caprese
            </span>
          </div>
          <button className="bg-pink-500 text-white px-4 py-2 rounded-full text-sm hover:bg-pink-600 transition">
            View now →
          </button>
        </div>
      </section>
    </>
  );
}

export default RecipeHighlight;
