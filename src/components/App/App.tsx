import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { RouteProps } from 'react-router';

import './App.scss';
import routes from '@msp/routes/main';
import ErrorBoundary from '../ErrorBoundary';

interface IRouteProps extends Omit<RouteProps, 'element'> {
  element: React.ElementType;
}

const renderRoutes = (): React.ReactElement[] =>
  routes.map(
    ({ element: Element, path }: IRouteProps, index: number): React.ReactElement => (
      <Route path={path} element={<Element />} key={index} />
    ),
  );

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>{renderRoutes()}</Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
};

export default App;
