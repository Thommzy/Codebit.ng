import React, { Component } from "react";
import { Grid, Header } from "semantic-ui-react";
import "../css/SlideCss/Slide.css";

class Slide1 extends Component {
  render() {
    return (
      <div>
        <div className="firstSlide">
          <Header as="h1">
            Everyone is a marketer with the right toolkit.
          </Header>
          <p>
            Marketing isn’t simple, and we want you to succeed. Here you’ll find
            ad options for any budget and expertise level
          </p>
          <p>
            —you can start small or go big. And you can always track how your
            ads are working and make changes along the way.
          </p>
        </div>
      </div>
    );
  }
}

export default Slide1;
