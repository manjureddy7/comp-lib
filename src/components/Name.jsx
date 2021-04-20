import React from 'react';

const Name = ({ name }) => {
    return (
        <div style={{padding:'20px', border: '1px solid red'}}>
            <h1>My Name is {name}</h1>
        </div>
    )
}

export default Name;