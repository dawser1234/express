const express = require('express');
const app = express();
const { restrictAccess } = require('./middleware'); 

app.use(express.static('Public'));
app.set('view engine', 'pug');


app.use(restrictAccess);

app.get('/', (req, res) => {
  res.render('HomePage');
});

app.get('/ContactUs', (req, res) => {
  res.render('ContactUs');
});

app.get('/OurServices', (req, res) => {
  res.render('OurServices');
});

app.use((req , res)=> {
  res.status(404).send('Not Found');
});

const port = 3000;
app.listen(port, (err) => {
  err ? console.log(err) : console.log(`Server running at port ${port}`);
});
