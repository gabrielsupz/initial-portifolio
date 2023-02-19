import styled from 'styled-components'

export const Traits = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: max-content;
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
export const TraitsBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  @media screen and (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1em;
  }
`
export const Trait = styled.div`
  display: flex;
  border: 1px solid violet;
  border-radius: 4px;
  align-items: center;
  padding: 10px;
`
