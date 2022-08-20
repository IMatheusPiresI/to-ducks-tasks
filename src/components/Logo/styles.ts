import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 59px;
    height: 57px;
  }

  & h2 {
    color: var(--purple);
    margin-left: 12px;
    font-size: 30px;
    position: relative;
    top: 5px;
    font-weight: 400;
  }
`;
