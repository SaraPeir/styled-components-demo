import React, { Component } from 'react';
import styled from 'styled-components';

const titleMain = styled.h1`
color: blue;
font-size: 100px;
`;

class Main extends Component {
  render() {
    return (
      <div>
      <titleMain>Hola!</titleMain>
      </div>
    );
  }
}

export default Main;
