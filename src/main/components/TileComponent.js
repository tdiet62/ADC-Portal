/**
 * Created by tsadler on 25/05/2017.
 */
import React, { Component } from "react";
import styled from "styled-components";
import { Card, CardMedia } from "material-ui";
import { Link } from "react-router-dom";

const Tile = styled(Card)`
    padding-top: 2em;
    height: 20em;
    width: 20em;
    margin: 3em;
    background: #fff;
    background-image: url(${props => props.src});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center center;
    
`;

const Center = styled.div`
    text-align:center;
`;

class TileComponent extends Component {
  render() {
    return (
      <Link to={this.props.link}>
        <Center>
          <Tile src={this.props.logoSource} />
          <h1>{this.props.title}</h1>
        </Center>
      </Link>
    );
  }
}

export default TileComponent;
