import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% { transform: translateY(0px) }
  50% { transform: translateY(-12px) }
  100% { transform: translateY(0px) }
`;

const slowRotate = keyframes`
  0% { transform: rotate(0deg) }
  100% { transform: rotate(360deg) }
`;

const Container = styled.div`
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
  overflow: hidden;

  .blob {
    position: absolute;
    filter: blur(36px);
    opacity: 0.45;
    will-change: transform;
  }

  .blob.purple {
    width: 480px;
    height: 480px;
    left: -120px;
    top: -120px;
    background: radial-gradient(circle at 30% 30%, rgba(124, 58, 237, 0.8), rgba(124, 58, 237, 0) 60%);
    animation: ${float} 10s ease-in-out infinite;
  }

  .blob.indigo {
    width: 520px;
    height: 520px;
    right: -160px;
    bottom: -160px;
    background: radial-gradient(circle at 70% 70%, rgba(76, 29, 149, 0.75), rgba(76, 29, 149, 0) 60%);
    animation: ${float} 12s ease-in-out infinite 1s;
  }

  .ring {
    position: absolute;
    width: 600px;
    height: 600px;
    left: 50%;
    top: 55%;
    transform: translate(-50%, -50%);
    background: conic-gradient(from 0deg, rgba(124, 58, 237, 0.25), rgba(124, 58, 237, 0) 40%, rgba(76, 29, 149, 0.25), rgba(76, 29, 149, 0) 80%);
    border-radius: 50%;
    filter: blur(14px) saturate(1.1);
    mask: radial-gradient(circle, transparent 58%, black 60%);
    opacity: 0.35;
    animation: ${slowRotate} 60s linear infinite;
  }

  .diamond {
    position: absolute;
    width: 240px;
    height: 240px;
    left: 12%;
    bottom: 18%;
    background: linear-gradient(135deg, rgba(124, 58, 237, 0.35), rgba(76, 29, 149, 0.2));
    transform: rotate(45deg);
    filter: blur(10px);
    opacity: 0.35;
    animation: ${float} 14s ease-in-out infinite 0.5s;
  }

  @media (prefers-reduced-motion: reduce) {
    .blob.purple,
    .blob.indigo,
    .ring,
    .diamond {
      animation: none !important;
    }
  }
`;

function BackgroundFX() {
  return (
    <Container aria-hidden>
      <div className="blob purple" />
      <div className="blob indigo" />
      <div className="ring" />
      <div className="diamond" />
    </Container>
  );
}

export default BackgroundFX;