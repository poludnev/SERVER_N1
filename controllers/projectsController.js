const fs = require('fs');

const blogIndex = fs.readFileSync(
  `${__dirname}/../public/templates/template-blog-index.html`,
  'utf-8'
);

exports.loadIndex = (req, res) => {
  res.status('200').send('projects');
};
