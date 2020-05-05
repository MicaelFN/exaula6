import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import styled from 'styled-components/native'

/**
 * Escreva aqui componente que receba duas propriedades (FirstName and LastName)
 * O componente deve apresentar um nome ao lado do outro
 * Mantenha a estrutura do componente abaixo (View com dois Texts)
 */

const FirstName = styled.Text`
`;
const LastName = styled.Text``;

const ReusableExercise = () => {
  return (
    <View style={style.container}>
      <View style={style.row}>
        <FirstName>Micael </FirstName>
        <LastName>Noronha</LastName>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  row: {flexDirection: 'row'},
});

export default ReusableExercise;
