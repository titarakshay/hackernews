import React from "react";
import Header from "./sections/Header";
import NewsSection from "./sections/NewsSection";
import Loader from "./sections/Loader";
import Error from "./sections/Error";

export default class App extends React.Component {
  state = {
    newsList: [],
    change: "",
    error: false,
  };
  componentDidMount() {
    let url = "https://hn.algolia.com/api/v1/search?tags=front_page";
    fetch(url)
      .then((res) => res.json())
      .then((data) => this.setState({ newsList: data.hits }))
      .catch((err) => this.setState({ error: true }));
  }
  handleChange = () => {
    this.setState({ change: "true" });
  };
  render() {
    console.log(this.state, "render");
    let { newsList } = this.state;
    return (
      <div className="container">
        <Header />
        {newsList.length ? (
          <NewsSection List={newsList} handleChange={this.handleChange} />
        ) : this.state.error ? (
          <Error />
        ) : (
          <Loader />
        )}
      </div>
    );
  }
}
