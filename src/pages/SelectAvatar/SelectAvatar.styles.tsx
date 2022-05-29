import styled from 'styled-components'

export const Avatar = styled.div`
  text-align: center;
  max-width: 90%;
`

export const AvatarContainer = styled.div`
  margin: auto;
  display: grid;
  column-gap: 1rem;
  row-gap: 1rem;
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-radius: 10px;

  @media (max-width: 600px) {
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-columns: 1fr 1fr 1fr;
  }
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
    <Title>Tic Tac Toe
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
`
