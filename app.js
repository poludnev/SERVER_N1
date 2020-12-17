const Express = require('express');
const morgan = require('morgan');
const fs = require('fs');
const apiRouter = require('./routes/apiRouter');
const indexRouter = require('./routes/indexRouter');
const stepsRouter = require('./routes/stepsRouter');
const blogRouter = require('./routes/blogRouter');
const cvRouter = require('./routes/cvRouter');
const projectsRouter = require('./routes/projectsRouter');

const app = new Express();

app.use(Express.static(`${__dirname}/public`));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(Express.json());
app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/steps', stepsRouter);
app.use('/blog', blogRouter);
app.use('/cv', cvRouter);
app.use('/projects', projectsRouter);

module.exports = app;
