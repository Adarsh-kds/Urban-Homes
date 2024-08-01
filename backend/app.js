const express = require("express");
const app = express();
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

// Load environment variables
dotenv.config();

// CORS configuration
// const localUrl = process.env.CLIENT_URL;
app.use(cors({
  origin: ["https://house-rental-g3ol.onrender.com", "http://localhost:3000"],
  credentials: true,
  optionSuccessStatus: 200
}));

// Middleware setup
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes setup
const auth = require('./routes/auth.route');
const user = require('./routes/user.route');
const post = require('./routes/post.route');

app.use('/user', user);
app.use('/auth', auth);
app.use('/post', post);

// Start the server
const port = process.env.PORT || 4500;
app.listen(port, () => {
  console.log(`App running on port ${port}`);
});
