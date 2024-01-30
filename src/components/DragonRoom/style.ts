import styled from 'styled-components'

export const DragonRoom = styled.section`
  div#room {
    border-radius: 50px;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    background-image: var(--image-background-dragon);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    perspective: 500px;
    position: relative;
    transform-style: preserve-3d;
    will-change: transform;
    transition: transform 0.5s;
    box-shadow: 0 4px 8px 0 white, 0 6px 20px 0 blue;
  }
  h2 {
    align-self: center;
  }
  img {
    width: 75%;
  }

  div#room:hover {
    transform: translateZ(5px) rotateX(-15deg) rotateY(20deg);
    h2 {
      color: #fff;

      bottom: 50%;
      right: 20px;
      transform: translateY(-120%);

      transition: transform 0.5s;
    }
    display: flex;
    flex-direction: column;
    #infoRoom {
      transition: all 0.5s;

      top: 0;
      left: auto;
      right: 100%;
      opacity: 1;
      display: flex;
      flex-direction: column;
      padding: 20px;
      width: 300px;
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

  /* Responsivo */
  @media screen and (max-width: 320px) {
    img {
      width: 100%;
    }
  }
  @media screen and (max-width: 425px) {
    width: 300px;
    height: auto;
  }
`
