import styled from "styled-components";

export const Textarea = styled.textarea`
  width: 100%;
  height: 4rem;
  border-radius: 10px;
  border: 1px solid var(--white);
  background-color: transparent;
  padding: 0.5rem 1rem;
  color: var(--purple);
  font-size: 16px;
  line-height: 24px;
  outline: none;
  resize: none;
  &::placeholder {
    color: rgba(117, 6, 106, 0.68);
  }

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: var(--purpleLight);
    margin: 5px 0px;
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--purple);
    border-radius: 10px;
  }
`;
