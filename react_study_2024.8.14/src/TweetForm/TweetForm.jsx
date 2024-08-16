import React, { useState } from "react";

const TweetForm = ({ onTweetSubmit }) => {
  const [tweetData, setTweetData] = useState({
    name: "",
    id: "",
    content: "",
    icon: "",
  });

  const handleChange = (e) => {
    setTweetData({ ...tweetData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onTweetSubmit(tweetData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="tweet-preview">
        <div className="horizontal-group">
          <div className="form-group">
            <label>Name</label>
            <input
              className="input-form"
              name="name"
              value={tweetData.name}
              onChange={handleChange}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label>Id</label>
            <input
              className="input-form"
              name="id"
              value={tweetData.id}
              onChange={handleChange}
              placeholder="Enter your id"
            />
          </div>
        </div>
        <div className="form-group">
          <label>Textarea</label>
          <textarea
            className="textarea-field"
            name="content"
            value={tweetData.content}
            onChange={handleChange}
            rows="4"
            placeholder="Tweet contents"
          />
        </div>
        <div className="horizontal-group">
          <button type="submit" className="submit-button">
            Create Tweet
          </button>
        </div>
      </div>
    </form>
  );
};

export default TweetForm;
