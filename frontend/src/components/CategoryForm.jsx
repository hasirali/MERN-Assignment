import React, { useState } from "react";
import axios from "axios";

const CategoryForm = ({ addCategory }) => {
  const [categoryName, setCategoryName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (categoryName) {
      axios
        .post("http://localhost:5000/api/categories", { categoryName })
        .then((response) => {
          addCategory(response.data);
          setCategoryName("");
        })
        .catch((error) => console.error("Error creating category:", error));
    }
  };

  return (
    <div>
      <h2>Create Category</h2>
      <form onSubmit={handleSubmit}>
        <input
          className="p-2 rounded-lg m-4"
          type="text"
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          placeholder="Category Name"
        />
        <button
          type="submit"
          className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none"
        >
          Create Category
        </button>
      </form>
    </div>
  );
};

export default CategoryForm;
