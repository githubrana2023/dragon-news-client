/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const LeftSide = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategory = async () => {
      const response = await fetch("http://localhost:3000/categories");
      const responseData = await response.json();
      setCategories(responseData);
    };
    fetchCategory();
  }, []);

  return (
    <div>
      <h2 className="font-semibold text-xl">All Category</h2>
      <ul className="flex flex-col justify-center">
        {categories.map((category) => (
          <li key={category.id} className="py-2">
            <NavLink to={`/categories/${category.id}`}>{category.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftSide;
