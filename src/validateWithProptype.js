import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

/**
 * Escreve um prototype para esse componente
 * validando se ambas as propriedades sao do tipo string.
 */

const FirstLastName = (props) => {
  return(
    <View style={style.row}>
        <Text>{props.firstName}</Text>
        <Text>{props.middleName}</Text>
        <Text>{props.lastName}</Text>
        
    </View>
  );
};

FirstLastName.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
  middleName: PropTypes.string.isRequired
}

const ValidateWithPrototype = () => {
  return (
    <View style={style.container}>
      <FirstLastName firstName = "jose" lastName = " duarte" middleName= " meio" />

      <FirstLastName firstName = "micael " middleName = "MEIO" lastName = " noronha" />
    </View>
  );
};

const style = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center'},
  row: {flexDirection: 'row'},
});

export default ValidateWithPrototype;
