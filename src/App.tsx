import { styled } from "styled-components";
import logo from "./assets/logo.svg";
import TipCalculatorMain from "./components/TipCalculatorMain";

function App() {
  return (
    <Body>
      <>
        <img src={logo} alt="splitter logo" />
        <TipCalculatorMain />
      </>
    </Body>
  );
}

export default App;

const Body = styled.div`
  background-color: #c5e4e7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4.09rem;

  div + img {
    max-width: 8.67rem;
    width: 100%;
  }

  @media (min-width: 768px) {
    gap: 8.79rem;
  }
`;
