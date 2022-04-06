import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Users from "./components/users/Users";
import { Search } from "./components/users/Search";
import Alert from "./components/Alert";

import axios from "axios";
import "./App.css";

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
  };
  // async componentDidMount() {
  //   this.setState({ loading: true });
  //   const reqURL = `https://api.github.com/users?client_id=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=$
  //   {process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
  //   const res = await axios.get(reqURL);

  //   this.setState({ users: res.data, loading: false });
  // }

  //Search Github Users
  searchUsers = async (text) => {
    const reqURL = `https://api.github.com/search/users?q=${text}&client_id=
    ${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=
    ${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`;
    console.log(reqURL);

    const res = await axios.get(reqURL);

    this.setState({ users: res.data.items, loading: false });
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
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Alert alert={this.state.alert} />
            <Routes>
              <Route
                path="/"
                element={
                  <Fragment>
                    <Search
                      searchUsers={this.searchUsers}
                      clearUsers={this.clearUsers}
                      showClear={users.length > 0 ? true : false}
                      setAlert={this.setAlert}
                    />
                    <Users loading={loading} users={users} />
                  </Fragment>
                }
              />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }
}
export default App;
