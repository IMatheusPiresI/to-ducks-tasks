import { act, fireEvent, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import FormInputFile from '.'

describe('FormInputFile Tests', () => {
  describe('FormInput render in inital values', () => {
    it('should be render form input in inital values', () => {
      const handleSetFile = jest.fn()
      render(<FormInputFile file={'test'} id='label' setFile={handleSetFile} />)

      const imgCamera = screen.getByAltText(/photo duck/i)
      const inputFile = screen.getByTestId('file')

      expect(imgCamera).toBeVisible()
      expect(inputFile).toHaveValue('')
      expect(inputFile).not.toBeVisible()
    })

    it('should be updload image on file input', async () => {
      const handleSetFile = jest.fn()
      const duckFile = new File(['duck'], 'duck.png', { type: 'image/png' })

      render(<FormInputFile file={'test'} id='label' setFile={handleSetFile} />)

      const inputFile = screen.getByTestId('file') as HTMLInputElement
      await userEvent.upload(inputFile, duckFile)

      expect(inputFile.files![0].name).toBe('duck.png')
      expect(inputFile.files!.length).toBe(1)
    })

    it('should be starts without file, and show image uploaded', async () => {
      const handleSetFile = jest.fn()
      const duckFile = new File([''], 'google.png', { type: 'image/png' })

      render(<FormInputFile file={''} id='label' setFile={handleSetFile} />)

      const inputFile = screen.getByTestId('file') as HTMLInputElement
      await userEvent.upload(inputFile, duckFile)

      expect(inputFile.files).toHaveLength(1)
    })
  })
})
