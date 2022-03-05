const router = require("express").Router();
const User = require("../models/User");
const Post = require("../models/Post");
const Blood = require("../models/Blood")

//CREATE POST
router.post("/", async (req, res) => {
  const newPost = new Blood(req.body);
  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

//UPDATE POST
router.put("/:id", async (req, res) => {
  try {
    const post = await Blood.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        const updatedPost = await Blood.findByIdAndUpdate(
          req.params.id,
          {
            $set: req.body,
          },
          { new: true }
        );
        res.status(200).json(updatedPost);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can update only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE POST
router.delete("/:id", async (req, res) => {
  try {
    const post = await Blood.findById(req.params.id);
    if (post.username === req.body.username) {
      try {
        await post.delete();
        res.status(200).json("Post has been deleted...");
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json("You can delete only your post!");
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET POST
router.get("/:id", async (req, res) => {
  try {
    const post = await Blood.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL POSTS
router.get("/", async (req, res) => {
  const userId = req.query.userId;
  const filter = req.query.group;
  try {
    let posts;
    if (userId) {
      posts = await Blood.find({
        userId:{
          $in: [userId] 
        }
      });
    } 
    
    else if (filter) {
      posts = await Blood.find({
        group: {
          $in: [filter]
        }
      }
      );
    }
    
    else {
      posts = await Blood.find();
    }
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
