var express = require('express');
var User = require('../model/user');
var Article = require('../model/article');
var Date = require('../util/dateUtil.js');
var Arr = require('../util/arrUtil.js');
var router = express.Router();

router.get('/', function (req, res, next) {
    Article.find({}, function (err, articles) {
        if (err) console.error(err);
        res.render('index', {name: '塔歌', articles: articles});
    })
});

router.get('/tags', function (req, res, next) {
    Article.find({}, function (err, articles) {
        if (err) console.log(err);
        if (articles && articles.length > 0) {
            var tags = [];
            for (var i = 0; i < articles.length; i++) {
                tags=tags.concat(articles[i].tags);
            }
            res.send({"tags": Arr.unique(tags)});
        }

    })
});
router.get('/article/:id', function (req, res, next) {

    Article.findOne({_id: req.params.id}, function (err, article) {
        if (err) console.error(err);
        if (article) {
            res.render('article', {name: '塔歌', article: article});
        } else {
        }
    })
});
router.post('/article', function (req, res, next) {
    var article = {
        title: req.body.title,
        head_img: req.body.head_img,
        tags: req.body.tags.split(' '),
        validity: req.body.validity,
        content: req.body.content,
        date: Date.getDateTime(),
        view: 0
    };
    console.log(article.tags);
    Article.create(article, function (err) {
        if (err) {
            console.log(err);
        } else {
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
