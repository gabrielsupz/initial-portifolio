import styled, { keyframes } from 'styled-components'

export const Phrases = styled.div`
  @media screen and (max-width: 370px) {
    max-width: 280px;
  }
  font-family: 'Press Start 2P', cursive;
  width: 90%;
  height: 120px;
  border-radius: 4px;
  background-color: #060116;
  padding: 10px;
  padding-bottom: 20px;
  justify-content: center;
  align-items: center;

  p {
    line-height: 20px;
    padding: 5px;
    display: flex;
    text-align: center;
    justify-content: center;
    text-shadow: 1px 1px 2px red, 0 0 3px yellow;
    font-size: 15px;
  }
`
