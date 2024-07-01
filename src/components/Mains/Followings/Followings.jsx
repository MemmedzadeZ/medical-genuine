import React, { Component } from "react";
import {
  FollowDiv,
  CustomTag,
  CustomTitle,
  VisitorTag,
  VisitorTitle,
  WorldWideTag,
  WorldWideTitle,
  PartnersTag,
  PartnersTitle,
} from "./style";
class Followings extends Component {
  render() {
    return (
      <FollowDiv>
        <div>
          {" "}
          <CustomTag>15K</CustomTag>
          <CustomTitle>Happy Customers</CustomTitle>
        </div>{" "}
        <div>
          {" "}
          <VisitorTag>150K</VisitorTag>
          <VisitorTitle>Monthly Visitors</VisitorTitle>
        </div>{" "}
        <div>
          {" "}
          <WorldWideTag>15</WorldWideTag>
          <WorldWideTitle>Countries WorldWide</WorldWideTitle>
        </div>{" "}
        <div>
          {" "}
          <PartnersTag>100+</PartnersTag>
          <PartnersTitle>Top Partners</PartnersTitle>
        </div>{" "}
      </FollowDiv>
    );
  }
}

export default Followings;
