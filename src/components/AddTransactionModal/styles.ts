import styled from "styled-components";

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 90%;

  input {
    width: 100%;
    background: var(--input-fill);
    padding: 1rem 1rem;
    margin-bottom: 1rem;
    border: 1px solid var(--input-border);
    border-radius: 0.25rem;
    font-weight: 400;
    font-size: 1rem;
    outline: none;

    &::placeholder {
      color: var(--text-body);
    }

    @media (max-width: 768px) {
      margin-bottom: 0.5rem;
    }
  }

  button[type="submit"] {
    width: 100%;
    margin-top: 1rem;
    color: var(--shape);
    background: var(--green);
    border: none;
    border-radius: 0.25rem;
    padding: 1rem 1rem;
    font-size: 1rem;
    font-weight: 600;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.1);
    }
  }
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;

  img {
    cursor: pointer;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.5);
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;

    h2 {
      margin-right: 5rem;
      white-space: nowrap;
      color: var(--text-title);
      font-size: 1.5rem;
    }
  }
`;
