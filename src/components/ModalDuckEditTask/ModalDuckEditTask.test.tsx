import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import ModalDuckEditTask from '.'
import { renderProvider } from '../../../jest/helpers/renderProvider'

const mockStore = configureStore()

describe('ModalDuckEditTask Tests', () => {
  it('should be render form modal', () => {
    const closeModal = jest.fn()
    renderProvider(<ModalDuckEditTask closeModal={closeModal} idEdit={2} />)

    const formModal = screen.getByTestId('form')

    expect(formModal).toBeInTheDocument()
  })

  it('shoud be test rendered info task edit in form fields', async () => {
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
        <ModalDuckEditTask closeModal={() => {}} idEdit={1} />
      </Provider>,
    )

    const inputName = screen.getByPlaceholderText(/duck name/i)
    const inputDesc = screen.getByPlaceholderText(/what's your duck task?/i)

    expect(inputName).toHaveValue('Title')
    expect(inputDesc).toHaveValue('Desc')
  })

  it('should be edit task on press button submit form', async () => {
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
        <ModalDuckEditTask closeModal={() => {}} idEdit={1} />
      </Provider>,
    )

    const inputName = screen.getByPlaceholderText(/duck name/i)
    const inputDesc = screen.getByPlaceholderText(/what's your duck task?/i)
    const buttonSumbit = screen.getByRole('button', { name: /submit/i })

    await userEvent.clear(inputName)
    await userEvent.clear(inputDesc)
    await userEvent.type(inputName, 'My title')
    await userEvent.type(inputDesc, 'My desc')

    expect(inputName).toHaveValue('My title')
    expect(inputDesc).toHaveValue('My desc')
    await userEvent.click(buttonSumbit)
    expect(store.getActions()).toEqual([
      { payload: { desc: 'My desc', file: '', id: 1, name: 'My title' }, type: 'EDT_DUCK_TASK' },
    ])
  })
})
