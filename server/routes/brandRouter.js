const Router = require("express");
const router = new Router();
const brandController = require('../controllers/brandController')
const checkUserTypeMiddleware = require('../middleware/checkUserTypeMiddleware')

router.post('/', checkUserTypeMiddleware('A'), brandController.create)
router.get('/', brandController.getAll)

module.exports = router
