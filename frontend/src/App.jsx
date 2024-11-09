import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar"; // Ensure Sidebar is used
import CategoryForm from "./components/CategoryForm";
import QuestionForm from "./components/QuestionForm";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState("");

  // Fetch categories on page load
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/data")
      .then((response) => setCategories(response.data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Add a new category to the list
  const addCategory = (category) => {
    setCategories((prevCategories) => [...prevCategories, category]);
  };

  // Update the selected category
  const handleCategorySelect = (categoryId) => {
    setSelectedCategoryId(categoryId);
  };

  return (
    <>
    <Navbar />
      <div className="flex min-h-screen bg-gray-100">
        <Sidebar /> {/* Sidebar is placed alongside */}
        <div className="flex-1 flex flex-col items-center p-8 mr-96 bg-white-200 rounded-lg shadow-lg mt-8 mx-4 w-full sm:w-3/4 lg:w-2/3 xl:w-1/2">
          {/* Main content area (Form) */}
          <h1 className="text-3xl font-semibold text-gray-800 mb-6 text-center">
            Certificate Categories
          </h1>

          {/* Form to add a new category */}
          <div className="mb-8 w-full">
            <CategoryForm addCategory={addCategory} />
          </div>

          {/* Form to add questions (only if a category is selected) */}
          {selectedCategoryId && (
            <div className="mb-8 w-full">
              <QuestionForm categoryId={selectedCategoryId} />
            </div>
          )}

          {/* List of categories and their questions */}
          <div className="w-full mt-6">
            <h2 className="text-2xl font-medium text-gray-700 mb-4">
              Categories and Questions
            </h2>
            <div className="space-y-4">
              {categories.map((category) => (
                <div
                  key={category._id}
                  className="bg-gray-50 p-4 rounded-lg shadow hover:bg-gray-200 cursor-pointer"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {category.categoryName}
                  </h3>
                  <ul className="mt-2 space-y-2">
                    {category.questions?.map((question, index) => (
                      <li key={index} className="text-gray-600">
                        {question.question}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => handleCategorySelect(category._id)}
                    className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none"
                  >
                    Select Category
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-8 mb-4 text-center text-gray-600">
        <p>&copy; 2024 Hasir Ali. All rights reserved.</p>
      </footer>
    </>
  );
};

export default App;
