import styled from 'styled-components'
import sla from '../../assets/sla.jpg'
export const Portifolio = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  .header {
    margin: 20px 50px 40px 50px;
  }
  main {
    display: flex;
    flex-direction: column;

    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
    gap: 100px;

    @media screen and (max-width: 735px) {
      gap: 50px;
    }
  }

  section#presentation {
    box-shadow: 0 4px 8px 0 white, 0 6px 20px 0 grey;
    transition: all 1s;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 15px;
    height: 95vh;
    min-height: 580px;
    width: 90%;
    border-radius: 10px;
    background-image: var(--image-background);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;

    p {
      height: 100%;
      display: flex;
      align-items: center;
      color: black;
      width: 50%;
      margin-left: 10%;
      margin-top: 15%;
      font-size: 40px;
      font-family: 'VT323', monospace;
      font-weight: 400;
      align-self: flex-start;
      transition: all 1s;
    }
  }
  section#presentation.active {
    background-image: var(--image-background-2);
    p {
      transition: all 1s;
      color: white;
    }
  }
  section#presentation:hover {
    transition: all 0.5s;
    box-shadow: 0 4px 8px 0 white, 5px 6px 20px 0 red;
  }

  @media screen and (max-width: 1024px) {
    section p#phrasePresentation {
      margin-top: 0;
    }
  }

  @media screen and (max-width: 820px) {
    p#phrasePresentation {
      width: 80%;
      span {
        font-size: 30px;
      }
    }
  }
  @media screen and (max-width: 600px) {
    section {
      justify-content: flex-start;
    }
    section p#phrasePresentation {
      width: 90%;

      margin: 40% auto auto auto;
    }
    section p#phrasePresentation span {
      font-size: 20px;
    }
  }
  @media screen and (max-width: 375px) {
    section p#phrasePresentation {
      padding: 30px;
    }
  }

  @media screen and (max-width: 820px) {
    .header {
      margin: 15px;
    }
    main {
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`
