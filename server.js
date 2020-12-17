const dotenv = require('dotenv'); // sholud be configured before the app. otherwise we can't use it

dotenv.config({ path: `${__dirname}/config.env` });

const app = require('./app');

console.log(process.env.PORT);
app.listen(process.env.PORT, () => {
  console.log(`running on ${process.env.PORT}`);
});
