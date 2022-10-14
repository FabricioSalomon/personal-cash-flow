import styled from "styled-components";

export const MobileContainer = styled.div`
  display: none;
  flex-direction: column;
  padding: 3rem 3rem;

  @media (max-width: 768px) {
    display: flex;
  }

  @media (max-width: 640px) {
    padding: 3rem 1.71rem;
  }
`;

export const MobileHeader = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

export const Title = styled.header`
  font-size: 1.43rem;
  font-weight: 400;
  color: var(--text-title);
`;

export const Quantity = styled.header`
  font-size: 1rem;
  font-weight: 500;
  color: var(--text-body);
`;

export const Card = styled.div`
  display: flex;
  flex-direction: row;
  background: var(--shape);
  border-radius: 0.35rem;
  margin-bottom: 1rem;
  padding: 1.25rem 2.5rem;
  align-items: center;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: start;
    padding: 1.23rem 1.71rem;
  }
`;

export const Header = styled.header`
  color: var(--text-title);
`;

export const Value = styled.div`
  font-size: 1.43rem;
  max-width: 10rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: ${(props: any) => {
    return Number(props.children?.props?.value) > 0
      ? "var(--green)"
      : "var(--red)";
  }};
`;

export const Description = styled.div`
  @media (max-width: 768px) {
    display: flex;
    flex-direction: row;
    width: 100%;
    margin-top: 1.43rem;
    justify-content: space-between;
    align-items: center;
    color: var(--text-body);
  }
`;
