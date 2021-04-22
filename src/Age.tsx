import React from 'react';

interface AgeProps {
    age: number;
    dob: number
}
const Age: React.FC<AgeProps> = ({ age, dob }) => {
    return (
        <div style={{ padding:'20px', border: '1px solid blue' }}>
            <h1>My Age is {age}</h1>
            <h2>DOB is : {dob}</h2>
        </div>
    )
}

export default Age;