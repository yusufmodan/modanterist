const router = require('koa-router')();
const userRoutes = require('./userRoutes');

router.use('/users', userRoutes.routes());
// put more routes here
// create more routers

module.exports = router;
