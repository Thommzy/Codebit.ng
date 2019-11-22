import React, { Component } from "react";
import { Container, Menu, Grid, Button } from "semantic-ui-react";

class Navbar extends Component {
  render() {
    return (
      <div>
        <Container>
          <Menu fixed="top">
            <Container>
              <Menu.Item header>
                <img src="assets/logo.png" alt="logo" />
                Codebit
              </Menu.Item>
              <Menu.Item name="About" position="right" />
              <Menu.Item name="Get in touch" />
            </Container>
          </Menu>
        </Container>
      </div>
    );
  }
}

export default Navbar;
