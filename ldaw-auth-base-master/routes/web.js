let router = require('express').Router();
let homepageController = require('../controllers/HomepageController');
let authController = require('../controllers/AuthController');
let authValidator = require('../validator/AuthValidators')

let dashboardController = require('../controllers/DashboardController');
let usersController = require('../controllers/UserController');

let {authUser, authAdmin} = require("../middleware/AccessMiddleware");

let passport = require("passport");

router.get('/', homepageController.index);
router.get('/app/dashboard',authUser ,dashboardController.index);
router.get('/app/users',authUser,authAdmin ,usersController.index);

// Authentication routes
router.get('/login', authController.login);
router.get('/register', authController.register);
router.post('/register', authValidator.store,authController.store);

router.post('/login', passport.authenticate('local', { failureRedirect: '/login-fail', successRedirect: '/protected' }));
router.get('/protected', (req, res) => {
  res.send('Usuario logueado con éxito');
});
router.get('/login-fail', (req, res) => {
  res.send('El usuario no tiene una sesión válida');
});
router.get("/logout", (req, res)=>{
  req.logout();
  res.redirect("/");
})


module.exports = router;
