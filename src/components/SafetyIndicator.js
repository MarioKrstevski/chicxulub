import React from 'react'


export default function SafetyIndicator(props){
    return (
        <div className="safetyIndicatorItem">
        <h3>Safety Status</h3>

       { props.danger ? (
            <div className="box red"> </div>
        ) : (
            <div className="box green"></div>
        )}
        </div>

    )
}