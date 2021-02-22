const fs = require('fs');
const blogProcessing = require('../scripts/blog/blogProcessing');
const authentication = require('../scripts/blog/authentication');

exports.loadIndexPug = (req, res) => {
  const { login, password } = req.query;
  res.status('200').render(`blog/index_${process.env.VERSION}`, {
    formAvailable: authentication.isAdmin(login, password),
    blog: blogProcessing.getBlog(),
    currPath: 'blog',
    socialLinkes: {
      email: 'http://mail.ru',
      instagram: 'https://www.instagram.com/poludnev.roman/',
      facebook: 'https://www.facebook.com/poludnev.roman',
      linkedIn: 'http://linkedin.com/in/roman-poludnev-0b3592a7',
      twitter: 'http://https://twitter.com/Roman71439308',
    },
  });
};
exports.loadIndexPugStudy = (req, res) => {
  res.status('200').render('blog/study');
};
exports.upLoadForm = (req, res) => {
  const { title, textarea: body } = req.body;
  blogProcessing.addNewPost(title, body);
  res.redirect('/blog');
};
exports.loadBlogRecords = (req, res) => {
  res.json(blogProcessing.getBlog());
};
