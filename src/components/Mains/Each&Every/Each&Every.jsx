import React, { Component } from "react";
import {
  EachEveryDiv,
  EachEveryParagrf,
  Title,
  EachEveryh2,
  EachEverypr,
  EachEveryKubStart,
  EachEveryKubStart1,
  EachEveryKubStart2,
  EachEveryStart,
  EachEverytitle,
  EachEveryDisaynerDiv,
  EachEveryDisaynerIMG,
  EachEveryDisaynerTitleColor,
  EachEveryDisaynerTitle,
} from "./style";

import startpng from "../../img/starsimg.png";
import circlepng from "../../img/circle.png";
import circlepng1 from "../../img/circle1.png";

import circlepng2 from "../../img/circle2.png";

class EachEvery extends Component {
  render() {
    return (
      <EachEveryDiv>
        <Title>
          Lorem ipsum <br />
          dolor sit amet,
          <br /> consectetur adipisicing elit.
          <br /> Quas ipsa <br />
          laborum laboriosam <br />
          in nisi dolore nostrum odit <br />
          molestiae? Assumenda, totam
          <br /> incidunt ad
          <br /> dolores accusamus
          <br /> iste voluptatum eius
          <br /> natus mollitia repellat?
        </Title>
        <EachEveryParagrf>Practice Advice</EachEveryParagrf>
        <EachEveryh2>Each and every client is important</EachEveryh2>
        <EachEverypr>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics{" "}
        </EachEverypr>
        <EachEveryKubStart>
          <EachEveryStart src={startpng} />
          <EachEverytitle>
            Slate helps you see <br />
            how many more days <br />
            you need to work to <br />
            reach your financial <br />
            goal for the month <br /> and year.
          </EachEverytitle>

          <EachEveryDisaynerDiv>
            <EachEveryDisaynerIMG src={circlepng} />
            <EachEveryDisaynerTitleColor>
              Regina Miles
            </EachEveryDisaynerTitleColor>
            <EachEveryDisaynerTitle>Designer</EachEveryDisaynerTitle>
          </EachEveryDisaynerDiv>
        </EachEveryKubStart>
        <EachEveryKubStart1>
          <EachEveryStart src={startpng} />
          <EachEverytitle>
            Slate helps you see <br />
            how many more days <br />
            you need to work to <br />
            reach your financial <br />
            goal for the month <br /> and year.
          </EachEverytitle>

          <EachEveryDisaynerDiv>
            <EachEveryDisaynerIMG src={circlepng1} />
            <EachEveryDisaynerTitleColor>
              Regina Miles
            </EachEveryDisaynerTitleColor>
            <EachEveryDisaynerTitle>Designer</EachEveryDisaynerTitle>
          </EachEveryDisaynerDiv>
        </EachEveryKubStart1>
        <EachEveryKubStart2>
          <EachEveryStart src={startpng} />
          <EachEverytitle>
            Slate helps you see <br />
            how many more days <br />
            you need to work to <br />
            reach your financial <br />
            goal for the month <br /> and year.
          </EachEverytitle>

          <EachEveryDisaynerDiv>
            <EachEveryDisaynerIMG src={circlepng2} />
            <EachEveryDisaynerTitleColor>
              Regina Miles
            </EachEveryDisaynerTitleColor>
            <EachEveryDisaynerTitle>Designer</EachEveryDisaynerTitle>
          </EachEveryDisaynerDiv>
        </EachEveryKubStart2>
      </EachEveryDiv>
    );
  }
}

export default EachEvery;
