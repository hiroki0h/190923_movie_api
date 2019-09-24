import React, { Component } from 'react';
import styled from 'styled-components';
import DetailContainer from '../Container/DetailContainer';
import ListBg from "../assets/images/list_bg_H.png";

class Detail extends Component { 
  render(){
    const { result, history } = this.props;
    return(
      <>
        <DetailBox>
          <div className="img_box">
            <img src={`https://image.tmdb.org/t/p/w500${result.poster_path}`} alt={result.original_title}/>
          </div>
          <div className="text_box">
            <div className="table_cell">
              <h2 className="title">{result.title}</h2>
              <div className="info">
                {/* <span className="runtime">{result.runtime}min</span> */}
                <span className="release">{result.release_date}</span>
              </div>
              {/* <p className="org_title">{result.original_title}</p> */}
              <p className="overview">{result.overview}</p>
              <p className="vote">{result.vote_average}/10</p>
              <p className="genres">
                {result.genres &&
                  result.genres.map((genre, index) =>
                    index === result.genres.length - 1
                      ? genre.name
                      : `${genre.name} / `
                )}
              </p>
            </div>
          </div>
        </DetailBox>
        {/* 버튼이 클릭되면 main 페이지를 불러달라 */}
        <BackButton>
          <button type="button" onClick={()=>{history.push('/')}}>BACK</button>
        </BackButton>
      </>
    )
  }
}
const DetailBox = styled.div`
  width:100%;
  height:0;
  padding-bottom:90%;
  position:relative;
.img_box {
  width:60%;
  position:absolute;
  top:0;
  right:0;
  ::before {
    content:""; 
    width:100%;
    height:100%; 
    background:url(${ListBg}) repeat-y 0 0; 
    position:absolute; 
    top:0; 
    left:0;
    display:block; 
  }
}
.text_box {
  width:50%;    
  height:100%;
  position:absolute;
  top:0;
  left:0;
  display:table;
  .table_cell {
    padding-right:10px;
    vertical-align:middle;
    display:table-cell;
    p {font-size:20px;}
    .title {font-size:30px;}
    .info {
      padding-top:10px;
      padding-right:4%;
      text-align:right;
      .runtime {}
      .release {}
    }
    .overview {padding-top:20px; font-size:20px;}
    .vote {padding-top:20px;}
    .release {}
  }
}
`;
const BackButton = styled.div`
  margin-top:20px;
  text-align:center;
  button{
    padding:10px 15px;
    border-radius:3px;
    font-size:14px;
    font-weight:900;
    color:#fff;
    background:#576574;
  }
`;
export default Detail;