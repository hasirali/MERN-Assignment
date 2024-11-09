const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define schema for DetailTable (questions)
const detailTableSchema = new mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  categoryId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MasterTable', // Reference to MasterTable
    required: true,
  },
});

module.exports = mongoose.model('DetailTable', detailTableSchema);