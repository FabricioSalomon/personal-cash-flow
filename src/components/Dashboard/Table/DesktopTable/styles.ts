import styled from "styled-components";

export const DesktopContainer = styled.div`
  display: flex;
  padding: 3rem 8rem;
  justify-content: center;

  @media (max-width: 1280px) {
    padding: 3rem 3rem;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const TransactionTable = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    padding-left: 2rem;
    font-weight: 400;
    color: var(--text-body);
    text-align: left;
    line-height: 3rem;

    :first-child {
      width: 40%;
    }
  }

  tbody {
    background: var(--shape);
    color: var(--text-body);

    td {
      padding: 1.25rem 2rem;
      max-width: 10rem;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .price {
        font-size: 1rem;
      }
    }

    td:first-child {
      color: var(--text-title);
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
    }

    td:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }
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
