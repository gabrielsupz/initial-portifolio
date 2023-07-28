import styled from 'styled-components'

export const VoltageButton = styled.div`
  position: relative;

  button {
    color: white;
    background: #0d1127;
    padding: 1rem 3rem 1rem 3rem;
    border-radius: 5rem;
    border: 5px solid #5978f3;
    font-size: 1.2rem;
    line-height: 1em;
    letter-spacing: 0.075em;
    transition: background 0.3s;
  }

  button:hover {
    cursor: pointer;
    background: #0f1c53;
  }

  button:hover + svg,
  button:hover + svg + .dots {
    opacity: 1;
  }

  svg {
    display: block;
    position: absolute;
    top: -0.75em;
    left: -0.25em;
    width: calc(100% + 0.5em);
    height: calc(100% + 1.5em);
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s;
    transition-delay: 0.1s;
  }

  svg path {
    stroke-dasharray: 100;
    filter: url('#glow');
  }

  svg path.line-1 {
    stroke: #f6de8d;
    stroke-dashoffset: 0;
    animation: spark-1 3s linear infinite;
  }

  svg path.line-2 {
    stroke: #6bfeff;
    stroke-dashoffset: 500;
    animation: spark-2 3s linear infinite;
  }

  .dots {
    opacity: 0;
    transition: opacity 0.3s;
    transition-delay: 0.4s;
  }

  .dots .dot {
    width: 1rem;
    height: 1rem;
    background: white;
    border-radius: 100%;
    position: absolute;
    opacity: 0;
  }

  .dots .dot-1 {
    top: 0;
    left: 20%;
    animation: fly-up 3s linear infinite;
  }

  .dots .dot-2 {
    top: 0;
    left: 55%;
    animation: fly-up 3s linear infinite;
    animation-delay: 0.5s;
  }

  .dots .dot-3 {
    top: 0;
    left: 80%;
    animation: fly-up 3s linear infinite;
    animation-delay: 1s;
  }

  .dots .dot-4 {
    bottom: 0;
    left: 30%;
    animation: fly-down 3s linear infinite;
    animation-delay: 2.5s;
  }

  .dots .dot-5 {
    bottom: 0;
    left: 65%;
    animation: fly-down 3s linear infinite;
    animation-delay: 1.5s;
  }

  @keyframes spark-1 {
    to {
      stroke-dashoffset: -1000;
    }
  }

  @keyframes spark-2 {
    to {
      stroke-dashoffset: -500;
    }
  }

  @keyframes fly-up {
    0% {
      opacity: 0;
      transform: translateY(0) scale(0.2);
    }

    5% {
      opacity: 1;
      transform: translateY(-1.5rem) scale(0.4);
    }

    10%,
    100% {
      opacity: 0;
      transform: translateY(-3rem) scale(0.2);
    }
  }

  @keyframes fly-down {
    0% {
      opacity: 0;
      transform: translateY(0) scale(0.2);
    }

    5% {
      opacity: 1;
      transform: translateY(1.5rem) scale(0.4);
    }

    10%,
    100% {
      opacity: 0;
      transform: translateY(3rem) scale(0.2);
    }
  }
`
