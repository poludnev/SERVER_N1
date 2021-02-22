const Express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const session = require('express-session');
const apiRouter = require('./routes/apiRouter');
const indexRouter = require('./routes/indexRouter');
const stepsRouter = require('./routes/stepsRouter');
const blogRouter = require('./routes/blogRouter');
const cvRouter = require('./routes/cvRouter');
const projectsRouter = require('./routes/projectsRouter');
const indexFlash = require('./controllers/indexFlash');

const app = new Express();

app.set('view engine', 'pug');

app.use(Express.static(`${__dirname}/public`));
app.use(
  session({
    secret: 'secret key',
    resave: false,
  })
);
app.use(indexFlash());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// app.use(Express.json());

app.use(
  Express.urlencoded({
    extended: true,
  })
);

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/steps', stepsRouter);
app.use('/blog', blogRouter);
app.use('/cv', cvRouter);
app.use('/projects', projectsRouter);

module.exports = app;
