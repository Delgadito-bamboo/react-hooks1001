import React, { useState, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import EventForm from './EventForm';
import EventList from './EventList';
import reducer from '../reducers';

const App = () => {
  const [state, dispatch] = useReducer(reducer, []);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  return (
    <div>
    <EventForm title={title} setTitle={setTitle} body={body} setBody={setBody} state={state} dispatch={dispatch} />
    <EventList state={state} dispatch={dispatch}/>
    </div>
  );
}

export default App;
