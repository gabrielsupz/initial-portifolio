import styled from 'styled-components'
import sla from '../../assets/sla.jpg'
export const KnightRoom = styled.section`
  div {
    border-radius: 50px;
    height: 500px;
    width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: start;
    background-image: var(--image-background-knight);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  h2 {
    align-self: center;
  }
  img {
    width: 55%;
  }
  div {
    perspective: 500px;
  }

  div {
    position: relative;
    transform-style: preserve-3d;
    will-change: transform;
    transition: transform 0.5s;
    box-shadow: 0 4px 8px 0 white, 0 6px 20px 0 blue;
  }

  div:hover {
    transform: translateZ(5px) rotateX(15deg) rotateY(15deg);
  }

  h2 {
    color: #fff;

    top: 50%;
    right: 20px;
    transform: translateY(-50%);
    transition: transform 0.5s;
    font: 700 1.5rem monospace;
    text-shadow: -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple,
      1px 1px 0 #000;
  }

  h2 {
    transform: translateZ(50px);
  }
`
