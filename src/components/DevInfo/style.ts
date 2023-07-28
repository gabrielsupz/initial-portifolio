import styled from 'styled-components'
import sla from '../../assets/sla.jpg'
export const DevInfo = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 10px;
  gap: 10px;
  width: 90%;
  div.info {
    display: flex;
    justify-content: space-between;
    gap: 5%;
  }

  div.TraitsAndTechs {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 40px;
  }

  div.SkillsAndAffinitys {
    display: flex;
    flex-direction: column;
    gap: 80px;
  }

  @media screen and (max-width: 1200px) {
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    div.info {
      width: 100%;
      display: flex;
    }

    div.TraitsAndTechs {
      width: 90%;
      display: flex;
      flex-direction: column;
      gap: 50px;
    }

    div.SkillsAndAffinitys {
      flex-direction: column;

      gap: 80px;
    }
  }

  @media screen and (max-width: 735px) {
    flex-direction: column;

    div.info {
      flex-direction: column;
      align-items: center;
    }
    div.SkillsAndAffinitys {
      flex-direction: column;
      margin-top: 80px;
    }
  }
`
