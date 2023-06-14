const Router = require("express");
const router = new Router();
const cartController = require('../controllers/cartController')
const checkUserTypeMiddleware = require('../middleware/checkUserTypeMiddleware')

router.post('/', checkUserTypeMiddleware('A'), cartController.create)
router.get('/', checkUserTypeMiddleware('A'), cartController.getAll)

module.exports = router
