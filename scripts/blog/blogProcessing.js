const fs = require('fs');

const getBiggestID = (data) => {
  const ids = data.blogRecords.map((el) => Number(el.id));
  return Math.max(...ids);
};

const readBlog = () => {
  const blogDataJSON = fs.readFileSync(
    `${__dirname}/../../data/blog-records.json`,
    'utf-8'
  );
  // console.log('blog parse', JSON.parse(blogDataJSON));
  return JSON.parse(blogDataJSON);
};

const parsedBlogData = readBlog();

const formateBlogData = (blog) => {
  blog.blogRecords = blog.blogRecords || blog.data;
  const records = blog.blogRecords.map((record) => {
    record.date =
      typeof record.date === 'string' ? Date.parse(record.date) : record.date;
    record.title = record.title || 'no title';
    record.likes = record.likes || 0;
    record.dislikes = record.dislikes || 0;
    record.comments = record.comments || 0;
    record.id = record.id || getBiggestID(blog);
    return record;
  });
  delete blog.blogData;
  delete blog.data;

  return blog;
};

if (process.env.NORM_BLOG === 'true') {
  formateBlogData(parsedBlogData);
}

const saveBlogData = (blogData) => {
  const blogJSON = JSON.stringify(blogData);
  fs.writeFileSync(`${__dirname}/../../data/blog-records.json`, blogJSON);
};

const blogDataBackUp = () => {
  if (process.env.BLOG_BACKUP) {
    const tempBlog = fs.readFileSync(
      `${__dirname}/../../data/blog-records.json`,
      'utf-8'
    );
    const newFileName = `blog-recorsd-backup-${new Date(Date.now())}`;
    fs.writeFileSync(`${__dirname}/../../data/${newFileName}.json`, tempBlog);
  }
  return true;
};

module.exports = {
  makeNewBlogRecord(title, body, id = null, date = null) {
    const result = {
      id: getBiggestID(parsedBlogData) + 1,
      date: Date.now(),
      body,
      title,
      likes: 0,
      dislikes: 0,
      comments: 0,
    };
    return result;
  },

  addNewPost(title, body) {
    blogDataBackUp();
    parsedBlogData.blogRecords.push(this.makeNewBlogRecord(title, body));
    saveBlogData(parsedBlogData);
    return true;
  },

  getBlog(blogData = readBlog()) {
    blogData.blogRecords.sort((a, b) => b.date - a.date);
    blogData.blogRecords = blogData.blogRecords.map((record) => {
      record.body = record.body
        .split('\n')
        .map((string) => `<p>${string}</p>`)
        .join('');
      return record;
    });
    return blogData;
  },
};
