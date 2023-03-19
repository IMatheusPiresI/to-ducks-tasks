import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import CardDuckTask from '.'
import { renderProvider } from '../../../jest/helpers/renderProvider'

describe('CardDuckTask Tests', () => {
  const handleShowModal = jest.fn()
  const renderCardDuckTask = () => {
    renderProvider(
      <CardDuckTask
        duckFile='https://t.ctcdn.com.br/VPosJ-jijekcHEJCcf9yb1hjHcs=/51x28:971x545/920x518/smart/i381149.jpeg'
        duckName='test'
        duckTask='description task'
        id={1}
        showModal={handleShowModal}
      />,
    )
  }
  it('should be render image task', () => {
    renderCardDuckTask()

    const imgTask = screen.getByAltText(/duck photo/i)
    expect(imgTask).toBeVisible()
  })

  it('should be render title and desc task', () => {
    renderCardDuckTask()

    const titleTask = screen.getByText('test')
    const desctask = screen.getByText('description task')

    expect(titleTask).toBeInTheDocument()
    expect(desctask).toBeInTheDocument()
  })

  it('should be called function remove task on press button delete', async () => {
    renderCardDuckTask()

    const buttonDelete = screen.getByTestId('delete')

    await userEvent.click(buttonDelete)

    expect(handleShowModal).toBeCalledTimes(0)
  })

  it('should be called function show modal on press button edit', async () => {
    renderCardDuckTask()

    const buttonEdit = screen.getByTestId('edit')

    await userEvent.click(buttonEdit)

    expect(handleShowModal).toBeCalledTimes(1)
  })
})
