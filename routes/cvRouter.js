const Express = require('express');
const cvController = require('../controllers/cvController');

const router = Express.Router();

router.route('/').get(cvController.loadIndex);

module.exports = router;
