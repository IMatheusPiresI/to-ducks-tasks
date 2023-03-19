import * as S from './styles'

import Logo from '../Logo'
import DuckCounter from '../DuckCounter'

const Header = () => {
  return (
    <S.Container>
      <S.BoxHeader>
        <Logo />
        <DuckCounter />
      </S.BoxHeader>
    </S.Container>
  )
}

export default Header
