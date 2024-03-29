const router = require('express').Router();
const usersController = require('../controllers/usersController.js');
//const auth = require('../middlewares/verifyToken.js');

router.get('/login', usersController.login);
router.post('/login', usersController.loginpost);
router.get('/register', usersController.register);
router.post('/register', usersController.registerpost);
router.get('/recover', usersController.recover);
router.post('/recover', usersController.recoverpost);

module.exports = router ;