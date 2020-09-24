import React from "react";
import { parseDomain, fromUrl } from "parse-domain";

export default function NewsSection(props) {
  const handleClick = (i) => {
    console.log("click");
    let count = Number(localStorage.getItem(i));
    localStorage.setItem(i, Number(count + 1));
    props.handleChange();
  };
  return (
    <section className="news-section">
      {props.List.map((news, i) => {
        let { hostname } = parseDomain(fromUrl(news.url));
        let data = localStorage.getItem(i);
        localStorage.setItem(i, Number(data));
        return (
          <div className="flex news-div">
            <h6>{i + 1}. </h6>
            <i
              className="upvote-btn fas fa-sort-up"
              onClick={() => handleClick(i)}
            >
              {localStorage.getItem(i)}
            </i>

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
