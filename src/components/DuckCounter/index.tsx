import duck from "/duck.svg";
import * as S from "./styles";
import { connect } from "react-redux";
import { ReducerState, ToDucks } from "../../@types/types";

type DuckCounterProps = {
  toDucks: ToDucks[];
};

const DuckCounter = ({ toDucks }: DuckCounterProps) => {
  return (
    <S.Container>
      <img src={duck} alt="" />
      <p>{toDucks.length}</p>
    </S.Container>
  );
};

const mapStateToProps = (state: ReducerState) => {
  return {
    toDucks: state.toDucks,
  };
};

export default connect(mapStateToProps)(DuckCounter);
