import React from "react";
import './menu-item.style.css';

export default function MenuItem({ title, id, imageUrl, size }) {
    return (
        <div className={`${size} menu-items`} key={id}
        >
            <div className="background-img" style={
                {
                    backgroundImage: `url(${imageUrl})`
                }
            } />
            <div className="content">
                <h1 className="title">{title.toUpperCase()}</h1>
                <span className="subtitle">subtitle</span>
            </div>
        </div>
    );
}