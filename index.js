let express = require('express')
var bodyParser = require('body-parser')
let app = express()

// Sobreescribe el método de envío
let methodOverride = require('method-override')
// sobreescribe el método POST
app.use(methodOverride('_method'))

/*let webRoutes = require('./routes/web')
let appConfigs = require('./configs/app')

var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.post('/login', urlencodedParser, function (req, res) {
  res.send('welcome, ' + req.body.username)
})*/

let bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.use('/', webRoutes)

let exphbs = require('express-handlebars')
const extNameHbs = 'hbs'
let hbs = exphbs.create({extname: extNameHbs})
app.engine(extNameHbs, hbs.engine)
app.set('view engine', extNameHbs)

app.listen(appConfigs.express_port, ()=>{
    let show = 'App listening on port ' + appConfigs.express_port + '! (http://localhost:' + appConfigs.express_port +')';
  console.log(show);
});
