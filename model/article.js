var mongoose = require('mongoose');
var ArticleSchema = require('../schema/articleSchema');
var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;