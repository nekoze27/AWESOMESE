import React from "react";
import TweetSimple from "../TweetSimple";
import TweetDetail from "./TweetDetail";

const TweetPreview = ({ tweetData }) => {
  return (
    <div>
      <TweetSimple tweetData={tweetData} />
      <TweetDetail tweetData={tweetData} />
    </div>
  );
};

export default TweetPreview;