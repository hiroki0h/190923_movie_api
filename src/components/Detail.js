import React, { Component } from 'react';
import styled from 'styled-components';
import ListBg from "../assets/images/list_bg_H.png";
import MainBtnTheme from "../components/MainBtnTheme";
import Loader from './Loader';
import Dotdotdot from 'react-dotdotdot';
import Rating from "../assets/images/rating.png";
import NoPoster from "../assets/images/noPoster.png";

class Detail extends Component { 
  render(){
    const { isLoading, result, history } = this.props;
    console.log('vote - '+result.vote_average);
    return(
      <>
      {!isLoading
        ? <Loader/>
        :
        <>
          <DetailBox>
            <div className="img_box">
              {result.poster_path !== null
                ?
                  <div className="img" style={{
                    background:`url(https://image.tmdb.org/t/p/w500${result.poster_path}) no-repeat`,
                  backgroundSize:'100%'}}></div>
                :
                  <div className="img no_poster" style={{
                    background:`url(${NoPoster}) no-repeat`,
                    backgroundSize:'100%'}}></div>
              }
            </div>
            <div className="text_box">
              <div className="table_cell">
                <h2 className="title">{result.title}</h2>
                <p className="org_title">{result.original_title}</p>
                <div className="info">
                  {/* <span className="runtime">{result.runtime}min</span> */}
                  {/* <span className="release">{result.release_date}</span> */}
                </div>
                <p className="vote">
                  {result.vote_average !== null
                    ?
                    <span className="rating_base">
                      <span className="rating"style={{
                            width:`${(result.vote_average*10)}%`}}></span>
                    </span>
                    : <span className="rating_base"></span>
                  }
                  {result.vote_average > 0 
                    ? `${result.vote_average} / 10 `
                    : "Not Yet Rating"
                  }
                </p>
                <p className="genres">
                  {result.genres &&
                    result.genres.map((genre, index) =>
                      index === result.genres.length - 1
                        ? `#${genre.name}   `
                        : `#${genre.name}   `
                  )}
                </p>
                <p className="overview">{result.overview}</p>
                {/* video */}
                <div className="video_box clearfix">
                  {result.videos.results.length > 0 
                  ? <>
                      <h3>Official Videos</h3>
                      {
                        result.videos.results.map((video, index) => index < 4
                        ?
                        <div className="video" key={index}>
                          <Dotdotdot clamp={3}>
                              <p>{video.name}</p>
                          </Dotdotdot>
                          <iframe src={`https://www.youtube.com/embed/${video.key}`} title={video.name}>
                          </iframe>
                        </div>
                        : ""
                      )
                      }
                    </>
                  : ""
                  }
                </div>
              </div>
            </div>
          </DetailBox>
          {/* 버튼이 클릭되면 main 페이지를 불러달라 */}
            <MainBtnTheme history={history}/>
        </>
      }
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
  width:55%;
  position:absolute;
  top:0;
  right:0;
  .img {
    width:100%;
    height:0;
    overflow:hidden;
    padding-bottom:150%;
    position:relative;
    ::before {
      content:""; 
      width:100%;
      height:100%; 
      background:url(${ListBg}) repeat-y 0 0; 
      background-size:contain;
      position:absolute; 
      top:0; 
      left:0;
      display:block; 
    }
  }
  .no_poster {
    width:50%;
    margin:0 auto;
    padding-bottom:74.8%;
    top:50%;
    transform:translateY(50%);
  }
}
.text_box {
  width:60%;    
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
    .org_title {color:#555;}
    .info {
      padding-top:10px;
      padding-right:4%;
      text-align:right;
      .runtime {}
      .release {}
      }
    }
    .overview {padding-top:20px; font-size:20px;}
    .vote {
      padding-top:20px;
      .rating_base {
        width:100px;
        height:17px;
        margin-right:10px;
        vertical-align:baseline;        
        background:url(${Rating});
        background-size:100px auto;
        display:inline-block;
        .rating {
          height:17px;
          background:url(${Rating});
          background-size:100px auto;
          background-position:0 -17px;
          background-repeat:no-repeat;
          display:block;
        }
      }
    }
    .genres {padding-top:20px;}
    .release {}
      .video_box {
        padding-top:50px; 
        h3 {font-size:20px;}
        .video {
          max-width:310px;
          padding-top:10px;
          margin-right:20px;
          margin-bottom:20px;
          float:left;
          p {padding-bottom:10px;}
          iframe {box-shadow:5px 5px 10px #545454;}
        }
  }
}
@media (max-width:1170px ){
  .video_box {display:none;}
}
@media (max-width:768px ){
  height:auto;
  padding-bottom:0%;
  .img_box {
    position:static;
    margin:0 auto;
  }
  .text_box {
    width:100%;
    position:relative;
    top:-50px;
  }
  .video_box {display:none;}
}
`;
export default Detail;