const Express = require('express');
const stepsController = require('../controllers/stepsController');

const router = Express.Router();

router.route('/').get(stepsController.loadIndex);

module.exports = router;
