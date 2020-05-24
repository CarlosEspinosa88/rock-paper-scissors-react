import React from 'react';
import Score from './Score'
import styled from 'styled-components';

const HeaderStyled = styled.div`
  color: white;
  padding: 23px;
  border-radius: .5em;
  border: 3px solid rgba(255, 255,255, .29);
  display: flex;
  justify-content: space-between;
  item-aling: center;

  h1 {
    font-size: 18px;
    line-height: 16px;
    font-weight: 700;
    text-transform: uppercase;
  }
`

function Header() {
  return (
    <HeaderStyled>
      <h1>Rock<br/>Paper<br/>Scissor </h1>
      <Score />
    </HeaderStyled>
  )
}

export default Header