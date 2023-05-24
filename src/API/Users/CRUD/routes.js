const {Router} = require('express');
const controller = require('./controller');
const router = Router();

router.get('/all', controller.getAllUsers);
router.get('/data/:usr_id', controller.getUserByID);
router.post('/add', controller.AddUser);
router.put('/update/:usr_id/:usr_username/:usr_email/:usr_pass', controller.updateUserByID);
router.delete('/delete/:usr_id', controller.deleteUserByID);

module.exports = router;