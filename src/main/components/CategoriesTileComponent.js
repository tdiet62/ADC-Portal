import React, { Component } from "react";
import styled from "styled-components";

import Paper from "material-ui/Paper";

const Centralised = styled.div`
  text-align:center;
`;

const Bullet = styled.div`
  height: 20px;
  display: flex;
  background-color: #00BCD4 ;
  padding: 5px 15px;
  border-radius: 25px;
  margin-top:10px;
  color:black;
  text-decoration: underline;
  justify-content-center;
`;

const imgStyle = {
  height: 110,
  width: 110,
  margin: 0,
  display: "inline-block",
  overflow: "hidden"
};

class CategoriesTileComponent extends Component {
  constructor(props) {
    super(props);

    this.getColor = this.getColor(this);
  }

  getColor() {
    switch (this.props.categories.serviceTypeCategory) {
      case "Networks":
        return {
          backgroundColor: "#7E57C2",
          color: "#FFF",
          textDecoration: "none"
        };
      case "Infrastructure":
        return {
          backgroundColor: "#5C6BC0",
          color: "#FFF",
          textDecoration: "none"
        };
      default:
        return {
          backgroundColor: "#26A69A",
          color: "#FFF",
          textDecoration: "none"
        };
    }
  }

  render() {
    return (
      <Centralised>

        <Paper style={imgStyle} zDepth={1} circle={true}>
          <img
            src={this.props.categories.logoSource}
            style={{ width: "100%", height: "auto" }}
            alt={this.props.serviceTitle}
          />
        </Paper>

        <Bullet style={this.getColor} className="serviceCat">
          {this.props.categories.serviceTypeCategory}
        </Bullet>

      </Centralised>
    );
  }
}

export default CategoriesTileComponent;
