import { connect } from 'react-redux'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { PayloadAction } from '../../@types'
import { removeDuckTask } from '../../store/ducks/toDucks'
import IconDuckTask from '../IconDuckTask'
import * as S from './styles'
import duck from '/duck.svg'

type CardDuckTaskProps = {
  id: number
  duckName: string
  duckFile: string
  duckTask: string
  showModal: (id: number) => void
  removeDuckTask: (payload: PayloadAction) => void
}

const CardDuckTask = ({
  id,
  duckName,
  duckFile,
  duckTask,
  showModal,
  removeDuckTask,
}: CardDuckTaskProps) => {
  return (
    <S.Container>
      <S.DuckInfo>
        <S.DuckPhotoBox>
          <img src={duckFile.length > 0 ? duckFile : duck} alt='Duck photo' />
        </S.DuckPhotoBox>
        <S.DuckName>{duckName}</S.DuckName>
      </S.DuckInfo>
      <S.DuckDesc>{duckTask}</S.DuckDesc>
      <div className='boxActionButtons'>
        <IconDuckTask typeButton='edit' name='edit' onClick={() => showModal(id)} />
        <IconDuckTask typeButton='delete' onClick={() => removeDuckTask({ id })} />
      </div>
    </S.Container>
  )
}

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators({ removeDuckTask }, dispatch)
}

export default connect(null, mapDispatchToProps)(CardDuckTask)
