import React, { useState, useRef, useEffect } from 'react';
import '../style/Post.css';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { FaRegComment } from 'react-icons/fa';
import Likes from './Likes';
import Comments from './Comments';

function Post(props) {
  const [likes, setLikes] = useState(props.Likes);
  const [comments, setComments] = useState(props.comments);
  const [commentInput, setCommentInput] = useState('');
  const [hasLiked, setHasLiked] = useState(false);
  const [showComment, setShowComment] = useState(false);
  const [showLikes, setShowLikes] = useState(false);

  const textareaRef = useRef(null);

  useEffect(() => {
    adjustTextareaHeight();
  }, [commentInput]);

  const adjustTextareaHeight = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = 'auto';
      textarea.style.height = `${textarea.scrollHeight}px`;
    }
  };


    const handleComment = async (e) => {
      e.preventDefault();
      if (commentInput.trim() === '') {
        alert('Enter content to comment');
        return;
      }
      setComments([...comments, commentInput]); // ADD TO ARRAY
      const email = props.userEmail;
      const postId = props.postId;
      const content = commentInput;
      setCommentInput('');
      const response = await fetch('http://localhost:3200/update-comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, postId, content }),
      });
      const { message } = await response.json();
      // Refresh the page after adding the comment
      window.location.reload();
      return message;
    };
  




  



  
  const handleLike = async (e) => {
    e.preventDefault();
    const email = props.userEmail;
    const postId = props.postId;
    setHasLiked(!hasLiked);

    const response = await fetch('http://localhost:3200/update-like', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, postId }),
    });

    const { message } = await response.json();

    // Return the response message
    return message;
  };

  const handleShowComment = () => {
    setShowComment(!showComment);
  };

  const handleInputChange = (event) => {
    setCommentInput(event.target.value);
  };

  const handleShowLikes = (event) => {
    setShowLikes(!showLikes);
  };

  return (
    <div className="post">
      <div className="post-header">
        <img src={props.authorImg} alt={props.author} />
        <div className="post-header-text">
          <h3>{props.author} </h3>
          <h5>בנושא: {props.theme}</h5>
          <p>{props.date}</p>
        </div>
      </div>
      <div className="post-content">
        <p>{props.content}</p>
      </div>

      <div className="post-actions">
        <button onClick={handleLike}>
          {hasLiked ? <AiFillLike className="com" /> : <AiOutlineLike className="com" />}
        </button>
        <button onClick={handleShowComment}>
          <FaRegComment className="com" />
        </button>

        <br />
        <button onClick={handleShowLikes}> Likes {likes} </button>
        {comments} {comments === 1 ? 'Comment' : 'Comments'}
      </div>

      {showLikes && <Likes likes={likes} />}

      {showComment && (
        <div className="comments">
          
          <Comments comments={comments} />

          <div className="post-comments1">
            <textarea
              ref={textareaRef}
              type="text"
              placeholder="Add a comment..."
              value={commentInput}
              onChange={handleInputChange}
            />
            <button className="buttonA" onClick={handleComment}>
              Add
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Post;
