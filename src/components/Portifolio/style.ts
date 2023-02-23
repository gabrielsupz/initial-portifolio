import styled from 'styled-components'

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
    width: 100%;
    height: 100%;
    justify-content: center;
    gap: 20px;
    padding-bottom: 20px;
    @media screen and (max-width: 735px) {
      gap: 50px;
    }
  }
  section {
    display: flex;
    justify-content: space-around;
    margin-top: 10px;
    gap: 20px;

    div.TraitsAndTechs {
      width: 60%;
      display: flex;
      flex-direction: column;
      gap: 50px;
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
