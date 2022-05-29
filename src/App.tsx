import styled from 'styled-components'
import Routes from './routes'

const AppStyles = styled.div`
  @font-face {
    font-family: "Kombat";
    src: url("mkda.ttf") format("truetype");
  }

  padding-top: 10%;
  padding-bottom: 2rem;
  
  @media (min-width: 600px) {
    padding: 2rem 0;
    position: fixed;
    padding: 0;
  }

  font-family: Kombat;
  width: 100%;
  height: 100%;
  background-color: #eee;
  justify-content: center;
  align-items: center;
  display: flex;
`

function App() {
  return (
    <AppStyles>
      <Routes />
    </AppStyles>
  )
}

export default App
