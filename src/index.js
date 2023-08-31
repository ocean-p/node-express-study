const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const app = express();
const port = 3000;

const route = require('./routes');

//static file
app.use(express.static('src/public'));

//access body of post method (middleware)
app.use(express.urlencoded({ extended: true }));
//app.use(express.json())

//HTTP logger
app.use(morgan('combined'));

//template engine
   app.engine('hbs', handlebars.engine({ extname: '.hbs' }));
   app.set('view engine', 'hbs');
app.set('views', 'src/resources/views');

route(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
