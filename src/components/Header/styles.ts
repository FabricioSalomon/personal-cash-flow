import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  height: 13.25rem;

  @media (max-width: 768px) {
    height: 16.71rem;
  }
`;

export const TopContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 10rem;

  @media (max-width: 1440px) {
    padding: 2rem 7rem;
  }

  @media (max-width: 1280px) {
    padding: 2rem 5rem;
  }

  @media (max-width: 768px) {
    padding: 2.13rem 3rem;
  }

  @media (max-width: 640px) {
    padding: 2.2857rem 1.714rem;
  }

  img {
    height: 2.5rem;

    @media (max-width: 1280px) {
      height: 2.4rem;
    }

    @media (max-width: 1024px) {
      height: 2.3rem;
    }

    @media (max-width: 768px) {
      height: 2rem;
    }
  }

  button {
    background: var(--light-blue);
    border: 0;
    border-radius: 5px;
    color: white;
    padding: 0.75rem 2rem;
    font-weight: 600;
    line-height: 1.5rem;
    font-size: 1rem;

    @media (max-width: 768px) {
      padding: 0.7857rem 1.142rem;
      font-size: 1rem;
      line-height: 1.2857rem;
    }

    @media (max-width: 640px) {
      padding: 0.7857rem 1.142rem;
      font-size: 0.857rem;
      line-height: 1.2857rem;
    }

    transition: filter 0.2s;
    &:hover {
      filter: brightness(1.2);
    }
  }
`;
