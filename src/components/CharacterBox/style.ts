import styled from 'styled-components'

export const CharacterRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 380px;
  margin: auto;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 5px;
  @media screen and (max-width: 400px) {
    width: 350px;
  }
  @media screen and (max-width: 374px) {
    max-width: 100vw;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 324px;
    gap: 5px;
    align-items: center;
    @media screen and (max-width: 380px) {
      width: 190px;
    }
    @media screen and (max-width: 370px) {
      width: 200px;
    }
  }
  .profileAndInfo {
    display: flex;
    gap: 5px;
    flex-direction: row;
    @media screen and (max-width: 400px) {
      max-width: 350px;
    }
    @media screen and (max-width: 380px) {
      gap: 0;
    }
    @media screen and (max-width: 370px) {
      flex-direction: column;
    }
  }

  .profileContent {
    padding: 5px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: max-content;
    /* background: rgb(38, 38, 157);
    background: radial-gradient(
      circle,
      rgba(38, 38, 157, 1) 0%,
      rgba(32, 32, 134, 1) 14%,
      rgba(19, 19, 83, 1) 48%,
      rgba(19, 19, 81, 1) 50%,
      rgba(19, 11, 40, 1) 100%
    ); */
    border-radius: 8px;
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
  justify-content: center;
  align-items: center;
  p {
    padding: 5px;
    display: flex;
    height: 100%;
    text-align: center;

    justify-content: center;
    text-shadow: 1px 1px 2px red, 0 0 3px yellow;
  }
`
export const stats = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 4px;
  /* background: rgb(38, 38, 157);
  background: radial-gradient(
    circle,
    rgba(38, 38, 157, 1) 0%,
    rgba(32, 32, 134, 1) 0%,
    rgba(22, 19, 83, 1) 0%,
    rgba(21, 17, 75, 1) 39%,
    rgba(12, 6, 28, 1) 100%
  ); */

  align-items: center;
  justify-content: center;
  ul {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 5px;

    img {
      width: 40px;
      height: 40px;
    }
  }
  .bar {
    width: initial;
    height: inherit;
    @media screen and (max-width: 380px) {
      max-width: 130px;
      height: 15px;
    }
  }
  li {
    font-family: 'Press Start 2P', cursive;
    display: flex;
    line-height: 15px;
    align-items: center;
    width: max-content;
    gap: 10px;

    @media screen and (max-width: 400px) {
      font-size: 9px;
    }
    @media screen and (max-width: 370px) {
      font-size: 12;
    }
    font-size: 10px;
  }
`
export const BoxItems = styled.div`
  width: 210px;
  height: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  .item {
    min-width: 202px;
    min-height: 68px;
    position: absolute;
    z-index: 0.5;
  }

  @media screen and (max-width: 400px) {
    .item {
      width: 200px;
    }
  }
  @media screen and (max-width: 370px) {
    .item {
      width: 250px;
    }
  }
`
export const Items = styled.div`
  @media screen and (max-width: 375px) {
    margin-left: 20px;
    img {
      width: 35px;
      height: 35px;
    }
  }

  width: 210px;
  height: 68px;
  display: flex;
  align-items: center;
  margin-left: 10px;
  gap: 9px;
  img {
    max-width: 40px;
    max-height: 40px;
    z-index: 2;
  }
  @media screen and (max-width: 370px) {
    margin-left: 5px;
    gap: 12px;
    img {
      width: 40px;
      height: 40px;
    }
  }
`
