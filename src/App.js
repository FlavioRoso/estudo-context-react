import React,{useState} from 'react';
import './css/styles.css';
import { BrowserRouter,Switch, Route } from "react-router-dom";
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Layout from './components/Layout';

import AplicationProvider from '~/context/ApplicationContext.js';


function App() {


  return (
    <div className="App">
     
     <BrowserRouter>
        <AplicationProvider>
            <Layout>
                <Switch>
                    <Route path="/" exact={true} component={Home}></Route>
                    <Route path="/contato" component={Contato}></Route>
                </Switch>
            </Layout>
        </AplicationProvider>

     </BrowserRouter>
    </div>
  );
}

export default App;
