/**
 * Criar componente de fallback que ao receber um erro do clique no botao,
 * vai exibir na tela uma mensagem de "Ops Falhei"
 */

import React from 'react';
import {View, Button, Text} from 'react-native';

class ErrorBoundary extends React.Component {
  state = {hasError : false};

  static getDerivedStateFromError(error) {
    console.log('getDerivedStateFromError', error)
    return {hasError: true };
    
  }

  componentDidCatch(error, Info) {
    console.log(error, info.componentStack)
  }

/*   render() {
      if (this.state.hasError ){
        <FallbackComponent /> 
      }
      return this.props.children;
  }  */
   render() {
    return this.state.hasError ? <Erro /> : this.props.children;
  } 

}
const Erro = (state) => {
  return <Text>Erro</Text>; // O botão some mas a mensagem de erro não aparece
};

class Botao extends React.Component {
  state = {hasError: false};

  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick = () => {
    this.setState({hasError: true});
  };

  render() {
    if (this.state.hasError) {
      throw new Error("BOOM");
    }

    return <Button title="Botao" onPress={this.handleClick}/>
  }
}



const ErrorB = () => {
  return (
    <View>
      <ErrorBoundary>
        <Botao />
      </ErrorBoundary>
    </View>
  );
};

export default ErrorB;
