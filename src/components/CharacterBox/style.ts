import styled from 'styled-components'

export const CharacterRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 380px;
  margin: auto;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  gap: 5px;

  .info {
    display: flex;
    width: 200px;
    height: 324px;
    gap: 5px;
    align-items: flex-end;
  }
  .profileAndInfo {
    display: flex;
    gap: 5px;
    flex-direction: row;
  }

  .profileContent {
    display: flex;
    flex-direction: column;
    gap: 20px;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: max-content;
    background: rgb(38, 38, 157);
    background: radial-gradient(
      circle,
      rgba(38, 38, 157, 1) 0%,
      rgba(32, 32, 134, 1) 14%,
      rgba(19, 19, 83, 1) 48%,
      rgba(19, 19, 81, 1) 50%,
      rgba(19, 11, 40, 1) 100%
    );
    border-radius: 8px;
  }
`
export const Phrases = styled.div`
  width: 100%;
  height: 120px;
  border-radius: 4px;
  background-color: #1e1943;
  padding: 10px;
  justify-content: center;
  align-items: center;
  p {
    text-align: center;
  }
`
export const stats = styled.div`
  width: 65%;
  height: 100%;
  border-radius: 4px;
  background-color: #473f74;
`
export const Items = styled.div`
  width: 35%;
  height: 100%;
  background-color: #8a5858;
  border-radius: 4px;
`
