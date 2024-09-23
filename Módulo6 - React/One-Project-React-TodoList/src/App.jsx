import { v4 as uuidv4 } from 'uuid';
import React, { useState } from 'react';

import { Container, TodoList, Input, Button, ListItem, Trash, Check, NotList } from './styles'

function App() {

  const [list, setList] = useState([{ id: uuidv4(), task: 'Tarefas', finished: true }]);
  const [inputTask, setInputTask] = useState('');

  function inputMudou(event) {
    setInputTask(event.target.value)
  }

  function botaoClicado() {
    if(inputTask){
      setList([...list, { id: uuidv4(), task: inputTask, finished: false }]);
    }
  }

  function completeTask(id) {

    const newList = list.map( item => (
      item.id == id ? {...item, finished: !item.finished } : item
    ))

    setList(newList)
  }

  function deleteTask(id) {
    const newList = list.filter( item => item.id !== id )

    setList(newList)
  }

  return (
    <Container>
      <TodoList>
        <Input onChange={inputMudou} placeholder='Digite o que tenho para fazer!' />
        <Button onClick={botaoClicado}>Adicionar</Button>

        <ul>
          {
            list.length > 0 ? (
              list.map(item => (
                <ListItem isFinished={item.finished} key={item.id}>
                  <Check onClick={ () => completeTask(item.id)} />
                  <li>{item.task}</li>
                  <Trash onClick={() => deleteTask(item.id)} />
                </ListItem>
              ))
            ) : (
              <NotList>Não há itens na lista</NotList>
            )           
          }
        </ul>
      </TodoList>
    </Container>
  );
}

export default App