import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Education from './components/Education';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Services from './components/Services';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route component={About} exact path="/about"></Route>
      <Route component={Portfolio} exact path="/portfolio"></Route>
      <Route component={Services} exact path="/services"></Route>
      <Route component={Education} exact path="/education"></Route>
      <Route component={Experience} exact path="/experience"></Route>
      <Route component={Contact} exact path="/contact"></Route>
      <Redirect from="/" to="about" />    
    </Switch>
    </BrowserRouter>
  );
}

export default App;
