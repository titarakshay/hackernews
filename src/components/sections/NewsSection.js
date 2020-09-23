import React from "react";
import { parseDomain, fromUrl } from "parse-domain";

export default function NewsSection(props) {
  localStorage.setItem("newsList", [props.List]);
  return (
    <section className="news-section">
      {props.List.map((news, i) => {
        let { hostname } = parseDomain(fromUrl(news.url));

        return (
          <div className="flex news-div">
            <h6>{i + 1}. </h6>
            <i className="upvote-btn fas fa-sort-up"></i>

            <div className="news-detail-div">
              <h2>
                {news.title} <span>({hostname})</span>{" "}
              </h2>
              <h5>
                {news.points} points by {news.author} 2 hours ago | hide |{" "}
                {news.num_comments}
                comments
              </h5>
            </div>
          </div>
        );
      })}
    </section>
  );
}
