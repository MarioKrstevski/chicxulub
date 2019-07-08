import React from 'react';


export default function FastAsteroidList(props){
    const listFastAsteroids =  props.list.map((asteroid)=> <li>{asteroid.name} </li> );

    return <div>
        <h2>Fast Asteroids This Week</h2>
        <ul>{listFastAsteroids}</ul>
    </div>
}
