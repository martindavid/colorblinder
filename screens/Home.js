import React, { Component } from 'react';
import { Text, View } from 'react-native';
import styled from 'styled-components';

const ViewContainer = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export default class Home extends Component {
  render() {
    return (
      <ViewContainer>
        <Text>ColorBlinder - Home Screen!</Text>
      </ViewContainer>
    )
  }
}
