 /**
   * Obtenha a reposta de 'https://jsonplaceholder.typicode.com/todos/1'
   * Pegue a chave `title` do objeto e coloque dentro do estado `name`
   * Utilizem fetch e o conceito de promise.
   * */

  import React, {useState, useEffect} from 'react';
  import {Text} from 'react-native';
  
  const SideEffects = () => {
    const [name, setName] = useState();
  
    useEffect(() => {
      fetch("https://jsonplaceholder.typicode.com/todos/1")
      
      .then(res => res.json())
      .then(
        (result) => {
          setName(result.title);
        },
        
      )
    }, )
  
    return (
      <>
        <Text>Texto: {name}</Text>
      </>
    );
  };
  
  export default SideEffects;
  