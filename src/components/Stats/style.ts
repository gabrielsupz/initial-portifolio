import styled from 'styled-components'

export const Stats = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 4px;

  align-items: center;
  justify-content: center;
  ul {
    width: max-content;
    display: flex;
    flex-direction: column;
    gap: 5px;

    img {
      width: 40px;
      height: 40px;
    }
  }

  li {
    font-family: 'Press Start 2P', cursive;
    display: flex;
    line-height: 15px;
    align-items: center;
    width: max-content;
    gap: 10px;
    width: 100%;

    @media screen and (max-width: 400px) {
      font-size: 9px;
    }
    @media screen and (max-width: 370px) {
      font-size: 12;
    }
    font-size: 10px;
    p {
      img {
        width: 20px;
        height: 20px;
      }
    }
  }
  h2.name {
    font-size: 12px;
    display: flex;
    background: rgb(224, 47, 47);
    background: linear-gradient(
      90deg,
      rgba(224, 47, 47, 1) 0%,
      rgba(113, 131, 43, 1) 53%,
      rgba(48, 40, 102, 1) 100%
    );
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    color: black;
    width: 100%;

    text-align: center;
    justify-content: center;
  }

  strong.one {
    color: #eb5b5b;
  }
  strong.two {
    color: #eb5b5b;
  }
  .class {
    color: #be543f;
  }
  .buff {
    border-radius: 4px;
  }
`

export const HPBar = styled.div`
  height: 15px;
  width: 140px;
  border: 2px solid #06000a;
  background: rgb(76, 125, 5);
  background: linear-gradient(
    90deg,
    rgba(76, 125, 5, 1) 0%,
    rgba(109, 155, 37, 1) 49%,
    rgba(143, 186, 69, 1) 73%,
    rgba(189, 228, 114, 1) 100%
  );
  &.stamina {
    background-color: yellow;
  }
`
export const STABar = styled.div`
  height: 15px;
  width: 140px;
  border: 2px solid #06000a;
  background: rgb(191, 226, 28);
  background: linear-gradient(
    90deg,
    rgba(191, 226, 28, 1) 0%,
    rgba(212, 255, 158, 1) 100%
  );
`
export const INTBar = styled.div`
  color: black;
  height: 15px;
  width: 140px;
  font-size: 7px;
  border: 2px solid #06000a;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(64, 63, 195);
  background: linear-gradient(
    90deg,
    rgba(64, 63, 195, 1) 0%,
    rgba(79, 78, 200, 1) 55%,
    rgba(255, 255, 255, 1) 100%
  );
`
export const DEVBar = styled.div`
  color: black;
  height: 15px;
  width: 140px;
  font-size: 7px;
  border: 2px solid #06000a;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgb(224, 47, 107);
  background: linear-gradient(
    90deg,
    rgba(224, 47, 107, 1) 18%,
    rgba(252, 235, 241, 1) 49%,
    rgba(255, 255, 255, 1) 100%
  );
`
export const TagAndNumber = styled.div`
  display: flex;
  width: 100%;
  min-width: 140px;
  justify-content: space-between;
  padding: 0 3px;

  strong {
    color: #5050cc;
  }
`
