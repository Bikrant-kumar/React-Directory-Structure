import React  from 'react';

function Child({children}) {
    return (
        <div style={{marginLeft:"10px"}}>
            {children && 
                children.length > 0 &&
                children.map((item) => {
                return (
                    <div style={{marginLeft:"10px"}}>
                        <h5>{item.name}</h5>
                        <Child {...item}/>
                    </div>
                )
            })}
        </div>
    )
}

export default Child;