import styled from 'styled-components';
import {
  bodyFont,
  greyColor,
  primaryColor,
  whiteColor,
  whiteGreyColor,
} from '../../../../components/UI/variables';

const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  h1 {
    display: flex;
    justify-content: center;
    font-size: 2rem;
    font-weight: 300;
    margin: 2rem;
    align-self: flex-start;

    svg {
      position: relative;
      margin-right: 1rem;
      top: 0.4rem;
    }
  }

  .button__crud {
    background-color: ${whiteColor};
    color: ${primaryColor};
    border: solid 1px ${primaryColor};
    margin: 1rem 0 2rem;

    &:hover {
      background-color: ${primaryColor};
      color: ${whiteColor};
    }

    &:focus {
      outline: none;
    }
  }

  .actions {
    display: flex;
    align-items: baseline;
    align-self: flex-end;
    margin: 0 5rem 0 0;

    input {
      padding: 0.5rem;
      border: 1px solid ${whiteGreyColor};
      margin: 0 0.5rem;
      border-radius: 5px;

      &:focus {
        outline: none;
      }

      &:hover {
        cursor: pointer;
        color: ${primaryColor};
        border: 1px solid ${primaryColor};

        &::placeholder {
          color: ${primaryColor};
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    h1 {
      color: transparent;
      margin: 30px;
    }

    .actions {
      align-self: flex-start;
      flex-direction: row-reverse;
      margin: 0 0 0 1rem;
    }
  }
`;

const TableWrapper = styled.table`
  width: 90%;
  margin: 0 auto;
  border-collapse: collapse;
  font-size: 18px;

  @media screen and (max-width: 1120px) {
    width: 100%;

    thead,
    tbody,
    th,
    td,
    tr {
      font-size: 16px;
    }
  }

  @media screen and (max-width: 768px) {
    thead,
    tbody,
    th,
    td,
    tr {
      font-size: 14px;
    }
  }
`;

const TableHeader = styled.thead`
  border-bottom: 1px solid #e6e6e6;
`;

const TableHeaderCell = styled.th`
  padding: 12px;
  font-weight: bold;
  text-align: left;

  @media screen and (max-width: 1120px) {
    padding: 8px;
  }

  @media screen and (max-width: 768px) {
    padding: 4px;
  }

  @media screen and (max-width: 480px) {
    padding: 2px;
  }
`;

const TableBody = styled.tbody`
  display: grid;
  max-height: 500px;
  overflow-y: auto;

  @media screen and (max-width: 1120px) {
    max-height: 400px;
  }

  @media screen and (max-width: 768px) {
    max-height: 300px;
  }

  @media screen and (max-width: 480px) {
    max-height: 200px;
  }
`;

const TableRow = styled.tr`
  display: grid;
  grid-template-columns: 1fr 2.75fr 2fr 3fr 3fr 5fr 2.75fr 2fr;
  align-items: center;
  &:nth-child(even) {
    background-color: ${greyColor};
  }

  @media screen and (max-width: 1120px) {
    grid-template-columns: 1fr 2.5fr 1.5fr 2.5fr 2.5fr 4fr 2.5fr 1.5fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr 2fr 1fr 2fr 2fr 3fr 2fr 1fr;
  }
`;

const TableDataCell = styled.td`
  padding: 12px;
  font-weight: 300;
  font-family: ${bodyFont};

  button {
    margin: 0 0.5rem;
    padding: 0.5rem;
    border: none;
    background-color: transparent;

    &:hover {
      cursor: pointer;
    }
  }

  button > svg {
    width: 25px;
    height: 25px;
    transition: all 0.2s ease-in-out;

    &:hover {
      cursor: pointer;
      opacity: 0.8;
    }
  }

  button > svg:first-child {
    color: ${primaryColor};
  }

  button:nth-child(2) > svg {
    color: red;
  }

  @media screen and (max-width: 1120px) {
    padding: 8px;
  }

  @media screen and (max-width: 768px) {
    padding: 4px;
  }

  @media screen and (max-width: 480px) {
    padding: 2px;
  }
`;

export {
  Section,
  TableWrapper,
  TableHeader,
  TableHeaderCell,
  TableBody,
  TableRow,
  TableDataCell,
};
