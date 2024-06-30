import React, { Component } from "react";
import {
  DepartmentDiv,
  DeparadiviceP,
  Title,
  DepartmentTagOur,
  Departmentparagf,
  DepartmentImg,
} from "./style";

import PageCard from "../../img/Product_card.png";
import PageCard1 from "../../img/col-md-4.png";
import PageCard2 from "../../img/col-noki.png";

class Departments extends Component {
  render() {
    return (
      <DepartmentDiv>
        <Title>
          Lorem ipsum
          <br /> dolor sit,
          <br /> amet consectetur
          <br /> adipisicing elit. <br />
          Quo facer <br />
          non deserunt obcaecati <br />
          nobis! A ipsum quibusdam
          <br /> laboriosam voluptates repellendus,
          <br /> voluptatibus enim, <br />
          sequi delectus maiores, tempora <br />
          architecto quo et minima?
        </Title>
        <DeparadiviceP>Practice Advice</DeparadiviceP>
        <DepartmentTagOur>Our Department</DepartmentTagOur>
        <Departmentparagf>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: Newtonian mechanics{" "}
        </Departmentparagf>

        <DepartmentImg src={PageCard} />
        <DepartmentImg src={PageCard1} />
        <DepartmentImg src={PageCard2} />
      </DepartmentDiv>
    );
  }
}

export default Departments;
