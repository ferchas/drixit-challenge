import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import PrivateRoute from './routers/privateRouter';

import { AppProvider } from './context/app';

import routes from './routers';

function App() {
  return (
    <AppProvider>
      <Router>
        <Switch>
          { routes?.map(( { path, component, restricted }, i) => (
              restricted ? 
                <PrivateRoute
                  key={`rout-priv-${i}`} 
                  exact
                  path={path}
                  Component={component}
                />
              :
                <Route 
                  key={`rout-public-${i}`}
                  exact
                  path={path}
                  component={component}
                />  
          ))}
        </Switch>
      </Router>
    </AppProvider>
  );
}


export default App;
