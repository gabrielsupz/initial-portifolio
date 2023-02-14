import styled from 'styled-components'

export const CharacterRoom = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 410px;

  border: 5px solid #141535;
  border-radius: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  background-color: #35365c;
  .info {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: flex-end;
  }

  .profileContent {
    display: flex;
    justify-content: center;
    align-items: center;
    width: max-content;
    height: max-content;
    background-color: #130b28;
    border-radius: 8px;
  }
`
export const Phrases = styled.div`
  width: 210px;
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
  width: 220px;
  height: 150px;
  border-radius: 4px;
  background-color: #473f74;
`
export const Items = styled.div`
  width: 220px;
  height: 80px;
  background-color: #8a5858;
  border-radius: 4px;
`
