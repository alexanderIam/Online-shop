const Router = require("express");
const router = new Router();
const typeController = require('../controllers/typeController')
const checkUserTypeMiddleware = require('../middleware/checkUserTypeMiddleware')

router.post('/', checkUserTypeMiddleware('A'), typeController.create)
router.get('/', typeController.getAll)

module.exports = router
