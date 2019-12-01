import React from 'react';

export default function Details(props) {
    return (
        <div className="bottom">
            <p className="info">{props.tel}</p>
            <p className="info">{props.email}</p>
        </div>
    )
}