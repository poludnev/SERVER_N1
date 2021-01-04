const Express = require('express');
const { route } = require('./apiRouter');
const indexController = require('../controllers/indexController');

const router = Express.Router();
router.route('/index').get(indexController.loadIndex);
router.route('/').get(indexController.loadIndex);
module.exports = router;
