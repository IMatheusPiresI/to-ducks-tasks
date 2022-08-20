import Header from "../../components/Header";
import NewDuckTask from "../../components/NewDuckTask";

import * as S from "./styles";

import SearchTasks from "../../components/SearchTasks";

function Home() {
  return (
    <>
      <Header />
      <S.MainContent>
        <NewDuckTask />
        <S.SectionDuckTasks>
          <SearchTasks />
        </S.SectionDuckTasks>
      </S.MainContent>
    </>
  );
}

export default Home;
