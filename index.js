const express = require('express');
const mongoose = require('mongoose');
const employeeRouter = require('./routes/EmployeeRoutes.js');

const app = express();
app.use(express.json()); // Make sure it comes back as json

// TODO - Replace your Connection String here
// mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority
const DB_HOST = 'cluster0.lmdpixg.mongodb.net';
const DB_USER = 'admin';
const DB_PASSWORD = 'Z3YkAPgIrTdJUIxO';
const DB_NAME = 'W2024_comp3133_fri';
const DB_CONNECTION_STRING = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}?retryWrites=true&w=majority`;

mongoose.connect(DB_CONNECTION_STRING, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('MongoDB connected');
}).catch(err => {
  console.error('Error while MongoDB connection:', err);
});

app.use(employeeRouter);

app.listen(8081, () => {
  console.log('Server is running on port 8081...');
});
