import { useState } from 'react'
import { connect } from 'react-redux'
import { ReducerState, ToDucks } from '../../@types'
import CardDuckTask from '../CardDuckTask'
import ModalDuckEditTask from '../ModalDuckEditTask'
import NoDucksTask from '../NoDucksTask'
import SearchInput from '../SearchInput'
import * as S from './styles'

type SearchTasksProps = {
  toDucks: ToDucks[]
}

const SearchTasks = ({ toDucks }: SearchTasksProps) => {
  const [filterTasks, setFilterTasks] = useState<string>('')
  const [idEdit, setIdEdit] = useState<number>(0)
  const [showModal, setShowModal] = useState<boolean>(false)

  const handleShowModal = (id?: number | Event) => {
    if (typeof id === 'number') {
      setIdEdit(id)
    }
    setShowModal(!showModal)
  }

  const duckTasksFiltered = toDucks.filter(
    (duckTask: ToDucks) =>
      duckTask.name.toLowerCase().includes(filterTasks.toLowerCase()) ||
      duckTask.desc.toLowerCase().includes(filterTasks.toLowerCase()),
  )

  const renderCards = () => {
    if (duckTasksFiltered.length > 0) {
      return duckTasksFiltered.map((duckTask: ToDucks) => (
        <CardDuckTask
          key={duckTask.id}
          id={duckTask.id}
          showModal={handleShowModal}
          duckFile={duckTask.file}
          duckName={duckTask.name}
          duckTask={duckTask.desc}
        />
      ))
    }

    return toDucks.map((duckTask: ToDucks) => (
      <CardDuckTask
        key={duckTask.id}
        id={duckTask.id}
        showModal={handleShowModal}
        duckFile={duckTask.file}
        duckName={duckTask.name}
        duckTask={duckTask.desc}
      />
    ))
  }

  return (
    <>
      <SearchInput value={filterTasks} onChange={(e) => setFilterTasks(e.target.value)} />
      <S.ContainerDuckTasks>
        {toDucks.length > 0 ? renderCards() : <NoDucksTask />}
      </S.ContainerDuckTasks>
      {showModal && <ModalDuckEditTask closeModal={handleShowModal} idEdit={idEdit} />}
    </>
  )
}

const mapStateToProps = (state: ReducerState) => ({
  toDucks: state.toDucks,
})

export default connect(mapStateToProps)(SearchTasks)
