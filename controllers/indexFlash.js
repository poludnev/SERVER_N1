module.exports = () => (req, res, next) => {
  res.locals.flash = req.session.flash || {};
  req.session.flash = {};
  res.flash = (arg) => {
    const { contactFormSuccess } = arg;
    req.session.flash.contactFormSuccess = contactFormSuccess;
  };
  next();
};
