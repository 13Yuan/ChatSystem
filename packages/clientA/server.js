const path = require('path');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const serve = require('koa-static');
const devWare = require('koa-webpack');

const config = require('./webpack.config.js');

const app = new Koa();
const port = 4001;

app
    .use(bodyParser())
    .use(serve(path.join(__dirname, 'dist')))
    .use(devWare({config}))

    .listen(port, () => {
         var bonjour = require('bonjour')()
        bonjour.publish({ name: 'Client A', type: 'http', port: 4002 })
        console.log('Server Started ?http://localhost:' + port.toString());
    });