const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const getSchema = require('./schemaController');
const { checkCache, cacheSchema } = require('./cacheController');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.post('/api/schema', checkCache, getSchema, cacheSchema, (req, res) => {
  res.status(200).type('application/json').send(res.locals);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}....`);
});
