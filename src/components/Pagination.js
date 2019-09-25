import React from 'react';
import { moviesApi } from '../Api';
import { Link } from 'react-router-dom'
import { menuOpen } from '../store/modules/INIT';
import styled from 'styled-components';

const Pagination = ({}) => {
  return (
      <PaginationUl className="clearfix">
        <li>
          <button type="button">first page</button>
        </li>
        <li>
          <button type="button">prev page</button>
        </li>
        <li>
          <button type="button">1</button>
        </li>
        <li>
          <button type="button">next page</button>
        </li>
        <li>
          <button type="button">last page</button>
        </li>
      </PaginationUl>
    );
};
const PaginationUl = styled.ul`
  li {
    padding:0 20px;
    float:left;
  }
  button {
    color:#fff;
  }

`;
export default Pagination;
