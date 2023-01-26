import React, {useState, useEffect} from 'react';

function SelectUnit({celsius, setCelsius}) {
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