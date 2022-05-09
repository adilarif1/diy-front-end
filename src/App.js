import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './styles.css';

import Footer from './Footer';
import Nav from './Nav';
import Products from './Products';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav></Nav>
      
      <Switch>
        
        <Route path="/Products"><Products/>
        </Route>

      </Switch>
      <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
