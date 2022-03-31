import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Users from "./components/users/Users";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar title="Github Finder" icon={faMugSaucer} />
        <Users />
      </div>
    );
  }
}
export default App;
