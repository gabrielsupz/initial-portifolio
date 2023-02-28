import styled, { keyframes } from 'styled-components'

const text = keyframes` 
   0% {
  height: 0%;
    width: 0%;
   
    border-color: transparent;
      }

      25%{
        height: 25%;
      }
      50% {
        width: 100%;
      
    border-color: #fff;
         
      }
      80%{
       
      }
      100% {   
        text-align: center;
        height:100% ;
        opacity: 1;
  width: 100%;
    border-color: transparent;
      }
`
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
    opacity: 0;
    line-height: 20px;
    padding: 5px;
    display: flex;

    justify-content: center;
    /* text-shadow: 1px 1px 2px red, 0 0 3px yellow; */
    font-size: 15px;
    background: rgb(59, 4, 131);
    background: linear-gradient(
      170deg,
      rgba(59, 4, 131, 1) 0%,
      rgba(255, 16, 105, 1) 54%,
      rgba(255, 214, 0, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
    white-space: pre-line;
    border-right: 5px solid transparent;
    animation: ${text} alternate ease-in forwards;
    animation-duration: 5s;
    animation-iteration-count: initial;
  }
`
