import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import configureStore from 'redux-mock-store'
import ModalDuckEditTask from '.'
import { renderProvider } from '../../../jest/helpers/renderProvider'

describe('ModalDuckEditTask Tests', () => {
  it('should be render form modal', () => {
    const closeModal = jest.fn()
    renderProvider(<ModalDuckEditTask closeModal={closeModal} idEdit={2} />)

    const formModal = screen.getByTestId('form')

    expect(formModal).toBeInTheDocument()
  })

  it('shoud be test rendered info task in form fields', async () => {
    const closeModal = jest.fn()
    const mockStore = configureStore()
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
        <ModalDuckEditTask closeModal={closeModal} idEdit={1} />
      </Provider>,
    )

    const inputName = screen.getByDisplayValue('Title')
    const inputDesc = screen.getByDisplayValue('Desc')

    expect(inputName).toHaveValue('Title')
    expect(inputDesc).toHaveValue('Desc')
    expect
  })
})
