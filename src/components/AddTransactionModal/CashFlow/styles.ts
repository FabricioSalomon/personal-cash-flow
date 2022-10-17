import { transparentize } from "polished";
import styled from "styled-components";

type RadioBoxProps = {
  isActive: Boolean;
  activeColor: "green" | "red";
};

const colorMapper = {
  green: "#33CC95",
  red: "#E52E4D",
};

export const TransactionTypeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  gap: 0.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 0.5rem;
  }
`;

export const RadioBox = styled.button<RadioBoxProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 50%;
  gap: 1rem;
  padding: 1rem 1.75rem;
  background: ${({ isActive, activeColor }) => {
    return isActive
      ? transparentize(0.8, colorMapper[activeColor])
      : "var(--input-fill)";
  }};
  border: 1px solid var(--input-border);
  border-radius: 0.25rem;
  outline: none;
  font-size: 1rem;
  font-weight: 400;
  color: var(--text-title);

  transition: filter 0.2s;
  &:hover {
    filter: brightness(1.03);
  }

  img {
    height: 1.5rem;
  }
`;
