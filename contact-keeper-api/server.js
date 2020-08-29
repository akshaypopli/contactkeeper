const express = require('express');
const users = require('./routes/users');
const contacts = require('./routes/contacts');
const auth = require('./routes/auth');

const connectDB = require('./config/db'); 

const path = require('path');

const app = express();

// connect Database
connectDB();

app.use(express.json({extended: false}));

//routes
app.use('/api/users',   users);
app.use('/api/auth',   auth);
app.use('/api/contacts',   contacts);

// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
    // Set static folder
    app.use(express.static('frontend/build'));
  
    app.get('*', (req, res) =>
      res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
    );
  }

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));