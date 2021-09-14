const express = require('express');
const exphbs  = require('express-handlebars');
const bodyParser = require('body-parser');
const perfectPizza = require('./perfect-pizza');
const app = express();
//const pizza = require("./express-starter-app");

const pizzaPerfectType = perfectPizza();

const PORT =  process.env.PORT || 3017;


const handlebarSetup = exphbs({
    partialsDir: "./views/partials",
    viewPath: './views',
    layoutsDir: './views/layouts'
});

// enable the req.body object - to allow us to use HTML forms

// enable the static folder...
app.use(express.static('public'));
app.engine('handlebars', handlebarSetup);
app.set('view engine', 'handlebars');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
// add more middleware to allow for templating support



// let counter = 0;

app.get('/', function(req, res) {
	res.render('index', {
		// counter,
	
		pizzaSmall: pizzaPerfectType.getSmall(),
        pizzaMedium : pizzaPerfectType.getMedium(),
		pizzalarge : pizzaPerfectType.getLarge(),
		pizzaTotalCost : pizzaPerfectType.getPizzaCost()

	});
});

app.post('/count', function(req, res) {
	// counter++;

	const pizzaType =req.body.piz;
	
	console.log(pizzaType);
	pizzaPerfectType.addPizzas(pizzaType)
	
	
	res.redirect('/')
});


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log('App started on port:',PORT)
});