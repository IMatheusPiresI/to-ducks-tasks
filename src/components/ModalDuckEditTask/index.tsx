import { FormEvent, useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { ReducerState, ToDucks } from '../../@types'
import { editDuckTask } from '../../store/ducks/toDucks'
import { Textarea } from '../DescTask/styles'
import FormInput from '../FormInput'
import FormInputFile from '../FormInputFile'
import * as S from './styles'

type ModalDuckEditTaskProps = {
  closeModal: () => void
  idEdit: number
  toDucks: ToDucks[]
  editDuckTask: (payload: ToDucks) => void
}

const ModalDuckEditTask = ({
  closeModal,
  idEdit,
  toDucks,
  editDuckTask,
}: ModalDuckEditTaskProps) => {
  const [file, setFile] = useState<string>('')
  const [duckName, setDuckName] = useState<string>('')
  const [duckDesc, setDuckDesc] = useState<string>('')
  const handleEditDuckTask = (event: FormEvent) => {
    event.preventDefault()

    editDuckTask({
      id: idEdit,
      name: duckName,
      desc: duckDesc,
      file,
    })
    closeModal()
  }

  useEffect(() => {
    const duckTask = toDucks.find((duckTask) => duckTask.id === idEdit)

    if (!duckTask) return

    setFile(duckTask.file)
    setDuckName(duckTask.name)
    setDuckDesc(duckTask.desc)
  }, [])

  return (
    <S.ContainerModal>
      <S.Modal onSubmit={handleEditDuckTask} data-testid='form'>
        <S.CloseButton type='button' onClick={closeModal} data-testid='closeModal'>
          X
        </S.CloseButton>
        <h2>Editing duck task</h2>
        <FormInputFile id='editFile' file={file} setFile={setFile} />
        <FormInput
          placeholder='Duck Name'
          data-testid='inputTitleEdit'
          value={duckName}
          onChange={(e) => setDuckName(e.target.value)}
        />
        <Textarea
          placeholder="What's your duck task"
          data-testid='inputDescEdit'
          value={duckDesc}
          onChange={(e) => setDuckDesc(e.target.value)}
        />
        <S.SubmitButton type='submit' data-testid='submitEdit'>
          Submit
        </S.SubmitButton>
      </S.Modal>
    </S.ContainerModal>
  )
}

const mapStateToProps = (state: ReducerState) => ({
  toDucks: state.toDucks,
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators({ editDuckTask }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ModalDuckEditTask)
