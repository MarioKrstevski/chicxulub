import React from 'react';


export default function BiggestSmallestFastestSlowest(props){

    const biggest = props.stats.biggest.name;
    const smallest = props.stats.smallest.name;
    const fastest = props.stats.fastest.name;
    const slowest = props.stats.slowest.name;

    return(<div className="bsfs">
        <p>Biggest asteroid is {biggest} </p>
        <p>Smallest asteroid is {smallest} </p>
        <p>Fastest asteroid is {fastest} </p>
        <p>Slowest asteroid is {slowest} </p>
    </div>)
}