class NewsController {
  index(req, res) {
    res.render('news');
  }

  detail(req, res) {
    res.send('Detail News!');
  }
}

module.exports = new NewsController();
