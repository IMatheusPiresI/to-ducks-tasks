import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  position: relative;
`

export const InputSearch = styled.input`
  width: 100%;
  height: 2.8rem;
  border-radius: 2.8rem;
  border: 1px solid var(--white);
  background-color: transparent;
  padding: 0 4.5rem;
  color: var(--purple);
  font-size: 1.3rem;
  line-height: 24px;
  outline: none;

  &::placeholder {
    color: rgba(117, 6, 106, 0.68);
  }

  @media (max-width: 630px) {
    font-size: 1rem;
  }
`

export const ImageSearch = styled.img`
  width: 43px;
  height: 47px;
  position: absolute;
  top: 0;
  left: 1.2rem;
`
