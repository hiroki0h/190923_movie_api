import React from 'react';
import styled from 'styled-components';

const Pagination = ({ firstPage, prevPage, nextPage, lastPage }) => {
  return (
    <PaginationBox>
      <ul className="clearfix">
        <li>
          <button type="button" onClick={firstPage}>first page</button>
        </li>
        <li>
          <button type="button" onClick={prevPage}>prev page</button>
        </li>
        <li>
          <button type="button">1</button>
        </li>
        <li>
          <button type="button" onClick={nextPage}>next page</button>
        </li>
        <li>
          <button type="button" onClick={lastPage}>last page</button>
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
    padding:0 20px;
    float:left;
    button {
      color:#fff;
    }
  }
}
`;
export default Pagination;
