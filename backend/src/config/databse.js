const mongoose = require('mongoose');

// MongoDB connection (using your provided MongoDB URI)
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb+srv://hasira804:1M5gi3g2heGJGurW@namastenode.wticc.mongodb.net/certificate', {
      useNewUrlParser: true, // Deprecated option, but can remain for backward compatibility
      useUnifiedTopology: true, // Deprecated option, but can remain for backward compatibility
    });
    console.log('MongoDB Connected...');
  } catch (error) {
    console.error('MongoDB Connection Error: ', error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
