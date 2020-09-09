import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Component, Slot } from './component';

const App = () => {
  return (
    <main>
      <h1>This example shows how to use slots</h1>

      <h4>Slot is filled with default content:</h4>
      <Component>Inside component</Component>

      <h4>Slot is used to put content from outside</h4>
      <Component>
        <Slot>FOOO</Slot>
        Bobobo
      </Component>

      <h4>Slot is receiving params from inside</h4>
      <Component>
        <Slot>{params => <span>Param={params.myParam}</span>}</Slot>
        Bobobo
      </Component>
    </main>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
