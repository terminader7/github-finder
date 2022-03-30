import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { Component } from "react";
import styled from "styled-components";
import { faMugSaucer } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";

const NavbarContainer = styled.nav`
  background-color: red;
  color: white;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
`;

export class Navbar extends Component {
  static defaultProps = {
    title: "GithubFinder",
    icon: { faMugSaucer },
  };

  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
  };
  render() {
    return (
      <NavbarContainer>
        <h1>
          <FontAwesomeIcon icon={this.props.icon} /> {this.props.title}
        </h1>
      </NavbarContainer>
    );
  }
}

export default Navbar;
