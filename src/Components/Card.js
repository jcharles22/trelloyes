import React from 'react';
import './Card.css'

function List(prop) {
    return (
        
        <div className="Card">
            <button>delete</button>
            <h3>{prop.title}</h3>
            <p>{prop.content}</p>
        </div>
        
    )
}

export default List;