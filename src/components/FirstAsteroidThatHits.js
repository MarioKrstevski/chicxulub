import React from 'react';
import { isArray } from 'util';

export default function FirstAsteroidThatHits(props){
    const {name} = props.asteroid || 'random';
    let date = "now";
    if (props.asteroid.close_approach_data){
        const array = props.asteroid.close_approach_data;
        date = props.asteroid && props.asteroid.close_approach_data[0].close_approach_date;
    }

    // if props.asteroid && const {date} = props.asteroid && props.asteroid.close_approach_data[0].close_approach_date;
    return <div className="firstAsteroid">The first asteroid that hits is {name} estemated to impact on {date}</div>
}