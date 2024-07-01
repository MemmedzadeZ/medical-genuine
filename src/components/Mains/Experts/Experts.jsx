import React, { Component } from "react";
import {
  Container,
  DoctorImage,
  TextDiv,
  ColorImage,
  TextMeetTitle,
  TextParagrf,
} from "./style";
import Doctorpng from "../../img/expert.png";
import Titlepng from "../../img/fixed-width fixed-height.png";

class Experts extends Component {
  render() {
    return (
      <Container>
        {/* <DoctorImage src={Doctorpng} alt="" /> */}

        <TextDiv>
          <ColorImage src={Titlepng} alt="" />
          <TextMeetTitle>Meet Our Experts</TextMeetTitle>
          <TextParagrf>
            Problems trying to resolve the conflict between <br /> the two major
            realms of Classical physics: <br />
            Newtonian mechanics TextParagrf
          </TextParagrf>
        </TextDiv>
      </Container>
    );
  }
}

export default Experts;
