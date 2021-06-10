import React from 'react'
import './AlphabeticalSortBtn.css'

function AlphabeticalSortBtn(props) {
    let activeBackground;
    let activeColor;

    if (props.sort === 'none') {
        activeBackground = '#fff'
        activeColor = '#000';
    } else {
        activeBackground = '#000'
        activeColor = '#fff';
    }
    
    return (
        <button 
            className="AlphabeticalSortBtn"
            data-sort={props.sort}
            onClick={(e) => props.sortClick(e)}
            style={{background: activeBackground, color: activeColor}}
        >
            {props.sort === 'none' ? 'A^' : props.sort === 'asc' ? 'A^' : 'Z⌄'}
        </button>
    )
}

export default AlphabeticalSortBtn
