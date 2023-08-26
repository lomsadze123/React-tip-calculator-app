import { styled } from "styled-components";

interface Image {
  image?: string;
  title?: string;
  errorMessage?: string;
  total?: number;
  about?: boolean;
  onKeyDown: (event: KeyboardEvent) => void;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Inputs = ({
  image,
  title,
  onChange,
  errorMessage,
  total,
  onKeyDown,
}: Image) => {
  return (
    <Div>
      <div>
        <label htmlFor={title}>{title}</label>
        {total === 0 && <h3>{errorMessage}</h3>}
      </div>
      <Input
        about={total === 0}
        onChange={onChange}
        type="number"
        name={title}
        id={title}
        placeholder="0"
        onKeyDown={onKeyDown}
      />
      <img src={image} alt="icon" />
    </Div>
  );
};

export default Inputs;

const Div = styled.div`
  position: relative;
  img {
    max-width: 0.98rem;
    width: 100%;
    position: absolute;
    left: 1.7rem;
    bottom: 1.7rem;
  }
  div {
    display: flex;
    justify-content: space-between;
  }
  h3 {
    color: #e17457;
    font-size: 1.6rem;
  }
  label {
    color: #5e7a7d;
    font-size: 1.6rem;
  }
  input {
    color: #00474b;
    font-size: 2.4rem;
    text-align: right;
    padding: 0.6rem 1.75rem;
    border: 0;
    outline: none;
    border-radius: 0.5rem;
    background-color: #f3f9fa;
    width: 100%;
    margin-top: 0.6rem;
  }
  input::placeholder {
    color: #00474b;
    opacity: 0.5;
  }

  @media (min-width: 840px) {
    input {
      max-width: 37.9rem;
    }

    img {
      max-width: 1.3rem;
      height: auto;
      bottom: 1.5rem;
    }
    input::-webkit-inner-spin-button,
    input::-webkit-outer-spin-button {
      -webkit-appearance: none;
    }
    input:focus {
      border: 0.18rem solid #26c2ae;
    }
    h3 {
      margin-right: 2.5rem;
    }
  }
`;
const Input = styled.input<Image>`
  border: ${(props) => (props.about ? "0.18rem solid #E17052" : "")}!important;
`;
