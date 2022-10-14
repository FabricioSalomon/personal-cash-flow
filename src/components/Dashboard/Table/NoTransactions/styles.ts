import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--text-body);
  font-size: 2rem;
  padding-top: 3rem;

  button {
    background: none;
    margin: 0.5rem;
    border: none;
    color: var(--text-body);
    font-size: 1.2rem;
  }
`;
