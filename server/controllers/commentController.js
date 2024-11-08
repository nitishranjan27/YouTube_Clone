import Comment from '../models/Comment.js';
import Video from '../models/Video.js';

export const addComment = async (req, res) => {
  const { videoId } = req.params;
  const { text } = req.body;

  try {
    const newComment = new Comment({
      text,
      userId: req.user.id,
      videoId,
    });

    const savedComment = await newComment.save();

    // Add comment to the video's comments array
    await Video.findByIdAndUpdate(videoId, { $push: { comments: savedComment._id } });

    res.json(savedComment);
  } catch (err) {
    res.status(500).json({ msg: 'Error adding comment', error: err.message });
  }
};

export const getComments = async (req, res) => {
  const { videoId } = req.params;

  try {
    const comments = await Comment.find({ videoId }).populate('userId', 'username profileImage');
    res.json(comments);
  } catch (err) {
    res.status(500).json({ msg: 'Error fetching comments', error: err.message });
  }
};

export const updateComment = async (req, res) => {
  const { commentId } = req.params;
  const { text } = req.body;

  try {
    const comment = await Comment.findById(commentId);

    if (!comment || comment.userId.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Comment not found or unauthorized' });
    }

    comment.text = text;
    await comment.save();

    res.json(comment);
  } catch (err) {
    res.status(500).json({ msg: 'Error updating comment', error: err.message });
  }
};

export const deleteComment = async (req, res) => {
  const { commentId } = req.params;

  try {
    const comment = await Comment.findById(commentId);

    if (!comment || comment.userId.toString() !== req.user.id) {
      return res.status(404).json({ msg: 'Comment not found or unauthorized' });
    }

    await Comment.findByIdAndDelete(commentId);

    await Video.findByIdAndUpdate(comment.videoId, { $pull: { comments: commentId } });

    res.json({ msg: 'Comment deleted' });
  } catch (err) {
    res.status(500).json({ msg: 'Error deleting comment', error: err.message });
  }
};