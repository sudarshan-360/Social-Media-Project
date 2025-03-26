import Post from "../models/post.js";

export const createPost = async (req, res) => {
  try {
    const newPost = await Post.create({ userId: req.user.id, content: req.body.content });
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate("userId", "username");
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
