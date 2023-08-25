import { styled } from "styled-components";

interface ResultType {
  title: string;
  number: number;
}

const Result = () => {
  return (
    <Div>
      <article>
        <ResultComponent title="Tip Amount" number={0} />
        <ResultComponent title="Total" number={0} />
      </article>
      <button type="submit">reset</button>
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
      <h2>${number.toFixed(2)}</h2>
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
    background-color: #26c2ae;
    border-radius: 0.5rem;
    font-size: 2rem;
    color: #00474b;
    padding: 0.9rem 0;
    text-transform: uppercase;
    line-height: 2.962rem;
  }

  @media (min-width: 768px) {
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
  }
`;

const DivComponent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
