import React, { useState } from "react";
import axios from "axios";

const QuestionForm = ({ categoryId }) => {
  const [question, setQuestion] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (question && categoryId) {
      axios
        .post("http://localhost:5000/api/questions", { question, categoryId })
        .then((response) => {
          console.log("Question added:", response.data);
          setQuestion("");
        })
        .catch((error) => console.error("Error creating question:", error));
    }
  };

  return (
    categoryId && (
      <div>
        <h2>Add Question</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="p-2 rounded-lg m-4"
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            placeholder="Enter your question"
          />
          <button
            type="submit"
            className="mt-4 px-6 py-2 bg-indigo-500 text-white rounded-lg shadow-md hover:bg-indigo-600 focus:outline-none"
          >
            Add Question
          </button>
        </form>
      </div>
    )
  );
};

export default QuestionForm;
