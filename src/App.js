import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import './index.css';

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <Dashboard />
      </div>
  </Provider>
  );
}

export default App;
