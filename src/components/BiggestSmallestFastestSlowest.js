import React from 'react';


export default function BiggestSmallestFastestSlowest(props){

    const biggest = props.stats.biggest.name;
    const smallest = props.stats.smallest.name;
    const fastest = props.stats.fastest.name;
    const slowest = props.stats.slowest.name;

    return(<div>
        <p>Biggest is {biggest} </p>
        <p>Smallest is {smallest} </p>
        <p>Fastest is {fastest} </p>
        <p>Slowest is {slowest} </p>
    </div>)
}