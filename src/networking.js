import React, {useState, useEffect} from 'react';
import {Text, ScrollView} from 'react-native';

const App = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  /**
   *  Obtenha seu JSON de 'https://jsonplaceholder.typicode.com/posts/1'.
   *   Enquanto carregue seu JSON, lembre que setar o estado isLoading para true.
   *   Caso você recebe um erro, se o estado isError para True
   *   Caso sua tela já tenha sido desmontada, não `set` o estado em uma tela desmontada
   */

  return (
    <>
      {isError && <Text>Something went wrong ...</Text>}
      {isLoading ? (
        <Text>Loading ...</Text>
      ) : (
        <ScrollView>
          <Text key={data.id}> Title: {data.title}</Text>
        </ScrollView>
      )}
    </>
  );
};

export default App;
