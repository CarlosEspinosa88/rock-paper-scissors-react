import React from 'react';
import styled from 'styled-components';
import Token from './Token'

const TableStyled = styled.div`
  display: grid;
  grid-template-columns: 130px 130px;
  justify-content: center;
  justify-items: center;
  grid-gap: 30px 50px;
  margin: 2em 0;
  position: relative;
  & div:nth-of-type(3) {
    grid-column: span 2
  }

  .line {
    height: 15px;
    position: absolute;
    background: rgba(0,0,0,.2);
    left: 60px;
    right: 60px;
    top 58px;
    &:before {
      content: '';
      transform: rotate(60deg);
      transform-origin: left top;
      height: 15px;
      position: absolute;
      background: rgba(0,0,0,.2);
      left: 0;
      right: 0;
      top 0;
    }
    &:after {
      content: '';
      transform: rotate(-60deg);
      transform-origin: right top;
      height: 15px;
      position: absolute;
      background: rgba(0,0,0,.2);
      left: 0;
      right: 0;
      top 0;

    }



  }
`

function Table() {
  return (
    <TableStyled>
      <span className='line'></span>
      <Token name="paper" />
      <Token name="scissors" />
      <Token name="rock" />
    </TableStyled>
  )
}

export default Table
