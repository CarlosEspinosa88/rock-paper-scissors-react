import React, { useState } from 'react';
import styled from 'styled-components';
import Button from './Button'

const RulesStyles = styled.div`
  text-align: center;
  .rules-overlay {
    background: white;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 2;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    flex-direction: column; 
    .close {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    h2 {
      color: #3B4262;
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 700;
      font-family: Arial;
      letter-spacing: -1px;
      margin-bottom: 3em
    }
  }
`

function Rules() {
  const [ visible, setVisible ] = useState(false)

  function handleToggleClick() {
    setVisible(!visible)
  }

  return (
    <RulesStyles>
      {visible && (
        <div className="rules-overlay">
          <h2>Rules</h2>
          <img src="./images/image-rules.svg" alt="Game Rules" />
          <div className='close' onClick={handleToggleClick} >
            <img src="./images/icon-close.svg" alt="Close Game Rules" />
          </div>
        </div>
      )}
      <Button onClick={handleToggleClick} />
    </RulesStyles>
  )
}

export default Rules
