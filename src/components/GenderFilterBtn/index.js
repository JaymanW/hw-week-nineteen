import React from 'react'
import './GenderFilterBtn.css'

function GenderFilterBtn(props) {
    let active;

    if (props.activeStyle === 'active') {
        active = '#8B008B';
    } else {
        active = 'rgba(139, 0, 139, 0.6)';
    }
    
    return (
        <button 
            className="GenderFilterBtn" 
            data-gender={props.gender} 
            onClick={(e) => props.filterClick(e)}
            style={{background: active}}
        >
            {props.gender === 'male' ? '♂' : props.gender === 'female' ? '♀' : '&'}
        </button>
    ) 
}

export default GenderFilterBtn
