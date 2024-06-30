import React, { Component } from "react";
import {
  Container,
  Navigation,
  Title,
  Paragf,
  LogIn,
  JoinUsBtnNav,
  JoinUsTitle,
  MeetTag,
  Tag,
  JoinUsBtn,
} from "./style";
import BackGraund from "./../../components/img/background.png";
class Header extends Component {
  render() {
    return (
      <Container>
        <img src={BackGraund} alt=""></img>
        <Navigation>
          <Title>MedicalGenuin</Title>
          <Paragf>Home Product Pricing Contact</Paragf>
          <LogIn>Login</LogIn>

          <JoinUsBtnNav>Join Us --</JoinUsBtnNav>
        </Navigation>

        <JoinUsTitle>Join Us</JoinUsTitle>
        <MeetTag>
          Meet the Best <br />
          Hospital
        </MeetTag>

        <Tag>
          We are always fully focused on helping <br />
          your child and you
        </Tag>

        <JoinUsBtn>Join Us --</JoinUsBtn>
      </Container>
    );
  }
}

export default Header;
