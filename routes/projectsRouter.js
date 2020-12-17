const Express = require('express');
const projectsController = require('../controllers/projectsController');

const router = Express.Router();

router.route('/').get(projectsController.loadIndex);

module.exports = router;
