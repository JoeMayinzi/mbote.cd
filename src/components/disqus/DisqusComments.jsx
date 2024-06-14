import { DiscussionEmbed } from "disqus-react";
import React from "react";

const DisqusComments = ({ slug, title }) => {
  const pageUrl = typeof window !== "undefined" ? window.location.href : "";
  const disqusConfig = {
    url: pageUrl,
    identifier: slug,
    title: title,
  };
  return (
    <DiscussionEmbed
      shortname="https-mbote-cd-vercel-app"
      config={disqusConfig}
    />
  );
};

export default DisqusComments;
