import { render, screen } from '@testing-library/react'
import { AvatarFace } from './AvatarFace'

describe('Component - <AvatarFace />', () => {

  beforeEach(() => {
    const onClickFn = jest.fn()
  
    render(
      <AvatarFace
        source="kitana"
        selectCharacter={onClickFn}
      />
    )
  })

  test('Should render avatar name', () => {
    const avatar = screen.getByText('kitana')
    expect(avatar).toBeTruthy()
  })

  test('Should render an avatar image', () => {
    const avatar = screen.getByTestId('avatar')
    expect(avatar).toHaveStyle(`background-image: url(/avatars/kitana.png);`)
  })
})