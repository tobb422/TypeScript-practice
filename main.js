const Koa = require("koa");
const app = new Koa();

app.use(views('.'));

this.body = yield render('index')

app.listen(3000);
