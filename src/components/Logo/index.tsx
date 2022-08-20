import * as S from "./styles";
import reduxlogo from "/reduxlogo.svg";

const Logo = () => {
  return (
    <S.Container>
      <img src={reduxlogo} alt="Redux Logo" />
      <h2>TDucks</h2>
    </S.Container>
  );
};

export default Logo;
