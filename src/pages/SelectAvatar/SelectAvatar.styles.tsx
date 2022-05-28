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

export const AvatarFace = styled.div<{ source: string }>`
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 150px;
    border: 3px solid #666;
    cursor: pointer;

    font-family: sans-serif;
    font-size: 30px;
    font-weight: bold;

    ${({ source }) =>  `background-image: url(/avatars/${source}.png)`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
`

const Title = styled.h1`
  font-size: 3rem;
`

const Subtitle = styled.span`
  display: block;
  font-size: 4rem;
  background: -webkit-linear-gradient(#fc2c03, #f5ef42);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const AvatarTitle = () => (
  <Title>Tic Toc Toe
    <Subtitle>Kombat</Subtitle>
  </Title>
)