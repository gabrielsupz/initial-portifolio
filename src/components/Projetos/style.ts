import styled from 'styled-components'

export const Projects = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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
export const ProjectsBox = styled.div`
  @media screen and (max-width: 400px) {
    margin-left: 5px;
  }
  @media screen and (max-width: 450px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 1em;
  }
  display: flexbox;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
export const Project = styled.div`
  display: flex;
  border: 1px solid violet;
  border-radius: 4px;
  align-items: center;
  padding: 10px;
`
