import { styled } from "styled-components";
import Inputs from "./Inputs";
import dollar from "../assets/dollar.svg";
import person from "../assets/person.svg";
import TipPercentage from "./TipPercentage";
import Result from "./Result";

const TipCalculatorMain = () => {
  return (
    <Main>
      <section>
        <Inputs image={dollar} title="Bill" />
        <TipPercentage />
        <Inputs image={person} title="Number of People" />
      </section>
      <Result />
    </Main>
  );
};

export default TipCalculatorMain;

const Main = styled.main`
  width: 100%;
  max-width: 92rem;
  background-color: #fff;
  box-shadow: 0px 32px 43px 0px rgba(79, 166, 175, 0.2);
  border-radius: 2.5rem 2.5rem 0rem 0rem;
  padding: 3.2rem 2.4rem;

  @media (min-width: 768px) {
    display: flex;
    gap: 2.3rem;
    border-radius: 2.5rem;
    padding: 3.2rem 3.2rem 3.2rem 4.8rem;
  }
`;
