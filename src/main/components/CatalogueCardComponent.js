import React, { Component } from "react";
import styled from "styled-components";
import Checkbox from "material-ui/Checkbox";
import { Card } from "material-ui/Card";
import Paper from "material-ui/Paper";

const CatalogueCard = styled(Card)`
margin: 20px;
max-height:260px;
min-height:260px;
max-width:95%;
min-width:95%;
padding:10px;
`;

const CatalogueCardHeader = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
 align-items: center;
 margin-bottom:20px;
`;

const ServiceName = styled.h1`
  color: black;
  font-size: 18px;
`;

const Bullet = styled.div`
  height: 20px;
  display: flex;
  background-color: #00BCD4;
  padding: 5px 15px;
  border-radius: 25px;
`;

const CatalogueCardDescription = styled.div`
  color: black;
  font-size: 13px;
  max-height: 75px;
  min-height: 75px;
  overflow-y: auto;
  overflow-x: hidden;
`;

const CheckBoxRow = styled.div`
 margin-top: 5px;
 width: 100%;
 height: 50%;
 display: flex;
 flex-direction: row-reverse;
 justify-content: space-between;
`;

const ConditionalElement = styled.div`
color: green;
`;

const styles = {
  block: {
    maxWidth: 250
  },
  checkbox: {
    marginBottom: 16
  }
};

const imgStyle = {
  height: 110,
  width: 110,
  margin: 0,
  display: "inline-block",
  overflow: "hidden"
};

class CatalogueCardComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      serviceChecked: false
    };

    this.handleCheck = this.handleCheck.bind(this);
    this.renderAddedToCart = this.renderAddedToCart(this);
    this.getColor = this.getColor(this);
  }

  handleCheck(service, status) {
    if (status) {
      this.setState({
        serviceChecked: false
      });
    } else {
      this.setState({
        serviceChecked: true
      });
    }
  }

  renderAddedToCart() {
    return <ConditionalElement>Service Added to Cart</ConditionalElement>;
  }

  getColor() {
    switch (this.props.service.category) {
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
      <CatalogueCard>
        <CatalogueCardHeader>

          <Paper style={imgStyle} zDepth={1} circle={true}>
            <img
              src={this.props.service.logoSource}
              style={{ width: "100%", height: "auto" }}
              alt={this.props.serviceTitle}
            />
          </Paper>

          <ServiceName className="serviceName">
            {this.props.service.serviceTitle}
          </ServiceName>

          <Bullet style={this.getColor}>
            <div className="serviceCat">{this.props.service.category}</div>
          </Bullet>

        </CatalogueCardHeader>

        <CatalogueCardDescription className="serviceDescription">
          {this.props.service.description}
        </CatalogueCardDescription>

        <CheckBoxRow className="checkBoxDiv">
          <div style={styles.block}>
            <Checkbox
              style={styles.checkbox}
              onCheck={() =>
                this.handleCheck(this.props.service, this.state.serviceChecked)}
            />
          </div>
          {/** Renders an element based on the condition of the checkbox*/
          this.state.serviceChecked ? this.renderAddedToCart() : null}
        </CheckBoxRow>
      </CatalogueCard>
    );
  }
}

export default CatalogueCardComponent;
