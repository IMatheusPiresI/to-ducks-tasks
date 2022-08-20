import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  & img {
    width: 52px;
    height: 60px;
  }
  & p {
    color: var(--purple);
    font-weight: 400;
    font-size: 30px;
    line-height: 36px;
    margin-left: 16px;
  }
`;
