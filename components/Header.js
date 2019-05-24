import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import styled from 'styled-components';

const StyleText = styled.Text`
  font-size: 50;
  color: ${props => props.color ? props.color : '#ecf0f1'};
  font-family: "dogbyte"
`;

const Header = () => {
  return (
    <View style={{ flexDirection: "row" }}>
      <StyleText color="#E64C3C">c</StyleText>
      <StyleText color="#E57E31">o</StyleText>
      <StyleText color="#F1C431">l</StyleText>
      <StyleText color="#68CC73">o</StyleText>
      <StyleText color="#3998DB">r</StyleText>
      <StyleText>blinder</StyleText>
    </View>
  )
}

export { Header };
