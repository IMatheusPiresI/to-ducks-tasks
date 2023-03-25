import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Home from '.'
import { renderProvider } from '../../../jest/helpers/renderProvider'

describe('Home Tests', () => {
  describe('Create Task', () => {
    it('should be create task sucessfull', async () => {
      renderProvider(<Home />)

      const inputNameTask = screen.getByPlaceholderText('Duck Name')
      const inputDescTask = screen.getByPlaceholderText("What's your duck task?")
      const inputFile = screen.getByTestId('file') as HTMLInputElement
      const fileDuck = new File(['duck'], 'duck.png', { type: 'image/png' })
      const buttonSubmit = screen.getByRole('button', { name: /submit/i })
      await userEvent.clear(inputNameTask)
      await userEvent.clear(inputDescTask)
      await userEvent.type(inputNameTask, 'Test title')
      await userEvent.type(inputDescTask, 'Test desc')
      userEvent.upload(inputFile, fileDuck)
      await userEvent.click(buttonSubmit)

      const titleTaskCreated = screen.getByText('Test title')
      const descTaskCreated = screen.getByText('Test desc')
      expect(inputFile.files!).toHaveLength(1)
      expect(titleTaskCreated).toBeInTheDocument()
      expect(descTaskCreated).toBeInTheDocument()
    })
  })
})
