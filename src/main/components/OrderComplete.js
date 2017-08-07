import React, { Component } from "react";
import { Card } from "material-ui/Card";
import styled from "styled-components";
import AppNavBar from "./AppNavBar";
import complete from "../../../public/img/Group.png";
import failed from "../../../public/img/Group 4.png";

const OrderCard = styled(Card)`
    width: 95%;
    align: center;
`;

//const OrderComplete = true; //To be brought over from the order handling page.

class OrderComplete extends Component {
  render() {
    return (
      <div>
        <AppNavBar />
        <OrderCard>
          <div>
            <img src={complete} alt="Success" />
            <h1>Order Submitted</h1>
            The ADC team will contact you shortly to complete the order
          </div>
        </OrderCard>
      </div>
    );
  }
}
export default OrderComplete;
