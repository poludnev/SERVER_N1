const Express = require('express');
const { route, get } = require('./apiRouter');
const indexController = require('../controllers/indexController');

const router = Express.Router();
router.route('/index').get(indexController.loadIndex);
router
  .route('/')
  .get(indexController.loadIndex)
  .post(indexController.uploadIndexForm);
router
  .route('/contactForm')
  .get(indexController.loadIndex)
  .post(indexController.uploadIndexForm);
module.exports = router;
