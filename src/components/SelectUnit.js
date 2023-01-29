import React, {useState, useEffect} from 'react';

function SelectUnit({celsius, setCelsius}) {
    // simple toggle button between Celsius and Fahrenheiht, option stored in Celsius state as a boolean
    return (
        <div>
            <label className="switch">
                <input type="checkbox" onClick={() => setCelsius(!celsius)} />
                <span className="slider round"></span>
            </label>
        </div>
    )
}

export default SelectUnit