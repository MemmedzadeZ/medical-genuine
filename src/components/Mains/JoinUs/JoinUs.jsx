import React, { Component } from "react";
import {
  Title,
  JoinUsparagrf,
  JoinUsh1,
  JoinInput,
  JoinBtn,
  JoinUsDiv,
  JoinUsparagrf1,
} from "./style";
class JoinUs extends Component {
  render() {
    return (
      <JoinUsDiv>
        <Title>
          Lorem ipsum <br /> dolor sit <br />
          amet consectetur, <br />
          adipisicing elit. <br /> Quaerat illo, <br /> facilis ex <br />
          saepe excepturi <br />
          odio harum aliquid unde <br /> ratione <br />
          sunt, ab expedita quia tempore <br />
          fuga aliquam exercitationem <br /> reiciendis perferendis <br />
          non!
        </Title>
        <JoinUsparagrf>NewSletter</JoinUsparagrf>
        <JoinUsh1>JOIN US</JoinUsh1>
        <JoinUsparagrf1>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics{" "}
        </JoinUsparagrf1>
        <JoinInput type="text" placeholder="Your Email" />

        <JoinBtn>Subscrub</JoinBtn>
      </JoinUsDiv>
    );
  }
}

export default JoinUs;
