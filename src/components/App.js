import React from "react";
import Header from "./sections/Header";
import NewsSection from "./sections/NewsSection";

export default class App extends React.Component {
  state = {
    newsList: [],
  };
  componentDidMount() {
    let url = "https://hn.algolia.com/api/v1/search?tags=front_page";
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ newsList: data.hits }))
      .catch((err) => console.log(err));
  }
  render() {
    let { newsList } = this.state;
    return (
      <>
        <Header />
        {newsList.length ? <NewsSection List={newsList} /> : "Loading..."}
      </>
    );
  }
}
