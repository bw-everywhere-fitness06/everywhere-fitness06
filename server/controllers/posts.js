import PostClass from "../models/postClass.js";

export const getClasses = async (req, res) => {
  try {
    const postClasses = await PostClass.find();
    res.status(200).json(postClasses);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

export const createClass = async (req, res) => {
  const formInput = req.body;
  const newClass = new PostClass(formInput);
  try {
    await newClass.save();
    res.status(201).json(newClass);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

export const updateClass = async (req, res) => {
  const { id: _id } = req.params;
  const selectedClass = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedClass = await PostClass.findByIdAndUpdate(_id, selectedClass, {
    new: true,
  });
  res.json(updatedClass);
};
