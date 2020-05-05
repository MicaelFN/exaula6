import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

// Reescreva a componente abaixo alterando XXXX pelo nome e X pelo número de letras no nome.
const Texto = (props) => (
  <View style={style.row}>
    <Text>O nome completo é {props.firstName} {props.lastName} e tem {props.firstName.length + props.lastName.length} letras</Text>
  </View>
);

const interpolateJSX = () => {
  return (
    <View>
      <Texto firstName="Jose" lastName="Urbano" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  row: {flexDirection: 'row'},
});

export default interpolateJSX;
