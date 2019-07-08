import React from 'react';


export default function BigAsteroidList(props){

    const listBigAsteroids =  props.list.map((asteroid)=> <li>{asteroid.name} </li> );

    return <div>
        <h2>Big Asteroids This Week</h2>
        <ul>{listBigAsteroids}</ul>
    </div>
}