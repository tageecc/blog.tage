var express = require('express');
var User = require('../model/user');
var Article = require('../model/article');
var router = express.Router();

router.get('/', function (req, res, next) {
    res.render('index', {name: '塔歌'});
});

router.get('/article/:id', function (req, res, next) {
    Article.findOne({_id: req.params.id}, function (err, article) {
        if (err) console.error(err);
        if (article) {
            res.render('article', {name:'塔哥',article: article});
        } else {
        }
    })
});
router.post('/article',function(req, res, next){
    console.log(req.body);
    console.log(req.body.article);
    Article.create(req.body.article,function(err){
        if(err) {
            console.log(err);
        } else {
            console.log('save ok');
            res.send({msg: "save ok!"});
        }
    })
});

router.get('/editor', function (req, res, next) {
    res.render('editor', {name: '塔歌'});
});

router.post('/editor', function (req, res, next) {

});

router.get('/login', function (req, res, next) {
    res.render('login');
});

router.post('/login', function (req, res, next) {
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
