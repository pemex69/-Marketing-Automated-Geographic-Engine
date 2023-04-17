const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get('/', controller.getAllUsers);
router.get('/:usr_id', controller.getUserByID);
router.post('/', controller.AddUser);
router.put('/:usr_id', controller.updateUserByID);
router.delete('/:usr_id', controller.deleteUserByID);

module.exports = router;