import React from 'react';
import './App.scss';

import TestComponent from '../TestComponent';
import ArticlesComponent from '../ArticlesComponent';

const App: React.FC = () => {
  return (
    <>
      <TestComponent />
      <ArticlesComponent />
    </>
  );
};

export default App;
