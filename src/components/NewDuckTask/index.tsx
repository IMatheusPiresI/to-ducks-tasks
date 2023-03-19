import * as S from './styles'

import duck from '/duck.svg'
import { FormEvent, useState } from 'react'
import FormInput from '../FormInput'
import DescTask from '../DescTask'

import { AnyAction, bindActionCreators, Dispatch } from 'redux'
import { addDuckTask } from '../../store/ducks/toDucks'
import { connect } from 'react-redux'
import FormInputFile from '../FormInputFile'
import { PayloadAction, ReducerState } from '../../@types'

type NewDuckTaskProps = {
  addDuckTask: (payload: PayloadAction) => void
}

const NewDuckTask = ({ addDuckTask }: NewDuckTaskProps) => {
  const [file, setFile] = useState<string>('')
  const [name, setName] = useState<string>('')
  const [desc, setDesc] = useState<string>('')

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()

    const payload = {
      id: Math.floor(Math.random() * 99999),
      name,
      file: file ? file : duck,
      desc,
    }

    addDuckTask(payload)
    setName('')
    setDesc('')
    setFile('')
  }
  return (
    <>
      <S.Container>
        <S.Title>New Duck Task</S.Title>
        <S.FormNewDuck onSubmit={handleSubmit}>
          <FormInputFile id='formFile' file={file} setFile={setFile} />
          <S.ContainerInfo>
            <FormInput
              type='text'
              placeholder='Duck Name'
              value={name}
              minLength={1}
              maxLength={10}
              max={3}
              onChange={(e) => setName(e.target.value.trim())}
              required
            />
            <DescTask
              placeholder="What's your duck task?"
              value={desc}
              onChange={(e) => setDesc(e.target.value)}
              required
            />
          </S.ContainerInfo>
          <S.SubmitButton type='submit'>Submit</S.SubmitButton>
        </S.FormNewDuck>
      </S.Container>
    </>
  )
}

const mapStateToProps = (state: ReducerState) => ({
  toDucks: state.toDucks,
})

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return bindActionCreators({ addDuckTask }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(NewDuckTask)
