import styled from 'styled-components'
import pergaminho from '../../assets/pergaminho.png'
export const RulesSection = styled.section`
  display: flex;

  padding: 20px;
  gap: 20px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background-image: url(${pergaminho});
  background-size: cover;
  h3 {
    margin-top: 100px;
    font-size: 30px;
  }
  p {
    padding: 0 20px;
    width: 500px;
  }
`
