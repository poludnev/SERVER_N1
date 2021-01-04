const Express = require('express');
const blogController = require('../controllers/blogController');

const router = Express.Router();

router
  .route('/')
  .get(blogController.loadIndexPug)
  .post(blogController.upLoadForm);
router
  .route('/pug')
  .get(blogController.loadIndexPug)
  .post(blogController.upLoadForm);
router.route('/blogRecords').get(blogController.loadBlogRecords);

module.exports = router;
