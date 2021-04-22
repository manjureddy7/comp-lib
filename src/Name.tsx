import React from 'react';

interface NameProps {
    name: string;
    company: string;
    experience?: string;
}

const Name: React.FC<NameProps> = ({ name, company, experience }) => {
    return (
        <div style={{padding:'20px', border: '1px solid red'}}>
            <h1>My Name is {name}</h1>
            <h2>Company is: {company} </h2>
            {experience && <h3>Experience is {experience} </h3>}
        </div>
    )
}

export default Name;