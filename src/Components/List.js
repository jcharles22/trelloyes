import React from 'react';
import Card from './Card';
import './List.css';

function List(props) {
    return (
        <section className="List">
            <header className="List-header">
                <h2>{props.header}</h2>
            </header>
            <div className="List-cards"> 
                {props.cards.map((card, index) => (
                    <Card
                    key={index}
                    title={card.title}
                    content={card.content}
                    handleDelete={props.handleDelete}
                    />
                    
                )
            )}
            <button onClick={() => props.handleRandom(props.id)}>
                + Add Random Card
            </button>
            </div>
        </section>
    )
}

export default List;