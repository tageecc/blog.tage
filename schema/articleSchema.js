var mongoose = require('mongoose');

var ArticleSchema = new mongoose.Schema({
    title: String,//标题
    head_img:String,//文章头图
    tags: [String],//标签
    info:String,//内容简介
    content: String,//内容
    view: Number,//浏览量
    date: String,//发布时间
    comment: []//评论
});

module.exports = ArticleSchema;