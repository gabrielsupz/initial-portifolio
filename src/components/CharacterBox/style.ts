import styled from 'styled-components'
import inventory from '../../assets/inventory.svg'

export const CharacterRoom = styled.div`
  display: flex;
  align-items: center;

  align-items: center;
  flex-direction: column;
  width: 400px;

  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 20px;
  gap: 5px;
  @media screen and (max-width: 400px) {
    width: 350px;
    padding-left: 0;
  }
  @media screen and (max-width: 374px) {
    max-width: 100vw;
  }

  .info {
    display: flex;
    flex-direction: column;
    width: 220px;
    height: 350px;
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

export const CharacterName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  font-family: 'Press Start 2P', cursive;
`

export const BoxItems = styled.div`
  width: 231px;
  height: 81px;

  display: flex;
  align-items: center;
  justify-content: space-around;
  background-image: url(${inventory});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 0 14px;

  @media screen and (max-width: 400px) {
    width: 208px;
    height: 73px;
  }
`
