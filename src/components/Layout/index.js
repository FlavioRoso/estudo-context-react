import React, {useContext} from 'react';
import Header from '../Header';
// import { Container } from './styles';
import { ApplicationContext } from '~/context/ApplicationContext.js';


function Layout({children}) {

  console.log(useContext(ApplicationContext))

  let [context,setContext] = useContext(ApplicationContext);


  console.log(context);

  return (

    <>
      <Header className={context.headerActive ? "ativo" : ''} />
      <main>
        {children}
      </main>
    </>
      
  );
}

export default Layout;