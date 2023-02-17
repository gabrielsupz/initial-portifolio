import styled from 'styled-components'

export const Traits = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

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
  display: flexbox;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
