import styled from 'styled-components'

export const Container = styled.article`
  width: 100%;
  border: 1px solid var(--white);
  border-radius: 10px;
  background-color: rgba(155, 92, 134, 0.26);
  padding: 1.2rem 1.4rem;
  display: flex;
  word-break: break-all;
  position: relative;
  animation: Mount 0.5s linear forwards;

  & .boxActionButtons {
    display: flex;
    gap: 20px;
    position: absolute;
    right: 10px;
    top: -15px;
    opacity: 0;
    transition: 0.3s linear;
  }

  &:hover {
    .boxActionButtons {
      opacity: 1;
    }
  }

  @keyframes Mount {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0px);
      opacity: 1;
    }
  }
`

export const DuckInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  margin-right: 1rem;
  word-break: break-all;

  @media (max-width: 630px) {
    width: 90px;
  }
`

export const DuckPhotoBox = styled.div`
  width: 80px;
  height: 80px;
  background-color: var(--purpleLight);
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--purple);

  & img {
    width: 100%;
    height: 100%;
  }

  @media (max-width: 630px) {
    width: 65px;
    height: 65px;
  }
`

export const DuckName = styled.p`
  font-style: italic;
  color: var(--purple);
  font-size: 0.8rem;
  margin-top: 0.3rem;
  text-align: center;

  @media (max-width: 630px) {
    font-size: 0.75rem;
  }
`

export const DuckDesc = styled.p`
  font-size: 1.3rem;
  color: var(--purpleLight);
  text-shadow: -1px -1px rgba(0, 0, 0, 0.6);

  @media (max-width: 630px) {
    font-size: 1rem;
  }
`

export const BoxActionButtons = styled.div`
  display: flex;
  gap: 20px;
  position: absolute;
  right: 10px;
  top: -15px;
`
