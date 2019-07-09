import React from 'react';
import ReactDOM from 'react-dom';
import FirstAsteroidThatHits from './FirstAsteroidThatHits';

it('FirstAsteroidThatHits loads without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FirstAsteroidThatHits asteroid={{}}/>, div);
  ReactDOM.unmountComponentAtNode(div);
});

