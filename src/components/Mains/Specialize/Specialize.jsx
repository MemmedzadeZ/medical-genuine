import React, { Component } from "react";
import {
  Container,
  TitleCont,
  TitleImg,
  TitleParagrfh2,
  TitleParagrf,
  TitleParagrf1,
  //////////////////////
  BoxContainers,
  ///////////////////
  BoxQuick,
  BoxQuickImg,
  BoxQuickParagrf,
  BoxQuickImg1,
  BoxQuickParagrf1,
  ////////////////
  BoxCase,
  BoxCaseImg,
  BoxCaseParagrf,
  BoxCaseImg1,
  BoxCaseParagrf1,
  ////////////////////////////
  BoxDental,
  BoxDentalImg,
  BoxDentalParagrf,
  BoxDentalImg1,
  BoxDentalParagrf1,
  DIVV,
} from "./style";
import Titlepng from "../../img/fixed-width fixed-height.png";
import BoxQuickpng from "../../img/fixed-width.png";
import BoxCasepng from "../../img/fixed-width1.png";
import BoxDentalpng from "../../img/fixed-width2.png";

class Specialize extends Component {
  render() {
    return (
      <Container>
        <TitleCont>
          <TitleImg src={Titlepng} alt="" />
          <TitleParagrfh2>
            Our Doctors <br />
            Specialize in you
          </TitleParagrfh2>

          <TitleParagrf>
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: <br /> Newtonian
            mechanics
          </TitleParagrf>

          <TitleParagrf1>Learn More </TitleParagrf1>
        </TitleCont>
        <BoxContainers>
          <BoxQuick>
            <BoxQuickImg src={BoxQuickpng} alt="" />
            <BoxQuickParagrf>Quick examination</BoxQuickParagrf>
            <BoxQuickImg1 src={Titlepng} alt="" />
            <BoxQuickParagrf1>
              The gradual <br /> accumulation of <br /> information about
            </BoxQuickParagrf1>
          </BoxQuick>

          <BoxCase>
            <BoxCaseImg src={BoxCasepng} alt="" />
            <BoxCaseParagrf>Emergency Case</BoxCaseParagrf>
            <BoxCaseImg1 src={Titlepng} alt="" />
            <BoxCaseParagrf1>
              The gradual <br /> accumulation of <br /> information about
            </BoxCaseParagrf1>
          </BoxCase>

          <BoxDental>
            <BoxDentalImg src={BoxDentalpng} alt="" />
            <BoxDentalParagrf>Best dental surgeons</BoxDentalParagrf>
            <BoxDentalImg1 src={Titlepng} alt="" />
            <BoxDentalParagrf1>
              The gradual <br /> accumulation of <br /> information about
            </BoxDentalParagrf1>
          </BoxDental>
        </BoxContainers>
        <DIVV>
          Lorem <br />
          ipsum dolor, sit amet
          <br /> consectetur
          <br /> adipisicing elit. <br />
          Dolore eum explicabo
          <br /> dolores id soluta
          <br /> maxime suscipit ullam
          <br /> quos perferendis cupiditate. Animi <br />
          labore in hic
          <br /> ratione repellat?
          <br /> Ad corporis <br />
          eligendi magnam.
        </DIVV>
      </Container>
    );
  }
}

export default Specialize;
