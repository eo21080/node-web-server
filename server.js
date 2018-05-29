const express = require('express');
const hbs = require('hbs');

const port = process.env.PORT || 3000;

var app = express();

//hbs.registerPartials(_dirname + '/views/partials');

app.get('/', (req, res) => {
  //res.send('<h1>Hello Express!!@</h1>');
  res.send({
    name: '11',
    likes: ['hope', 'then', 'apple']
  });
});

app.get('/about',(req, res) => {
  res.send('about page!!!');
});

app.get('/about2',(req, res) => {
  res.send('about2 page');
});

// bad - send back json with errorMassage
app.get('/bad', (req, res) => {
  res.send({
    errorMessage: 'Unable to handle request'
  });
});


app.listen(port, () => {
  console.log('Server is up on port heroku or 3000');
});
