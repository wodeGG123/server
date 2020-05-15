let Koa = require('koa2');
const views =  require('koa-views');
const path = require('path');
const staticResource = require('koa-static');
const app = new Koa();
// 设置静态资源地址
app.use(staticResource(__dirname + '/static'));
// 加载模板引擎
app.use(views(path.join(__dirname, './views'), {
    extension: 'html'
  }))
  
app.use( async ( ctx ) => {
    console.log(ctx)
    await ctx.render('index')
})

app.listen(3000, () => {
  console.log('localhost:3000')
})