const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const MasterTable = require('./models/masterTable');
const DetailTable = require('./models/detailTable');

const app = express();

// Middleware to parse incoming JSON requests
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect('mongodb+srv://hasira804:1M5gi3g2heGJGurW@namastenode.wticc.mongodb.net/certificate', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.log('Error connecting to MongoDB:', err));

// POST route to create a new category in MasterTable
app.post('/api/categories', async (req, res) => {
  const { categoryName } = req.body;
  if (!categoryName) return res.status(400).json({ error: "Category name is required." });
  
  try {
    const category = new MasterTable({ categoryName });
    await category.save();
    res.json(category);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// POST route to create a new question in DetailTable and link it to a category
app.post('/api/questions', async (req, res) => {
  const { question, categoryId } = req.body;
  if (!question || !categoryId) return res.status(400).json({ error: "Question and categoryId are required." });

  try {
    // Check if the category exists
    const category = await MasterTable.findById(categoryId);
    if (!category) return res.status(404).json({ error: 'Category not found' });

    // Create the new question
    const questionDoc = new DetailTable({ question, categoryId });
    await questionDoc.save();

    // Link the question to the category in MasterTable
    category.questions.push(questionDoc._id);
    await category.save();

    res.json(questionDoc);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// GET route to fetch all categories and their associated questions
app.get('/api/data', async (req, res) => {
  try {
    const data = await MasterTable.find().populate('questions');
    res.json(data);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Start the server
app.listen(5000, () => {
  console.log('Server running on port 5000');
});
