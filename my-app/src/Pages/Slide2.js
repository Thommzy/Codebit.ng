import React, { Component } from "react";
import { Grid, Image } from "semantic-ui-react";
import slide2 from "../Images/codebit_6.jpg";
import slide3 from "../Images/codebit_7.jpg";
import slide4 from "../Images/codebit_8.jpg";
import "../css/SlideCss/Slide.css";

class Slide2 extends Component {
  render() {
    return (
      <div className="MainSlideTwo">
        <Grid>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <div className="secondSlide">
              <p style={{ textAlign: "center" }}>Marketing on Facebook</p>
              <h4 style={{ textAlign: "center", color: "#fff" }}>
                Grow your business from anywhere.
              </h4>
              <p
                style={{
                  textAlign: "center",
                  paddingLeft: "64px",
                  paddingRight: "92px",
                  fontSize: "20px"
                }}
              >
                Grow your business with free business tools, insights and a
                global community of over 2.4 billion people.
              </p>
            </div>
            <div>
              <Image src={slide2} fluid />
            </div>
            <div className="fourthSlide">
              <p style={{ textAlign: "center" }}>Marketing on Facebook</p>
              <h4 style={{ textAlign: "center", color: "#fff" }}>
                Grow your business from anywhere.
              </h4>
              <p
                style={{
                  textAlign: "center",
                  paddingLeft: "64px",
                  paddingRight: "92px",
                  fontSize: "20px"
                }}
              >
                Grow your business with free business tools, insights and a
                global community of over 2.4 billion people.
              </p>
            </div>
          </Grid.Column>
          <Grid.Column mobile={16} tablet={8} computer={8}>
            <div>
              <Image src={slide3} fluid />
            </div>
            <div className="thirdSlide">
              <p style={{ textAlign: "center" }}>Marketing on Facebook</p>
              <h4 style={{ textAlign: "center", color: "#fff" }}>
                Grow your business from anywhere.
              </h4>
              <p
                style={{
                  textAlign: "center",
                  paddingLeft: "64px",
                  paddingRight: "92px",
                  fontSize: "20px"
                }}
              >
                Grow your business with free business tools, insights and a
                global community of over 2.4 billion people.
              </p>
            </div>
            <div>
              <Image src={slide4} fluid />
            </div>
          </Grid.Column>
        </Grid>
      </div>
    );
  }
}
export default Slide2;
