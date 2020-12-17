const Express = require('express');
const { route } = require('./apiRouter');
const indexController = require('../controllers/indexController');

const router = Express.Router();

router.route('/index').get(indexController.loadIndex);

router.route('/').get(indexController.loadIndex);
// router.route('/index').get((req, res, next) => {
//   res.status('200').send(`<a href="http://localhost:8005/blog">Blog</a>`);
//   next();
// });
module.exports = router;
