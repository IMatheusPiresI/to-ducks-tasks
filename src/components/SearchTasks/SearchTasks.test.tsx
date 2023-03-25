import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import SearchTasks from '.'
import configureStore from 'redux-mock-store'
import { renderProvider } from '../../../jest/helpers/renderProvider'
import userEvent from '@testing-library/user-event'

const mockStore = configureStore()

describe('SearchTasks Tests', () => {
  it('should be render search input', () => {
    renderProvider(<SearchTasks />)

    const inputSearch = screen.getByPlaceholderText('Search for duck task')

    expect(inputSearch).toBeInTheDocument()
  })

  it('should be open modal edit task, and close modal', async () => {
    const store = mockStore({
      toDucks: [
        {
          id: 1,
          name: 'Title',
          file: '',
          desc: 'Desc',
        },
      ],
    })
    render(
      <Provider store={store}>
        <SearchTasks />
      </Provider>,
    )

    const buttonEdit = screen.getByTestId('edit')
    await userEvent.click(buttonEdit)

    const modalEdit = screen.getByTestId('form')
    expect(modalEdit).toBeInTheDocument()

    const buttonCloseModal = screen.getByTestId('closeModal')
    await userEvent.click(buttonCloseModal)
    expect(modalEdit).not.toBeInTheDocument()
  })

  it('should be filter tasks with search input', async () => {
    const store = mockStore({
      toDucks: [
        {
          id: 1,
          name: 'Title',
          file: '',
          desc: 'Desc',
        },
        {
          id: 2,
          name: 'Second Title',
          file: '',
          desc: 'Second Desc',
        },
      ],
    })
    render(
      <Provider store={store}>
        <SearchTasks />
      </Provider>,
    )

    const inputSearch = screen.getByPlaceholderText('Search for duck task')
    const allTasks = await screen.findAllByTestId('task')

    expect(allTasks).toHaveLength(2)
    await userEvent.clear(inputSearch)
    await userEvent.type(inputSearch, 'Second Title')

    const allTasksFiltered = await screen.findAllByTestId('task')
    expect(allTasksFiltered).toHaveLength(1)
  })

  it('should be render empty component', () => {
    const store = mockStore({
      toDucks: [],
    })
    render(
      <Provider store={store}>
        <SearchTasks />
      </Provider>,
    )

    const emptyComponent = screen.getByAltText('empty duck')
    expect(emptyComponent).toBeInTheDocument()
  })

  it('should be render task', async () => {
    const store = mockStore({
      toDucks: [
        {
          id: 1,
          name: 'Title',
          file: '',
          desc: 'Desc',
        },
      ],
    })
    render(
      <Provider store={store}>
        <SearchTasks />
      </Provider>,
    )

    const { toDucks } = store.getState() as {
      toDucks: [
        {
          id: 1
          name: 'Title'
          file: ''
          desc: 'Desc'
        },
      ]
    }
    const inputSearch = screen.getByPlaceholderText('Search for duck task')
    await userEvent.clear(inputSearch)
    expect(toDucks).toHaveLength(1)

    const taskRender = screen.getByTestId('task')
    expect(taskRender).toBeInTheDocument()
  })
})
