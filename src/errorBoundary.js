import React from 'react';
import {View, Button} from 'react-native';

/**
 * Criar componente de fallback que ao receber um erro do clique no botao,
 * vai exibir na tela uma mensagem de "Ops Falhei"
 */

class Children extends React.Component {
  state = {hasError: false};

  handleClick = () => {
    this.setState({hasError: true});
  };

  render() {
    if (this.state.hasError) {
      throw new Error('Boom');
    }

    return (
      <Button
        title="Botao"
        onPress={() => {
          this.handleClick();
        }}
      />
    );
  }
}

const App = () => {
  return (
    <View>
      <Children />
    </View>
  );
};

export default App;
