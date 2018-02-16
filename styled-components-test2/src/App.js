import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import {TitleHome, Hero} from './Home';

class App extends Component {
  render() {
    return (
      <div>
<Hero>
     <TitleHome>Helooooo!</TitleHome>
</Hero>
   </div>
    );
  }
}

export default App;

// <Paragraph>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>


// <Wrapper>
// <Title>
// Hello World, this is my first styled component!
// </Title>
// </Wrapper>
// <Input placeholder="@mxstbr" type="text" />
// <Input value="@geelen" type="text" />
//
// <Button>Normal</Button>
// <Button primary>Primary</Button>
