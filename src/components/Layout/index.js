import React, {useState} from 'react';
import Header from '../Header';
import ApplicationContext, { DefaultSettings } from '~/context/ApplicationContext.js';
// import { Container } from './styles';

function Layout({children, headerAtivo}) {

  const [appContext,setAppContext] = useState(DefaultSettings);

 

  return (

      <ApplicationContext.Provider value={{context : appContext,setContext : setAppContext}} >
           <ApplicationContext.Consumer>
            { value => {

              console.log(value);
              return(
                <>
                <Header className={value.context.headerActive ? "ativo" : ''} />
                <main>
                  {children}
                </main>
                </>
              )
            }}
           </ApplicationContext.Consumer>
      </ApplicationContext.Provider>
      
  );
}

export default Layout;