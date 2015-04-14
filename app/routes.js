var express = require('express');
var router = express.Router();
var Post = require('./models/post');

router.use(function(req, res, next) {
    next(); // make sure we go to the next routes and don't stop here
});

router.get('/', function(req, res) {
    res.json({ message: 'Hello World!' });   
});

router.route('/posts')
  .post(function(req, res){
    var post = new Post();
    post.title = req.body.title;
    post.body = req.body.body;
    post.comments = [];
    
    post.save(function(err){
      if(err)
        res.send(err);
      res.json({message:'Post Created',
                created: post});
    });    
  })
  .get(function(req, res){
    Post.find(function(err, posts){
      if(err)
        res.send(err);
      res.json(posts);
    });
});

router.route('/posts/:post_id')
  .get(function(req, res) {
    Post.findById(req.params.post_id, function(err, post){
      if(err)
        res.send(err);
      res.json(post);
    });
  })
  .put(function(req, res) {
    Post.findById(req.params.post_id, function(err, post) {
      if(err)
        res.send(err);
      post.title = req.body.title;
      post.body = req.body.body;
      post.comments = req.body.comments;

      post.save(function(err){
        if(err)
          res.send(err);
        res.json({message:'Post updated',
                  updated: post});
      });
    });
  });

module.exports = router;
