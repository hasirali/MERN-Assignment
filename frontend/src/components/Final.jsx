import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryForm from './CategoryForm';
import QuestionForm from './QuestionForm';
import CategoriesList from './CategoriesList';

const Final = () => {
    const [categories, setCategories] = useState([]);
    const [selectedCategoryId, setSelectedCategoryId] = useState('');
  
    // Fetch categories on page load
    useEffect(() => {
      axios.get('http://localhost:5000/api/data')
        .then(response => setCategories(response.data))
        .catch(error => console.error('Error fetching data:', error));
    }, []);
  
    // Add a new category to the list
    const addCategory = (category) => {
      setCategories([...categories, category]);
    };
  
    // Update the selected category
    const handleCategorySelect = (categoryId) => {
      setSelectedCategoryId(categoryId);
    };
  
    return (
      <div>
        <h1>Certificate Categories</h1>
  
        <CategoryForm addCategory={addCategory} />
        <QuestionForm categoryId={selectedCategoryId} />
  
        <CategoriesList 
          categories={categories} 
          onCategorySelect={handleCategorySelect} 
        />
      </div>
    );
  };
  
  export default Final;