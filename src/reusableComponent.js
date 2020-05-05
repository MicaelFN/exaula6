import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

/**
 * Escreva aqui componente que receba duas propriedades (FirstName and LastName)
 * O componente deve apresentar um nome ao lado do outro
 * Mantenha a estrutura do componente abaixo (View com dois Texts)
 */

const ReusableExercise = () => {
  return (
    <View style={style.container}>
      <View style={style.row}>
        <Text>Jose</Text>
        <Text>Urbano</Text>
      </View>
      <View style={style.row}>
        <Text>Maria</Text>
        <Text>Duarte</Text>
      </View>
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  row: {flexDirection: 'row'},
});

export default ReusableExercise;
