// Server port reservation variable
const PORT = process.env.PORT || 3001;
const express = require('express');
const app = express();

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');

// Parse incoming string or array data.
app.use(express.urlencoded({ extended: true }));

// Parse incoming JSON data.
app.use(express.json());

// Enables server to access apiRoutes.
app.use('/api', apiRoutes);

// Enables server to access htmlRoutes.
app.use('/', htmlRoutes);

app.use(express.static('public'));



app.listen(PORT, () => {
  console.log(`Your API server is locked and loaded on port ${PORT}!`);
});