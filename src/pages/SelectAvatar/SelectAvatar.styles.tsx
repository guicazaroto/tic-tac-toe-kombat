import styled from 'styled-components'

export const Avatar = styled.div`
  text-align: center;
`

export const AvatarContainer = styled.div`
  margin: auto;
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-radius: 10px;
`

export const AvatarFace = styled.div<{ source?: String }>`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 150px;
    border: 3px solid #666;
    cursor: pointer;

    font-family: sans-serif;
    font-size: 1rem;
    font-weight: bold;

    ${({ source }) => source &&  `background-image: url(/avatars/${source}.png)`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const TitleContainer = styled.div`
  margin-bottom: 1rem;
`

const Title = styled.h1`
  font-size: 2rem;
`

const Subtitle = styled.span`
  display: block;
  font-size: 3rem;
  background: -webkit-linear-gradient(#fc2c03, #f5ef42);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const AvatarTitle = () => (
  <TitleContainer>
    <Title>Tic Toc Toe
      <Subtitle>Kombat</Subtitle>
    </Title>
    <p>Choose your fighter</p>
  </TitleContainer>

)

export const SelectedCharacter = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: space-between;
`

export const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;

  & > * {
    margin: 0.3rem 0;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: .5rem 2rem;
    font-size: 1.5rem;
    cursor: pointer;
  }
`

export const BtnPlay = styled.button`
  background-color: #ec7905;

  &:hover {
    background-color: #ee8505fe;
  }
`

export const BtnReset = styled.button`
 background-color: #059146;

 &:hover {
   background-color: #059146d8;
 }
`

