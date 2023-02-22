import styled from 'styled-components'

export const Stats = styled.div`
  width: 100%;
  height: 70%;
  border-radius: 4px;
  /* background: rgb(38, 38, 157);
  background: radial-gradient(
    circle,
    rgba(38, 38, 157, 1) 0%,
    rgba(32, 32, 134, 1) 0%,
    rgba(22, 19, 83, 1) 0%,
    rgba(21, 17, 75, 1) 39%,
    rgba(12, 6, 28, 1) 100%
  ); */

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
  .bar {
    width: initial;
    height: inherit;
    @media screen and (max-width: 380px) {
      max-width: 130px;
      height: 15px;
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
`
