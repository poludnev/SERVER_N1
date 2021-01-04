const Express = require('express');

const router = Express.Router();

class Post {
  constructor(title, body, id = 0) {
    this.title = title;
    this.body = body;
    this.id = id;
  }

  getTitle() {
    return this.title;
  }
}

const posts = [
  new Post('hello', 'how are you?'),
  new Post('nodejs', 'story about nodejs'),
];

router.route('/v1').get((req, res, next) => {
  res.status('200').send('test send');
  next();
});
router.route('/pug').get((req, res) => {
  res.status('200').render('index');
});
router.route('/pug/hex').get((req, res) => {
  res.status(200).render('hex');
});
router
  .route('/pug/hex/posts')
  .get((req, res) => {
    console.log(posts[0].getTitle());
    posts.forEach((post, index) => {
      post.id = index + 1;
    });
    // for (let i = 0; i <= posts.length - 1; i += 1) {
    //   posts[i].id = i + 1;
    // }
    res.status(200).render('index2', { posts });
  })
  .post((req, res) => {
    console.log(posts);
    const newPost = new Post('new title', 'new body', posts.length + 1);
    posts.push(newPost);
    console.log(posts);
    res.status(200).render('index2', { posts });
  });
router.route('/pug/hex/posts/new').get((req, res) => {
  res.status(200).render('new');
});
router.route('/pug/hex/posts/:id').get((req, res) => {
  console.log(req.params.id);
  const post = posts[req.params.id];
  console.log({ post });
  res.status(200).render('show', { post });
});

module.exports = router;
