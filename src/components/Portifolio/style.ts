import styled from 'styled-components'

export const Portifolio = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;

  .header {
    margin: 25px 50px;
  }
  main {
    display: flex;
    width: 100%;
    height: 100%;
    justify-content: space-around;
  }
  section {
    display: flex;
    flex-direction: column;
    gap: 100px;
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
