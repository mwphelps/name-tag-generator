import React from 'react';
import ReactDOM from 'react-dom';
import NameTag from './NameTag.js';
import './styles.css';
import { names } from './data';

//Callback function
const renderNameTag = (name) => <NameTag name={name.name} key={name.id} />;

const App = () => {
  const NameTagElements = names.map(renderNameTag);

  return (
    <div className="App">
      <h1>Name Tag Generator</h1>
      {NameTagElements}
    </div>
  );
};

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
