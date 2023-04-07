const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.GetAllAGEBS);
router.get('/:cvegeo', controller.GetAgebByCvegeo);

module.exports = router;