import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  height: 12em;
  border: 1px solid var(--white);
  box-shadow: 0px 0px 4px -1px var(--pink);
  border-radius: 10px;
  padding: 10px 20px;
`;

export const Title = styled.h1`
  text-align: center;
  font-weight: 400;
  font-size: 30px;
  line-height: 36px;
  color: var(--purple);
`;

export const FormNewDuck = styled.form`
  width: 100%;
  display: flex;
  max-width: 650px;
  margin: 0 auto;
  position: relative;
  justify-content: center;
`;

export const Camera = styled.div`
  width: 50px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  background: rgba(255, 255, 255, 0.3);

  & img {
    width: 50px;
    height: auto;
  }
`;

export const ContainerInfo = styled.div`
  width: 100%;
  margin-left: 1.5rem;
  display: flex;
  flex-direction: column;

  & input {
    margin-top: 5px;
  }

  & textarea {
    margin-top: 15px;
  }
`;

export const SubmitButton = styled.button`
  position: absolute;
  bottom: -2.5rem;
  margin: 0 auto;
  width: 150px;
  padding: 7px 0;
  background-color: var(--purpleLight);
  color: var(--white);
  border: 1px solid var(--white);
  font-weight: 600;
`;
