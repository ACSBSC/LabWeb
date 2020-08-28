let router = require('express').Router()
let PagesController = require('../controllers/PagesController')
let ProductsController = require('../controllers/ProductsController')

router.get('/',PagesController.homepage)
router.get('/about-us',PagesController.about)
router.get('/products/create',ProductsController.create)
router.post('/products',ProductsController.store)
router.get('/products/:id', ProductsController.show);
router.get('/products/:id/edit', ProductsController.edit);
router.put('/products/:id', ProductsController.update);
router.delete('/products/:id', ProductsController.delete);

module.exports = router