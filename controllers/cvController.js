const fs = require('fs');
const blogProcessing = require('../scripts/blog/blogProcessing');
const authentication = require('../scripts/blog/authentication');

exports.loadIndex = (req, res) => {
  res.status('200').render(`cv/cv_index_${process.env.CV_VERSION}.pug`, {
    // formAvailable: authentication.isAdmin(login, password),
    // blog: blogProcessing.getBlog(),
    currPath: 'cv',
    socialLinkes: {
      email: 'http://mail.ru',
      instagram: 'https://www.instagram.com/poludnev.roman/',
      facebook: 'https://www.facebook.com/poludnev.roman',
      linkedIn: 'http://linkedin.com/in/roman-poludnev-0b3592a7',
      twitter: 'http://https://twitter.com/Roman71439308',
    },
  });
};
