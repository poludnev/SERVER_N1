const Express = require('express');

const router = Express.Router();

router.route('/v1').get((req, res, next) => {
  res.status('200').send('test send');
  next();
});

module.exports = router;
