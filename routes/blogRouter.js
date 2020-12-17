const Express = require('express');
const blogController = require('../controllers/blogController');

const router = Express.Router();

router.route('/').get(blogController.loadIndex);

module.exports = router;
