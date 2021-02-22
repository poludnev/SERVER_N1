const fs = require('fs');

const blogIndex = fs.readFileSync(
  `${__dirname}/../public/templates/template-index.html`,
  'utf-8'
);

exports.loadIndex = (req, res) => {
  res.status('200').render(`index`, {
    socialLinkes: {
      email: 'http://mail.ru',
      instagram: 'https://www.instagram.com/poludnev.roman/',
      facebook: 'https://www.facebook.com/poludnev.roman',
      linkedIn: 'http://linkedin.com/in/roman-poludnev-0b3592a7',
      twitter: 'http://https://twitter.com/Roman71439308',
    },
  });
};

exports.uploadIndexForm = (req, res) => {
  const { visitorContacts, visitorMessage } = req.body;
  res.flash({ contactFormSuccess: true });
  res.redirect(`/${Object.keys(req.query).flat().join('')}`);
};
