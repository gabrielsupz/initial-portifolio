import styled from 'styled-components'

export const Techs = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;

  @media screen and (max-width: 374px) {
    width: 100%;
    img {
      width: 300px;
    }
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    img {
      width: 320px;
    }
  }
`
export const TechsBox = styled.div`
  @media screen and (max-width: 400px) {
    margin-left: 5px;
  }
  @media screen and (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1em;
  }
  display: flexbox;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
export const Tech = styled.div`
  display: flex;
  border: 1px solid violet;
  border-radius: 4px;
  align-items: center;
  padding: 5px;
  gap: 5px;

  img {
    width: 30px;
    height: 30px;
    background-color: #5050cc;
    border: 1px solid yellow;
    border-radius: 8px;
  }
  h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    display: flex;
    background: rgb(53, 20, 138);
    background: linear-gradient(
      90deg,
      rgba(53, 20, 138, 1) 0%,
      rgba(165, 159, 195, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;

    text-align: center;
    justify-content: center;
  }
`
