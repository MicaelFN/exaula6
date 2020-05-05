
 /**
   * Obtem o JSON do site https://jsonplaceholder.typicode.com/posts e renderize um lista mostrando o titulo de todos os posts
   */

import React from 'react';

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

export default 
