import { render, screen } from '@testing-library/react'
import { WinnerModal } from './WinnerModal'
import userEvent from '@testing-library/user-event'

describe('Component - <WinnerModal />', () => {
  beforeEach(() => {
    render(
      <WinnerModal
        isOpen={true}
        winner="Guilherme"
        onPress={() => {}}
      />
    )
  })

  test('Should render winner name', () => {
    const name = screen.getByText('Guilherme')
    expect(name).toBeTruthy()
  })

  test('Should render modal buttons', () => {
    const btnPlay = screen.getByText('Play again')
    const btnRestart = screen.getByText('Restart')

    expect(btnPlay).toBeTruthy()
    expect(btnRestart).toBeTruthy()
  })
})