import styled from 'styled-components'

export const InfoRoomBox = styled.section`
  position: absolute;
  transition: all 0.5s;

  display: none;
  opacity: 0;
  h3 {
    margin-top: 15px;
    text-align: center;
  }
  p {
    text-align: justify;
  }
  strong {
    font-weight: 800;
    color: var(--text-color-blue);
  }
`
