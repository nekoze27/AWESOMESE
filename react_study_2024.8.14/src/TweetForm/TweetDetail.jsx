import React from "react";

const TweetDetail = ({ tweetData }) => {
  return (
    <div className="tweet-container">
      <div className="tweet-detailed">
        <div className="tweet-header">
          <span className="tweet-user">{tweetData.name}</span>
          <span className="tweet-date">2:50 AM - Apr 2, 2022 - Twitter Web App</span>
        </div>
        <div className="tweet-content">
          <p>{tweetData.content}</p>
        </div>
        <div className="tweet-stats">
          <span>118.3K Retweets</span>
          <span>127.8K Quote Tweets</span>
          <span>1.3M Likes</span>
        </div>
      </div>
    </div>
  );
};

export default TweetDetail;