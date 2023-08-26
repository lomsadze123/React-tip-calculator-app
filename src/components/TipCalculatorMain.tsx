import { styled } from "styled-components";
import Inputs from "./Inputs";
import dollar from "../assets/dollar.svg";
import person from "../assets/person.svg";
import TipPercentage from "./TipPercentage";
import Result from "./Result";
import { useState } from "react";

const TipCalculatorMain = () => {
  const [bill, setBill] = useState<string>("");
  const [total, setTotal] = useState<string>("");
  const [showBill, setShowBill] = useState<string>("");
  const [showTotal, setShowTotal] = useState<string>("");

  const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBill(e.target.value);
  };
  const handleTotal = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "00") {
      e.target.value = "0";
    }
    setTotal(e.target.value);
  };

  return (
    <Main>
      <section>
        <Inputs
          onChange={handleAmount}
          image={dollar}
          title="Bill"
          errorMessage=""
          total={1}
          onKeyDown={() => 0}
        />
        <TipPercentage
          setShowBill={setShowBill}
          setShowTotal={setShowTotal}
          bill={bill !== "" ? parseFloat(bill) : 0}
          total={total !== "" ? parseFloat(total) : 0}
        />
        <Inputs
          onChange={handleTotal}
          image={person}
          title="Number of People"
          errorMessage="Can't be zero"
          total={total !== "" ? parseFloat(total) : 1}
          onKeyDown={(e) => (e.key === "." ? e.preventDefault() : 0)}
        />
      </section>
      <Result
        showBill={showBill !== "" ? parseFloat(showBill) : 0}
        showTotal={showTotal !== "" ? parseFloat(showTotal) : 0}
        bill={bill}
        total={total}
      />
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

  @media (min-width: 840px) {
    display: flex;
    gap: 2.3rem;
    border-radius: 2.5rem;
    padding: 3.2rem 3.2rem 3.2rem 4.8rem;
  }
`;
