import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing';
import Error from './components/Error/Error';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div style={{ backgroundColor:'#d5d5d5' , height: '100%' }}>
          <Navigation />
        <Switch>
        <Route path="/" component={Landing} exact/>

        <Route component={Error} />
        </Switch>
        </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
