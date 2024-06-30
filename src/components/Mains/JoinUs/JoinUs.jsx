import React, { Component } from "react";
import { JoinUsparagrf, JoinUsh1, JoinInput, JoinBtn } from "./style";
class JoinUs extends Component {
  render() {
    return (
      <div>
        <JoinUsparagrf>NewSletter</JoinUsparagrf>
        <JoinUsh1>JOIN US</JoinUsh1>
        <JoinUsparagrf>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics{" "}
        </JoinUsparagrf>
        <JoinInput>input</JoinInput>
        <JoinBtn>Subscrub</JoinBtn>
      </div>
    );
  }
}

export default JoinUs;
