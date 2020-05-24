import React from 'react';
import styled from 'styled-components';
import Token from './Token'

const TableStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
`

function Table(props) {
  return (
    <TableStyled>
      <Token name="rock" />
      <Token name="scissors" />
      <Token name="paper" />
    </TableStyled>
  )
}

export default Table
