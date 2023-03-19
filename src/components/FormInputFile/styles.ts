import styled from 'styled-components'

type PhotoImg = {
  file: 'photo' | 'camera'
}

export const ContainerFile = styled.div`
  width: 100px;
  height: auto;
  text-align: center;

  & p {
    font-style: italic;
    color: var(--purple);
    font-size: 14px;
    margin-top: 0.3rem;
  }
`

export const BoxFile = styled.div<PhotoImg>`
  width: 100px;
  height: 100px;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--purpleLight);
  border-radius: 50%;
  position: relative;
  overflow: hidden;
  border: 3px solid var(--purple);

  & label {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    position: absolute;
    cursor: pointer;

    & input[type='file'] {
      display: none;
    }
  }

  & img {
    width: ${({ file }) => (file === 'photo' ? '100%' : '80px')};
    height: ${({ file }) => (file === 'photo' ? '100%' : '80px')};
    border-radius: ${({ file }) => (file === 'photo' ? '0%' : '0')};
    transform: scale(1);
  }
`
