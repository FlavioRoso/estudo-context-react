import React from 'react';
import './css/styles.css';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Layout from './components/Layout';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
  
        <Layout>
          <Switch>
              <Route path="/" exact={true} component={Home}></Route>
              <Route path="/contato" component={Contato}></Route>
          </Switch>
        </Layout>
      
     </BrowserRouter>
    </div>
  );
}

export default App;
