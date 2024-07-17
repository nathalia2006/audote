const  { Router } = require('express');
const router = Router();
const { storeUser } = require('../controller/userController');


router.post('/user/create', storeUser);

module.exports = router;