const Course = require('../models/Course')
const {mongooseToObject} = require('../../util/mongoose')

class CourseController {
 
  // [GET] /courses/:slug
  show(req, res, next) {
    Course.findOne({slug: req.params.slug})
      .then(course => {
        res.render('course/show', {course: mongooseToObject(course)})
      })
      .catch(next)
  }

  // [GET] /courses/create
  create(req, res, next){
    res.render('course/create')
  }

  // [POST] /courses/store
  store(req,res,next){
    const course = new Course(req.body)
    course.save()
      .then(() => res.redirect('/'))
      .catch(next)
  }

  // [GET] /courses/:id/edit
  edit(req, res, next){
    Course.findById(req.params.id)
      .then(course => {
        res.render('course/edit', {course: mongooseToObject(course)})
      })
      .catch(next)
  }

  update(req, res, next){
    Course.updateOne({_id: req.params.id}, req.body)
      .then(() => res.redirect('/'))
      .catch(next)
  }
}

module.exports = new CourseController();
