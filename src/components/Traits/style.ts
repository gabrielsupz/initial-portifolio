import styled from 'styled-components'

export const Traits = styled.div`
  border: 2.5px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  min-width: 100%;
  height: max-content;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: max-content;
  padding-bottom: 20px;
  padding-left: 10px;
  padding-right: 10px;
  background: rgb(255, 255, 255);
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 1) 0%,
    rgba(50, 23, 149, 1) 0%,
    rgba(21, 1, 36, 1) 100%
  );
  img {
    width: 372px;
    height: 102px;
  }

  @media screen and (max-width: 450px) {
    width: 100%;
  }
  @media screen and (max-width: 400px) {
    width: 100%;
    img {
      width: 320px;
    }
  }
  @media screen and (max-width: 374px) {
    width: 100%;
    img {
      width: 300px;
    }
  }
  position: relative;
  .title {
    position: absolute;
    top: -35px;
  }
`
export const TraitsBox = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  align-items: center;
  justify-content: center;
  gap: 10px;
  @media screen and (max-width: 965px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1em;
  }
  @media screen and (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1em;
  }
`
export const Trait = styled.div`
  font-size: 10px;
  display: flex;

  border-radius: 4px;
  align-items: center;
  padding: 5px;
  gap: 5px;

  img {
    min-width: 30px;
    min-height: 30px;
    width: 30px;
    height: 30px;

    border-radius: 8px;
  }

  h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 12px;
    display: flex;
    background: rgb(11, 141, 142);
    background: linear-gradient(
      332deg,
      rgba(11, 141, 142, 1) 0%,
      rgba(155, 196, 223, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;

    text-align: center;
    justify-content: center;
  }
`
