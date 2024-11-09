import React from 'react';

const CategoriesList = ({ categories, onCategorySelect }) => {
  return (
    <div>
      <h2>Categories</h2>
      <ul>
        {categories.map(category => (
          <li key={category._id}>
            <button onClick={() => onCategorySelect(category._id)}>
              {category.categoryName}
            </button>
            <ul>
              {category.questions.length > 0 ? (
                category.questions.map((question) => (
                  <li key={question._id}>{question.question}</li>
                ))
              ) : (
                <li>No questions yet</li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoriesList;
