import React from 'react';


export default function FastAsteroidList(props){\
    console.log({fastest: props.list})
    return <div>{props.list.lenght || 'Nema'}</div>
}