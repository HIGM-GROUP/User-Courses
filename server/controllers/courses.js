import Course from '../models/Course.js';
import mongoose from 'mongoose';

const getCourses= async (req,res)=>{
    try {
    const courses= await Course.find();
    res.status(200).json(courses)
        
    } catch (error) {
        res.status(404).json({message:` Failed cannot find cours ${error}`})
    }
}
const createCourse=async(req,res)=>{
    try {
        const course=req.body;
        console.log(course);
        const newCourse=Course(course);
        await newCourse.save();
        res.status(201).json(newCourse);
    } catch (error) {
        res.status(409).json({message:`Failed cannot create a course ${error}`})
    }
}
const deleteCourse =async(req,res)=>{
    try {
        const {id:_id}=req.params;
        if(!mongoose.Types.ObjectId.isValid(_id))
        return res.status(404).json({message:` Failed cannot find this course with id ${_id}`});
        await Course.findByIdAndDelete(_id);
        res.status(200).json(_id);
    } catch (error) {
        res.status(500).json({message:`Failed cannot delete this course ${error}`})
    }
}
const updateCourse=async(req,res)=>{
    try {
        const course=req.body;
         const {id:_id}=req.params;
         if(!mongoose.Types.ObjectId.isValid(_id))return res.status(404).json({message:`failed to find this course with id ${_id}`})
        const updatedCourse= await Course.findByIdAndUpdate(_id,course);
         res.status(204).json(updatedCourse);
        
    } catch (error) {
        res.status(409).json({message:` Failed cannot update this course ${error}`})
    }
}
const courses={
    getCourses,createCourse,deleteCourse,updateCourse
}

export default courses;