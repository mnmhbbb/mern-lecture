const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const config = require('./config/key');
const cors = require('cors');

const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const mongoose = require('mongoose');
mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('MongoDB Connected...'))
  .catch((err) => console.log(err));

app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.use('/api/users', require('./routes/users'));
app.use('/uploads', express.static('uploads'));
app.use('/api/product', require('./routes/product'));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  const root = require('path').join(__dirname, '../client', 'build');
  app.use(express.static(root));

  // index.html for all page routes
  app.get('*', (req, res) => {
    res.sendFile('index.html', { root });
  });
}

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
