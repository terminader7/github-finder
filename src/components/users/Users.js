import React, { Component } from "react";
import UserItem from "./UserItem";

class Users extends Component {
  state = {
    users: [
      {
        id: "2",
        login: "defunkt",
        avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
        html_url: "https://github.com/defunkt",
      },
      {
        id: "1",
        login: "octocat",
        avatar_url: "https://github.com/images/error/octocat_happy.gif",
        html_url: "https://github.com/octocat",
      },
      {
        id: "3",
        login: "Nyamador",
        avatar_url: "https://avatars3.githubusercontent.com/u/48738520?v=4",
        html_url: "https://github.com/Nyamador",
      },
    ],
  };

  render() {
    return (
      <div>
        {this.state.users.map((user) => {
          <UserItem key={user.id} user={user} />;
        })}
      </div>
    );
  }
}

export default Users;
