import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import Home from './Pages/Home';

type props = {};

const App:React.FC<props> = ({}) => {
  return (
   <>
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} exact />
      </Switch>
    </BrowserRouter>
   </>
  );
}

export default App;
