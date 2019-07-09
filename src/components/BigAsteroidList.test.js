import React from 'react';
import ReactDOM from 'react-dom';
import BigAsteroidList from './BigAsteroidsList';

it('BigAsteroidList without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BigAsteroidList list={[{key:'3'},{wkey:'4'}]}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

