import styled from 'styled-components'

export const Input = styled.input`
  width: 100%;
  height: 2rem;
  border-radius: 10px;
  border: 1px solid var(--white);
  background-color: transparent;
  padding: 0 1rem;
  color: var(--purple);
  font-size: 16px;
  line-height: 24px;
  outline: none;

  &::placeholder {
    color: rgba(117, 6, 106, 0.68);
  }
`
