import { styled } from "styled-components";

interface ResultType {
  title?: string;
  number?: number;
  showBill?: number;
  showTotal?: number;
  bill?: string;
  total?: string;
}

interface ButtonProps {
  about?: boolean;
}

const Result = ({ showBill, showTotal, bill, total }: ResultType) => {
  const isDisabled = bill === "" && total === "";

  return (
    <Div>
      <article>
        <ResultComponent title="Tip Amount" number={showBill} />
        <ResultComponent title="Total" number={showTotal} />
      </article>
      <Button about={isDisabled} disabled={isDisabled} type="submit">
        reset
      </Button>
    </Div>
  );
};

export default Result;

const ResultComponent = ({ title, number }: ResultType) => {
  return (
    <DivComponent>
      <div>
        <h3>{title}</h3>
        <p>/ person</p>
      </div>
      <h2>${number?.toFixed(2)}</h2>
    </DivComponent>
  );
};

const Div = styled.form`
  div + div {
    margin: 2rem 0 3.2rem 0;
  }
  flex-grow: 1;
  background-color: #00474b;
  border-radius: 1.5rem;
  padding: 3.7rem 2.2rem 2.4rem 2.4rem;
  margin-top: 3.2rem;
  h3 {
    color: #fff;
    font-size: 1.6rem;
  }
  p {
    color: #7f9d9f;
    font-size: 1.3rem;
  }
  h2 {
    color: #26c2ae;
    font-size: 3.2rem;
    letter-spacing: -0.0667rem;
  }
  button {
    width: 100%;
    border: 0;
    border-radius: 0.5rem;
    font-size: 2rem;
    color: #00474b;
    padding: 0.9rem 0;
    text-transform: uppercase;
    line-height: 2.962rem;
  }

  @media (min-width: 840px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 4rem;
    margin: 0;
    height: 41.7rem;

    h2 {
      font-size: 4.8rem;
      letter-spacing: -0.1rem;
    }

    div + div {
      margin: 2.5rem 0 0 0;
    }

    button {
      cursor: pointer;
    }
    button:hover {
      background-color: #9fe8df;
      opacity: 1;
    }
  }
`;

const DivComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button<ButtonProps>`
  background-color: ${(props) => (props.about ? "#0d686d" : "#26C2AE")};
  opacity: ${(props) => (props.about ? 0.5 : 1)};
`;
