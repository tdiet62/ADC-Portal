import React, { Component } from "react";

import logo from "../img/logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import DrawerComponent from "./DrawerComponent";
import Boxes from "../img/bg-people-boxes.jpg";

const AdcLogo = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  & > a > img {
    max-width: 50%;
    height: auto;
  }
`;
const BoxLogo = styled.div`
  width: 100%;
  justify-content: center;
  text-align: center;
  img {
    max-width: 50%;
    height: auto;
  }
`;

const WhiteBackground = styled.div`
  max-width: 100%;
  height: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

class HomePage extends Component {
  render() {
    return (
      <WhiteBackground>
        <DrawerComponent />

        <AdcLogo>
          <Link to="/catalogue">
            <img src={logo} alt="" />
          </Link>
        </AdcLogo>

        <BoxLogo>
          <div>
            <img src={Boxes} alt="Success" />
          </div>
        </BoxLogo>
      </WhiteBackground>
    );
  }
}

export default HomePage;
