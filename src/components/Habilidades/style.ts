import styled from 'styled-components'

export const Skills = styled.div`
  border: 2.5px solid black;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  min-width: 20%;
  height: max-content;
  justify-content: center;
  align-items: center;
  gap: 20px;
  height: max-content;
  padding-bottom: 40px;
  padding-left: 10px;
  padding-right: 10px;

  img {
    width: 250px;
  }
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
  @media screen and (max-width: 735px) {
    max-width: max-content;
    padding: 10px 40px 10px 40px;
    img {
      width: 371px;
    }
  }

  @media screen and (max-width: 450px) {
    width: 100%;
  }
  position: relative;
  .title {
    position: absolute;
    top: -35px;
  }
`
export const SkillsBox = styled.div`
  margin-top: 80px;

  align-items: center;
  justify-content: center;
  gap: 10px;

  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 1em;
`
export const Skill = styled.div`
  font-size: 10px;
  display: flex;
  border: 1px solid violet;
  border-radius: 4px;
  align-items: center;
  padding: 5px;
  gap: 5px;

  img {
    width: 35px;
    height: 35px;
    background-color: #5050cc;
    border: 1px solid yellow;
    border-radius: 8px;
  }

  h2 {
    font-family: 'Press Start 2P', cursive;
    font-size: 10px;
    display: flex;
    background: rgb(116, 46, 207);
    background: linear-gradient(
      180deg,
      rgba(116, 46, 207, 1) 0%,
      rgba(167, 108, 130, 1) 54%,
      rgba(255, 214, 0, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;

    text-align: center;
    justify-content: center;
  }
`
