import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Pagination = ({ category, target, pageUpdate, firstPage, prevPage, nextPage, lastPage }) => {
  return (
    <PaginationBox>
      <ul className="clearfix">
        <li>
          <Link to={`/${category}/${firstPage}`} title="first page">&#60;&#60;</Link>
        </li>
        <li>
          <Link to={`/${category}/${firstPage}`} title="prev page">&#60;</Link>
        </li>
          {target.map(item => (
            <li key={item}>
              <Link to={`/${category}/${item}`} title={`${item}`}>{item}</Link>
            </li>
          ))}
        <li>
          <Link to={`/${category}/${firstPage}`}title="next page">&#62;</Link>
        </li>
        <li>
          <Link to={`/${category}/5`} title="last page">&#62;&#62;</Link>
        </li>
      </ul>
    </PaginationBox>
  );
  // 시작 끝 정하기
  // [] 하나 만들고  시작 끝 넣고 집어넣기
  // 총 페이지 구하고 10개씩 자르기
  // 다음페이지 넣어갔을때 ( 맨 처음일때, 마지막일때 )
};
const PaginationBox = styled.div`
padding-top:30px; 
text-align:center;
ul {
  display:inline-block;
  li {
    float:left;
    a {
      padding:0 20px;
      color:#fff;
    }
  }
}
`;
export default Pagination;
