import React, { Component } from "react";
import { Grid, Image, Container, Header, Divider } from "semantic-ui-react";
import "../css/Footercss/Footer.css";

class Footer extends Component {
  render() {
    return (
      <div className="mainFooter">
        <Container>
          <Grid>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <div className="footer1">
                <Header as="h3">address</Header>
                <p>Headquaters:</p>
                <p>
                  No 3, Wale Taiwo Close, Behind Excellence Hotel, Ogba,Lagos
                </p>
                <p>Phone: +234 806 1662 025</p>
                <p>Email: info@codebit.ng</p>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <div className="footer1">
                <Header as="h3">Links</Header>
                <p>Company</p>
                <p>Solutions</p>
                <p>Services</p>
                <p>Clients & Patners</p>
              </div>{" "}
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <div className="footer1">
                <Header as="h3">Solutions</Header>
                <p>Headquaters:</p>
                <p>C-Clinic </p>
                <p>Sutapay</p>
                <p>Changy</p>
              </div>
            </Grid.Column>
            <Grid.Column mobile={16} tablet={8} computer={4}>
              <div className="footer1">
                <Header as="h3">Social Media</Header>
                <p>Instagram</p>
                <p>Facebook</p>
                <p>Twitter</p>
              </div>
            </Grid.Column>
          </Grid>
          <Divider section />
          <div className="lowerFooter">
            <p>© 2019 Codebit . All Rights Reserved | Design by Codebit</p>
          </div>
        </Container>
      </div>
    );
  }
}

export default Footer;
