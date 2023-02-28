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
    /* background: rgb(118, 33, 226);
    background: linear-gradient(
      170deg,
      rgba(118, 33, 226, 1) 0%,
      rgba(228, 18, 95, 1) 28%,
      rgba(241, 114, 48, 1) 65%,
      rgba(255, 214, 0, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
  }
`
