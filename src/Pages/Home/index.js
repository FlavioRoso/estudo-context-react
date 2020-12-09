import React,{useContext,useEffect} from 'react';
import ApplicationContext from '~/context/ApplicationContext.js';

function Home() {
    const {context, setContext} = useContext(ApplicationContext);


    useEffect(()=>{

      if(context.headerActive)
      {
        context.headerActive = false;
        setContext({...context});
      }

  },[]);


  return (
          <h1>home</h1>
  );
}

export default Home;