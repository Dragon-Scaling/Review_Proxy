require('newrelic');
const express = require('express');
const cors = require('cors');
const path = require('path');
// const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({extended: true}));

app.use(cors());
app.use(express.static(path.resolve(__dirname, 'public')));
app.use(`/listing/:id`, express.static('public'))


app.get('/api/rooms/:id/reviews', (req, res)=>{
  let id = req.params.id;
  res.redirect(`http://localhost:3003/api/rooms/${id}/reviews`)
})


app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`);
});