import React, {useState} from 'react';

export const DefaultSettings = {

    headerActive : false

};

export const ApplicationContext = React.createContext(DefaultSettings);


export default function AplicationProvider ({children}) {



    const [appContext,setAppContext] = useState(DefaultSettings);

    return (
        <ApplicationContext.Provider value={[appContext,setAppContext]} >
              {children}
        </ApplicationContext.Provider>
    )


}



