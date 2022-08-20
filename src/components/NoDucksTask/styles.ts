import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid var(--white);
  border-radius: 10px;
  box-shadow: 0px 0px 4px -1px var(--pink);
  height: 361px;
  background: linear-gradient(
    180deg,
    #9b5c86 0%,
    rgba(255, 255, 255, 0.81) 100%
  );

  & img {
    width: 372px;
    height: 242px;
  }

  & p {
    font-weight: 600;
    font-size: 25px;
    line-height: 36px;
    color: var(--purpleLight);
  }
`;
