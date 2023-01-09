import './App.css';
import React from 'react';
import { Provider } from 'react-redux'
import { store } from './redux.js'
import Router from './Router';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Router />

      </div>
    </Provider>
  );
}

export default App;
