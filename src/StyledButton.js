import styled from 'styled-components';

const Button = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin: 0 1em;
  padding: 0.25em 1em;
`;

const StyledButton = () => {
    return(
        <div>
            <h1>I'm a styled button</h1>
            <Button>I'm a styled button</Button>
        </div>
    )
}

export default StyledButton;