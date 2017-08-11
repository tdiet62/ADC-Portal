import React, { Component } from "react";
import styled from "styled-components";
import RaisedButton from "material-ui/RaisedButton";

import CartDataCapture from "./ProjectDetailsCaptureComponent";
import ServiceSummaryCard from "./ServiceSummaryCard";

import UserDetailsUpload from "./UserDetailsUpload";
import UserDetailsEntry from "./UserDetailsEntry";

import AppNavBar from "./AppNavBar";

import ProgressBar from "./ProgressBarComponent";
import OrderComplete from "./OrderComplete";

const StyledButton = styled(RaisedButton)`
    color: #00BFFF !important;
    border: 2px solid #00BFFF !important;
    border-radius: 25px !important;
    overflow: hidden !important;
`;

const CartCard = styled.div`
  width: 75%;
  margin: auto;
`;

const ButtonGroup = styled.div`
  margin-right: 15%;
  margin-top: 1%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;

const ButtonSpacing = styled.div`
  justify-content: flex-end;
  width: 225px;
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const UserEntry = styled.div`
  width: 90%;
  margin: auto;
  padding: 10px;
`;

class CheckoutPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      viewUserUpload: false,
      myCount: 0
    };

    this.addUser = this.addUser.bind(this);
    this.removeUser = this.removeUser.bind(this);

    this.viewUserUpload = this.viewUserUpload.bind(this);

    this.setProjectName = this.setProjectName.bind(this);
    this.setProjectCode = this.setProjectCode.bind(this);
    this.setOwnerEmail = this.setOwnerEmail.bind(this);

    this.deselectedService = this.deselectedService.bind(this);
  }

  viewUserUpload = value => {
    this.setState({ viewUserUpload: value });
  };

  addUser = value => {
    this.props.onUserAdded(value);
  };

  removeUser = value => {
    this.props.onUserRemoved(value);
  };

  renderServiceSummary = () => {
    return (
      <ServiceSummaryCard
        serviceData={this.props.selectedServices}
        userRanges={this.props.userRangeValues}
        businessUnits={this.props.businessUnitValues}
        onServiceUpdate={this.updateSelectedService}
        onUnchecked={this.deselectedService}
      />
    );
  };

  renderProjectDetails = () => {
    return (
      <CartDataCapture
        onViewUserUpload={this.viewUserUpload}
        setProjectName={this.setProjectName}
        setProjectCode={this.setProjectCode}
        setOwnerEmail={this.setOwnerEmail}
      />
    );
  };

  renderUserDetailsUpload = () => {
    return (
      <UserEntry>
        <UserDetailsEntry
          usersAdded={this.props.userList}
          onAdd={this.addUser}
          onRemove={this.removeUser}
        />
        <UserDetailsUpload
          onUserUpload={this.addUser}
          userDetails={this.viewUserUpload}
        />
      </UserEntry>
    );
  };

  renderOrderComplete = () => {
    return <OrderComplete />;
  };

  updateSelectedService = newArray => {
    this.props.onSelectedServiceUpdate(newArray);
  };

  setProjectName = value => {
    this.props.onProjectName(value);
  };
  setProjectCode = value => {
    this.props.onProjectCode(value);
  };

  setOwnerEmail = value => {
    this.props.onOwnerEmail(value);
  };

  deselectedService = value => {
    this.props.onServiceDeselected(value);
  };

  handleNext = () => {
    const count = this.state.myCount + 1;

    this.setState({
      myCount: count
    });
  };

  render() {
    return (
      <div>
        <AppNavBar />
        <CartCard>
          <ProgressBar counter={this.state.myCount} />
          {this.state.myCount === 0 ? this.renderServiceSummary() : null}
          {this.state.myCount === 1 ? this.renderUserDetailsUpload() : null}
          {this.state.myCount === 2 ? this.renderProjectDetails() : null}
          {this.state.myCount === 3 ? this.renderOrderComplete() : null}
          <ButtonGroup>
            <ButtonSpacing>
              <StyledButton label="Submit" onTouchTap={this.handleNext} />
            </ButtonSpacing>
          </ButtonGroup>
        </CartCard>
      </div>
    );
  }
}

export default CheckoutPage;
