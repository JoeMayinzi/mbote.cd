import { DiscussionEmbed } from "disqus-react";
import React from "react";

const DisqusComments = ({ shortname, config }) => {
  return (
    <div>
      <DiscussionEmbed shortname={shortname} config={config} />
    </div>
  );
};

export default DisqusComments;
