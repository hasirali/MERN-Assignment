const mongoose = require('mongoose');

const masterTableSchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  questions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'DetailTable' }] // Array of references to DetailTable
});

module.exports = mongoose.model('MasterTable', masterTableSchema);