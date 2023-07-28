import styled from 'styled-components'

export const DragonRoom = styled.section`
  div {
    border-radius: 50px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-image: var(--image-background-dragon);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }
  h2 {
    align-self: center;
  }
  img {
    width: 75%;
  }

  @media screen and (max-width: 320px) {
    img {
      width: 100%;
    }
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
    transform: translateZ(5px) rotateX(-15deg) rotateY(20deg);
    h2 {
      color: #fff;

      bottom: 50%;
      right: 20px;
      transform: translateY(-120%);

      transition: transform 0.5s;
    }
  }

  h2 {
  }

  h2 {
    transition: transform 0.5s;
    color: #fff;
    font: 700 1.5rem monospace;
    text-shadow: -1px -1px 0 purple, 1px -1px 0 purple, -1px 1px 0 purple,
      1px 1px 0 #000;
    transform: translateZ(50px);
  }
`
