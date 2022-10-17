import styled from "styled-components";

type CardContainerData = {
  isPositive: boolean;
};

export const CardContainer = styled.div<CardContainerData>`
  /* Alternativa
    display: grid;
    grid-template-columns: repeat(3, 1fr); 
    gap: 2rem;
  */
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: -5rem;
  justify-content: center;
  white-space: nowrap;
  padding: 0 8rem;

  #income,
  #outcome {
    background: var(--shape);
    color: var(--text-title);
  }

  #balance {
    background: ${({ isPositive }) => {
      return isPositive ? "var(--green)" : "var(--red)";
    }};
    color: var(--shape);
  }

  @media (max-width: 1280px) {
    padding: 5px 5rem;
    justify-content: start;
    overflow-x: scroll;

    ::-webkit-scrollbar {
      height: 8px;
    }

    ::-webkit-scrollbar-track {
      border-radius: 0;
      width: 1px;
      background: var(--background);
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 0;
      width: 1px;
      background: #ddd;
    }
  }

  @media (max-width: 768px) {
    padding: 5px 3rem;
    margin-top: -7rem;
  }

  @media (max-width: 640px) {
    padding: 5px 1.8rem;
    margin-top: -7rem;
  }
`;

export const CardContent = styled.div`
  padding: 1.5rem 1.125rem 1.125rem 2rem;
  min-width: 26rem;
  height: 10rem;
  border-radius: 0.25rem;

  &:not(:last-child) {
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    min-width: 22rem;
    height: 14.3rem;
  }
`;

export const Title = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  line-height: 1.5rem;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

export const Value = styled.strong`
  font-size: 2.25rem;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  line-height: 2rem;

  @media (max-width: 768px) {
    font-size: 2.15rem;
  }
`;

export const Description = styled.strong`
  color: var(--text-body);
  font-size: 1rem;
  font-weight: 400;
  font-size: 0.86rem;
`;
