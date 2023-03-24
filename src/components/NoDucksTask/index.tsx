import * as S from './styles'
import duck from '/duck.svg'

const NoDucksTask = () => {
  return (
    <S.Container>
      <img src={duck} alt='empty duck' />
      <p>No duck task added...</p>
    </S.Container>
  )
}

export default NoDucksTask
