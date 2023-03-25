import { screen } from '@testing-library/react'
import { renderProvider } from '../../../jest/helpers/renderProvider'
import NewDuckTask from '.'
import userEvent from '@testing-library/user-event/'

describe('NewDuckTask Tests', () => {
  it('should be render successfull', () => {
    renderProvider(<NewDuckTask />)

    const titleForm = screen.getByRole('heading')

    expect(titleForm).toHaveTextContent(/new duck task/i)
  })

  it('should be set values on digit inputs', async () => {
    renderProvider(<NewDuckTask />)

    const inputNameTask = screen.getByPlaceholderText(/duck name/i)
    const inputDescTask = screen.getByPlaceholderText("What's your duck task?", { exact: false })

    await userEvent.clear(inputNameTask)
    await userEvent.clear(inputDescTask)
    await userEvent.type(inputNameTask, 'My task name')
    await userEvent.type(inputDescTask, 'My task desc')

    // should be expect "na" because limite max length input
    expect(inputNameTask).toHaveValue('My task na')
    expect(inputDescTask).toHaveValue('My task desc')
  })

  it('should be call handlesubmit and reset input fields', async () => {
    renderProvider(<NewDuckTask />)

    const inputNameTask = screen.getByPlaceholderText(/duck name/i)
    const inputDescTask = screen.getByPlaceholderText("What's your duck task?", { exact: false })
    const buttonSubmit = screen.getByRole('button', { name: /submit/i })

    await userEvent.clear(inputNameTask)
    await userEvent.clear(inputDescTask)
    await userEvent.type(inputNameTask, 'My task name')
    await userEvent.type(inputDescTask, 'My task desc')
    await userEvent.click(buttonSubmit)

    expect(inputNameTask).toHaveValue('')
    expect(inputDescTask).toHaveValue('')
  })
})
