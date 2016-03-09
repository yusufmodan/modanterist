const userRoutes = require('koa-router')();

function test() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('hellowworldddd');
      resolve('hellowworldddd');
    }, 100);
  });
}

userRoutes.get('/', function *() {
  try {
    const str = yield test();
    console.log(`${str}man i hope this works`);
  } catch (errrr) {
    console.log(errrr);
  }
});


// the above function works I simply removed the console.log to make it look cleaner

module.exports = userRoutes;
