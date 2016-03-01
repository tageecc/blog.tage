var express = require('express');
var User = require('../model/user');
var Article = require('../model/article');
var router = express.Router();

router
    .get('/', function (req, res, next) {
        res.render('index', {name: '塔歌'});
    })
    .get('/article/:id', function (req, res, next) {
        Article.findOne({_id: req.body.id}, function (err, article) {
            if (err) console.error(err);
            if (article) {
                res.render('article', {article: article});
            } else {
                res.redirect('404');
            }
        })
    })
    .get('/editor', function (req, res, next) {
        res.render('editor', {name: '塔歌'});
    })
    .post('/editor', function (req, res, next) {

    })
    .get('/login', function (req, res, next) {
        res.render('login');
    })
    .post('/login', function (req, res, next) {
        User.findOne({name: req.body.user, pwd: req.body.pwd}, function (err, user) {
            if (err) console.error(err);
            if (user) {//如果用户存在添加session
                req.session.user = user;
                res.render('list', {name: user.name});
            } else {
                res.end('error', {msg: "用户名或密码错误"});
            }
        })
    });

module.exports = router;
