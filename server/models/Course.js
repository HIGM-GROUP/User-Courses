import mongoose from "mongoose"

const courseSchema=mongoose.Schema({
    teacher:String,
    name:String,
    desc:String,
    img:String,
})

export default mongoose.model("Course",courseSchema);
