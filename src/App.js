import React, { Fragment, Component } from "react";

import Navbar from "./components/Navbar";
import Users from "./components/users/Users";
import { Search } from "./components/users/Search";
import Alert from "./components/Alert";
import About from "./components/pages/About";

import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };

  //Search Github Users
  searchUsers = (text) => {
    const reqURL = `https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;

    axios.get(reqURL).then((data) => {
      this.setState({ users: data.data.items, loading: false });
    });
  };

  //Clears users from state
  clearUsers = () => {
    this.setState({ users: [], loading: false });
  };

  //Sets Alert
  setAlert = (msg, type) => {
    this.setState({ alert: { msg, type } });

    setTimeout(() => this.setState({ alert: null }), 3000);
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Alert alert={this.state.alert} />
          <Search
            searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
            setAlert={this.setAlert}
          />
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
}
export default App;
