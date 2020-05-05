import React, {Component, useState} from 'react';
import {Button, Text} from 'react-native';
import styled from 'styled-components/native'

const Botoes = styled.View`
  flex-direction:row;
  width:100%;
  justify-content:space-between;

`;
export default class EventHandlers extends Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
  }


  render() {
    return (
      <>
        <Text>{this.state.counter}</Text>
        <Botoes>
          <Button title="Incrementa"
            onPress={() => this.setState({ counter: this.state.counter + 1 })} />
          <Button title="Decrementa"
            onPress={() => this.setState({ counter: this.state.counter - 1 })} />
        </Botoes>
        
      </>
    );
  }
}

