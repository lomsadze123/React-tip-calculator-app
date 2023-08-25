import { styled } from "styled-components";

const TipPercentage = () => {
  const percentageList = [5, 10, 15, 25, 50];

  return (
    <Div>
      <h2>Select Tip %</h2>
      <div>
        {percentageList.map((percentage) => (
          <button key={percentage}>{percentage}%</button>
        ))}
        <input type="number" placeholder="Custom" />
      </div>
    </Div>
  );
};

export default TipPercentage;

const Div = styled.div`
  margin-bottom: 3.2rem;
  div {
    display: flex;
    gap: 1.66rem 1.6rem;
    flex-wrap: wrap;
  }

  h2 {
    color: #5e7a7d;
    font-size: 1.6rem;
    margin: 3.2rem 0 1.6rem 0;
  }

  button,
  input {
    font-size: 2.4rem;
    border: 0;
    border-radius: 0.5rem;
  }

  button {
    max-width: 14.7rem;
    width: 100%;
    padding: 0.6rem 0;
    color: #fff;
    background-color: #00474b;
  }

  input {
    max-width: 14.8rem;
    width: 100%;
    outline: 0;
    background-color: #f3f9fa;
    color: #00474b;
    text-align: right;
    padding: 0.6rem 1.73rem 0.6rem 0;
  }
  input::placeholder {
    color: #547878;
  }

  @media (min-width: 768px) {
    margin-bottom: 4rem;
    button {
      max-width: 11.7rem;
    }
    input {
      max-width: 11.8rem;
    }
    div {
      gap: 1.4rem 1.6rem;
    }
    h2 {
      margin: 4rem 0 1.6rem 0;
    }
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
  }
`;
