const Router  = require("express");
const router = new Router();
const deviceController = require('../controllers/deviceController')
const checkUserTypeMiddleware = require('../middleware/checkUserTypeMiddleware')

router.post('/', checkUserTypeMiddleware('A'), deviceController.create)
router.get('/', deviceController.getAll)
router.get('/:id', deviceController.getOne)

module.exports = router
