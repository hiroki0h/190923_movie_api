import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'

const Pagination = ({asd, getPageList, pageNum, category, target, firstPage, totalPages }) => {
  return (
    <PaginationBox>
      <ul className="clearfix">
        <li className={(pageNum === 1 ?"off":"")}>
          {asd === ""  // asd??
            ? <Link to={`/${category}/${firstPage}`}title="first page">&#60;&#60;</Link>
            : <Link to={`/${asd}/${category}/${firstPage}`}title="first page">&#60;&#60;</Link>
          }
        </li>
        <li className={(pageNum-1 === 0 ?"off":"")}>
          {asd === ""
            ? <Link to={`/${category}/${pageNum-1}`} onClick={getPageList} title="prev page">&#60;</Link>
            : <Link to={`/genres/${category}/${pageNum-1}`} onClick={getPageList} title="prev page">&#60;</Link>
          }
        </li>
          {target.map(item => (
            <li key={item} className={(pageNum === item ?"on":"")}>
            {asd === ""
                ? <Link to={`/${category}/${item}`} onClick={getPageList} title={`${item} page`}>{item}</Link>
                : <Link to={`/genres/${category}/${item}`} onClick={getPageList} title={`${item} page`}>{item}</Link>
              }
            </li>
          ))}
          <li className={(pageNum === totalPages ?"off":"")}>
          {asd === ""
              ? <Link to={`/${category}/${pageNum+1}`} onClick={getPageList} title="next page">&#62;</Link>
              : <Link to={`/genres/${category}/${pageNum+1}`} onClick={getPageList} title="next page">&#62;</Link>
            }
        </li>
        <li className={(pageNum === totalPages ?"off":"")}>
          {asd === ""
            ? <Link to={`/${category}/${totalPages}`} title="last page">&#62;&#62;</Link>
            : <Link to={`/genres/${category}/${totalPages}`} title="last page">&#62;&#62;</Link>
          }
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
    &.off{
      a {
        pointer-events:none;
        cursor:default;
        color:#aaa;
      }
    }
    &.on{
      a {
      font-weight:bold;
      font-size:24px;
      }
    }
    a {
      transition: all .2s ease-out;
      line-height:24px;
      padding:0 20px;
      font-size:18px;
      color:#fff;
    }
  }
}
`;
export default Pagination;
