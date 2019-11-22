import React, { Component, Fragment } from "react";
import { Image, Container, Header, Button } from "semantic-ui-react";
import codebit from "../Images/codebit_1.jpg";
import "../css/BannerCss/Banner.css";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Footer from "./Footer";

export default class Home extends Component {
  render() {
    return (
      <Fragment>
        <div className="mainBanner">
          <Image src={codebit} fluid />
        </div>
        <div>
          <Container>
            <div className="bannerText">
              <Header as="h1">Connect More with the People You Love</Header>
              <Button size="massive">Explore</Button>
            </div>
          </Container>
        </div>
        <Slide1 />
        <Slide2 />
        <Footer />
      </Fragment>
    );
  }
}
