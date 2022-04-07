import styled from 'styled-components';

export const Table = styled.table`
   table {
  font-family: arial, sans-serif;
  border-collapse: collapse;
  width: 100%;
}

td, th {
  border: 1px solid #dddddd;
  text-align: left;
  padding: 8px;
}

tr:nth-child(even) {
  background-color: #dddddd;
}
`;

export const Thead = styled.thead`
    display: ${props => props.isHidden ? 'table-header-group' : 'none'};
`