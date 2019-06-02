import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation/Navigation';
import Landing from './components/Landing/Landing';
import Error from './components/Error/Error';
import img from './winter.jpg';

function App() {
  const bck = {
    backgroundImage: `url(${img})`,
    backgroundSize:'1500px',
    backgroundRepeat:'repeat'
  }
  return (
    <div style={bck}>
      <BrowserRouter>
        
          <Navigation />
        <Switch>
        <Route path="/" component={Landing} exact/>
        <Route component={Error} />
        </Switch>
        
        </BrowserRouter>
    </div>
  );
}

export default App;
