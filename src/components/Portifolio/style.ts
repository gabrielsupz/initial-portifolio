import styled from 'styled-components'
import sla from '../../assets/sla.jpg'
export const Portifolio = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  .header {
    margin: 20px 50px 40px 50px;
  }
  main {
    display: flex;
    flex-direction: column;
    width: max-content;
    max-width: fit-content;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding-bottom: 20px;
    gap: 100px;

    @media screen and (max-width: 735px) {
      gap: 50px;
    }
  }

  section#presentation {
    height: 700px;
    width: 100%;
    background-image: var(--image-background);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
  }

  section#devInfo {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    gap: 20px;
    width: 100%;

    div.TraitsAndTechs {
      width: 40%;
      display: flex;
      flex-direction: column;
      gap: 40px;
    }

    div.SkillsAndAffinitys {
      display: flex;
      flex-direction: column;
      gap: 80px;
    }
  }

  @media screen and (max-width: 1200px) {
    section {
      display: flex;
      justify-content: space-around;
      flex-direction: column;
      align-items: center;
      gap: 50px;

      div.TraitsAndTechs {
        width: 90%;
        display: flex;
        flex-direction: column;
        gap: 50px;
      }

      div.SkillsAndAffinitys {
        flex-direction: row;

        gap: 80px;
      }
      @media screen and (max-width: 735px) {
        div.SkillsAndAffinitys {
          flex-direction: column;

          gap: 80px;
        }
      }
    }
  }

  @media screen and (max-width: 820px) {
    .header {
      margin: 15px;
    }
    main {
      align-items: center;
      justify-content: center;
      flex-direction: column;
    }
  }
`
