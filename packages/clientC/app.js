'use strict';

var staticCache = require('koa-static-cache');
var register = require('babel-register');
var react = require('koa-react-view');
var path = require('path');
var koa = require('koa');

var app = koa();

var viewpath = path.join(__dirname, 'views');
var assetspath = path.join(__dirname, 'public');

react(app, { views: viewpath });

register({
  presets: [ 'es2015', 'react' ],
  extensions: [ '.jsx' ],
});

app.use(staticCache(assetspath));

app.use(function* () {
  this.render('index', {});
});

app.listen(3000);
console.log('server start listen at 3000');
