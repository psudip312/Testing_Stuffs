import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center max-w-7xl mx-auto px-8 py-8">
      <div>
        <h1 className="font-semibold text-5xl text-gray-500">Logo</h1>
      </div>

      <div className="text-lg space-x-7 p-4 text-gray-500">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#blog">Blog</a>
        <a href="#shop">Shop</a>
        <a href="#search">
          <VscSearch className="inline" />
        </a>
      </div>

      <div className="space-x-4 text-lg text-gray-500 font-medium">
        <a href="#signIn">Sign in</a>
        <a className="bg-teal-300 px-8 py-2 rounded-full" href="#signUp">
          Sign up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
