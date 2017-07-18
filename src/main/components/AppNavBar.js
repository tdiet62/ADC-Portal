import React, { Component } from "react";
import AppBar from "material-ui/AppBar";
import NavButtons from "./NavButtons";
import { Link } from "react-router-dom";
import styled from "styled-components";

import icon from "../../../public/img/LogoSmaller.png";

const AdcLogo = styled.div`
    position: absolute;
    left: 43%;      
`;

class AppNavBar extends Component {
  leftIconClick() {
    window.location.href = "/";
  }

  render() {
    return (
      <AppBar
        style={{ lineHeight: "30px", background: "white" }}
        onLeftIconButtonTouchTap={this.leftIconClick}
        iconElementLeft={
          <AdcLogo>
            <Link to={"/"}>
              <img src={icon} alt="ADC Service Portal Logo" />
            </Link>
          </AdcLogo>
        }
        iconElementRight={<NavButtons />}
      />
    );
  }
}

export default AppNavBar;
