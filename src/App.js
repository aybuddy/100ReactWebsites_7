import React, { useState, useEffect } from 'react';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import './App.css';
import Todo from './Todo';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');

  // useFffect is a hook that we call and runs once when the app loads
  useEffect(() => {
    db.collection('todos')
      .orderBy('timestamp', 'desc')
      .onSnapshot((snapshot) => {
        setTodos(
          snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
        );
      });
  }, []);

  const addTodo = (event) => {
    event.preventDefault();

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setInput('');
  };

  return (
    <div className='App'>
      <h1>Hello World</h1>

      <form action=''>
        <FormControl>
          <InputLabel>Write A Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>
        <Button
          disabled={!input}
          type='submit'
          onClick={addTodo}
          variant='contained'
          color='primary'
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo, index) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
