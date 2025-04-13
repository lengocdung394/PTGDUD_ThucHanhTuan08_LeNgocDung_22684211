import React from 'react';

const RecipeCardGrid = ({ sectionTitle, sectionSubtitle, recipes }) => {
  return (
    <section className="my-12 px-4 md:px-16">
      <h2 className="text-2xl font-bold text-pink-600 mb-1 text-center ">{sectionTitle}</h2>
      <p className="text-gray-600 mb-6 text-center">{sectionSubtitle}</p>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {recipes.map((item, idx) => (
          <div key={idx} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition">
            <img src={item.image} alt={item.title} className="w-full h-40 object-cover" />
            <div className="p-4">
              <h3 className="text-sm font-semibold text-gray-800">{item.title}</h3>
              {item.chef && (
                <p className="text-xs text-gray-500 mt-1">by {item.chef}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RecipeCardGrid;