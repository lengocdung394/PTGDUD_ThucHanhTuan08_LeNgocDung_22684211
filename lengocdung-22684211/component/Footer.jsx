import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-950 text-gray-300 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* About */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">About Us</h4>
          <p className="text-sm mb-5">
            Welcome to our website, a wonderful place to explore and learn how to cook like a pro.
          </p>
          <div className="flex items-center">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-l-md bg-white text-gray-800 text-sm outline-none"
            />
            <button className="bg-pink-500 hover:bg-pink-600 text-white text-sm px-4 py-2 rounded-r-md transition">
              Send
            </button>
          </div>
        </div>

        {/* Learn More */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Learn More</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Our Cooks</a></li>
            <li><a href="#" className="hover:text-white transition">See Our Features</a></li>
            <li><a href="#" className="hover:text-white transition">FAQ</a></li>
          </ul>
        </div>

        {/* Shop */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Shop</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">Gift Subscription</a></li>
            <li><a href="#" className="hover:text-white transition">Send Us Feedback</a></li>
          </ul>
        </div>

        {/* Recipes */}
        <div>
          <h4 className="text-xl font-semibold text-white mb-4">Recipes</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#" className="hover:text-white transition">What to Cook This Week</a></li>
            <li><a href="#" className="hover:text-white transition">Pasta</a></li>
            <li><a href="#" className="hover:text-white transition">Dinner</a></li>
            <li><a href="#" className="hover:text-white transition">Healthy</a></li>
            <li><a href="#" className="hover:text-white transition">Vegetarian</a></li>
            <li><a href="#" className="hover:text-white transition">Vegan</a></li>
            <li><a href="#" className="hover:text-white transition">Christmas</a></li>
          </ul>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-800 mt-12 pt-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="flex items-center gap-2 mb-4 md:mb-0">
            <img src="/logo.svg" alt="Chefify" className="h-6" />
            <span className="text-white font-semibold">Chefify</span> &copy; 2023 Chefify Company
          </div>
          <div className="space-x-4">
            <a href="#" className="hover:text-white transition">Terms of Service</a>
            <a href="#" className="hover:text-white transition">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
