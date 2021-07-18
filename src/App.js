import { Component } from "react";
import { ToastContainer } from "react-toastify";

import "./App.css";
import Searchbar from "./components/Searchbar/Searchbar";
import ImagesInfo from "./components/ImagesInfo/ImagesInfo";

export default class App extends Component {
  state = {
    search: "",
  };

  handleFormSubmit = (e) => {
    return this.setState({ search: e });
  };

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ImagesInfo imageName={this.state.search} />

        <ToastContainer
          position='top-center'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </div>
    );
  }
}