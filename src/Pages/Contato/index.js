import React, {useContext,useEffect} from 'react';
import ApplicationContext from '~/context/ApplicationContext.js';


function Contato() {

    const {context, setContext} = useContext(ApplicationContext);


    useEffect(()=>{

        if(!context.headerActive)
        {
            context.headerActive = true;
            setContext({...context});
        }
        

    },[]);

    

    return (
            <h1>Contato</h1>
    );
}

export default Contato;