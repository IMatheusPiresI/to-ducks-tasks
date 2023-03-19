import styled from 'styled-components'

export const ContainerModal = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  padding: 0rem 1rem;
  background-color: rgba(0, 0, 0, 0.5);
`

export const Modal = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  max-width: 500px;
  border: 1px solid var(--white);
  border-radius: 8px;
  padding: 2rem 1rem 2.3rem 1rem;
  text-align: center;
  background-color: rgba(220, 177, 200, 1);
  box-shadow: 0px 0px 10px 1px var(--purple);
  gap: 20px;
  animation: showModal 0.4s linear;

  & h2 {
    text-align: center;
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    color: var(--purple);
  }

  @keyframes showModal {
    0% {
      opacity: 0;
      transform: translateY(-40px);
    }

    100% {
      opacity: 1;
      transform: translateY(0px);
    }
  }
`

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 20px;
  background: transparent;
  border: none;
  font-size: 1.5rem;
  color: var(--purple);
`

export const SubmitButton = styled.button`
  width: 150px;
  padding: 0.7rem 0em;
  background: var(--purpleLight);
  position: absolute;
  bottom: -1.3rem;
  border: 1px solid var(--white);
  color: var(--white);
  font-weight: 600;
`
