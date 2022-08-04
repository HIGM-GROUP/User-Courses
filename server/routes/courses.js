import courses from '../controllers/courses.js';
import express from 'express';
const router=express.Router();
router.route('/').get(courses.getCourses).post(courses.createCourse);
router.route('/:id').patch(courses.updateCourse).delete(courses.deleteCourse);

export default router;