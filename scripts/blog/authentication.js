const users = [
  { login: 'admin', password: '123' },
  { login: 'admin1', password: '123' },
];

module.exports = {
  isAdmin(login, password) {
    if (process.env.ADMIN === 'true') {
      return true;
    }
    const user = users.filter((u) => u.login === login);
    return user.length > 0 ? password === user[0].password : false;
  },
};
