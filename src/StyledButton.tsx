import styled from 'styled-components';
import React from 'react';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`
interface StyledButtonProps {
    onStyledButtonClick: () => {},
}

const StyledButton:React.FC<StyledButtonProps> = ({ onStyledButtonClick }) => {
    return(
        <div>
            <h1>I'm a styled button</h1>
            <Button onClick={onStyledButtonClick}>I'm a styled button</Button>
        </div>
    )
}

export default StyledButton;