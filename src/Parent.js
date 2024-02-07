import React from 'react';
import Child  from './Child';

function Parent({name, children}) {
    return (
       <ul>
        <h3>{name}</h3>
        <Child children={children}/>
       </ul> 
    )
}

export default Parent;