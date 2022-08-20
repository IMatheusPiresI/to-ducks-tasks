import { InputHTMLAttributes } from "react";
import * as S from "./styles";

const FormInput = ({ ...rest }: InputHTMLAttributes<HTMLInputElement>) => {
  return <S.Input {...rest} />;
};

export default FormInput;
