import React from 'react';
import styled from 'styled-components';

const ButtonStyles = styled.div`
  display: inline-flex;
  border: 2px solid rgb(255, 255, 255);
  border-radius: .5em;
  min-width: 128px; 
  padding: .7em;
  box-sizing: border-box;
  justify-content: center;
  cursor: pointer;
  text-transform: uppercase;
  letter-spacing: 2.5px
`
function Button({ ...props}) { 
  return (
    <ButtonStyles {...props}>
      Rules
    </ButtonStyles>
  )
}

export default Button
