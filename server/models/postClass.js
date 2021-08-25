import mongoose from "mongoose";

const postSchema = mongoose.Schema({
  className: String,
  type: String,
  date: String,
  time: String,
  duration: String,
  instructor: String,
  intensityLevel: String,
  location: String,
  maxSize: String,
  currentEnrolled: String,
});

const PostClass = mongoose.model("postClass", postSchema);
export default PostClass;
