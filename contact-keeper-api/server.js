const express = require('express');
const users = require('./routes/users');
const contacts = require('./routes/contacts');
const auth = require('./routes/auth');

const app = express();

app.get('/', (req, res) => res.json({msg: 'welcome to contact keeper api'}));

//routes
app.use('/api/users',   users);
app.use('/api/auth',   auth);
app.use('/api/contacts',   contacts);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server listening on port ${PORT}`));