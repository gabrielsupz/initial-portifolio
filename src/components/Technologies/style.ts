import styled from 'styled-components'

export const Techs = styled.div`
  border: 2.5px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 100%;
  justify-content: center;
  align-items: center;
  gap: 20px;
  position: relative;

  padding-bottom: 10px;
  padding-left: 10px;
  padding-right: 10px;

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
  .title {
    position: absolute;
    top: -35px;
  }
`
export const TechsBox = styled.div`
  margin-top: 80px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  align-items: center;
  justify-content: center;
  gap: 5px;
  @media screen and (max-width: 950px) {
    margin-left: 5px;
    grid-template-columns: repeat(2, 1fr);
  }
  @media screen and (max-width: 400px) {
    margin-left: 5px;
    display: flexbox;
  }
  @media screen and (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
  }
`
export const Tech = styled.div`
  display: flex;

  border-radius: 4px;
  align-items: center;
  padding: 5px;
  gap: 5px;

  img {
    width: 30px;
    height: 30px;
    min-width: 30px;
    min-height: 30px;

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

    justify-content: center;
  }
  @media screen and (max-width: 400px) {
    h2 {
      font-size: 11px;
    }
  }
  @media screen and (max-width: 375px) {
    h2 {
      font-size: 10px;
    }
    img {
      width: 25px;
      height: 25px;
    }
  }

  .teachAndLvl {
    display: flex;
    flex-direction: column;
    gap: 3px;
  }
  .xpAndLvl {
    display: flex;
    flex-direction: column;
    justify-content: center;

    strong {
      background: rgb(255, 255, 255);
      background: linear-gradient(
        270deg,
        rgba(255, 255, 255, 1) 0%,
        rgba(214, 212, 212, 1) 12%,
        rgba(62, 49, 49, 1) 100%
      );
      background-clip: text;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      color: black;

      justify-content: center;
    }
  }
`
export const XPBar = styled.div`
  color: black;
  height: 10px;
  width: 80px;
  font-size: 7px;
  border: 2px solid #06000a;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(64, 63, 195);
  background: linear-gradient(
    90deg,
    rgba(64, 63, 195, 1) 0%,
    rgba(79, 78, 200, 1) 55%,
    rgba(255, 255, 255, 1) 100%
  );
`
